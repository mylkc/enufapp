import { useEffect, useMemo, useRef, useState } from "react";
import { MEDIA_SERVER_URL } from "./config";

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
      const url = filterEmotion
        ? `${MEDIA_SERVER_URL}/videos?emotion=${encodeURIComponent(filterEmotion)}`
        : `${MEDIA_SERVER_URL}/videos`;
      const res = await fetch(url);
      const data = await res.json();
      setVideos(data.videos || []);
      setCurrentIndex(0);
    } catch (err) {
      console.error("Failed to load videos", err);
      setError("Could not load videos");
    } finally {
      setLoading(false);
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
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [videos.length]);

  const hasVideos = videos.length > 0;
  const current = hasVideos ? videos[currentIndex] : null;
  const toggleMuted = () => setMuted((m) => !m);

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <div className="text-2xl font-semibold">Watch</div>
      </div>

      <div className="rounded-2xl bg-card border border-stroke p-3 space-y-2 sticky top-2 z-20 backdrop-blur">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] text-muted uppercase tracking-wide">Filter</span>
          {filterEmotion && (
            <button
              onClick={() => setFilterEmotion("")}
              className="text-[11px] text-muted underline underline-offset-4"
            >
              Clear
            </button>
          )}
        </div>
        <div className="flex gap-2 overflow-x-auto text-[11px] pb-1">
          <button
            onClick={() => setFilterEmotion("")}
            className={`px-3 py-1.5 rounded-full border whitespace-nowrap ${
              !filterEmotion
                ? "bg-ink text-white border-ink"
                : "border-stroke bg-white text-muted hover:border-ink/30"
            }`}
          >
            All
          </button>
          {FILTER_OPTIONS.map((e) => (
            <button
              key={e}
              onClick={() => setFilterEmotion(e)}
              className={`px-3 py-1.5 rounded-full border whitespace-nowrap ${
                filterEmotion === e
                  ? "bg-ink text-white border-ink"
                  : "border-stroke bg-white text-muted hover:border-ink/30"
              }`}
            >
              {niceLabel(e)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div
          ref={playerRef}
          className="w-full max-w-sm aspect-[9/16] rounded-3xl bg-card border border-stroke overflow-hidden flex items-center justify-center shadow-[0_18px_50px_rgba(24,24,24,0.18)]"
        >
          {loading ? (
            <div className="text-muted text-sm">Loading...</div>
          ) : hasVideos ? (
            <video
              key={current.id}
              src={current.video_url}
              className="w-full h-full object-cover"
              autoPlay
              muted={muted}
              playsInline
              onClick={toggleMuted}
              onPointerDown={(e) => e.currentTarget.pause()}
              onPointerUp={(e) => e.currentTarget.play()}
              onPointerLeave={(e) => e.currentTarget.play()}
              onPointerCancel={(e) => e.currentTarget.play()}
            />
          ) : (
            <div className="text-muted text-sm text-center px-6">
              No videos yet. Be the first to share something real.
            </div>
          )}
        </div>

        {error && <div className="text-[11px] text-red-600">{error}</div>}

        {hasVideos && (
          <div className="w-full max-w-sm space-y-1">
            <div className="text-[11px] text-muted uppercase tracking-wide">
              {niceLabel(current.emotion_tag)}
            </div>
            <div className="text-sm font-medium">
              {current.caption || "Untitled story"}
            </div>
            <div className="text-[11px] text-muted">
              Posted by {current.user_username || "member"}
            </div>
            <div className="flex items-center gap-3 pt-1 text-[11px] text-muted">
              <span className="ml-auto">
                {currentIndex + 1} / {videos.length}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Upload workflow moved to Me tab for mobile-first flow */}
    </div>
  );
}
