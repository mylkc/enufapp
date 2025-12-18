// frontend/src/App.jsx

import { useEffect, useState } from "react";
import { auth } from "./lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import TopBar from "./components/TopBar";



import Login from "./components/Login";
import Watch from "./Watch";
import Grow from "./Grow";
import MoodSelector from "./MoodSelector";
import FriendsTab from "./FriendsTab";
import SettingsPage from "./SettingsPage";
import MeTab from "./MeTab"; // ✅ THE REAL ONE
import { supabase, supabaseConfigured } from "./lib/supabase";

export default function App() {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [hasCheckedIn, setHasCheckedIn] = useState(false);
  const [lastMood, setLastMood] = useState(null);
  const [activeTab, setActiveTab] = useState("watch");
  const [watchFilter, setWatchFilter] = useState("");
  const debugEnabled =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).has("debug");

  // Listen for authentication state
  useEffect(() => {
    let timeoutId;
    let unsub = null;

    try {
      timeoutId = setTimeout(() => {
        setInitializing(false);
      }, 3000);

      unsub = onAuthStateChanged(auth, (u) => {
        setUser(u || null);
        setInitializing(false);

        if (u) {
          setHasCheckedIn(false);
          setActiveTab("mood");
        } else {
          setLastMood(null);
          setActiveTab("mood");
        }
      });
    } catch (err) {
      console.error("Auth initialization failed:", err);
      setInitializing(false);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (unsub) unsub();
    };
  }, []);

  useEffect(() => {
    if (user || typeof auth === "undefined") return;
    let attempts = 0;
    const interval = setInterval(() => {
      attempts += 1;
      try {
        if (auth.currentUser) {
          setUser(auth.currentUser);
          setInitializing(false);
          clearInterval(interval);
        }
      } catch (err) {
        console.error("Auth fallback check failed:", err);
      }
      if (attempts >= 5) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [user]);

  useEffect(() => {
    if (!user?.uid || !supabaseConfigured) return;
    let cancelled = false;
    (async () => {
      try {
        const { error } = await supabase
          .from("users")
          .upsert(
            {
              id: user.uid,
              email: user.email || null,
              full_name: user.displayName || null,
              profile_pic_url: user.photoURL || null,
            },
            { onConflict: "id" }
          );
        if (error && !cancelled) {
          console.error("Failed to seed profile:", error);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Failed to seed profile:", err);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user?.uid]);

  useEffect(() => {
    if (!initializing) return;
    const timeout = setTimeout(() => {
      setInitializing(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [initializing]);

  // Handle mood completion
  const handleMoodComplete = async (mood) => {
    const moodFilter =
      (mood?.emotionTag || mood?.subMood || mood?.core || mood?.label || "")
        .toString()
        .toLowerCase();

    setLastMood(mood);
    setHasCheckedIn(true);
    setWatchFilter(moodFilter);
    setActiveTab("watch");

    if (user?.uid && supabaseConfigured) {
      try {
        const { error } = await supabase.from("moods").insert({
          user_id: user.uid,
          mood_level: mood.level ?? null,
          mood_label: mood.label ?? null,
          core_mood: mood.core ?? null,
          sub_mood: mood.subMood ?? null,
          reasons: Array.isArray(mood.reasons)
            ? mood.reasons.join(", ")
            : mood.reasons ?? null,
          emotion_tag: mood.emotionTag ?? null,
        });
        if (error) {
          console.error("Failed to save mood:", error);
        }
      } catch (err) {
        console.error("Failed to save mood:", err);
      }
    }
  };

  const handleMoodCancel = () => {
    setHasCheckedIn(true);
    setActiveTab("watch");
    setWatchFilter("");
  };

  // Loading state
  if (initializing) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center text-muted text-sm">
        Loading ENUF...
        {debugEnabled && (
          <div className="fixed bottom-4 left-4 right-4 text-[11px] text-muted bg-white/80 border border-stroke rounded-xl p-3">
            <div>debug=on</div>
            <div>auth.currentUser: {auth?.currentUser ? "set" : "null"}</div>
          </div>
        )}
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-bg text-ink flex items-center justify-center">
        <Login user={null} />
        {debugEnabled && (
          <div className="fixed bottom-4 left-4 right-4 text-[11px] text-muted bg-white/80 border border-stroke rounded-xl p-3">
            <div>debug=on</div>
            <div>initializing: {String(initializing)}</div>
            <div>auth.currentUser: {auth?.currentUser ? "set" : "null"}</div>
          </div>
        )}
      </div>
    );
  }

  // Mood check-in required first
  if (!hasCheckedIn) {
    return (
      <div className="min-h-screen bg-bg text-ink">
        <MoodSelector onComplete={handleMoodComplete} onCancel={handleMoodCancel} />
      </div>
    );
  }

  // Main App
  return (
    <div className="min-h-screen bg-bg text-ink pb-16 safe-area">
     <button
  onClick={() => setActiveTab("mood")}
  className={`fixed right-4 z-[1000] px-4 py-2 rounded-full bg-ink text-white font-semibold shadow-lg
    ${activeTab === "me" ? "top-20" : "top-4"}`}
>
  + ENUF
</button>



      <main className="pb-24">
        {activeTab === "mood" && (
          <MoodSelector onComplete={handleMoodComplete} />
        )}

        {activeTab === "watch" && <Watch user={user} initialEmotion={watchFilter} />}

        {activeTab === "grow" && <Grow user={user} />}

        {activeTab === "me" && (
          <MeTab
            user={user}
            lastMood={lastMood}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === "friends" && <FriendsTab user={user} />}

        {activeTab === "settings" && <SettingsPage user={user} />}
      </main>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 border-t border-stroke backdrop-blur flex justify-around py-3 text-xs z-[999]">
        <TabButton
          label="Friends"
          icon="👫"
          tab="friends"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabButton
          label="Watch"
          icon="🎥"
          tab="watch"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabButton
          label="Grow"
          icon="G"
          tab="grow"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabButton
          label="Me"
          icon="👤"
          tab="me"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </footer>
    </div>
  );
}

// ---------- Tab Button ----------
function TabButton({ label, icon, tab, activeTab, setActiveTab }) {
  return (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex flex-col items-center gap-0.5 ${
        activeTab === tab ? "text-ink font-semibold" : "text-muted"
      }`}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
}
