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
import { supabase } from "./lib/supabase";

export default function App() {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [hasCheckedIn, setHasCheckedIn] = useState(false);
  const [lastMood, setLastMood] = useState(null);
  const [activeTab, setActiveTab] = useState("watch");
  const [watchFilter, setWatchFilter] = useState("");

  // Listen for authentication state
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
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

    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user?.uid) return;
    supabase
      .from("users")
      .upsert(
        {
          id: user.uid,
          email: user.email || null,
          full_name: user.displayName || null,
          profile_pic_url: user.photoURL || null,
        },
        { onConflict: "id" }
      )
      .then(({ error }) => {
        if (error) console.error("Failed to seed profile:", error);
      });
  }, [user?.uid]);

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

    if (user?.uid) {
      const { error } = await supabase.from("moods").insert({
        user_id: user.uid,
        mood_level: mood.level ?? null,
        mood_label: mood.label ?? null,
        core_mood: mood.core ?? null,
        sub_mood: mood.subMood ?? null,
        reasons: Array.isArray(mood.reasons) ? mood.reasons.join(", ") : mood.reasons ?? null,
        emotion_tag: mood.emotionTag ?? null,
      });
      if (error) {
        console.error("Failed to save mood:", error);
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
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-bg text-ink flex items-center justify-center">
        <Login user={null} />
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
