import { MEDIA_SERVER_URL } from "../config";

export async function sendFriendRequest(requester_id, receiver_id) {
  const res = await fetch(`${MEDIA_SERVER_URL}/friends/request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ requester_id, receiver_id })
  });
  return res.json();
}

export async function acceptFriendRequest(id) {
  const res = await fetch(`${MEDIA_SERVER_URL}/friends/accept/${id}`, {
    method: "POST"
  });
  return res.json();
}

export async function rejectFriendRequest(id) {
  const res = await fetch(`${MEDIA_SERVER_URL}/friends/reject/${id}`, {
    method: "POST"
  });
  return res.json();
}

export async function getFriends(user_id) {
  const res = await fetch(`${MEDIA_SERVER_URL}/friends/list?user_id=${user_id}`);
  return res.json();
}
 