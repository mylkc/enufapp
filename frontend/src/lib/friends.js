import { supabase } from "./supabase";

export async function sendFriendRequest(requester_id, receiver_id) {
  return supabase.from("friends").insert({
    requester_id,
    receiver_id,
    status: "pending"
  });
}

export async function acceptFriendRequest(id) {
  return supabase.from("friends").update({ status: "accepted" }).eq("id", id);
}

export async function rejectFriendRequest(id) {
  return supabase.from("friends").update({ status: "rejected" }).eq("id", id);
}

export async function getFriends(user_id) {
  return supabase
    .from("friends")
    .select("*")
    .or(`requester_id.eq.${user_id},receiver_id.eq.${user_id}`)
    .eq("status", "accepted")
    .order("created_at", { ascending: false });
}
 
