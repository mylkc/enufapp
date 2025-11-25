import { useState, useEffect } from "react";
import { auth, db, storage } from "./lib/firebase";
import { updateProfile, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function SettingsPage({ user }) {
  const [fullName, setFullName] = useState(user?.displayName || "");
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Load existing username from Firestore
  useEffect(() => {
    async function loadProfile() {
      if (!user?.uid) return;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        setUsername(userDoc.data().username || "");
      }
    }
    loadProfile();
  }, [user]);

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    setError("");

    try {
      let photoURL = user.photoURL;

      // 1️⃣ Upload new profile picture if selected
      if (profilePic) {
        const fileRef = ref(storage, `profile_pics/${user.uid}`);
        await uploadBytes(fileRef, profilePic);
        photoURL = await getDownloadURL(fileRef);
      }

      // 2️⃣ Username validation & Firestore check
      if (username.trim()) {
        const uname = username.trim().toLowerCase();

        // Check if username is taken
        const existingUname = await getDoc(doc(db, "usernames", uname));
        if (existingUname.exists() && existingUname.data().uid !== user.uid) {
          throw new Error("That username is already taken.");
        }

        // Save to usernames collection
        await setDoc(doc(db, "usernames", uname), { uid: user.uid });
      }

      // 3️⃣ Save profile info to users collection
      await setDoc(
        doc(db, "users", user.uid),
        {
          fullName,
          username: username.toLowerCase(),
          photoURL,
          email: user.email,
          updatedAt: new Date().toISOString(),
        },
        { merge: true }
      );

      // 4️⃣ Update Firebase Auth profile
      await updateProfile(user, {
        displayName: fullName,
        photoURL,
      });

      alert("Profile updated!");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg text-white p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Profile Settings</h2>

      {/* Full Name */}
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 mb-3"
        placeholder="Full Name"
      />

      {/* NEW: Username */}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value.toLowerCase())}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 mb-3"
        placeholder="Username (unique)"
      />

      {/* Upload Profile Picture */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setProfilePic(e.target.files[0])}
        className="mb-3 text-xs"
      />

      {error && <div className="text-red-400 text-xs mb-3">{error}</div>}

      {/* Save Button */}
      <button
        onClick={handleSave}
        disabled={saving}
        className="px-6 py-2 rounded-full bg-white text-black font-semibold w-full mb-3"
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>

      {/* Log Out Button */}
      <button
        onClick={() => {
          signOut(auth);
          window.location.reload();
        }}
        className="w-full px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
      >
        🚪 Log Out
      </button>
    </div>
  );
}
