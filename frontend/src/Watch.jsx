import { useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "./lib/supabase";
import PublicProfile from "./PublicProfile";
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
const niceLabel = (e) =>
  e ? e.split(" ").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ") : "";

export default function Watch({ user, initialEmotion }) {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterEmotion, setFilterEmotion] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [muted, setMuted] = useState(false);
  const [likeCounts, setLikeCounts] = useState({});
  const [likedByMe, setLikedByMe] = useState({});
  const [viewProfileId, setViewProfileId] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [filterCoreMoodId, setFilterCoreMoodId] = useState(null);
  const playerRef = useRef(null);
  const vib = () => {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  const FILTER_OPTIONS = useMemo(
    () => Array.from(new Set(EMOTION_OPTIONS.map(normalizeEmotion))),
    []
  );

  useEffect(() => {
    if (initialEmotion) {
      setFilterEmotion(normalizeEmotion(initialEmotion));
    }
  }, [initialEmotion]);

  useEffect(() => {
    fetchVideos();
    vib();
  }, [filterEmotion]);

  async function fetchVideos() {
    try {
      setLoading(true);
      setError("");
      let query = supabase
        .from("videos")
        .select("id, video_url, emotion_tag, caption, user_id, user_email, created_at")
        .order("created_at", { ascending: false });
      if (filterEmotion) {
        query = query.eq("emotion_tag", filterEmotion);
      }
      const { data, error } = await query;
      if (error) throw error;
      const rows = data || [];
      const userIds = Array.from(
        new Set(rows.map((row) => row.user_id).filter(Boolean))
      );
      let userMap = new Map();
      if (userIds.length > 0) {
        const { data: usersData, error: usersError } = await supabase
          .from("users")
          .select("id, username, full_name, email")
          .in("id", userIds);
        if (usersError) throw usersError;
        userMap = new Map((usersData || []).map((u) => [u.id, u]));
      }

      const normalized = rows.map((row) => {
        const user = userMap.get(row.user_id);
        return {
          ...row,
          user_username:
            user?.username || user?.full_name || user?.email || "member",
          user_profile_pic_url: user?.profile_pic_url || null,
        };
      });
      setVideos(normalized);
      await hydrateLikes(rows.map((row) => row.id));
      setCurrentIndex(0);
    } catch (err) {
      console.error("Failed to load videos", err);
      setError("Could not load videos");
    } finally {
      setLoading(false);
    }
  }

  async function hydrateLikes(videoIds) {
    if (!videoIds.length) {
      setLikeCounts({});
      setLikedByMe({});
      return;
    }
    const { data, error } = await supabase
      .from("likes")
      .select("video_id, user_id")
      .in("video_id", videoIds);
    if (error) throw error;
    const counts = {};
    const mine = {};
    (data || []).forEach((row) => {
      counts[row.video_id] = (counts[row.video_id] || 0) + 1;
      if (row.user_id === user?.uid) {
        mine[row.video_id] = true;
      }
    });
    setLikeCounts(counts);
    setLikedByMe(mine);
  }

  async function toggleLike(videoId) {
    if (!user?.uid || !videoId) return;
    const isLiked = !!likedByMe[videoId];
    if (isLiked) {
      const { error } = await supabase
        .from("likes")
        .delete()
        .eq("video_id", videoId)
        .eq("user_id", user.uid);
      if (error) {
        console.error("Failed to unlike:", error);
        return;
      }
      setLikedByMe((prev) => ({ ...prev, [videoId]: false }));
      setLikeCounts((prev) => ({
        ...prev,
        [videoId]: Math.max(0, (prev[videoId] || 1) - 1),
      }));
    } else {
      const { error } = await supabase.from("likes").insert({
        video_id: videoId,
        user_id: user.uid,
      });
      if (error) {
        console.error("Failed to like:", error);
        return;
      }
      setLikedByMe((prev) => ({ ...prev, [videoId]: true }));
      setLikeCounts((prev) => ({ ...prev, [videoId]: (prev[videoId] || 0) + 1 }));
    }
  }

  // Scroll / wheel navigation
  useEffect(() => {
    let last = 0;
    const handler = (e) => {
      const now = Date.now();
      if (now - last < 200) return;
      if (e.deltaY > 8 && currentIndex < videos.length - 1) {
        setCurrentIndex((i) => Math.min(i + 1, videos.length - 1));
        last = now;
      } else if (e.deltaY < -8 && currentIndex > 0) {
        setCurrentIndex((i) => Math.max(i - 1, 0));
        last = now;
      }
    };
    const el = playerRef.current;
    el?.addEventListener("wheel", handler, { passive: true });
    return () => el?.removeEventListener("wheel", handler);
  }, [currentIndex, videos.length]);

  // Arrow keys navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setCurrentIndex((i) => Math.min(i + 1, videos.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setCurrentIndex((i) => Math.max(i - 1, 0));
      }
    };
    if (typeof window === "undefined") return () => {};
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [videos.length]);

  const hasVideos = videos.length > 0;
  const current = hasVideos ? videos[currentIndex] : null;
  const toggleMuted = () => setMuted((m) => !m);
  const renderIcon = (icon, label) => {
    if (typeof icon === "string" && icon.endsWith(".png")) {
      return (
        <img
          src={icon}
          alt={label}
          className="w-7 h-7 object-contain"
        />
      );
    }
    return <span className="text-lg leading-none">{icon}</span>;
  };

  if (viewProfileId) {
    return (
      <PublicProfile
        userId={viewProfileId}
        currentUserId={user?.uid}
        onBack={() => setViewProfileId(null)}
      />
    );
  }

  return (
    <div className="relative min-h-[calc(100vh-5rem)]">
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-start">
        <button
          onClick={() => setShowFilter(true)}
          className="px-3 py-1.5 rounded-full text-[11px] border border-white/40 text-white/90 bg-white/10"
        >
          Filter
        </button>
      </div>

      <div
        ref={playerRef}
        className="relative h-[calc(100vh-8rem)] rounded-3xl overflow-hidden bg-black shadow-[0_30px_80px_rgba(10,10,10,0.35)]"
      >
        {loading ? (
          <div className="h-full flex items-center justify-center text-white/70 text-sm">
            Loading...
          </div>
        ) : hasVideos ? (
          <>
            <video
              key={current.id}
              src={current.video_url}
              className="absolute inset-0 w-full h-full object-contain"
              autoPlay
              muted={muted}
              playsInline
              onClick={toggleMuted}
              onPointerDown={(e) => e.currentTarget.pause()}
              onPointerUp={(e) => e.currentTarget.play()}
              onPointerLeave={(e) => e.currentTarget.play()}
              onPointerCancel={(e) => e.currentTarget.play()}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/40" />

            <div className="absolute bottom-6 left-6 right-20 space-y-2 text-white">
              <button
                onClick={() => setViewProfileId(current.user_id)}
                className="flex items-center gap-2"
              >
                <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 overflow-hidden flex items-center justify-center text-xs font-semibold">
                  {current.user_profile_pic_url ? (
                    <img
                      src={current.user_profile_pic_url}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    (current.user_username || "ME").slice(0, 2).toUpperCase()
                  )}
                </div>
                <div className="text-sm font-semibold">
                  @{current.user_username || "member"}
                </div>
              </button>
              <div className="text-[11px] uppercase tracking-wide text-white/70">
                {niceLabel(current.emotion_tag)}
              </div>
              <div className="text-sm font-medium">
                {current.caption || "Untitled story"}
              </div>
            </div>

            <div className="absolute right-5 bottom-16 flex flex-col items-center gap-4 text-white">
              <button
                onClick={() => toggleLike(current.id)}
                className="flex flex-col items-center gap-1"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                    likedByMe[current.id]
                      ? "bg-white text-ink border-white"
                      : "bg-white/10 border-white/30"
                  }`}
                >
                  {likedByMe[current.id] ? "♥" : "♡"}
                </div>
                <span className="text-[11px] text-white/80">
                  {likeCounts[current.id] || 0}
                </span>
              </button>
              <button
                onClick={toggleMuted}
                className="w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-xs"
              >
                {muted ? "Muted" : "Sound"}
              </button>
              <div className="text-[11px] text-white/70">
                {currentIndex + 1} / {videos.length}
              </div>
            </div>
          </>
        ) : (
          <div className="h-full flex items-center justify-center text-white/70 text-sm text-center px-6">
            No videos yet. Be the first to share something real.
          </div>
        )}
      </div>

      {error && <div className="mt-3 text-[11px] text-red-500">{error}</div>}

      {showFilter && (
        <div className="fixed inset-0 bg-black/70 z-[1005] flex items-end sm:items-center justify-center p-4">
          <div className="w-full max-w-md bg-card border border-stroke rounded-3xl p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Filter by mood</div>
              <button
                onClick={() => setShowFilter(false)}
                className="text-xl px-2"
              >
                X
              </button>
            </div>

            <div className="space-y-2">
              <div className="text-[11px] text-muted">Pick a core mood</div>
              <div className="grid grid-cols-3 gap-2">
                {CORE_MOODS.map((m) => {
                  const active = filterCoreMoodId === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => {
                        setFilterCoreMoodId(m.id);
                        setFilterEmotion("");
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
            </div>

            {filterCoreMoodId && (
              <div className="space-y-2">
                <div className="text-[11px] text-muted">Pick a specific feeling</div>
                <div className="flex flex-wrap gap-2">
                  {CORE_MOODS.find((c) => c.id === filterCoreMoodId).subMoods.map((sm) => (
                    <button
                      key={sm}
                      type="button"
                      onClick={() => setFilterEmotion(normalizeEmotion(sm))}
                      className={`px-3 py-1.5 rounded-full text-xs border transition ${
                        normalizeEmotion(sm) === filterEmotion
                          ? "bg-ink text-white border-ink"
                          : "bg-white border-stroke text-ink hover:border-ink/30"
                      }`}
                    >
                      {sm}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      const core = CORE_MOODS.find((c) => c.id === filterCoreMoodId);
                      setFilterEmotion(normalizeEmotion(core.label));
                    }}
                    className="px-3 py-1.5 rounded-full text-xs bg-ink text-white"
                  >
                    Use core mood
                  </button>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  setFilterEmotion("");
                  setFilterCoreMoodId(null);
                }}
                className="px-4 py-2 rounded-full border border-stroke text-xs"
              >
                Clear filter
              </button>
              <button
                onClick={() => setShowFilter(false)}
                className="px-4 py-2 rounded-full bg-ink text-white text-xs font-semibold"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
