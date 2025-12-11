import { useEffect, useMemo, useRef, useState } from "react";
import { signOut } from "firebase/auth";
import { MEDIA_SERVER_URL } from "./config";
import ProfileSettingsModal from "./ProfileSettingsModal";
import { auth } from "./lib/firebase";

function resolveUrl(url) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${MEDIA_SERVER_URL}/${url}`;
}

const EMOTION_OPTIONS = [
  "sad","paralyzed","rejected","depressed","loss","shame","angry","hopeless",
  "lonely","ashamed","regret","powerless",
  "annoyed","insecure","left out","nervous","unmotivated","anxious","jealous",
  "stressed","tired","drained","overwhelmed","frustrated","unfulfilled","vulnerable",
  "unsure","awkward","zoned out","reflective","bored","meh","curious","numb","stuck",
  "appreciated","comfortable","thankful","motivated","hope","satisfied","calm",
  "fired up","nostalgic","relieved","surprised",
  "brave","creative","free","love","grateful","confident","excited","happy","proud",
  "proud","motivated","grateful","calm","excited","productive",
  "neutral","indifferent","distracted","content","unfocused",
  "under pressure","burned out","rushed","worried",
  "hopeless","sensitive","heartbroken",
  "resentful","hurt","enraged","impatient"
];

const normalizeEmotion = (val) => (val ? val.toLowerCase().trim() : "");
const niceLabel = (e) =>
  e ? e.split(" ").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ") : "";

export default function MeTab({ user }) {
  const [active, setActive] = useState("videos");
  const [moods, setMoods] = useState([]);
  const [videos, setVideos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);
  const [expandedDays, setExpandedDays] = useState({});
  const [showUpload, setShowUpload] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadEmotion, setUploadEmotion] = useState("");
  const [uploadCaption, setUploadCaption] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [toast, setToast] = useState(null);
  const vib = () => {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(10);
    }
  };
  const FILTER_OPTIONS = useMemo(
    () => Array.from(new Set(EMOTION_OPTIONS.map(normalizeEmotion))),
    []
  );

  const showToast = (message, tone = "neutral") => {
    setToast({ message, tone });
    setTimeout(() => setToast(null), 1800);
  };

  // Load data on mount/uid change
  useEffect(() => {
    if (!user?.uid) return;
    load();
  }, [user?.uid]);

  async function load() {
    const [moodsRes, videosRes, profileRes] = await Promise.all([
      fetch(`${MEDIA_SERVER_URL}/moods?user_id=${user.uid}`),
      fetch(`${MEDIA_SERVER_URL}/videos?user_id=${user.uid}`),
      fetch(`${MEDIA_SERVER_URL}/profile?user_id=${user.uid}`),
    ]);

    const moods = (await moodsRes.json()).moods || [];
    const videos = (await videosRes.json()).videos || [];
    const profileData = (await profileRes.json()).profile || null;

    setMoods(moods);
    setVideos(videos);
    setProfile(profileData);
  }

  async function deleteVideo(id) {
    const ok = window.confirm("Delete this video?");
    if (!ok) return;

    const res = await fetch(`${MEDIA_SERVER_URL}/videos/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (data.success) {
      setVideos((prev) => prev.filter((v) => v.id !== id));
      setMenuOpen(null);
    }
  }

  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Sign out failed", err);
      window.alert("Sign out failed. Please try again.");
    }
  }

  async function handleUpload(e) {
    e.preventDefault();
    if (!uploadFile || !uploadEmotion || !user) return;

    try {
      setUploading(true);
      setUploadError("");

      const formData = new FormData();
      formData.append("video", uploadFile);
      formData.append("emotion", uploadEmotion);
      formData.append("caption", uploadCaption);
      formData.append("user_id", user.uid);
      formData.append("user_email", user.email);

      const res = await fetch(`${MEDIA_SERVER_URL}/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok || !data.video) {
        throw new Error(data.error || "Upload failed");
      }

      setUploadFile(null);
      setUploadEmotion("");
      setUploadCaption("");
      setShowUpload(false);
      await load();
      vib();
      showToast("Uploaded", "success");
    } catch (err) {
      console.error("Upload failed", err);
      setUploadError(err.message || "Upload failed");
      showToast("Upload failed", "error");
    } finally {
      setUploading(false);
    }
  }

  useEffect(() => {
    if (selectedVideoIndex == null) return;
    if (selectedVideoIndex >= videos.length) {
      setSelectedVideoIndex(videos.length ? videos.length - 1 : null);
    }
  }, [selectedVideoIndex, videos.length]);

  const todayKey = new Date().toISOString().slice(0, 10);

  const groupedMoods = useMemo(() => {
    const groups = new Map();

    moods.forEach((m) => {
      const dayKey = (m.created_at || "").slice(0, 10) || "Unknown";
      if (!groups.has(dayKey)) groups.set(dayKey, []);
      groups.get(dayKey).push(m);
    });

    const sortedKeys = Array.from(groups.keys()).sort((a, b) =>
      b.localeCompare(a)
    );

    return sortedKeys.map((key) => ({
      key,
      label: formatDayLabel(key, todayKey),
      moods: groups.get(key),
    }));
  }, [moods, todayKey]);

function formatDayLabel(key, todayKeyValue) {
  if (!key || key === "Unknown") return "Unknown day";
  if (key === todayKeyValue) return "Today";

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const day = new Date(key);
    if (!Number.isFinite(day.getTime())) return key;

    const diffDays = Math.round((today - day) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) return "Yesterday";

    return day.toLocaleDateString(undefined, {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  }

  const toggleDay = (key) => {
    setExpandedDays((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-4 pb-24">
      {/* Profile Card */}
      <div className="flex items-center justify-between bg-card border border-white/10 p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          {profile?.profile_pic_url ? (
            <img
              src={resolveUrl(profile.profile_pic_url)}
              className="w-12 h-12 rounded-full object-cover border border-white/10"
            />
          ) : (
            <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center text-white">
              {profile?.full_name?.[0]?.toUpperCase() || "?"}
            </div>
          )}

          <div>
            <div className="font-semibold">{profile?.full_name || "No name yet"}</div>
            {profile?.username && (
              <div className="text-xs text-zinc-400">@{profile.username}</div>
            )}
            <div className="text-xs text-zinc-500">{user.email}</div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setShowSettings(true)}
            className="px-3 py-1.5 bg-white/10 rounded-full"
          >
            Settings
          </button>
          <button
            onClick={handleSignOut}
            className="px-3 py-1.5 bg-red-500/90 text-white rounded-full"
          >
            Sign out
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 bg-card/70 p-2 rounded-xl text-xs">
        <button
          onClick={() => setActive("moods")}
          className={`px-3 py-1 rounded-lg ${active === "moods" ? "bg-white/20 font-semibold" : ""}`}
        >
          My emotions
        </button>

        <button
          onClick={() => setActive("videos")}
          className={`px-3 py-1 rounded-lg ${active === "videos" ? "bg-white/20 font-semibold" : ""}`}
        >
          My videos
        </button>
      </div>

      {/* VIDEO GRID */}
      {active === "videos" && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((v) => {
            const src = resolveUrl(v.video_url);

            return (
              <div
                key={v.id}
                className="relative cursor-pointer rounded-xl overflow-hidden border border-white/10 group"
                onClick={() =>
                  setSelectedVideoIndex(videos.findIndex((item) => item.id === v.id))
                }
              >
                {/* Thumbnail */}
                <video
                  src={src}
                  muted
                  playsInline
                  className="w-full h-40 object-cover pointer-events-none"
                />

                {/* 3-dot menu */}
                <button
                  className="absolute top-2 right-2 bg-black/70 text-white rounded-full px-2 py-1 z-20"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen(menuOpen === v.id ? null : v.id);
                  }}
                >
                  ⋮
                </button>

                {/* Delete Dropdown */}
                {menuOpen === v.id && (
                  <div
                    className="absolute top-10 right-2 bg-zinc-900 text-white rounded-lg shadow-lg p-2 z-30"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="block w-full text-left text-red-400"
                      onClick={() => deleteVideo(v.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* MOODS LIST */}
      {active === "moods" && (
        <div className="space-y-3 text-sm">
          {groupedMoods.length === 0 && (
            <div className="text-zinc-400 text-xs">No moods logged yet.</div>
          )}

          {groupedMoods.map((group) => {
            const isToday = group.key === todayKey;
            const open = isToday || expandedDays[group.key];

            return (
              <div
                key={group.key}
                className="rounded-xl border border-white/10 bg-white/5"
              >
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-left"
                  onClick={() => {
                    if (!isToday) toggleDay(group.key);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-white">{group.label}</div>
                    <div className="text-[11px] text-zinc-400">
                      {group.moods.length} mood{group.moods.length !== 1 ? "s" : ""}
                    </div>
                  </div>
                  {!isToday && (
                    <span className="text-xs text-zinc-400">
                      {open ? "Hide" : "Show"}
                    </span>
                  )}
                </button>

                {open && (
                  <div className="space-y-3 px-3 pb-3">
                    {group.moods.map((m) => {
                      const label = m.mood_label || m.sub_mood || m.core_mood || "Unknown mood";
                      const level = m.mood_level ?? "?";
                      const ts = m.created_at
                        ? new Date(m.created_at.replace(" ", "T")).toLocaleString()
                        : "";
                      const reasons = m.reasons || m.reason || "";
                      const secondary = m.sub_mood && m.core_mood
                        ? `${m.core_mood} -> ${m.sub_mood}`
                        : m.sub_mood || m.core_mood || "";

                      return (
                        <div
                          key={m.id}
                          className="p-3 rounded-xl border border-white/10 bg-white/5 flex flex-col gap-1"
                        >
                          <div className="flex items-center justify-between">
                            <div className="font-semibold text-white">{label}</div>
                            <div className="text-[11px] text-zinc-400">Level {level}</div>
                          </div>
                          {secondary && (
                            <div className="text-[11px] text-zinc-300">{secondary}</div>
                          )}
                          <div className="text-[11px] text-zinc-400">
                            {reasons || "No extra details"}
                          </div>
                          <div className="text-[10px] text-zinc-500">
                            {ts}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {active === "videos" && (
        <>
          <button
            onClick={() => setShowUpload(true)}
            className="fixed right-4 z-[1001] px-5 py-3 rounded-full bg-white text-black font-semibold shadow-lg shadow-black/40"
            style={{ bottom: "calc(5rem + env(safe-area-inset-bottom))" }}
          >
            + Upload video
          </button>

          {showUpload && (
            <div className="fixed inset-0 bg-black/70 z-[1002] flex items-end sm:items-center justify-center p-4">
              <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Share a new video</div>
                  <button
                    onClick={() => {
                      setShowUpload(false);
                      setUploadError("");
                    }}
                    className="text-xl px-2"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleUpload} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[11px] text-zinc-400">Video file</label>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                      className="block w-full text-[11px] text-zinc-200 file:mr-3 file:px-3 file:py-1.5 file:rounded-full file:border-0 file:bg-white file:text-black file:text-[11px] file:font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-zinc-400">How were you feeling?</label>
                    <select
                      value={uploadEmotion}
                      onChange={(e) => setUploadEmotion(normalizeEmotion(e.target.value))}
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-2 text-xs"
                    >
                      <option value="">Select emotion</option>
                      {FILTER_OPTIONS.map((e) => (
                        <option key={e} value={e}>
                          {niceLabel(e)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-zinc-400">Caption (optional)</label>
                    <textarea
                      value={uploadCaption}
                      onChange={(e) => setUploadCaption(e.target.value)}
                      rows={2}
                      placeholder="Write a short caption…"
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-2 text-xs resize-none placeholder:text-zinc-500"
                    />
                  </div>

                  {uploadError && (
                    <div className="text-[11px] text-red-400">{uploadError}</div>
                  )}

                  <button
                    type="submit"
                    disabled={uploading || !uploadFile || !uploadEmotion}
                    className="w-full rounded-full bg-white text-black py-2 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {uploading ? "Uploading…" : "Post video"}
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      )}

      {selectedVideoIndex != null && videos[selectedVideoIndex] && (
        <VideoLightbox
          videos={videos}
          startIndex={selectedVideoIndex}
          onClose={() => setSelectedVideoIndex(null)}
        />
      )}

      {/* SETTINGS MODAL */}
      {showSettings && (
        <ProfileSettingsModal
          user={user}
          profile={profile}
          onClose={() => setShowSettings(false)}
          onSaved={async (updated) => {
            if (updated && updated.full_name) {
              setProfile(updated);
            } else {
              await load();
            }
            setShowSettings(false);
          }}
        />
      )}

      {toast && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-[1100] px-4 py-2 rounded-full border border-white/15 bg-black/80 text-xs">
          {toast.message}
        </div>
      )}
    </div>
  );
}

function VideoLightbox({ videos, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const itemRefs = useState(() => new Map())[0];
  const listRef = useRef(null);

  useEffect(() => setIndex(startIndex), [startIndex]);

  useEffect(() => {
    const node = itemRefs.get(index);
    if (node && node.scrollIntoView) {
      node.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [index, itemRefs]);

  useEffect(() => {
    let last = 0;
    const handler = (e) => {
      const now = Date.now();
      if (now - last < 200) return;
      if (e.deltaY > 10 && index < videos.length - 1) {
        setIndex((i) => Math.min(i + 1, videos.length - 1));
        last = now;
      } else if (e.deltaY < -10 && index > 0) {
        setIndex((i) => Math.max(i - 1, 0));
        last = now;
      }
    };
    const el = listRef.current;
    el?.addEventListener("wheel", handler, { passive: true });
    return () => el?.removeEventListener("wheel", handler);
  }, [index, videos.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setIndex((i) => Math.min(i + 1, videos.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Escape") {
        onClose?.();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [videos.length, onClose]);

  return (
    <div className="fixed inset-0 bg-black/85 z-[999] flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl h-full">
        <div
          ref={listRef}
          className="w-full h-full max-h-[90vh] overflow-y-auto space-y-4 pr-1"
        >
          {videos.map((v, i) => (
            <div
              key={v.id}
              ref={(node) => node && itemRefs.set(i, node)}
              className={`rounded-xl border border-white/10 bg-black/30 p-2 ${
                i === index ? "shadow-[0_0_0_2px_rgba(255,255,255,0.15)]" : ""
              }`}
            >
              <video
                src={resolveUrl(v.video_url)}
                controls
                autoPlay={i === index}
                playsInline
                controlsList="nodownload noremoteplayback"
                className="w-full max-h-[70vh] rounded-lg"
              />
              {v.emotion_tag && (
                <div className="text-[11px] text-zinc-300 mt-1">
                  {v.emotion_tag}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl bg-black/70 px-4 py-2 rounded-full"
        >
          ×
        </button>
      </div>
    </div>
  );
}
