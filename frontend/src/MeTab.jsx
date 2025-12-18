import { useEffect, useMemo, useRef, useState } from "react";
import { signOut } from "firebase/auth";
import ProfileSettingsModal from "./ProfileSettingsModal";
import { auth } from "./lib/firebase";
import { supabase } from "./lib/supabase";

function resolveUrl(url) {
  return url || "";
}

import { CORE_MOODS } from "./MoodSelector";

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
const niceLabel = (e) => (e ? e.split(" ").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ") : "");
const sanitizeFileName = (name) =>
  (name || "upload")
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9._-]/g, "_");
const renderIcon = (icon, label) => {
  if (typeof icon === "string" && icon.endsWith(".png")) {
    return <img src={icon} alt={label} className="w-5 h-5 object-contain" />;
  }
  return <span className="text-lg leading-none">{icon}</span>;
};



export default function MeTab({ user, setActiveTab }) {
  const [active, setActive] = useState("videos");
  const [moods, setMoods] = useState([]);
  const [videos, setVideos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);
  const [expandedDays, setExpandedDays] = useState({});
  const [showUpload, setShowUpload] = useState(false);
  const [uploadStep, setUploadStep] = useState("select");
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadEmotion, setUploadEmotion] = useState("");
  const [uploadCaption, setUploadCaption] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  // Upload-specific mood state
  const [uploadCoreMoodId, setUploadCoreMoodId] = useState(null);
  const [uploadSubMood, setUploadSubMood] = useState("");
  const [toast, setToast] = useState(null);
  const vib = () => {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  // Helper to select a sub-mood and set the upload emotion
  const selectUploadSubMood = (m) => {
    setUploadSubMood(m);
    setUploadEmotion(normalizeEmotion(m));
  };
  const FILTER_OPTIONS = useMemo(
    () => Array.from(new Set(EMOTION_OPTIONS.map(normalizeEmotion))),
    []
  );
  const uploadPreviewUrl = useMemo(() => {
    if (!uploadFile) return "";
    return URL.createObjectURL(uploadFile);
  }, [uploadFile]);

  useEffect(() => {
    return () => {
      if (uploadPreviewUrl) {
        URL.revokeObjectURL(uploadPreviewUrl);
      }
    };
  }, [uploadPreviewUrl]);

  const showToast = (message, tone = "neutral") => {
    setToast({ message, tone });
    setTimeout(() => setToast(null), 1800);
  };

  // Load data on mount/uid change
  useEffect(() => {
    if (!user || !user.uid) return;
    load();
  }, [user?.uid]);

  async function load() {
    try {
      const [{ data: moodsData, error: moodsError }, { data: videosData, error: videosError }, { data: profileData, error: profileError }] =
        await Promise.all([
          supabase
            .from("moods")
            .select("id, mood_level, mood_label, core_mood, sub_mood, reasons, emotion_tag, created_at")
            .eq("user_id", user.uid)
            .order("created_at", { ascending: false }),
          supabase
            .from("videos")
            .select("id, video_url, emotion_tag, caption, user_id, user_email, created_at, storage_path")
            .eq("user_id", user.uid)
            .order("created_at", { ascending: false }),
          supabase.from("users").select("*").eq("id", user.uid).maybeSingle(),
        ]);

      if (moodsError) throw moodsError;
      if (videosError) throw videosError;
      if (profileError) throw profileError;

      const moods = moodsData || [];
      const videos = videosData || [];

      setMoods(moods);
      setVideos(videos);
      setProfile(profileData || null);
    } catch (err) {
      console.error("Failed to load data:", err);
      showToast(err.message || "Failed to load data", "error");
    }
  }

  async function deleteVideo(id) {
    const ok = window.confirm("Delete this video...");
    if (!ok) return;
    try {
      const { data: existing, error: fetchError } = await supabase
        .from("videos")
        .select("id, storage_path")
        .eq("id", id)
        .maybeSingle();
      if (fetchError) throw fetchError;

      if (existing?.storage_path) {
        const { error: storageError } = await supabase
          .storage
          .from("videos")
          .remove([existing.storage_path]);
        if (storageError) {
          console.error("Failed to remove storage file:", storageError);
        }
      }

      const { error: deleteError } = await supabase
        .from("videos")
        .delete()
        .eq("id", id);
      if (deleteError) throw deleteError;

      setVideos((prev) => prev.filter((v) => v.id !== id));
      setMenuOpen(null);
    } catch (err) {
      console.error("Delete failed:", err);
      showToast(err.message || "Delete failed", "error");
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

      const fileName = `${Date.now()}-${sanitizeFileName(uploadFile.name)}`;
      const storagePath = `users/${user.uid}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("videos")
        .upload(storagePath, uploadFile, {
          contentType: uploadFile.type || "video/mp4",
          upsert: false,
        });
      if (uploadError) throw uploadError;

      const { data: publicData } = supabase.storage
        .from("videos")
        .getPublicUrl(storagePath);
      const publicUrl = publicData?.publicUrl;
      if (!publicUrl) {
        throw new Error("Failed to resolve uploaded video URL.");
      }

      const { data: inserted, error: insertError } = await supabase
        .from("videos")
        .insert({
          video_url: publicUrl,
          storage_path: storagePath,
          emotion_tag: uploadEmotion,
          caption: uploadCaption || null,
          user_id: user.uid,
          user_email: user.email || null,
        })
        .select("id")
        .maybeSingle();
      if (insertError || !inserted) {
        throw new Error(insertError?.message || "Upload failed");
      }

      setUploadFile(null);
      setUploadEmotion("");
      setUploadCaption("");
      setUploadStep("select");
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
      setSelectedVideoIndex(videos.length > 0 ? videos.length - 1 : null);
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
      <div className="flex items-center justify-between bg-card border border-stroke p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          {profile?.profile_pic_url ? (
            <img
              src={resolveUrl(profile.profile_pic_url)}
              className="w-12 h-12 rounded-full object-cover border border-stroke"
            />
          ) : (
            <div className="w-12 h-12 bg-stroke rounded-full flex items-center justify-center text-ink">
              {(profile && profile.full_name ? profile.full_name[0].toUpperCase() : "...")}
            </div>
          )}

          <div>
            <div className="font-semibold">{profile?.full_name || "No name yet"}</div>
            {profile?.username && (
              <div className="text-xs text-muted">@{profile.username}</div>
            )}
            <div className="text-xs text-muted">{user.email}</div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab && setActiveTab("settings")}
            className="px-3 py-1.5 bg-white/10 rounded-full"
          >
            Settings
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 bg-card p-2 rounded-xl text-xs">
        <button
          onClick={() => setActive("moods")}
          className={`px-3 py-1 rounded-lg ${active === "moods" ? "bg-ink/5 font-semibold" : ""}`}
        >
          My emotions
        </button>

        <button
          onClick={() => setActive("videos")}
          className={`px-3 py-1 rounded-lg ${active === "videos" ? "bg-ink/5 font-semibold" : ""}`}
        >
          My videos
        </button>
      </div>

      {/* VIDEO GRID */}
      {active === "videos" && (
        <div className="grid grid-cols-3 gap-2">
          {videos.map((v) => {
            const src = resolveUrl(v.video_url);

            return (
              <div
                key={v.id}
                className="relative cursor-pointer rounded-2xl overflow-hidden bg-black/80"
                onClick={() =>
                  setSelectedVideoIndex(videos.findIndex((item) => item.id === v.id))
                }
              >
                {/* Thumbnail */}
                <video
                  src={src}
                  muted
                  playsInline
                  className="w-full aspect-[9/16] object-cover pointer-events-none"
                />

                {/* 3-dot menu */}
                <button
                  className="absolute top-2 right-2 bg-black/60 text-white rounded-full px-2 py-1 z-20 text-[11px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen(menuOpen === v.id ? null : v.id);
                  }}
                >
                  •••
                </button>

                {/* Delete Dropdown */}
                {menuOpen === v.id && (
                  <div
                    className="absolute top-10 right-2 bg-white text-ink rounded-lg shadow-lg p-2 z-30"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="block w-full text-left text-red-600"
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
            <div className="text-muted text-xs">No moods logged yet.</div>
          )}

          {groupedMoods.map((group) => {
            const isToday = group.key === todayKey;
            const open = isToday || expandedDays[group.key];

            return (
              <div
                key={group.key}
                className="rounded-xl border border-stroke bg-white"
              >
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-left"
                  onClick={() => {
                    if (!isToday) toggleDay(group.key);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-ink">{group.label}</div>
                    <div className="text-[11px] text-muted">
                      {group.moods.length} mood{group.moods.length !== 1 ? "s" : ""}
                    </div>
                  </div>
                  {!isToday && (
                    <span className="text-xs text-muted">
                      {open ? "Hide" : "Show"}
                    </span>
                  )}
                </button>

                {open && (
                  <div className="space-y-3 px-3 pb-3">
                    {group.moods.map((m) => {
                      const label = m.mood_label || m.sub_mood || m.core_mood || "Unknown mood";
                      const level = m.mood_level ?? "...";
                      const ts = m.created_at ? new Date(m.created_at.replace(" ", "T")).toLocaleString() : "";
                      const reasons = m.reasons || m.reason || "";
                      const secondary = m.sub_mood && m.core_mood
                        ? `${m.core_mood} -> ${m.sub_mood}`
                        : m.sub_mood || m.core_mood || "";

                      return (
                        <div
                          key={m.id}
                          className="p-3 rounded-xl border border-stroke bg-white flex flex-col gap-1"
                        >
                          <div className="flex items-center justify-between">
                            <div className="font-semibold text-ink">{label}</div>
                            <div className="text-[11px] text-muted">Level {level}</div>
                          </div>
                          {secondary && (
                            <div className="text-[11px] text-muted">{secondary}</div>
                          )}
                          <div className="text-[11px] text-muted">
                            {reasons || "No extra details"}
                          </div>
                          <div className="text-[10px] text-muted">
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
            className="fixed right-4 z-[1001] px-5 py-3 rounded-full bg-ink text-white font-semibold shadow-lg shadow-black/10"
            style={{ bottom: "calc(5rem + env(safe-area-inset-bottom))" }}
          >
            + Upload video
          </button>

          {showUpload && (
            <div className="fixed inset-0 bg-ink/70 z-[1002] flex items-end sm:items-center justify-center p-4">
              <div className="w-full max-w-md bg-card border border-stroke rounded-3xl p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">
                    {uploadStep === "select" ? "New upload" : "Details"}
                  </div>
                  <button
                    onClick={() => {
                      setShowUpload(false);
                      setUploadError("");
                      setUploadStep("select");
                    }}
                    className="text-xl px-2"
                  >
                    X
                  </button>
                </div>

                {uploadStep === "select" ? (
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-stroke bg-ink/40 p-3">
                      {uploadPreviewUrl ? (
                        <video
                          src={uploadPreviewUrl}
                          controls
                          playsInline
                          className="w-full max-h-[50vh] rounded-xl"
                        />
                      ) : (
                        <div className="aspect-[9/16] rounded-xl border border-stroke bg-ink/30 flex items-center justify-center text-xs text-muted">
                          Select a video to preview
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] text-muted">Choose a video</label>
                      <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => setUploadFile(e.target.files[0] || null)}
                        className="block w-full text-[11px] text-ink file:mr-3 file:px-3 file:py-1.5 file:rounded-full file:border-0 file:bg-white file:text-ink file:text-[11px] file:font-medium"
                      />
                    </div>

                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => {
                          setShowUpload(false);
                          setUploadError("");
                          setUploadStep("select");
                        }}
                        className="px-4 py-2 rounded-full border border-stroke text-xs text-ink"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setUploadStep("details")}
                        disabled={!uploadFile}
                        className="px-4 py-2 rounded-full bg-ink text-white text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleUpload} className="space-y-3">
                    <div className="rounded-2xl border border-stroke bg-ink/40 p-3">
                      {uploadPreviewUrl ? (
                        <video
                          src={uploadPreviewUrl}
                          controls
                          playsInline
                          className="w-full max-h-[40vh] rounded-xl"
                        />
                      ) : (
                        <div className="aspect-[9/16] rounded-xl border border-stroke bg-ink/30 flex items-center justify-center text-xs text-muted">
                          No video selected
                        </div>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] text-muted">How were you feeling</label>

                      {/* Core mood buttons */}
                      <div className="grid grid-cols-5 gap-2">
                        {CORE_MOODS.map((m) => {
                          const active = uploadCoreMoodId === m.id;
                          return (
                            <button
                              key={m.id}
                              type="button"
                              onClick={() => {
                                setUploadCoreMoodId(m.id);
                                setUploadSubMood("");
                                setUploadEmotion("");
                              }}
                              className={`flex items-center gap-2 px-3 py-2 rounded-2xl text-xs border transition ${
                                active
                                  ? "bg-ink text-white border-ink"
                                  : "bg-white border-stroke text-ink hover:border-ink/30"
                              }`}
                            >
                              {renderIcon(m.icon, m.label)}
                              <div className="font-semibold">{m.label}</div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Sub-mood choices (shown after core selected) */}
                      {uploadCoreMoodId && (
                        <div className="mt-3">
                          <div className="text-[11px] text-muted mb-2">Pick a specific feeling</div>
                          <div className="flex flex-wrap gap-2">
                            {CORE_MOODS.find((c) => c.id === uploadCoreMoodId).subMoods.map((sm) => {
                              const sel = uploadSubMood === sm;
                              return (
                                <button
                                  key={sm}
                                  type="button"
                                  onClick={() => selectUploadSubMood(sm)}
                                  className={`px-3 py-1.5 rounded-full text-xs border transition ${
                                    sel
                                      ? "bg-ink text-white border-ink"
                                      : "bg-white border-stroke text-ink hover:border-ink/30"
                                  }`}
                                >
                                  {sm}
                                </button>
                              );
                            })}

                            <button
                              type="button"
                              onClick={() => {
                                setUploadSubMood("");
                                const core = CORE_MOODS.find((c) => c.id === uploadCoreMoodId);
                                setUploadEmotion(normalizeEmotion(core.label));
                              }}
                              className="px-3 py-1.5 rounded-full text-xs bg-ink text-white"
                            >
                              Use core mood
                            </button>
                          </div>

                          {!uploadSubMood && !uploadEmotion && (
                            <div className="text-[11px] text-muted mt-1">Choose a sub-mood or tap "Use core mood" to quick-select.</div>
                          )}
                        </div>
                      )}

                      {/* Show current selection */}
                      {uploadEmotion && (
                        <div className="text-[11px] text-muted mt-2">Selected: {niceLabel(uploadEmotion)}</div>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] text-muted">Caption (optional)</label>
                      <textarea
                        value={uploadCaption}
                        onChange={(e) => setUploadCaption(e.target.value)}
                        rows={2}
                        placeholder="Write a short caption"
                        className="w-full bg-white border border-stroke rounded-xl px-3 py-2 text-xs resize-none placeholder:text-muted"
                      />
                    </div>

                    {uploadError && (
                      <div className="text-[11px] text-red-600">{uploadError}</div>
                    )}

                    <div className="flex justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => setUploadStep("select")}
                        className="px-4 py-2 rounded-full border border-stroke text-xs text-ink"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={uploading || !uploadFile || !uploadEmotion}
                        className="flex-1 rounded-full bg-ink text-white py-2 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {uploading ? "Uploading..." : "Share"}
                      </button>
                    </div>
                  </form>
                )}
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

      {toast && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-[1100] px-4 py-2 rounded-full border border-stroke bg-ink/80 text-xs">
          {toast.message}
        </div>
      )}
    </div>
  );
}

function VideoLightbox({ videos, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const [muted, setMuted] = useState(false);
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
    el.addEventListener("wheel", handler, { passive: true });
    return () => el.removeEventListener("wheel", handler);
  }, [index, videos.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setIndex((i) => Math.min(i + 1, videos.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [videos.length, onClose]);

  const toggleMuted = () => setMuted((m) => !m);

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
              className={`rounded-xl border border-stroke bg-ink/30 p-2 ${
                i === index ? "shadow-[0_0_0_2px_rgba(255,255,255,0.15)]" : ""
              }`}
            >
              <video
                src={resolveUrl(v.video_url)}
                controls
                autoPlay={i === index}
                playsInline
                muted={muted}
                onClick={toggleMuted}
                onPointerDown={(e) => e.currentTarget.pause()}
                onPointerUp={(e) => e.currentTarget.play()}
                onPointerLeave={(e) => e.currentTarget.play()}
                onPointerCancel={(e) => e.currentTarget.play()}
                controlsList="nodownload noremoteplayback"
                className="w-full max-h-[70vh] rounded-lg"
              />
              {v.emotion_tag && (
                <div className="text-[11px] text-muted mt-1">
                  {v.emotion_tag}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-ink text-3xl bg-ink/70 px-4 py-2 rounded-full"
        >
          X
        </button>
      </div>
    </div>
  );
}
