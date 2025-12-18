// frontend/src/components/ProfileSettingsModal.jsx
import { useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./lib/firebase";
import { supabase } from "./lib/supabase";

function resolveUrl(url) {
  if (!url) return "";
  return url;
}

export default function ProfileSettingsModal({ user, profile, onClose, onSaved }) {
  const [avatarFile, setAvatarFile] = useState(null);
  const [fullName, setFullName] = useState(profile?.full_name || "");
  const [username, setUsername] = useState(profile?.username || "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setFullName(profile?.full_name || "");
    setUsername(profile?.username || "");
  }, [profile?.full_name, profile?.username]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.uid) return;
    setSaving(true);
    setError("");

    try {
      const trimmedUsername = username.trim().toLowerCase();
      if (trimmedUsername) {
        const { data: existing, error: usernameError } = await supabase
          .from("users")
          .select("id")
          .eq("username", trimmedUsername)
          .limit(1);
        if (usernameError) throw usernameError;
        if (existing?.[0] && existing[0].id !== user.uid) {
          throw new Error("Username already taken");
        }
      }

      let profilePicUrl = profile?.profile_pic_url || null;
      if (avatarFile) {
        const fileRef = ref(storage, `profile_pics/${user.uid}`);
        await uploadBytes(fileRef, avatarFile);
        profilePicUrl = await getDownloadURL(fileRef);
      }

      const { data: updated, error: upsertError } = await supabase
        .from("users")
        .upsert(
          {
            id: user.uid,
            email: user.email || null,
            full_name: fullName.trim(),
            username: trimmedUsername || null,
            profile_pic_url: profilePicUrl,
          },
          { onConflict: "id" }
        )
        .select("*")
        .maybeSingle();
      if (upsertError) throw upsertError;

      await updateProfile(user, {
        displayName: fullName.trim(),
        photoURL: profilePicUrl || null,
      });

      if (onSaved && updated) {
        await onSaved(updated);
      }
    } catch (err) {
      console.error("Profile save error:", err);
      setError(err.message || "Profile save failed");
    } finally {
      setSaving(false);
    }
  };

  const previewUrl = avatarFile
    ? URL.createObjectURL(avatarFile)
    : profile?.profile_pic_url
    ? resolveUrl(profile.profile_pic_url)
    : null;

  const initials =
    (profile?.full_name || user?.email || "...")
      .split(" ")
      .filter(Boolean)
      .map((p) => p[0].toUpperCase())
      .slice(0, 2)
      .join("") || "...";

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-card rounded-3xl border border-stroke w-full max-w-sm p-5 shadow-xl">
        <div className="text-sm font-semibold mb-4">Profile Settings</div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex items-center gap-3 mb-2">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Avatar preview"
                className="w-14 h-14 rounded-full object-cover border border-stroke"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-stroke flex items-center justify-center text-ink text-lg font-semibold border border-stroke">
                {initials}
              </div>
            )}
            <label className="text-[11px] text-muted cursor-pointer">
              <span className="px-2 py-1 rounded-full border border-stroke">
                Choose photo
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setAvatarFile(e.target.files?.[0] || null)}
              />
            </label>
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] text-muted">
              Full name
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 w-full rounded-lg bg-white border border-stroke px-3 py-2 text-sm focus:outline-none focus:border-ink/30"
                placeholder="Add your name"
              />
            </label>

            <label className="block text-[11px] text-muted">
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 w-full rounded-lg bg-white border border-stroke px-3 py-2 text-sm focus:outline-none focus:border-ink/30"
                placeholder="Add a username"
              />
            </label>
          </div>

          {error && <div className="text-[11px] text-red-600">{error}</div>}

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 rounded-full bg-white text-xs"
              disabled={saving}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1.5 rounded-full bg-ink text-white text-xs font-semibold"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
