import { useEffect, useState } from "react";
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
];

function niceLabel(e){
  return e ? e.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ") : "";
}

export default function Watch({ user }){
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterEmotion, setFilterEmotion] = useState("");
  const [file, setFile] = useState(null);
  const [emotion, setEmotion] = useState("");
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => { fetchVideos(); }, [filterEmotion]);

  async function fetchVideos(){
    try{
      setLoading(true);
      setError("");
      const url = filterEmotion
        ? `${MEDIA_SERVER_URL}/videos?emotion=${encodeURIComponent(filterEmotion)}`
        : `${MEDIA_SERVER_URL}/videos`;
      const res = await fetch(url);
      const data = await res.json();
      setVideos(data.videos || []);
      setCurrentIndex(0);
    } catch(err) {
      console.error("Failed to load videos", err);
      setError("Could not load videos");
    } finally {
      setLoading(false);
    }
  }

  async function handleUpload(e){
    e.preventDefault();
    if(!file || !emotion) return;
    if (!user) {
      setError("You must be logged in to upload.");
      return;
    }

    try{
      setUploading(true);
      setError("");

      const formData = new FormData();
      formData.append("media", file);
      formData.append("emotion", emotion);
      formData.append("caption", caption);
      formData.append("user_id", user.uid);
      formData.append("user_email", user.email);

      const res = await fetch(`${MEDIA_SERVER_URL}/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if(!data.video){
        throw new Error("No video returned from server");
      }

      setFile(null);
      setEmotion("");
      setCaption("");
      await fetchVideos();
      
    } catch(err){
      console.error("Upload failed", err);
      setError("Upload failed. Check server.");
    } finally {
      setUploading(false);
    }
  }

  const hasVideos = videos.length > 0;
  const current = hasVideos ? videos[currentIndex] : null;

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <div className="text-sm text-zinc-400">Watch</div>
        <div className="text-2xl font-semibold">Stories that match how you feel</div>
        <p className="text-xs text-zinc-500 max-w-md">
          Scroll through real, unpolished moments from people feeling the same way you are.
        </p>
      </div>

      <div className="rounded-2xl bg-card/60 border border-white/10 p-3 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] text-zinc-400 uppercase tracking-wide">Filter by emotion</span>
          {filterEmotion && (
            <button
              onClick={() => setFilterEmotion("")}
              className="text-[11px] text-zinc-300 underline underline-offset-4"
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
                ? "bg-white text-black border-white"
                : "border-zinc-700 bg-zinc-900/70 text-zinc-200"
            }`}
          >
            All
          </button>
          {EMOTION_OPTIONS.map((e) => (
            <button
              key={e}
              onClick={() => setFilterEmotion(e)}
              className={`px-3 py-1.5 rounded-full border whitespace-nowrap ${
                filterEmotion === e
                  ? "bg-white text-black border-white"
                  : "border-zinc-700 bg-zinc-900/70 text-zinc-200"
              }`}
            >
              {niceLabel(e)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="w-full max-w-sm aspect-[9/16] rounded-3xl bg-card border border-white/10 overflow-hidden flex items-center justify-center shadow-[0_18px_60px_rgba(0,0,0,0.7)]">
          {loading ? (
            <div className="text-zinc-500 text-sm">Loading…</div>
          ) : hasVideos ? (
            <video
              key={current.id}
              src={current.video_url}
              className="w-full h-full object-cover"
              controls
            />
          ) : (
            <div className="text-zinc-500 text-sm text-center px-6">
              No videos yet. Be the first to share something real.
            </div>
          )}
        </div>

        {hasVideos && (
          <div className="w-full max-w-sm space-y-1">
            <div className="text-[11px] text-zinc-400 uppercase tracking-wide">
              {niceLabel(current.emotion_tag)}
            </div>
            <div className="text-sm font-medium">
              {current.caption || "Untitled story"}
            </div>
            <div className="text-[11px] text-zinc-500">
              Posted by {current.user_email || "Anonymous"}
            </div>
            <div className="flex items-center gap-3 pt-1 text-[11px] text-zinc-400">
              <button
                onClick={() => setCurrentIndex((i) => (i > 0 ? i - 1 : i))}
                className="px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-700"
              >
                Prev
              </button>
              <button
                onClick={() => setCurrentIndex((i) => (i < videos.length - 1 ? i + 1 : i))}
                className="px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-700"
              >
                Next
              </button>
              <span className="ml-auto">
                {currentIndex + 1} / {videos.length}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="rounded-3xl bg-card border border-white/10 p-4 space-y-3 shadow-[0_18px_60px_rgba(0,0,0,0.7)]">
        <div className="flex items-center justify-between gap-2">
          <div>
            <div className="text-sm font-semibold">Share a new video</div>
            <div className="text-[11px] text-zinc-400">
              Film in your camera app, then drop it here. No filters. No retakes.
            </div>
          </div>
        </div>
        {user ? (
          <form onSubmit={handleUpload} className="space-y-3">
            <div className="space-y-2">
              <label className="text-[11px] text-zinc-400">Video file</label>
              <input
                type="file"
                accept="video/*"
                onChange={(e)=>setFile(e.target.files?.[0] || null)}
                className="block w-full text-[11px] text-zinc-200 file:mr-3 file:px-3 file:py-1.5 file:rounded-full file:border-0 file:bg-white file:text-black file:text-[11px] file:font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] text-zinc-400">How were you feeling?</label>
              <select
                value={emotion}
                onChange={e=>setEmotion(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-2 text-xs"
              >
                <option value="">Select emotion</option>
                {EMOTION_OPTIONS.map(e => (
                  <option key={e} value={e}>{niceLabel(e)}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] text-zinc-400">Caption (optional)</label>
              <textarea
                value={caption}
                onChange={e=>setCaption(e.target.value)}
                rows={2}
                placeholder="Write a short caption…"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-2 text-xs resize-none placeholder:text-zinc-500"
              />
            </div>

            {error && <div className="text-[11px] text-red-400">{error}</div>}

            <button
              type="submit"
              disabled={uploading || !file || !emotion}
              className="w-full rounded-full bg-white text-black py-2 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {uploading ? "Uploading…" : "Post video"}
            </button>
          </form>
        ) : (
          <div className="text-xs text-zinc-400">
            Log in above to upload your own videos. You can still scroll and watch everyone else&apos;s.
          </div>
        )}
      </div>
    </div>
  );
}
