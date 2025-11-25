import { useState, useEffect } from "react";
import { MEDIA_SERVER_URL } from "./config";
import ProfileSettingsModal from "./components/ProfileSettingsModal";

function resolveUrl(url) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${MEDIA_SERVER_URL}/${url}`;
}

export default function MeTab({ user, lastMood }) {
  const [activeSection, setActiveSection] = useState("moods");
  const [moods, setMoods] = useState([]);
  const [myVideos, setMyVideos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    loadData();
  }, [user?.uid]);

  async function loadData() {
    if (!user?.uid) return;
    try {
      const [moodsRes, vidsRes, profileRes] = await Promise.all([
        fetch(`${MEDIA_SERVER_URL}/moods?user_id=${user.uid}`),
        fetch(`${MEDIA_SERVER_URL}/videos?user_id=${user.uid}`),
        fetch(`${MEDIA_SERVER_URL}/profile?user_id=${user.uid}`),
      ]);
      setMoods((await moodsRes.json()).moods || []);
      setMyVideos((await vidsRes.json()).videos || []);
      setProfile((await profileRes.json()).profile || null);
    } catch (err) {
      console.error(err);
    }
  }

  const avatar = profile?.profile_pic_url ? (
    <img src={resolveUrl(profile.profile_pic_url)} className="w-12 h-12 rounded-full object-cover" />
  ) : (
    <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-white">
      {profile?.full_name ? profile.full_name[0].toUpperCase() : "?"}
    </div>
  );

  return (
    <div className="space-y-4 pb-24">
      {/* Profile Card */}
      <div className="flex items-center justify-between bg-card border border-white/10 p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          {avatar}
          <div>
            <div className="font-semibold text-sm">{profile?.full_name || "No name yet"}</div>
            {profile?.username && <div className="text-xs text-zinc-400">@{profile.username}</div>}
            <div className="text-[11px] text-zinc-500">{user.email}</div>
          </div>
        </div>
        <button onClick={() => setShowSettings(true)} className="px-3 py-1.5 bg-white/10 rounded-full">
          ⚙️ Settings
        </button>
      </div>

      {/* Tabs */ }
      <div className="flex gap-2 bg-card/70 p-2 rounded-xl text-xs">
        <button onClick={() => setActiveSection("moods")} className={activeSection === "moods" ? "font-bold" : ""}>
          My emotions
        </button>
        <button onClick={() => setActiveSection("videos")} className={activeSection === "videos" ? "font-bold" : ""}>
          My videos
        </button>
      </div>

      {/* Content */ }
      {activeSection === "moods" ? (
        <div>{moods.length ? moods.map((m, i) => <div key={i}>{m.mood_label}</div>) : "No moods logged yet."}</div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {myVideos.map((v) => (
            <video key={v.id} src={resolveUrl(v.video_url)} className="rounded-xl w-full" />
          ))}
        </div>
      )}

      {showSettings && (
        <ProfileSettingsModal
          user={user}
          profile={profile}
          onClose={() => setShowSettings(false)}
          onSaved={(updated) => {
            setProfile(updated);
            setShowSettings(false);
          }}
        />
      )}
    </div>
  );
}
