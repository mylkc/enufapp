import { useEffect, useState } from "react";
import { auth, db, storage } from "./lib/firebase";
import { updateProfile, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { supabase } from "./lib/supabase";

export default function SettingsPage({ user }) {
  const [fullName, setFullName] = useState(user?.displayName || "");
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [theme, setTheme] = useState("system");
  const [accent, setAccent] = useState("sage");
  const [fontSize, setFontSize] = useState("default");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [dailyReminder, setDailyReminder] = useState(false);
  const [dailyTime, setDailyTime] = useState("19:00");
  const [journalReminder, setJournalReminder] = useState(false);
  const [reflectionReminder, setReflectionReminder] = useState(false);
  const [gentleNudges, setGentleNudges] = useState(true);
  const [dndStart, setDndStart] = useState("22:00");
  const [dndEnd, setDndEnd] = useState("07:00");
  const [cloudSync, setCloudSync] = useState(true);
  const [pinLock, setPinLock] = useState(false);
  const [hidePreviews, setHidePreviews] = useState(false);
  const [aiOn, setAiOn] = useState(true);
  const [aiTone, setAiTone] = useState("supportive");
  const [aiPrompts, setAiPrompts] = useState(true);
  const [aiInsights, setAiInsights] = useState(true);
  const [noTraining, setNoTraining] = useState(true);
  const [checkinTime, setCheckinTime] = useState("09:00");
  const [baselineEnergy, setBaselineEnergy] = useState("medium");
  const [avoidTopics, setAvoidTopics] = useState({
    relationships: false,
    family: false,
    work: false,
    mentalHealth: false
  });
  const [showCrisis, setShowCrisis] = useState(true);
  const [startLastTab, setStartLastTab] = useState(true);
  const [autoSaveJournal, setAutoSaveJournal] = useState(true);
  const [confirmDeletes, setConfirmDeletes] = useState(true);
  const [offlineIndicator, setOfflineIndicator] = useState(true);
  const [haptics, setHaptics] = useState(true);

  const settingsKey = user?.uid ? `enuf-settings-${user.uid}` : "enuf-settings-guest";

  useEffect(() => {
    async function loadProfile() {
      if (!user?.uid) return;
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUsername(userDoc.data().username || "");
        }
      } catch (err) {
        console.error("Failed to load profile:", err);
      }
    }
    loadProfile();
  }, [user]);

  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined") return;
    const root = document.documentElement;
    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      root.dataset.theme = media.matches ? "dark" : "light";
      const onChange = (e) => {
        root.dataset.theme = e.matches ? "dark" : "light";
      };
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }
    root.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(settingsKey);
    if (!raw) return;
    try {
      const data = JSON.parse(raw);
      setTheme(data.theme || "system");
      setAccent(data.accent || "sage");
      setFontSize(data.fontSize || "default");
      setReduceMotion(!!data.reduceMotion);
      setDailyReminder(!!data.dailyReminder);
      setDailyTime(data.dailyTime || "19:00");
      setJournalReminder(!!data.journalReminder);
      setReflectionReminder(!!data.reflectionReminder);
      setGentleNudges(data.gentleNudges !== false);
      setDndStart(data.dndStart || "22:00");
      setDndEnd(data.dndEnd || "07:00");
      setCloudSync(data.cloudSync !== false);
      setPinLock(!!data.pinLock);
      setHidePreviews(!!data.hidePreviews);
      setAiOn(data.aiOn !== false);
      setAiTone(data.aiTone || "supportive");
      setAiPrompts(data.aiPrompts !== false);
      setAiInsights(data.aiInsights !== false);
      setNoTraining(data.noTraining !== false);
      setCheckinTime(data.checkinTime || "09:00");
      setBaselineEnergy(data.baselineEnergy || "medium");
      setAvoidTopics(
        data.avoidTopics || {
          relationships: false,
          family: false,
          work: false,
          mentalHealth: false
        }
      );
      setShowCrisis(data.showCrisis !== false);
      setStartLastTab(data.startLastTab !== false);
      setAutoSaveJournal(data.autoSaveJournal !== false);
      setConfirmDeletes(data.confirmDeletes !== false);
      setOfflineIndicator(data.offlineIndicator !== false);
      setHaptics(data.haptics !== false);
    } catch {
      // Ignore invalid local data.
    }
  }, [settingsKey]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const payload = {
      theme,
      accent,
      fontSize,
      reduceMotion,
      dailyReminder,
      dailyTime,
      journalReminder,
      reflectionReminder,
      gentleNudges,
      dndStart,
      dndEnd,
      cloudSync,
      pinLock,
      hidePreviews,
      aiOn,
      aiTone,
      aiPrompts,
      aiInsights,
      noTraining,
      checkinTime,
      baselineEnergy,
      avoidTopics,
      showCrisis,
      startLastTab,
      autoSaveJournal,
      confirmDeletes,
      offlineIndicator,
      haptics
    };
    window.localStorage.setItem(settingsKey, JSON.stringify(payload));
  }, [
    settingsKey,
    theme,
    accent,
    fontSize,
    reduceMotion,
    dailyReminder,
    dailyTime,
    journalReminder,
    reflectionReminder,
    gentleNudges,
    dndStart,
    dndEnd,
    cloudSync,
    pinLock,
    hidePreviews,
    aiOn,
    aiTone,
    aiPrompts,
    aiInsights,
    noTraining,
    checkinTime,
    baselineEnergy,
    avoidTopics,
    showCrisis,
    startLastTab,
    autoSaveJournal,
    confirmDeletes,
    offlineIndicator,
    haptics
  ]);

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    setError("");

    try {
      let photoURL = user.photoURL;

      if (profilePic) {
        const fileRef = ref(storage, `profile_pics/${user.uid}`);
        await uploadBytes(fileRef, profilePic);
        photoURL = await getDownloadURL(fileRef);
      }

      if (username.trim()) {
        const uname = username.trim().toLowerCase();
        const existingUname = await getDoc(doc(db, "usernames", uname));
        if (existingUname.exists() && existingUname.data().uid !== user.uid) {
          throw new Error("That username is already taken.");
        }
        await setDoc(doc(db, "usernames", uname), { uid: user.uid });
      }

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

      await updateProfile(user, {
        displayName: fullName,
        photoURL,
      });

      const trimmedUsername = username.trim().toLowerCase();
      if (trimmedUsername) {
        const { data: existing, error: usernameError } = await supabase
          .from("users")
          .select("id")
          .eq("username", trimmedUsername)
          .limit(1);
        if (usernameError) throw usernameError;
        if (existing?.[0] && existing[0].id !== user.uid) {
          throw new Error("That username is already taken.");
        }
      }

      const { error: upsertError } = await supabase
        .from("users")
        .upsert(
          {
            id: user.uid,
            email: user.email || null,
            full_name: fullName.trim(),
            username: trimmedUsername || null,
            profile_pic_url: photoURL || null,
          },
          { onConflict: "id" }
        );
      if (upsertError) throw upsertError;

      alert("Profile updated!");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg text-ink p-6 max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Settings</h2>

      <section className="bg-card border border-stroke rounded-2xl p-4 space-y-4">
        <div className="text-sm font-semibold">Account</div>
        <div className="grid gap-3">
          <label className="text-xs text-muted">
            Name
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 w-full bg-white border border-stroke rounded-xl px-3 py-2 text-sm"
              placeholder="Full name"
            />
          </label>
          <label className="text-xs text-muted">
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase())}
              className="mt-1 w-full bg-white border border-stroke rounded-xl px-3 py-2 text-sm"
              placeholder="Username"
            />
          </label>
          <label className="text-xs text-muted">
            Email
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="mt-1 w-full bg-white border border-stroke rounded-xl px-3 py-2 text-sm text-muted"
            />
          </label>
          <label className="text-xs text-muted">
            Profile photo
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePic(e.target.files[0])}
              className="mt-1 w-full text-xs"
            />
          </label>
          {error && <div className="text-red-600 text-xs">{error}</div>}
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 rounded-full bg-ink text-white text-sm font-semibold w-full"
          >
            {saving ? "Saving..." : "Save changes"}
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button className="px-4 py-2 rounded-full border border-stroke text-sm">
              Change password
            </button>
            <button
              onClick={() => {
                signOut(auth);
                if (typeof window !== "undefined") {
                  window.location.reload();
                }
              }}
              className="px-4 py-2 rounded-full border border-red-500 text-red-600 text-sm"
            >
              Log out
            </button>
          </div>
          <button className="px-4 py-2 rounded-full border border-red-500 text-red-600 text-sm">
            Delete account
          </button>
        </div>
      </section>

      <section className="bg-card border border-stroke rounded-2xl p-4 space-y-4">
        <div className="text-sm font-semibold">Appearance</div>
        <div className="grid gap-3">
          <label className="text-xs text-muted">
            Theme
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="mt-1 w-full bg-white border border-stroke rounded-xl px-3 py-2 text-sm"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </label>
          <label className="text-xs text-muted">
            Accent color
            <select
              value={accent}
              onChange={(e) => setAccent(e.target.value)}
              className="mt-1 w-full bg-white border border-stroke rounded-xl px-3 py-2 text-sm"
            >
              <option value="sage">Sage</option>
              <option value="clay">Clay</option>
              <option value="ocean">Ocean</option>
              <option value="berry">Berry</option>
            </select>
          </label>
          <label className="text-xs text-muted">
            Font size
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="mt-1 w-full bg-white border border-stroke rounded-xl px-3 py-2 text-sm"
            >
              <option value="small">Small</option>
              <option value="default">Default</option>
              <option value="large">Large</option>
            </select>
          </label>
          <label className="flex items-center justify-between text-sm">
            Reduce motion
            <input
              type="checkbox"
              checked={reduceMotion}
              onChange={(e) => setReduceMotion(e.target.checked)}
            />
          </label>
        </div>
      </section>

      <section className="bg-card border border-stroke rounded-2xl p-4 space-y-4">
        <div className="text-sm font-semibold">Notifications</div>
        <div className="grid gap-3">
          <label className="flex items-center justify-between text-sm">
            Daily check-in reminder
            <input
              type="checkbox"
              checked={dailyReminder}
              onChange={(e) => setDailyReminder(e.target.checked)}
            />
          </label>
          <label className="text-xs text-muted">
            Reminder time
            <input
              type="time"
              value={dailyTime}
              onChange={(e) => setDailyTime(e.target.value)}
              className="mt-1 w-full bg-white border border-stroke rounded-xl px-3 py-2 text-sm"
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            Journal reminder
            <input
              type="checkbox"
              checked={journalReminder}
              onChange={(e) => setJournalReminder(e.target.checked)}
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            Reflection reminder
            <input
              type="checkbox"
              checked={reflectionReminder}
              onChange={(e) => setReflectionReminder(e.target.checked)}
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            Gentle nudges
            <input
              type="checkbox"
              checked={gentleNudges}
              onChange={(e) => setGentleNudges(e.target.checked)}
            />
          </label>
          <div className="grid grid-cols-2 gap-2">
            <label className="text-xs text-muted">
              Do not disturb start
              <input
                type="time"
                value={dndStart}
                onChange={(e) => setDndStart(e.target.value)}
                className="mt-1 w-full bg-white border border-stroke rounded-xl px-3 py-2 text-sm"
              />
            </label>
            <label className="text-xs text-muted">
              Do not disturb end
              <input
                type="time"
                value={dndEnd}
                onChange={(e) => setDndEnd(e.target.value)}
                className="mt-1 w-full bg-white border border-stroke rounded-xl px-3 py-2 text-sm"
              />
            </label>
          </div>
        </div>
      </section>

      <section className="bg-card border border-stroke rounded-2xl p-4 space-y-4">
        <div className="text-sm font-semibold">Data and Privacy</div>
        <div className="text-xs text-muted">
          ENUF stores your profile, moods, and uploads so you can return to them later.
        </div>
        <div className="grid gap-3">
          <button className="px-4 py-2 rounded-full border border-stroke text-sm">
            Export my data
          </button>
          <button className="px-4 py-2 rounded-full border border-stroke text-sm">
            Clear local data
          </button>
          <label className="flex items-center justify-between text-sm">
            Cloud sync
            <input
              type="checkbox"
              checked={cloudSync}
              onChange={(e) => setCloudSync(e.target.checked)}
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            Face ID or PIN lock
            <input
              type="checkbox"
              checked={pinLock}
              onChange={(e) => setPinLock(e.target.checked)}
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            Hide sensitive previews
            <input
              type="checkbox"
              checked={hidePreviews}
              onChange={(e) => setHidePreviews(e.target.checked)}
            />
          </label>
        </div>
      </section>

      <section className="bg-card border border-stroke rounded-2xl p-4 space-y-4">
        <div className="text-sm font-semibold">AI and Insights</div>
        <div className="grid gap-3">
          <label className="flex items-center justify-between text-sm">
            AI assistance
            <input
              type="checkbox"
              checked={aiOn}
              onChange={(e) => setAiOn(e.target.checked)}
            />
          </label>
          <label className="text-xs text-muted">
            Tone
            <select
              value={aiTone}
              onChange={(e) => setAiTone(e.target.value)}
              className="mt-1 w-full bg-white border border-stroke rounded-xl px-3 py-2 text-sm"
            >
              <option value="neutral">Neutral</option>
              <option value="supportive">Supportive</option>
              <option value="direct">Direct</option>
            </select>
          </label>
          <label className="flex items-center justify-between text-sm">
            Allow AI journaling prompts
            <input
              type="checkbox"
              checked={aiPrompts}
              onChange={(e) => setAiPrompts(e.target.checked)}
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            Allow pattern insights
            <input
              type="checkbox"
              checked={aiInsights}
              onChange={(e) => setAiInsights(e.target.checked)}
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            Never use my data for training
            <input
              type="checkbox"
              checked={noTraining}
              onChange={(e) => setNoTraining(e.target.checked)}
            />
          </label>
        </div>
      </section>

      <section className="bg-card border border-stroke rounded-2xl p-4 space-y-4">
        <div className="text-sm font-semibold">Wellness Preferences</div>
        <div className="grid gap-3">
          <label className="text-xs text-muted">
            Preferred check-in time
            <input
              type="time"
              value={checkinTime}
              onChange={(e) => setCheckinTime(e.target.value)}
              className="mt-1 w-full bg-white border border-stroke rounded-xl px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs text-muted">
            Energy baseline
            <select
              value={baselineEnergy}
              onChange={(e) => setBaselineEnergy(e.target.value)}
              className="mt-1 w-full bg-white border border-stroke rounded-xl px-3 py-2 text-sm"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <div className="text-xs text-muted">Topics to avoid</div>
          <label className="flex items-center justify-between text-sm">
            Relationships
            <input
              type="checkbox"
              checked={avoidTopics.relationships}
              onChange={(e) =>
                setAvoidTopics((prev) => ({ ...prev, relationships: e.target.checked }))
              }
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            Family
            <input
              type="checkbox"
              checked={avoidTopics.family}
              onChange={(e) =>
                setAvoidTopics((prev) => ({ ...prev, family: e.target.checked }))
              }
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            Work
            <input
              type="checkbox"
              checked={avoidTopics.work}
              onChange={(e) =>
                setAvoidTopics((prev) => ({ ...prev, work: e.target.checked }))
              }
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            Mental health
            <input
              type="checkbox"
              checked={avoidTopics.mentalHealth}
              onChange={(e) =>
                setAvoidTopics((prev) => ({ ...prev, mentalHealth: e.target.checked }))
              }
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            Crisis resources visibility
            <input
              type="checkbox"
              checked={showCrisis}
              onChange={(e) => setShowCrisis(e.target.checked)}
            />
          </label>
        </div>
      </section>

      <section className="bg-card border border-stroke rounded-2xl p-4 space-y-4">
        <div className="text-sm font-semibold">App Preferences</div>
        <div className="grid gap-3">
          <label className="flex items-center justify-between text-sm">
            Start app on last tab
            <input
              type="checkbox"
              checked={startLastTab}
              onChange={(e) => setStartLastTab(e.target.checked)}
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            Auto-save journal entries
            <input
              type="checkbox"
              checked={autoSaveJournal}
              onChange={(e) => setAutoSaveJournal(e.target.checked)}
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            Confirm before deleting entries
            <input
              type="checkbox"
              checked={confirmDeletes}
              onChange={(e) => setConfirmDeletes(e.target.checked)}
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            Offline mode indicator
            <input
              type="checkbox"
              checked={offlineIndicator}
              onChange={(e) => setOfflineIndicator(e.target.checked)}
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            Haptic feedback
            <input
              type="checkbox"
              checked={haptics}
              onChange={(e) => setHaptics(e.target.checked)}
            />
          </label>
        </div>
      </section>

      <section className="bg-card border border-stroke rounded-2xl p-4 space-y-4">
        <div className="text-sm font-semibold">Support</div>
        <div className="grid gap-2">
          <button className="px-4 py-2 rounded-full border border-stroke text-sm">Help and FAQ</button>
          <button className="px-4 py-2 rounded-full border border-stroke text-sm">Contact support</button>
          <button className="px-4 py-2 rounded-full border border-stroke text-sm">Crisis resources</button>
          <button className="px-4 py-2 rounded-full border border-stroke text-sm">Report a bug</button>
          <button className="px-4 py-2 rounded-full border border-stroke text-sm">Request a feature</button>
        </div>
      </section>

      <section className="bg-card border border-stroke rounded-2xl p-4 space-y-2">
        <div className="text-sm font-semibold">About</div>
        <div className="text-xs text-muted">Version 0.1.0</div>
        <div className="text-xs text-muted">ENUF is a calm space to notice, reflect, and move forward.</div>
        <div className="grid gap-2 pt-2">
          <button className="px-4 py-2 rounded-full border border-stroke text-sm">Privacy policy</button>
          <button className="px-4 py-2 rounded-full border border-stroke text-sm">Terms</button>
          <button className="px-4 py-2 rounded-full border border-stroke text-sm">Credits</button>
        </div>
      </section>
    </div>
  );
}
