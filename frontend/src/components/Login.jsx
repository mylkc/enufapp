// frontend/src/components/Login.jsx
import { useState } from "react";
import { auth, db } from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

export default function Login({ user }) {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setFullName("");
    setUsername("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);

    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email.trim(), password);
        resetForm();
        return;
      }

      // SIGN UP FLOW
      const cleanEmail = email.trim();
      const cleanName = fullName.trim();
      const cleanUsername = username.trim().toLowerCase();

      if (!cleanName || !cleanUsername) {
        throw new Error("Please enter your full name and a username.");
      }

      // 1) Check if username is already taken
      const usernameRef = doc(db, "usernames", cleanUsername);
      const existing = await getDoc(usernameRef);
      if (existing.exists()) {
        throw new Error("That username is already taken. Try another one.");
      }

      // 2) Create auth user
      const cred = await createUserWithEmailAndPassword(
        auth,
        cleanEmail,
        password
      );

      // 3) Update auth profile displayName
      await updateProfile(cred.user, {
        displayName: cleanName,
      });

      // 4) Create Firestore user profile
      const userRef = doc(db, "users", cred.user.uid);
      await setDoc(userRef, {
        uid: cred.user.uid,
        email: cleanEmail,
        fullName: cleanName,
        username: cleanUsername,
        createdAt: serverTimestamp(),
      });

      // 5) Reserve the username
      await setDoc(usernameRef, {
        uid: cred.user.uid,
        email: cleanEmail,
      });

      resetForm();
    } catch (err) {
      console.error(err);
      setError(err.message || "Auth failed");
    } finally {
      setBusy(false);
    }
  };

  // Logged-in view
  if (user) {
    return (
      <div className="flex items-center gap-3 text-xs bg-zinc-900/60 border border-white/10 rounded-2xl px-3 py-2">
        <div className="flex items-center gap-2">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover border border-white/10"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-[11px] text-white">
              {user.displayName ? user.displayName[0].toUpperCase() : "?"}
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-400">Signed in as</span>
            <span className="font-medium text-zinc-50 max-w-[140px] truncate">
              {user.displayName || user.email}
            </span>
          </div>
        </div>
        <button
          onClick={() => signOut(auth)}
          className="px-3 py-1.5 rounded-full bg-white text-black font-medium"
        >
          Log out
        </button>
      </div>
    );
  }

  // Auth form
  return (
    <div className="bg-zinc-900/70 border border-white/10 rounded-2xl px-3 py-2 text-xs space-y-2 w-[230px]">
      <div className="flex gap-1 mb-1">
        <button
          className={`flex-1 px-2 py-1 rounded-full ${
            mode === "login"
              ? "bg-white text-black font-semibold"
              : "bg-zinc-800 text-zinc-300"
          }`}
          onClick={() => setMode("login")}
        >
          Log in
        </button>
        <button
          className={`flex-1 px-2 py-1 rounded-full ${
            mode === "signup"
              ? "bg-white text-black font-semibold"
              : "bg-zinc-800 text-zinc-300"
          }`}
          onClick={() => setMode("signup")}
        >
          Sign up
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-1.5">
        {mode === "signup" && (
          <>
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-1.5 text-[11px] placeholder:text-zinc-500"
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase())}
              className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-1.5 text-[11px] placeholder:text-zinc-500"
              required
            />
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-1.5 text-[11px] placeholder:text-zinc-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete={mode === "login" ? "current-password" : "new-password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-1.5 text-[11px] placeholder:text-zinc-500"
          required
        />
        {error && <div className="text-[10px] text-red-400">{error}</div>}
        <button
          type="submit"
          disabled={busy}
          className="w-full mt-1 rounded-full bg-white text-black py-1.5 text-[11px] font-semibold disabled:opacity-60"
        >
          {busy
            ? "Please wait…"
            : mode === "login"
            ? "Log in"
            : "Create account"}
        </button>
      </form>
    </div>
  );
}
