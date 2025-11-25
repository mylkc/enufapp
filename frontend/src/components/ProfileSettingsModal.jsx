import { useState } from "react";
import { auth, db, storage } from "../lib/firebase";
import { updateProfile } from "firebase/auth";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";


export default function ProfileSettingsModal({ onClose, user }) {
  const [fullName, setFullName] = useState(user.displayName || "");
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      let photoURL = user.photoURL;

      // 1️⃣ Upload new profile picture if selected
      if (profilePic) {
        const fileRef = ref(storage, `profile_pics/${user.uid}`);
        await uploadBytes(fileRef, profilePic);
        photoURL = await getDownloadURL(fileRef);
        await updateProfile(user, { photoURL });
      }

      // 2️⃣ Check username uniqueness if changed
      if (username.trim()) {
        const uname = username.trim().toLowerCase();
        const existingDoc = await getDoc(doc(db, "usernames", uname));
        if (existingDoc.exists() && existingDoc.data().uid !== user.uid) {
          throw new Error("That username is already taken.");
        }

        // Remove old username reservation
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const oldUsername = userDoc.exists() ? userDoc.data().username : null;

        if (oldUsername) {
          await setDoc(doc(db, "usernames", oldUsername), {}, { merge: false });
        }

        // Reserve new username
        await setDoc(doc(db, "usernames", uname), { uid: user.uid });
      }

      // 3️⃣ Update Firestore user profile
      await updateDoc(doc(db, "users", user.uid), {
        fullName,
        username: username.toLowerCase(),
        photoURL,
      });

      // 4️⃣ Update Firebase Auth displayName
      await updateProfile(user, {
        displayName: fullName,
        photoURL,
      });

      alert("Profile updated!");
      onClose();

    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-zinc-900 rounded-2xl p-6 w-full max-w-md space-y-4 border border-white/10">

        <h2 className="text-lg font-semibold mb-2">Profile Settings</h2>

        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full bg-zinc-800 border border-zinc-600 rounded-xl px-3 py-2 text-sm"
          placeholder="Full Name"
        />

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value.toLowerCase())}
          className="w-full bg-zinc-800 border border-zinc-600 rounded-xl px-3 py-2 text-sm"
          placeholder="Username (unique)"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProfilePic(e.target.files[0])}
          className="text-xs"
        />

        {error && <div className="text-red-400 text-xs">{error}</div>}

        <div className="flex justify-end gap-2 pt-3">
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-full bg-zinc-700 text-white text-xs"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
