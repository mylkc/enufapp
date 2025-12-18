// frontend/src/FriendsTab.jsx
import { useEffect, useState } from "react";
import { db } from "./lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import PublicProfile from "./PublicProfile";
import { supabase } from "./lib/supabase";

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

async function fetchUsersByIds(ids) {
  if (!ids.length) return [];
  const { data, error } = await supabase
    .from("users")
    .select("id, full_name, username, profile_pic_url")
    .in("id", ids);
  if (error) throw error;
  return data || [];
}

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

      const [{ data: requestRows, error: requestError }, { data: friendRows, error: friendError }] =
        await Promise.all([
          supabase
            .from("friends")
            .select("*")
            .eq("receiver_id", user.uid)
            .eq("status", "pending")
            .order("created_at", { ascending: false }),
          supabase
            .from("friends")
            .select("*")
            .or(`requester_id.eq.${user.uid},receiver_id.eq.${user.uid}`)
            .eq("status", "accepted")
            .order("created_at", { ascending: false }),
        ]);

      if (requestError) throw requestError;
      if (friendError) throw friendError;

      const requesterIds = (requestRows || []).map((r) => r.requester_id);
      const friendIds = (friendRows || []).map((r) =>
        r.requester_id === user.uid ? r.receiver_id : r.requester_id
      );

      const [requestUsers, friendsUsers] = await Promise.all([
        fetchUsersByIds(requesterIds),
        fetchUsersByIds(friendIds),
      ]);

      const requesterMap = new Map(requestUsers.map((u) => [u.id, u]));
      const friendMap = new Map(friendsUsers.map((u) => [u.id, u]));

      const incomingMapped = (requestRows || []).map((r) => {
        const u = requesterMap.get(r.requester_id);
        return {
          ...r,
          requester_full_name: u?.full_name || "",
          requester_username: u?.username || "",
          requester_profile_pic_url: u?.profile_pic_url || null,
        };
      });

      const friendsMapped = (friendRows || []).map((r) => {
        const friendId =
          r.requester_id === user.uid ? r.receiver_id : r.requester_id;
        const u = friendMap.get(friendId);
        return {
          ...r,
          friend_id: friendId,
          friend_full_name: u?.full_name || "",
          friend_username: u?.username || "",
          friend_profile_pic_url: u?.profile_pic_url || null,
        };
      });

      setIncoming(incomingMapped);
      setFriends(friendsMapped);
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
      const existing = await fetchFriendRow(user.uid, targetUid);
      if (existing) {
        if (existing.status === "accepted") {
          await loadFriends();
          alert("You're already friends.");
          return;
        }
        if (existing.status === "pending") {
          await loadFriends();
          alert("Friend request already pending.");
          return;
        }
        const { error: updateError } = await supabase
          .from("friends")
          .update({
            requester_id: user.uid,
            receiver_id: targetUid,
            status: "pending",
            created_at: new Date().toISOString(),
          })
          .eq("id", existing.id);
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase.from("friends").insert({
          requester_id: user.uid,
          receiver_id: targetUid,
          status: "pending",
        });
        if (insertError) throw insertError;
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
      const { error: updateError } = await supabase
        .from("friends")
        .update({ status })
        .eq("id", requestId);
      if (updateError) throw updateError;

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
