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

const ADMIN_ALIAS = "enuf.";
const ADMIN_EMAIL = "enuf.@enuf.local";
const ADMIN_PASSWORD = "2271455792882";
const API_URL = import.meta.env?.VITE_API_URL || "";
if (!API_URL && typeof console !== "undefined") {
  console.warn("VITE_API_URL is not set. Login will still use Firebase Auth.");
}

const withTimeout = (promise, label, ms = 15000) =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`${label} timed out`)), ms)
    ),
  ]);

async function setAuthPreference(user) {
  try {
    const { Preferences } = await import("@capacitor/preferences");
    const value = JSON.stringify({
      uid: user?.uid || "",
      email: user?.email || "",
      displayName: user?.displayName || "",
      photoURL: user?.photoURL || "",
    });
    await Preferences.set({ key: "enuf.auth", value });
  } catch (err) {
    console.warn("Capacitor Preferences not available:", err);
  }
}

export default function Login({ user, onAuthSuccess }) {
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

  // Special-case admin login with alias-only credential
  const signInAdmin = async () => {
    try {
      const cred = await withTimeout(
        signInWithEmailAndPassword(auth, ADMIN_EMAIL, ADMIN_PASSWORD),
        "Admin sign-in"
      );
      return cred.user;
    } catch (err) {
      if (err.code !== "auth/user-not-found") throw err;

      // Create the admin user if it doesn't exist yet
      const cred = await withTimeout(
        createUserWithEmailAndPassword(auth, ADMIN_EMAIL, ADMIN_PASSWORD),
        "Admin sign-up"
      );
      await withTimeout(
        updateProfile(cred.user, { displayName: "ENUF Admin" }),
        "Admin profile update"
      );
      await withTimeout(
        setDoc(
          doc(db, "users", cred.user.uid),
          {
            uid: cred.user.uid,
            email: ADMIN_ALIAS,
            fullName: "ENUF Admin",
            username: "enuf",
            createdAt: serverTimestamp(),
          },
          { merge: true }
        ),
        "Admin profile write"
      );
      await withTimeout(
        setDoc(doc(db, "usernames", "enuf"), {
          uid: cred.user.uid,
          email: ADMIN_ALIAS,
        }),
        "Admin username write"
      );
      return cred.user;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);

    try {
      const cleanedEmail = email.trim();
      const normalized = cleanedEmail.toLowerCase();
      const isAdminAlias =
        normalized === ADMIN_ALIAS ||
        normalized === ADMIN_EMAIL.toLowerCase();

      // Admin shortcut: login/create with alias "enuf." without hitting Firebase email validation on the alias
      if (isAdminAlias) {
        if (password !== ADMIN_PASSWORD) {
          throw new Error("Wrong admin password.");
        }
        const adminUser = await signInAdmin();
        await setAuthPreference(adminUser);
        if (onAuthSuccess) onAuthSuccess(adminUser);
        resetForm();
        return;
      }

      if (mode === "login") {
        const cred = await withTimeout(
          signInWithEmailAndPassword(auth, cleanedEmail, password),
          "Login"
        );
        await setAuthPreference(cred.user);
        if (onAuthSuccess) onAuthSuccess(cred.user);
        resetForm();
        return;
      }

      // SIGN UP FLOW
      const cleanEmail = cleanedEmail;
      const cleanName = fullName.trim();
      const cleanUsername = username.trim().toLowerCase();

      if (!cleanName || !cleanUsername) {
        throw new Error("Please enter your full name and a username.");
      }

      // 1) Check if username is already taken
      const usernameRef = doc(db, "usernames", cleanUsername);
      const existing = await withTimeout(getDoc(usernameRef), "Username check");
      if (existing.exists()) {
        throw new Error("That username is already taken. Try another one.");
      }

      // 2) Create auth user
      const cred = await withTimeout(
        createUserWithEmailAndPassword(auth, cleanEmail, password),
        "Sign-up"
      );

      // 3) Update auth profile displayName
      await withTimeout(
        updateProfile(cred.user, {
          displayName: cleanName,
        }),
        "Profile update"
      );

      // 4) Create Firestore user profile
      const userRef = doc(db, "users", cred.user.uid);
      await withTimeout(
        setDoc(userRef, {
          uid: cred.user.uid,
          email: cleanEmail,
          fullName: cleanName,
          username: cleanUsername,
          createdAt: serverTimestamp(),
        }),
        "Profile write"
      );

      // 5) Reserve the username
      await withTimeout(
        setDoc(usernameRef, {
          uid: cred.user.uid,
          email: cleanEmail,
        }),
        "Username reserve"
      );

      await setAuthPreference(cred.user);
      if (onAuthSuccess) onAuthSuccess(cred.user);
      resetForm();
    } catch (err) {
      console.error(err);
      const msg =
        err?.message?.includes("timed out")
          ? "Login timed out. Check your connection and try again."
          : err.message || "Auth failed";
      setError(msg);
    } finally {
      setBusy(false);
    }
  };

  // Logged-in view
  if (user) {
    return (
      <div className="flex items-center gap-3 text-xs bg-card border border-stroke rounded-2xl px-3 py-2">
        <div className="flex items-center gap-2">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover border border-stroke"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-stroke flex items-center justify-center text-[11px] text-ink">
              {user.displayName ? user.displayName[0].toUpperCase() : "..."}
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-[10px] text-muted">Signed in as</span>
            <span className="font-medium text-ink max-w-[140px] truncate">
              {user.displayName || user.email}
            </span>
          </div>
        </div>
        <button
          onClick={() => signOut(auth)}
          className="px-3 py-1.5 rounded-full bg-ink text-white font-medium"
        >
          Log out
        </button>
      </div>
    );
  }

  // Auth form
  return (
    <div className="bg-card border border-stroke rounded-2xl px-3 py-2 text-xs space-y-2 w-[230px]">
      <div className="flex gap-1 mb-1">
        <button
          className={`flex-1 px-2 py-1 rounded-full ${
            mode === "login"
              ? "bg-ink text-white font-semibold"
              : "bg-white border border-stroke text-muted"
          }`}
          onClick={() => setMode("login")}
        >
          Log in
        </button>
        <button
          className={`flex-1 px-2 py-1 rounded-full ${
            mode === "signup"
              ? "bg-ink text-white font-semibold"
              : "bg-white border border-stroke text-muted"
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
              className="w-full bg-white border border-stroke rounded-xl px-3 py-1.5 text-[11px] placeholder:text-muted"
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase())}
              className="w-full bg-white border border-stroke rounded-xl px-3 py-1.5 text-[11px] placeholder:text-muted"
              required
            />
          </>
        )}

        <input
          type="text"
          inputMode="email"
          placeholder="Email (use enuf. for admin)"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white border border-stroke rounded-xl px-3 py-1.5 text-[11px] placeholder:text-muted"
          required
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete={mode === "login" ? "current-password" : "new-password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-white border border-stroke rounded-xl px-3 py-1.5 text-[11px] placeholder:text-muted"
          required
        />
        {error && <div className="text-[10px] text-red-600">{error}</div>}
        <button
          type="submit"
          disabled={busy}
          className="w-full mt-1 rounded-full bg-ink text-white py-1.5 text-[11px] font-semibold disabled:opacity-60"
        >
          {busy
            ? "Please wait..."
            : mode === "login"
            ? "Log in"
            : "Create account"}
        </button>
      </form>
    </div>
  );
}
