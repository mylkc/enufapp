// frontend/src/components/ProfileSettingsModal.jsx
import { useEffect, useState } from "react";
import { MEDIA_SERVER_URL } from "../config";

function resolveUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${MEDIA_SERVER_URL}${url}`;
  return `${MEDIA_SERVER_URL}/${url}`;
}

export default function ProfileSettingsModal({ user, profile, onClose, onSaved }) {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Load existing profile (or fallback to firebase)
  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name || "");
      setUsername(profile.username || "");
    } else if (user) {
      setFullName(user.displayName || "");
    }
  }, [profile, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.uid) return;
    setSaving(true);
    setError("");

    try {
      const fd = new FormData();
      fd.append("user_id", user.uid);
      fd.append("email", user.email || "");
      fd.append("full_name", fullName || "");
      fd.append("username", username.toLowerCase());
      if (avatarFile) {
        fd.append("avatar", avatarFile);
      }

      const res = await fetch(`${MEDIA_SERVER_URL}/profile`, {
        method: "POST",
        body: fd,
      });

      if (res.status === 409) {
        const json = await res.json();
        throw new Error(json.error || "Username already taken");
      }

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Profile save failed");
      }

      const json = await res.json();
      if (onSaved) onSaved(json.profile);
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
    (fullName || user?.email || "?")
      .split(" ")
      .filter(Boolean)
      .map((p) => p[0].toUpperCase())
      .slice(0, 2)
      .join("") || "?";

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-zinc-900 rounded-3xl border border-white/10 w-full max-w-sm p-5 shadow-xl">
        <div className="text-sm font-semibold mb-4">Profile Settings</div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex items-center gap-3 mb-2">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Avatar preview"
                className="w-14 h-14 rounded-full object-cover border border-white/10"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-zinc-700 flex items-center justify-center text-white text-lg font-semibold border border-white/10">
                {initials}
              </div>
            )}
            <label className="text-[11px] text-zinc-400 cursor-pointer">
              <span className="px-2 py-1 rounded-full border border-white/20">
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

          <input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-2 text-xs placeholder:text-zinc-500"
          />

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value.toLowerCase())}
            className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-2 text-xs placeholder:text-zinc-500"
          />

          {error && <div className="text-[11px] text-red-400">{error}</div>}

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 rounded-full bg-zinc-800 text-xs"
              disabled={saving}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1.5 rounded-full bg-white text-black text-xs font-semibold"
              disabled={saving}
            >
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
