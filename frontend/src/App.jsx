// frontend/src/App.jsx
import { useEffect, useState } from "react";
import { auth } from "./lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./components/Login";
import Watch from "./Watch";
import MoodSelector from "./MoodSelector";
import { MEDIA_SERVER_URL } from "./config";
import FriendsTab from "./FriendsTab";
import SettingsPage from "./SettingsPage";

function resolveUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${MEDIA_SERVER_URL}${url}`;
  return `${MEDIA_SERVER_URL}/${url}`;
}

// ---------- Me tab ----------
function MeTab({ user, lastMood, setActiveTab }) {
  const [activeSection, setActiveSection] = useState("moods");
  const [moods, setMoods] = useState([]);
  const [myVideos, setMyVideos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user?.uid) return;
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError("");

        const [moodsRes, vidsRes, profileRes] = await Promise.all([
          fetch(`${MEDIA_SERVER_URL}/moods?user_id=${user.uid}`),
          fetch(`${MEDIA_SERVER_URL}/videos?user_id=${user.uid}`),
          fetch(`${MEDIA_SERVER_URL}/profile?user_id=${user.uid}`)
        ]);

        if (!moodsRes.ok) throw new Error("Failed to load moods");
        if (!vidsRes.ok) throw new Error("Failed to load videos");
        if (!profileRes.ok) throw new Error("Failed to load profile");

        const moodsJson = await moodsRes.json();
        const vidsJson = await vidsRes.json();
        const profileJson = await profileRes.json();

        if (cancelled) return;

        setMoods(moodsJson.moods || []);
        setMyVideos(vidsJson.videos || []);
        setProfile(profileJson.profile || null);
      } catch (err) {
        console.error(err);
        if (!cancelled) setError("Failed to load your history.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => (cancelled = true);
  }, [user?.uid]);

  const initials =
    (profile?.full_name || user?.email || "?")
      .split(" ")
      .map((p) => p[0]?.toUpperCase())
      .slice(0, 2)
      .join("") || "?";

  const avatarUrl = profile?.profile_pic_url
    ? resolveUrl(profile.profile_pic_url)
    : null;

  return (
    <div className="space-y-4 pb-24">
      {/* Profile Card */}
      <div className="rounded-2xl bg-card border border-white/10 p-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border border-white/10"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-white text-sm font-semibold border border-white/10">
              {initials}
            </div>
          )}
          <div>
            <div className="font-semibold text-sm">
              {profile?.full_name || "No name yet"}
            </div>
            {profile?.username && (
              <div className="text-xs text-zinc-400">@{profile.username}</div>
            )}
            <div className="text-[11px] text-zinc-500 mt-0.5">
              {user.email}
            </div>
            {lastMood && (
              <div className="text-[11px] text-zinc-500 mt-1">
                Last check-in:{" "}
                <span className="font-medium text-zinc-100">
                  {lastMood.label}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Settings Button */}
        <button
          onClick={() => setActiveTab("settings")}
          className="ml-auto px-3 py-1.5 rounded-full bg-white/10 text-white text-xs hover:bg-white/20 transition"
        >
          ⚙️ Settings
        </button>
      </div>

      {/* Tabs: moods/videos */}
      <div className="rounded-2xl bg-card/70 border border-white/10 p-1 inline-flex text-[11px]">
        <button
          onClick={() => setActiveSection("moods")}
          className={`flex-1 px-3 py-1.5 rounded-full ${
            activeSection === "moods"
              ? "bg-white text-black font-semibold"
              : "bg-transparent text-zinc-300"
          }`}
        >
          My emotions
        </button>
        <button
          onClick={() => setActiveSection("videos")}
          className={`flex-1 px-3 py-1.5 rounded-full ${
            activeSection === "videos"
              ? "bg-white text-black font-semibold"
              : "bg-transparent text-zinc-300"
          }`}
        >
          My videos
        </button>
      </div>

      {/* Content */}
      <div className="rounded-2xl bg-card border border-white/10 p-4 min-h-[220px]">
        {loading ? (
          <div className="text-xs text-zinc-400">Loading your history…</div>
        ) : error ? (
          <div className="text-xs text-red-400">{error}</div>
        ) : activeSection === "moods" ? (
          moods.length === 0 ? (
            <div className="text-xs text-zinc-400">
              No past moods yet.
            </div>
          ) : (
            <div className="space-y-2 text-xs">
              {moods.map((m) => (
                <div
                  key={m.id}
                  className="flex items-center justify-between gap-3 border-b border-white/5 last:border-b-0 py-1.5"
                >
                  <div>
                    <div className="font-medium text-zinc-50">
                      {m.mood_label}
                    </div>
                    <div className="text-[10px] text-zinc-500">
                      Level {m.mood_level}
                    </div>
                  </div>
                  <div className="text-[10px] text-zinc-500">{m.created_at}</div>
                </div>
              ))}
            </div>
          )
        ) : myVideos.length === 0 ? (
          <div className="text-xs text-zinc-400">
            You haven&apos;t posted any videos yet.
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {myVideos.map((v) => (
              <div key={v.id} className="relative group">
                <video
                  src={resolveUrl(v.video_url)}
                  className="w-full aspect-[9/16] object-cover rounded-xl border border-white/10"
                  muted
                />
                {v.emotion_tag && (
                  <div className="absolute bottom-1 left-1 right-1 text-[9px] px-1 py-0.5 rounded-full bg-black/60 text-white text-center line-clamp-1">
                    {v.emotion_tag}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ---------- MAIN APP ----------
export default function App() {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [hasCheckedIn, setHasCheckedIn] = useState(false);
  const [lastMood, setLastMood] = useState(null);
  const [activeTab, setActiveTab] = useState("watch");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u || null);
      setInitializing(false);
      if (u) {
        setHasCheckedIn(false);
        setActiveTab("mood");
      } else {
        setLastMood(null);
        setActiveTab("mood");
      }
    });
    return () => unsub();
  }, []);

  const handleMoodComplete = async (mood) => {
    setLastMood(mood);
    setHasCheckedIn(true);
    setActiveTab("watch");

    if (user?.uid) {
      await fetch(`${MEDIA_SERVER_URL}/moods`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: user.uid,
          mood_level: mood.level,
          mood_label: mood.label
        })
      });
    }
  };

  if (initializing) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center text-zinc-400 text-sm">
        Loading ENUF…
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-bg text-white flex items-center justify-center">
        <Login user={null} />
      </div>
    );
  }

  if (!hasCheckedIn) {
    return (
      <div className="min-h-screen bg-bg text-white">
        <MoodSelector onComplete={handleMoodComplete} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-white pb-16">
      <main className="pb-24">
        {activeTab === "mood" && (
          <MoodSelector onComplete={handleMoodComplete} />
        )}
        {activeTab === "watch" && <Watch user={user} />}
        {activeTab === "me" && (
          <MeTab user={user} lastMood={lastMood} setActiveTab={setActiveTab} />
        )}
        {activeTab === "friends" && <FriendsTab user={user} />}
        {activeTab === "settings" && <SettingsPage user={user} />}
      </main>

      {/* Bottom navigation */}
      <footer className="fixed bottom-0	left-0 right-0 bg-black/90 border-t border-white/10 flex justify-around py-3 text-xs">
        <TabButton label="Friends" icon="👫" tab="friends" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton label="Watch" icon="🎥" tab="watch" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton label="Me" icon="👤" tab="me" activeTab={activeTab} setActiveTab={setActiveTab} />
      </footer>
    </div>
  );
}

function TabButton({ label, icon, tab, activeTab, setActiveTab }) {
  return (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex flex-col items-center gap-0.5 ${
        activeTab === tab ? "text-white font-semibold" : "text-zinc-400"
      }`}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
}
