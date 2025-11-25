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

  await run(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT,
      full_name TEXT,
      username TEXT UNIQUE,
      profile_pic_url TEXT
    )
  `);

  console.log("SQLite tables ready ✅");
}

// ---------- ROUTES ----------

// Health
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Media server with DB running" });
});

// Video upload
app.post("/upload", (req, res) => {
  videoUpload(req, res, async (err) => {
    if (err) {
      console.error("Upload error:", err);
      return res.status(400).json({
        error: "Upload failed",
        details: err.message || String(err),
      });
    }

    try {
      const file = req.file;
      if (!file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const { emotion, caption, user_id, user_email } = req.body;

      const baseUrl = `${req.protocol}://${req.get("host")}`;
      const fileUrl = `${baseUrl}/uploads/${file.filename}`;

      const result = await run(
        `INSERT INTO videos (video_url, emotion_tag, caption, user_id, user_email)
         VALUES (?, ?, ?, ?, ?)`,
        [fileUrl, emotion || null, caption || null, user_id || null, user_email || null]
      );

      const inserted = await get(`SELECT * FROM videos WHERE id = ?`, [
        result.lastID,
      ]);

      res.json({
        message: "Upload + save successful",
        video: inserted,
      });
    } catch (e) {
      console.error("DB error:", e);
      res.status(500).json({
        error: "Failed to save video metadata",
        details: e.message || String(e),
      });
    }
  });
});

// List videos
app.get("/videos", async (req, res) => {
  try {
    const { emotion, user_id } = req.query;

    let rows;
    if (user_id) {
      // For "My videos" (Me tab)
      rows = await all(
        `SELECT * FROM videos
         WHERE user_id = ?
         ORDER BY datetime(created_at) DESC`,
        [user_id]
      );
    } else if (emotion) {
      // Watch tab filtered by emotion
      rows = await all(
        `SELECT * FROM videos
         WHERE emotion_tag = ? OR is_default = 1
         ORDER BY datetime(created_at) DESC`,
        [emotion]
      );
    } else {
      // Watch tab, all videos + defaults
      rows = await all(
        `SELECT * FROM videos
         ORDER BY datetime(created_at) DESC`
      );
    }

    res.json({ videos: rows || [] });
  } catch (e) {
    console.error("Failed to fetch videos:", e);
    res.status(500).json({
      error: "Failed to fetch videos",
      details: e.message || String(e),
    });
  }
});

// Save mood
app.post("/moods", async (req, res) => {
  try {
    const { user_id, mood_level, mood_label } = req.body || {};
    if (!user_id) {
      return res.status(400).json({ error: "user_id is required" });
    }

    await run(
      `INSERT INTO moods (user_id, mood_level, mood_label)
       VALUES (?, ?, ?)`,
      [user_id, mood_level ?? null, mood_label ?? null]
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

// Get moods for a user
app.get("/moods", async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res.status(400).json({ error: "user_id query param required" });
    }

    const rows = await all(
      `SELECT * FROM moods
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

// Get profile
app.get("/profile", async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res.status(400).json({ error: "user_id query param required" });
    }

    const row = await get(`SELECT * FROM users WHERE id = ?`, [user_id]);
    res.json({ profile: row || null });
  } catch (e) {
    console.error("Failed to fetch profile:", e);
    res.status(500).json({
      error: "Failed to fetch profile",
      details: e.message || String(e),
    });
  }
});

// Update profile (name, username, avatar)
app.post("/profile", (req, res) => {
  avatarUpload(req, res, async (err) => {
    if (err) {
      console.error("Avatar upload error:", err);
      return res.status(400).json({
        error: "Avatar upload failed",
        details: err.message || String(err),
      });
    }

    try {
      const { user_id, email, full_name, username } = req.body || {};
      if (!user_id) {
        return res.status(400).json({ error: "user_id is required" });
      }

      // Check username uniqueness (if provided)
      if (username) {
        const existing = await get(
          `SELECT id FROM users WHERE username = ? AND id <> ?`,
          [username, user_id]
        );
        if (existing) {
          return res.status(409).json({
            error: "Username already taken",
          });
        }
      }

      let profilePicUrl = null;
      if (req.file) {
        const baseUrl = `${req.protocol}://${req.get("host")}`;
        profilePicUrl = `${baseUrl}/uploads/profile_pics/${req.file.filename}`;
      }

      const current = await get(`SELECT * FROM users WHERE id = ?`, [user_id]);

      const newFullName = full_name ?? current?.full_name ?? null;
      const newUsername = username ?? current?.username ?? null;
      const newEmail = email ?? current?.email ?? null;
      const newPic =
        profilePicUrl ?? current?.profile_pic_url ?? null;

      if (current) {
        await run(
          `UPDATE users
           SET email = ?, full_name = ?, username = ?, profile_pic_url = ?
           WHERE id = ?`,
          [newEmail, newFullName, newUsername, newPic, user_id]
        );
      } else {
        await run(
          `INSERT INTO users (id, email, full_name, username, profile_pic_url)
           VALUES (?, ?, ?, ?, ?)`,
          [user_id, newEmail, newFullName, newUsername, newPic]
        );
      }

      const updated = await get(`SELECT * FROM users WHERE id = ?`, [user_id]);
      res.json({ profile: updated });
    } catch (e) {
      console.error("Profile update error:", e);
      res.status(500).json({
        error: "Failed to update profile",
        details: e.message || String(e),
      });
    }
  });
});

// Static files
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
