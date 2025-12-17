// frontend/src/FriendsTab.jsx
import { useEffect, useState } from "react";
import { db } from "./lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { MEDIA_SERVER_URL } from "./config";
import PublicProfile from "./PublicProfile";

export default function FriendsTab({ user }) {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [viewProfileId, setViewProfileId] = useState(null);

  const [incoming, setIncoming] = useState([]);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  // Load incoming requests + friends
  useEffect(() => {
    if (!user?.uid) return;
    loadFriends();
  }, [user?.uid]);

  async function loadFriends() {
    try {
      setLoading(true);
      setError("");

      const [reqRes, friendsRes] = await Promise.all([
        fetch(`${MEDIA_SERVER_URL}/friends/requests?user_id=${user.uid}`),
        fetch(`${MEDIA_SERVER_URL}/friends/list?user_id=${user.uid}`),
      ]);

      const reqJson = await reqRes.json();
      const friendsJson = await friendsRes.json();

      if (!reqRes.ok) throw new Error(reqJson.error || "Failed to load requests");
      if (!friendsRes.ok) throw new Error(friendsJson.error || "Failed to load friends");

      setIncoming(reqJson.requests || []);
      setFriends(friendsJson.friends || []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load friends data");
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch() {
    setError("");
    setResult(null);

    if (!search.trim()) return;

    try {
      const uname = search.trim().toLowerCase();
      const unameDoc = await getDoc(doc(db, "usernames", uname));

      if (!unameDoc.exists()) {
        setError("No user found with that username.");
        return;
      }

      const uid = unameDoc.data().uid;
      setResult({ uid, username: uname });
    } catch (err) {
      console.error(err);
      setError("Search error: " + err.message);
    }
  }

  async function sendFriendRequest(targetUid) {
    if (!user?.uid) return;
    setError("");
    setSending(true);

    try {
      const res = await fetch(`${MEDIA_SERVER_URL}/friends/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requester_id: user.uid,
          receiver_id: targetUid,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send friend request");
      }

      // Reload friends / requests so UI updates
      await loadFriends();
      alert("Friend request sent (or already pending).");
    } catch (err) {
      console.error(err);
      setError(err.message || "Friend request failed");
    } finally {
      setSending(false);
    }
  }

  async function respondToRequest(requestId, status) {
    setError("");
    try {
      const res = await fetch(`${MEDIA_SERVER_URL}/friends/respond`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ request_id: requestId, status }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to respond to request");
      }

      await loadFriends();
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to respond to request");
    }
  }

  // If viewing a profile, render that instead
  if (viewProfileId) {
    return (
      <PublicProfile
        userId={viewProfileId}
        currentUserId={user.uid}
        onBack={() => setViewProfileId(null)}
      />
    );
  }

  return (
    <div className="p-6 text-ink space-y-6 pb-24">
      <h2 className="text-lg font-semibold mb-1">Friends</h2>

      {/* Search */}
      <div className="space-y-2">
        <div className="flex gap-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-card border border-stroke rounded-xl px-3 py-2 text-sm"
            placeholder="Search by username..."
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 rounded-xl bg-ink text-white text-sm font-semibold"
          >
            Search
          </button>
        </div>

        {error && <div className="text-red-600 text-xs">{error}</div>}

        {result && (
          <div className="mt-2 p-3 bg-card rounded-xl flex items-center justify-between">
            <div className="text-sm">
              <div className="font-semibold">@{result.username}</div>
              <div className="text-xs text-muted">Tap to view profile</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => sendFriendRequest(result.uid)}
                disabled={sending}
                className="px-3 py-1.5 rounded-full bg-ink text-white text-xs font-semibold"
              >
                {sending ? "Sending..." : "Add Friend"}
              </button>
              <button
                onClick={() => setViewProfileId(result.uid)}
                className="px-3 py-1.5 rounded-full bg-stroke text-xs"
              >
                View
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Incoming requests */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">Incoming requests</h3>
        {loading && <div className="text-xs text-muted">Loading...</div>}
        {!loading && incoming.length === 0 && (
          <div className="text-xs text-muted">No incoming requests.</div>
        )}
        {!loading && incoming.length > 0 && (
          <div className="space-y-2">
            {incoming.map((r) => (
              <div
                key={r.id}
                className="flex items-center justify-between bg-card rounded-xl px-3 py-2"
              >
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setViewProfileId(r.requester_id)}
                >
                  {r.requester_profile_pic_url ? (
                    <img
                      src={r.requester_profile_pic_url}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-stroke flex items-center justify-center text-[11px]">
                      {(r.requester_full_name || r.requester_username || "...")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-medium">
                      {r.requester_full_name || "No name"}
                    </div>
                    {r.requester_username && (
                      <div className="text-[11px] text-muted">
                        @{r.requester_username}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => respondToRequest(r.id, "accepted")}
                    className="px-3 py-1 rounded-full bg-ink text-white text-xs font-semibold"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => respondToRequest(r.id, "rejected")}
                    className="px-3 py-1 rounded-full bg-stroke text-xs"
                  >
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Friends list */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">My friends</h3>
        {loading && <div className="text-xs text-muted">Loading...</div>}
        {!loading && friends.length === 0 && (
          <div className="text-xs text-muted">
            You haven&apos;t added any friends yet.
          </div>
        )}
        {!loading && friends.length > 0 && (
          <div className="space-y-2">
            {friends.map((f) => (
              <button
                key={f.id}
                onClick={() =>
                  setViewProfileId(
                    f.friend_id || f.requester_id || f.receiver_id || null
                  )
                }
                className="w-full bg-card rounded-xl px-3 py-2 flex items-center gap-2 text-left hover:bg-stroke"
              >
                {f.friend_profile_pic_url ? (
                  <img
                    src={f.friend_profile_pic_url}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-stroke flex items-center justify-center text-[11px]">
                    {(f.friend_full_name || f.friend_username || "...")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                )}
                <div>
                  <div className="text-sm font-medium">
                    {f.friend_full_name || "No name"}
                  </div>
                  {f.friend_username && (
                    <div className="text-[11px] text-muted">
                      @{f.friend_username}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
