// media-server-db/index.js
import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sqlite3 from "sqlite3";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ---------- FOLDERS ----------
const uploadDir = path.join(__dirname, "uploads");
const avatarDir = path.join(uploadDir, "profile_pics");

for (const dir of [uploadDir, avatarDir]) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// ---------- MULTER STORAGE ----------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "avatar") {
      cb(null, avatarDir);
    } else {
      cb(null, uploadDir);
    }
  },
  filename: (req, file, cb) => {
    const original = file.originalname || "upload";
    const ext = path.extname(original);
    const base = path.basename(original, ext);
    const safeBase = base.replace(/[^a-zA-Z0-9_-]/g, "_");
    const filename = `${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}-${safeBase}${ext || ".bin"}`;
    cb(null, filename);
  },
});

const videoUpload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 200 }, // 200MB
}).single("video"); // frontend uses "video"

const avatarUpload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 10 }, // 10MB
}).single("avatar");

// ---------- SQLITE HELPERS ----------
sqlite3.verbose();
const dbPath = path.join(__dirname, "videos.db");
const db = new sqlite3.Database(dbPath);

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve(this);
    });
  });
}

function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

// ---------- INIT TABLES ----------
async function initDb() {
  // Helper to add missing columns on existing installs
  async function ensureColumn(table, column, definition) {
    const cols = await all(`PRAGMA table_info(${table});`);
    const exists = cols.some((c) => c.name === column);
    if (!exists) {
      await run(`ALTER TABLE ${table} ADD COLUMN ${definition}`);
      console.log(`Added column ${column} to ${table}`);
    }
  }

  // FRIENDS TABLE (pending / accepted / rejected)
  await run(`
    CREATE TABLE IF NOT EXISTS friends (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      requester_id TEXT NOT NULL,
      receiver_id TEXT NOT NULL,
      status TEXT NOT NULL CHECK(status IN ('pending','accepted','rejected')),
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(requester_id, receiver_id)
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS videos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      video_url TEXT NOT NULL,
      emotion_tag TEXT,
      caption TEXT,
      user_id TEXT,
      user_email TEXT,
      is_default INTEGER DEFAULT 0,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS moods (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT,
      mood_level INTEGER,
      mood_label TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Backfill columns for existing DBs so mood logging never fails
  await ensureColumn("moods", "core_mood", "TEXT");
  await ensureColumn("moods", "sub_mood", "TEXT");
  await ensureColumn("moods", "reasons", "TEXT");
  await ensureColumn("moods", "emotion_tag", "TEXT");

  await run(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT,
      full_name TEXT,
      username TEXT UNIQUE,
      profile_pic_url TEXT
    )
  `);

  // Add bio column if missing
  try {
    await run(`ALTER TABLE users ADD COLUMN bio TEXT`);
  } catch (e) {
    // Will error if column already exists – that's fine.
  }

  // Ensure an admin/seeder account exists for shared content
  await run(
    `INSERT OR IGNORE INTO users (id, email, full_name, username, profile_pic_url)
     VALUES ('enuf', 'admin@enuf.app', 'ENUF', 'enuf', NULL)`
  );

  console.log("SQLite tables ready ✅");
}

// ---------- ROUTES ----------

// Health
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Media server with DB running" });
});

// ---------- VIDEO ROUTES ----------

// Video upload
app.post("/upload", (req, res) => {
  videoUpload(req, res, async (err) => {
    if (err) {
      console.error("Upload error:", err);
      return res.status(400).json({ error: "Upload failed", details: err.message });
    }

    if (!req.file) {
      console.error("No file received");
      return res.status(400).json({ error: "No file received" });
    }

    const { emotion, caption, user_id, user_email } = req.body;

    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const fileUrl = `${baseUrl}/uploads/${req.file.filename}`;

    try {
      await run(
        `INSERT INTO videos (video_url, emotion_tag, caption, user_id, user_email)
         VALUES (?, ?, ?, ?, ?)`,
        [fileUrl, emotion || null, caption || null, user_id, user_email]
      );

      const row = await get(
        `SELECT * FROM videos WHERE video_url = ?`,
        [fileUrl]
      );

      return res.json({ message: "ok", video: row });
    } catch (e) {
      console.error("DB insert error:", e);
      return res.status(500).json({ error: "Database insert failed" });
    }
  });
});



// List videos (optionally by emotion and/or user)
app.get("/videos", (req, res) => {
  const { emotion, user_id } = req.query;

  let query =
    "SELECT v.id, v.video_url, v.emotion_tag, v.caption, v.user_id, v.user_email, v.created_at, u.username AS user_username, u.full_name AS user_full_name FROM videos v LEFT JOIN users u ON v.user_id = u.id";
  const where = [];
  const params = [];

  if (emotion) {
    where.push("v.emotion_tag = ?");
    params.push(emotion);
  }

  if (user_id) {
    where.push("v.user_id = ?");
    params.push(user_id);
  }

  if (where.length > 0) {
    query += " WHERE " + where.join(" AND ");
  }

  query += " ORDER BY datetime(created_at) DESC";

  db.all(query, params, (err, rows) => {
    if (err) {
      console.error("Fetch videos error:", err);
      return res.status(500).json({ error: "Failed to fetch videos" });
    }

    res.json({ videos: rows });
  });
});

// Delete video
app.delete("/videos/:id", (req, res) => {
  const id = req.params.id;

  db.run("DELETE FROM videos WHERE id = ?", [id], function (err) {
    if (err) {
      console.error("Delete video error:", err);
      return res.status(500).json({ error: "Failed to delete" });
    }
    res.json({ success: true });
  });
});

// ---------- MOODS ----------

app.post("/moods", async (req, res) => {
  try {
    const {
      user_id,
      mood_level,
      mood_label,
      core_mood,
      sub_mood,
      reasons,
      emotion_tag,
    } = req.body || {};

    if (!user_id) {
      return res.status(400).json({ error: "user_id is required" });
    }

    const reasonsText = Array.isArray(reasons)
      ? reasons.join(", ")
      : reasons || null;

    await run(
      `INSERT INTO moods (user_id, mood_level, mood_label, core_mood, sub_mood, reasons, emotion_tag)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        user_id,
        mood_level ?? null,
        mood_label ?? null,
        core_mood ?? null,
        sub_mood ?? null,
        reasonsText,
        emotion_tag ?? null,
      ]
    );

    res.json({ ok: true });
  } catch (e) {
    console.error("Failed to save mood:", e);
    res.status(500).json({
      error: "Failed to save mood",
      details: e.message || String(e),
    });
  }
});

app.get("/moods", async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res.status(400).json({ error: "user_id query param required" });
    }

    const rows = await all(
      `SELECT id,
              mood_level,
              mood_label,
              core_mood,
              sub_mood,
              reasons,
              emotion_tag,
              created_at
       FROM moods
       WHERE user_id = ?
       ORDER BY datetime(created_at) DESC`,
      [user_id]
    );

    res.json({ moods: rows || [] });
  } catch (e) {
    console.error("Failed to fetch moods:", e);
    res.status(500).json({
      error: "Failed to fetch moods",
      details: e.message || String(e),
    });
  }
});

// ---------- PROFILE ----------

// Get profile
// ---------- PROFILE ----------

// Get profile
// ---------- PROFILE ----------

// Get profile
app.get("/profile", async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res.status(400).json({ error: "user_id query param required" });
    }

    const row = await get(`SELECT * FROM users WHERE id = ?`, [user_id]);

    return res.json({
      profile: row
        ? {
            id: row.id,
            full_name: row.full_name || "",
            username: row.username || "",
            profile_pic_url: row.profile_pic_url || null,
            email: row.email || ""
          }
        : null
    });
  } catch (e) {
    console.error("Profile fetch error:", e);
    return res.status(500).json({ error: "Failed to fetch profile" });
  }
});


// Update profile
app.post("/profile", (req, res) => {
  avatarUpload(req, res, async (err) => {
    try {
      if (err) {
        return res.status(400).json({ error: "Avatar upload failed", details: err.message });
      }

      const { user_id, email, full_name, username } = req.body;

      if (!user_id) {
        return res.status(400).json({ error: "user_id required" });
      }

      // Unique username check
      if (username) {
        const exists = await get(
          "SELECT id FROM users WHERE username = ? AND id <> ?",
          [username, user_id]
        );
        if (exists) {
          return res.status(409).json({ error: "Username already taken" });
        }
      }

      let picture = null;
      if (req.file) {
        const baseUrl = `${req.protocol}://${req.get("host")}`;
        picture = `${baseUrl}/uploads/profile_pics/${req.file.filename}`;
      }

      const current = await get("SELECT * FROM users WHERE id = ?", [user_id]);

      const newFullName = full_name ?? current?.full_name ?? null;
      const newUsername = username ?? current?.username ?? null;
      const newEmail = email ?? current?.email ?? null;
      const newPic = picture ?? current?.profile_pic_url ?? null;

      if (current) {
        await run(
          `UPDATE users SET email=?, full_name=?, username=?, profile_pic_url=? WHERE id=?`,
          [newEmail, newFullName, newUsername, newPic, user_id]
        );
      } else {
        await run(
          `INSERT INTO users (id, email, full_name, username, profile_pic_url)
           VALUES (?, ?, ?, ?, ?)`,
          [user_id, newEmail, newFullName, newUsername, newPic]
        );
      }

      const updated = await get("SELECT * FROM users WHERE id = ?", [user_id]);
      return res.json({ profile: updated });
    } catch (e) {
      console.error("Profile save error:", e);
      return res.status(500).json({ error: "Profile save failed" });
    }
  });
});



// ---------- FRIENDS ----------

// Send / create friend request
app.post("/friends/request", async (req, res) => {
  try {
    const { requester_id, receiver_id } = req.body || {};
    if (!requester_id || !receiver_id) {
      return res
        .status(400)
        .json({ error: "requester_id and receiver_id are required" });
    }
    if (requester_id === receiver_id) {
      return res.status(400).json({ error: "Cannot friend yourself" });
    }

    // Check existing relationship in either direction
    const existing = await get(
      `
      SELECT * FROM friends
      WHERE (requester_id = ? AND receiver_id = ?)
         OR (requester_id = ? AND receiver_id = ?)
    `,
      [requester_id, receiver_id, receiver_id, requester_id]
    );

    if (existing) {
      if (existing.status === "accepted") {
        return res.json({ status: "friends", friend: existing });
      }
      if (existing.status === "pending") {
        return res.json({
          status:
            existing.requester_id === requester_id
              ? "outgoing_pending"
              : "incoming_pending",
          friend: existing,
        });
      }
      // If previously rejected, restart as pending
      await run(
        `UPDATE friends
         SET requester_id = ?, receiver_id = ?, status = 'pending', created_at = CURRENT_TIMESTAMP
         WHERE id = ?`,
        [requester_id, receiver_id, existing.id]
      );
      const updated = await get(`SELECT * FROM friends WHERE id = ?`, [
        existing.id,
      ]);
      return res.json({ status: "pending", friend: updated });
    }

    // New pending request
    const result = await run(
      `INSERT INTO friends (requester_id, receiver_id, status)
       VALUES (?, ?, 'pending')`,
      [requester_id, receiver_id]
    );
    const inserted = await get(`SELECT * FROM friends WHERE id = ?`, [
      result.lastID,
    ]);

    res.json({ status: "pending", friend: inserted });
  } catch (e) {
    console.error("Friend request error:", e);
    res.status(500).json({
      error: "Failed to create friend request",
      details: e.message || String(e),
    });
  }
});

// Respond to friend request (accept / reject)
app.post("/friends/respond", async (req, res) => {
  try {
    const { request_id, status } = req.body || {};
    if (!request_id || !["accepted", "rejected"].includes(status)) {
      return res
        .status(400)
        .json({ error: "request_id and valid status are required" });
    }

    await run(`UPDATE friends SET status = ? WHERE id = ?`, [
      status,
      request_id,
    ]);
    const updated = await get(`SELECT * FROM friends WHERE id = ?`, [
      request_id,
    ]);

    res.json({ friend: updated });
  } catch (e) {
    console.error("Friend respond error:", e);
    res.status(500).json({
      error: "Failed to respond to friend request",
      details: e.message || String(e),
    });
  }
});

// Remove / unfriend
app.post("/friends/remove", async (req, res) => {
  try {
    const { user_id, other_id } = req.body || {};
    if (!user_id || !other_id) {
      return res.status(400).json({ error: "user_id and other_id required" });
    }

    await run(
      `
      DELETE FROM friends
      WHERE (requester_id = ? AND receiver_id = ?)
         OR (requester_id = ? AND receiver_id = ?)
    `,
      [user_id, other_id, other_id, user_id]
    );

    res.json({ success: true });
  } catch (e) {
    console.error("Unfriend error:", e);
    res.status(500).json({
      error: "Failed to remove friend",
      details: e.message || String(e),
    });
  }
});

// List incoming friend requests for a user
app.get("/friends/requests", async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res.status(400).json({ error: "user_id query param required" });
    }

    const rows = await all(
      `
      SELECT
        f.*,
        u.full_name AS requester_full_name,
        u.username AS requester_username,
        u.profile_pic_url AS requester_profile_pic_url
      FROM friends f
      LEFT JOIN users u ON u.id = f.requester_id
      WHERE f.receiver_id = ? AND f.status = 'pending'
      ORDER BY datetime(f.created_at) DESC
    `,
      [user_id]
    );

    res.json({ requests: rows || [] });
  } catch (e) {
    console.error("Fetch friend requests error:", e);
    res.status(500).json({
      error: "Failed to fetch friend requests",
      details: e.message || String(e),
    });
  }
});

// List accepted friends for a user
app.get("/friends/list", async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res.status(400).json({ error: "user_id query param required" });
    }

    const rows = await all(
      `
      SELECT
        f.*,
        CASE
          WHEN f.requester_id = ? THEN u2.id
          ELSE u1.id
        END AS friend_id,
        CASE
          WHEN f.requester_id = ? THEN u2.full_name
          ELSE u1.full_name
        END AS friend_full_name,
        CASE
          WHEN f.requester_id = ? THEN u2.username
          ELSE u1.username
        END AS friend_username,
        CASE
          WHEN f.requester_id = ? THEN u2.profile_pic_url
          ELSE u1.profile_pic_url
        END AS friend_profile_pic_url
      FROM friends f
      LEFT JOIN users u1 ON u1.id = f.requester_id
      LEFT JOIN users u2 ON u2.id = f.receiver_id
      WHERE (f.requester_id = ? OR f.receiver_id = ?)
        AND f.status = 'accepted'
      ORDER BY datetime(f.created_at) DESC
    `,
      [user_id, user_id, user_id, user_id, user_id, user_id]
    );

    res.json({ friends: rows || [] });
  } catch (e) {
    console.error("Fetch friends list error:", e);
    res.status(500).json({
      error: "Failed to fetch friends",
      details: e.message || String(e),
    });
  }
});

// Get friend status between two users
app.get("/friends/status", async (req, res) => {
  try {
    const { user_id, other_id } = req.query;
    if (!user_id || !other_id) {
      return res.status(400).json({ error: "user_id and other_id required" });
    }

    const row = await get(
      `
      SELECT * FROM friends
      WHERE (requester_id = ? AND receiver_id = ?)
         OR (requester_id = ? AND receiver_id = ?)
      ORDER BY datetime(created_at) DESC
      LIMIT 1
    `,
      [user_id, other_id, other_id, user_id]
    );

    if (!row) {
      return res.json({ status: "none" });
    }

    let relation = row.status;
    let direction = null;
    if (row.status === "pending") {
      direction = row.requester_id === user_id ? "outgoing" : "incoming";
    }

    res.json({ status: relation, direction, friend: row });
  } catch (e) {
    console.error("Friend status error:", e);
    res.status(500).json({
      error: "Failed to get friend status",
      details: e.message || String(e),
    });
  }
});

// ---------- STATIC FILES ----------
app.use("/uploads", express.static(uploadDir));

// ---------- START ----------
initDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Media server with DB running on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.error("Failed to init DB:", e);
    process.exit(1);
  });
