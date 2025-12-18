// frontend/src/PublicProfile.jsx
import { useEffect, useRef, useState } from "react";
import { supabase } from "./lib/supabase";

function resolveUrl(url) {
  return url || "";
}

async function fetchFriendRow(currentUserId, otherUserId) {
  if (!currentUserId || !otherUserId) return null;
  const { data, error } = await supabase
    .from("friends")
    .select("*")
    .or(
      `and(requester_id.eq.${currentUserId},receiver_id.eq.${otherUserId}),and(requester_id.eq.${otherUserId},receiver_id.eq.${currentUserId})`
    )
    .order("created_at", { ascending: false })
    .limit(1);
  if (error) throw error;
  return data?.[0] || null;
}

async function fetchFriendStatus(currentUserId, otherUserId) {
  const row = await fetchFriendRow(currentUserId, otherUserId);
  if (!row) {
    return { status: "none", direction: null, friend: null };
  }
  let direction = null;
  if (row.status === "pending") {
    direction = row.requester_id === currentUserId ? "outgoing" : "incoming";
  }
  return { status: row.status, direction, friend: row };
}

function VideoLightbox({ videos, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const containerRef = useState(() => new Map())[0];
  const listRef = useRef(null);

  useEffect(() => setIndex(startIndex), [startIndex]);

  useEffect(() => {
    const node = containerRef.get(index);
    if (node && node.scrollIntoView) {
      node.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [index, containerRef]);

  // Allow scroll wheel to move between videos without clicking
  useEffect(() => {
    let lastScroll = 0;
    const handler = (e) => {
      const now = Date.now();
      if (now - lastScroll < 220) return;
      if (e.deltaY > 10 && index < videos.length - 1) {
        setIndex((i) => Math.min(i + 1, videos.length - 1));
        lastScroll = now;
      } else if (e.deltaY < -10 && index > 0) {
        setIndex((i) => Math.max(i - 1, 0));
        lastScroll = now;
      }
    };
    const listEl = listRef.current;
    listEl?.addEventListener("wheel", handler, { passive: true });
    return () => listEl?.removeEventListener("wheel", handler);
  }, [index, videos.length]);

  // Basic arrow key support too
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
    if (typeof window === "undefined") return () => {};
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [videos.length, onClose]);

  return (
    <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl h-full">
        <div
          ref={listRef}
          className="w-full h-full max-h-[90vh] overflow-y-auto space-y-4 pr-1"
        >
          {videos.map((v, i) => (
            <div
              key={v.id}
              ref={(node) => {
                if (node) containerRef.set(i, node);
              }}
              className={`rounded-xl border border-stroke bg-white p-2 ${
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
          
        </button>
      </div>
    </div>
  );
}

export default function PublicProfile({ userId, currentUserId, onBack }) {
  const [profile, setProfile] = useState(null);
  const [videos, setVideos] = useState([]);
  const [friendStatus, setFriendStatus] = useState("none"); // none | pending | friends
  const [friendDirection, setFriendDirection] = useState(null); // outgoing | incoming
  const [emotionFilter, setEmotionFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const videoRefs = useState(() => new Map())[0];

  useEffect(() => {
    if (!userId) return;
    loadAll();
  }, [userId]);

  async function loadAll() {
    try {
      setLoading(true);
      setError("");

      const [profileRes, videosRes, statusRes] = await Promise.all([
        supabase.from("users").select("*").eq("id", userId).maybeSingle(),
        supabase
          .from("videos")
          .select("id, video_url, emotion_tag, caption, user_id, created_at")
          .eq("user_id", userId)
          .order("created_at", { ascending: false }),
        fetchFriendStatus(currentUserId, userId),
      ]);

      if (profileRes.error) throw profileRes.error;
      if (videosRes.error) throw videosRes.error;

      setProfile(profileRes.data || null);
      setVideos(videosRes.data || []);
      setFriendStatus(statusRes.status || "none");
      setFriendDirection(statusRes.direction || null);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load profile");
    } finally {
      setLoading(false);
    }
  }

  async function sendFriendRequest() {
    try {
      setError("");
      const existing = await fetchFriendRow(currentUserId, userId);
      if (existing) {
        if (existing.status === "accepted") {
          setFriendStatus("friends");
          return;
        }
        if (existing.status === "pending") {
          setFriendStatus("pending");
          setFriendDirection(
            existing.requester_id === currentUserId ? "outgoing" : "incoming"
          );
          return;
        }
        const { error: updateError } = await supabase
          .from("friends")
          .update({
            requester_id: currentUserId,
            receiver_id: userId,
            status: "pending",
            created_at: new Date().toISOString(),
          })
          .eq("id", existing.id);
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase.from("friends").insert({
          requester_id: currentUserId,
          receiver_id: userId,
          status: "pending",
        });
        if (insertError) throw insertError;
      }
      await loadAll();
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to send friend request");
    }
  }

  async function removeFriend() {
    try {
      setError("");
      const { error: deleteError } = await supabase
        .from("friends")
        .delete()
        .or(
          `and(requester_id.eq.${currentUserId},receiver_id.eq.${userId}),and(requester_id.eq.${userId},receiver_id.eq.${currentUserId})`
        );
      if (deleteError) throw deleteError;
      await loadAll();
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to remove friend");
    }
  }

  async function acceptIncoming() {
    try {
      setError("");
      const existing = await fetchFriendRow(currentUserId, userId);
      if (!existing) {
        throw new Error("No pending request to accept");
      }
      const { error: updateError } = await supabase
        .from("friends")
        .update({ status: "accepted" })
        .eq("id", existing.id);
      if (updateError) throw updateError;

      await loadAll();
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to accept request");
    }
  }

  const emotions = Array.from(
    new Set(videos.map((v) => v.emotion_tag).filter(Boolean))
  );
  const filteredVideos =
    emotionFilter === "all"
      ? videos
      : videos.filter((v) => v.emotion_tag === emotionFilter);

  // Keep selected index valid when filter changes
  useEffect(() => {
    if (selectedIndex == null) return;
    if (selectedIndex >= filteredVideos.length) {
      setSelectedIndex(filteredVideos.length ? 0 : null);
    }
  }, [filteredVideos.length, selectedIndex]);

  function renderFriendButton() {
    if (userId === currentUserId) return null;

    if (friendStatus === "friends") {
      return (
        <button
          onClick={removeFriend}
          className="px-4 py-1.5 rounded-full bg-stroke text-xs"
        >
          Remove friend
        </button>
      );
    }

    if (friendStatus === "pending") {
      if (friendDirection === "outgoing") {
        return (
          <button className="px-4 py-1.5 rounded-full bg-stroke text-xs">
            Request sent
          </button>
        );
      }
      if (friendDirection === "incoming") {
        return (
          <button
            onClick={acceptIncoming}
            className="px-4 py-1.5 rounded-full bg-ink text-white text-xs font-semibold"
          >
            Accept friend request
          </button>
        );
      }
    }

    // none
    return (
      <button
        onClick={sendFriendRequest}
        className="px-4 py-1.5 rounded-full bg-ink text-white text-xs font-semibold"
      >
        Add Friend
      </button>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      <div className="p-4 flex items-center gap-2">
        <button
          onClick={onBack}
          className="px-3 py-1.5 rounded-full bg-card text-xs"
        >
           Back
        </button>
        <h2 className="text-base font-semibold">Profile</h2>
      </div>

      {loading && (
        <div className="px-4 text-xs text-muted">Loading profile</div>
      )}

      {error && (
        <div className="px-4 text-xs text-red-600 mb-2">{error}</div>
      )}

      {!loading && (
        <>
          {/* Header */}
          <div className="px-4 flex items-center gap-3 mb-4">
            {profile?.profile_pic_url ? (
              <img
                src={resolveUrl(profile.profile_pic_url)}
                className="w-14 h-14 rounded-full object-cover border border-stroke"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-stroke flex items-center justify-center text-sm font-semibold border border-stroke">
                {(profile?.full_name || profile?.username || "...")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
            )}

            <div className="flex-1">
              <div className="text-sm font-semibold">
                {profile?.full_name || "No name yet"}
              </div>
              {profile?.username && (
                <div className="text-xs text-muted">
                  @{profile.username}
                </div>
              )}
              {profile?.bio && (
                <div className="text-xs text-muted mt-1 whitespace-pre-line">
                  {profile.bio}
                </div>
              )}
            </div>

            {renderFriendButton()}
          </div>

          {/* Emotion filter */}
          <div className="px-4 mb-3">
            <div className="flex gap-2 overflow-x-auto no-scrollbar text-xs">
              <button
                onClick={() => setEmotionFilter("all")}
                className={`px-3 py-1 rounded-full border ${
                  emotionFilter === "all"
                    ? "bg-ink text-white border-ink"
                    : "border-stroke bg-card"
                }`}
              >
                All
              </button>
              {emotions.map((e) => (
                <button
                  key={e}
                  onClick={() => setEmotionFilter(e)}
                  className={`px-3 py-1 rounded-full border ${
                    emotionFilter === e
                      ? "bg-ink text-white border-ink"
                      : "border-stroke bg-card"
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of videos */}
          <div className="px-4">
            {filteredVideos.length === 0 ? (
              <div className="text-xs text-muted">
                No videos yet for this filter.
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {filteredVideos.map((v, idx) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedIndex(idx)}
                    className="relative text-left rounded-xl overflow-hidden border border-stroke group"
                  >
                    <video
                      src={resolveUrl(v.video_url)}
                      className="w-full aspect-[9/16] object-cover"
                      playsInline
                      controlsList="nodownload noremoteplayback"
                      muted
                    />
                    {v.emotion_tag && (
                      <div className="absolute bottom-1 left-1 right-1 text-[9px] px-1 py-0.5 rounded-full bg-ink/60 text-white text-center line-clamp-1">
                        {v.emotion_tag}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {selectedIndex != null && filteredVideos[selectedIndex] && (
        <VideoLightbox
          videos={filteredVideos}
          startIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </div>
  );
}


