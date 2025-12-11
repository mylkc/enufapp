// frontend/src/components/ProfileSettingsModal.jsx
import { useEffect, useState } from "react";
import { MEDIA_SERVER_URL } from "./config";

function resolveUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${MEDIA_SERVER_URL}${url}`;
  return `${MEDIA_SERVER_URL}/${url}`;
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
      const fd = new FormData();
      fd.append("user_id", user.uid);
      fd.append("email", user.email || "");
      fd.append("full_name", fullName.trim());
      fd.append("username", username.trim());
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
      console.log("Profile saved successfully, calling onSaved with:", json.profile);
      if (onSaved) {
        console.log("onSaved callback exists, awaiting it");
        await onSaved(json.profile);
        console.log("onSaved callback completed");
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
    (profile?.full_name || user?.email || "?")
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

          <div className="space-y-2">
            <label className="block text-[11px] text-zinc-400">
              Full name
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 w-full rounded-lg bg-zinc-800 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:border-white/30"
                placeholder="Add your name"
              />
            </label>

            <label className="block text-[11px] text-zinc-400">
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 w-full rounded-lg bg-zinc-800 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:border-white/30"
                placeholder="Add a username"
              />
            </label>
          </div>

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
