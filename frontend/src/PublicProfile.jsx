// frontend/src/PublicProfilePage.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MEDIA_SERVER_URL } from "./config";

function resolveUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${MEDIA_SERVER_URL}${url}`;
  return `${MEDIA_SERVER_URL}/${url}`;
}

export default function PublicProfilePage() {
  const { uid } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        // Load profile
        const profRes = await fetch(`${MEDIA_SERVER_URL}/profile?user_id=${uid}`);
        const profJson = await profRes.json();
        setProfile(profJson.profile || null);

        // Load videos
        const vidsRes = await fetch(`${MEDIA_SERVER_URL}/videos?user_id=${uid}`);
        const vidsJson = await vidsRes.json();
        setVideos(vidsJson.videos || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [uid]);

  if (loading) return <div className="p-6 text-zinc-400">Loading profile...</div>;
  if (!profile) return <div className="p-6 text-red-400">Profile not found.</div>;

  return (
    <div className="min-h-screen bg-bg text-white p-6 max-w-4xl mx-auto">
      <button onClick={() => navigate(-1)} className="text-sm text-zinc-400 mb-4">← Back</button>

      {/* Profile Header */}
      <div className="flex items-center gap-3 mb-6">
        {profile.profile_pic_url ? (
          <img
            src={resolveUrl(profile.profile_pic_url)}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border border-white/10"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-white">
            ?
          </div>
        )}
        <div>
          <div className="text-lg font-semibold">{profile.full_name}</div>
          {profile.username && (
            <div className="text-sm text-zinc-400">@{profile.username}</div>
          )}
        </div>
      </div>

      {/* Videos */}
      <h3 className="text-sm font-semibold mb-3">Videos</h3>
      {videos.length === 0 ? (
        <div className="text-xs text-zinc-500">No videos yet.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {videos.map((v) => (
            <div key={v.id} className="relative group">
              <video
                src={resolveUrl(v.video_url)}
                className="w-full aspect-[9/16] object-cover rounded-xl border border-white/10"
                muted
              />
              {v.emotion_tag && (
                <div className="absolute bottom-1 left-1 right-1 text-[9px] px-1 py-0.5 rounded-full bg-black/60 text-white text-center">
                  {v.emotion_tag}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
