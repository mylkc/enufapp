import { useEffect, useMemo, useState } from "react";

const PROMPTS = [
  "Today I learned...",
  "One thing I handled better than before",
  "What I am avoiding right now",
  "What I want to remember about today",
  "A moment that mattered"
];

const REFLECTIONS = [
  "What drained my energy today...",
  "What gave me even 5% more peace...",
  "What would future-me thank me for today...",
  "What felt heavy, and what felt light...",
  "What helped me get through the day..."
];

const GROUNDING = [
  { title: "60-second breathing", detail: "Inhale 4, hold 4, exhale 6." },
  { title: "Name 3 things", detail: "See, hear, and feel right now." },
  { title: "Body check-in", detail: "Relax jaw, drop shoulders, unclench hands." }
];

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export default function Grow({ user }) {
  const storageKey = useMemo(
    () => (user?.uid ? `enuf-grow-${user.uid}` : "enuf-grow-guest"),
    [user?.uid]
  );

  const [activePanel, setActivePanel] = useState("home");
  const [journalText, setJournalText] = useState("");
  const [journalPrompt, setJournalPrompt] = useState("");
  const [reflectionQuestion, setReflectionQuestion] = useState(REFLECTIONS[0]);
  const [reflectionAnswer, setReflectionAnswer] = useState("");
  const [winInput, setWinInput] = useState("");
  const [wins, setWins] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return;
    try {
      const data = JSON.parse(raw);
      setJournalText(data.journalText || "");
      setJournalPrompt(data.journalPrompt || "");
      setReflectionQuestion(data.reflectionQuestion || REFLECTIONS[0]);
      setReflectionAnswer(data.reflectionAnswer || "");
      setWins(Array.isArray(data.wins) ? data.wins : []);
    } catch {
      // ignore bad storage
    }
  }, [storageKey]);

  useEffect(() => {
    const payload = {
      journalText,
      journalPrompt,
      reflectionQuestion,
      reflectionAnswer,
      wins
    };
    localStorage.setItem(storageKey, JSON.stringify(payload));
  }, [storageKey, journalText, journalPrompt, reflectionQuestion, reflectionAnswer, wins]);

  const addWin = () => {
    const trimmed = winInput.trim();
    if (!trimmed) return;
    setWins((prev) => [trimmed, ...prev].slice(0, 30));
    setWinInput("");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold">Grow</div>
        {activePanel !== "home" && (
          <button
            onClick={() => setActivePanel("home")}
            className="text-xs text-muted underline underline-offset-4"
          >
            Back
          </button>
        )}
      </div>

      {activePanel === "home" && (
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setActivePanel("journal")}
            className="w-full rounded-2xl bg-card border border-stroke p-5 shadow-sm hover:shadow-md transition text-center"
          >
            <div className="text-2xl text-muted">J</div>
            <div className="text-sm font-semibold mt-2">Journal</div>
            <div className="text-[11px] text-muted mt-1">Free write</div>
          </button>
          <button
            onClick={() => setActivePanel("reflection")}
            className="w-full rounded-2xl bg-card border border-stroke p-5 shadow-sm hover:shadow-md transition text-center"
          >
            <div className="text-2xl text-muted">R</div>
            <div className="text-sm font-semibold mt-2">Reflection</div>
            <div className="text-[11px] text-muted mt-1">One question</div>
          </button>
          <button
            onClick={() => setActivePanel("wins")}
            className="w-full rounded-2xl bg-card border border-stroke p-5 shadow-sm hover:shadow-md transition text-center"
          >
            <div className="text-2xl text-muted">W</div>
            <div className="text-sm font-semibold mt-2">Tiny Wins</div>
            <div className="text-[11px] text-muted mt-1">Small wins list</div>
          </button>
          <button
            onClick={() => setActivePanel("patterns")}
            className="w-full rounded-2xl bg-card border border-stroke p-5 shadow-sm hover:shadow-md transition text-center"
          >
            <div className="text-2xl text-muted">P</div>
            <div className="text-sm font-semibold mt-2">Patterns</div>
            <div className="text-[11px] text-muted mt-1">Gentle insights</div>
          </button>
          <button
            onClick={() => setActivePanel("grounding")}
            className="w-full rounded-2xl bg-card border border-stroke p-5 shadow-sm hover:shadow-md transition text-center"
          >
            <div className="text-2xl text-muted">G</div>
            <div className="text-sm font-semibold mt-2">Grounding</div>
            <div className="text-[11px] text-muted mt-1">Quick reset</div>
          </button>
        </div>
      )}

      {activePanel === "journal" && (
        <section className="rounded-2xl bg-card border border-stroke p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">Journal</div>
            <button
              onClick={() => setJournalPrompt(pickRandom(PROMPTS))}
              className="px-3 py-1.5 rounded-full border border-stroke text-[11px] text-muted"
            >
              Prompt
            </button>
          </div>
          {journalPrompt && (
            <div className="text-[11px] text-muted">{journalPrompt}</div>
          )}
          <textarea
            value={journalText}
            onChange={(e) => setJournalText(e.target.value)}
            rows={6}
            placeholder="Write"
            className="w-full bg-white border border-stroke rounded-xl px-3 py-2 text-xs resize-none placeholder:text-muted"
          />
        </section>
      )}

      {activePanel === "reflection" && (
        <section className="rounded-2xl bg-card border border-stroke p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">Reflection</div>
            <button
              onClick={() => setReflectionQuestion(pickRandom(REFLECTIONS))}
              className="px-3 py-1.5 rounded-full border border-stroke text-[11px] text-muted"
            >
              New
            </button>
          </div>
          <div className="text-[11px] text-muted">{reflectionQuestion}</div>
          <textarea
            value={reflectionAnswer}
            onChange={(e) => setReflectionAnswer(e.target.value)}
            rows={4}
            placeholder="Answer"
            className="w-full bg-white border border-stroke rounded-xl px-3 py-2 text-xs resize-none placeholder:text-muted"
          />
        </section>
      )}

      {activePanel === "wins" && (
        <section className="rounded-2xl bg-card border border-stroke p-4 space-y-3">
          <div className="text-sm font-semibold">Tiny Wins</div>
          <div className="flex gap-2">
            <input
              value={winInput}
              onChange={(e) => setWinInput(e.target.value)}
              placeholder="Add a win"
              className="flex-1 bg-white border border-stroke rounded-full px-3 py-2 text-xs placeholder:text-muted"
            />
            <button
              onClick={addWin}
              className="px-4 py-2 rounded-full bg-ink text-white text-xs font-semibold"
            >
              Add
            </button>
          </div>
          {wins.length > 0 ? (
            <div className="space-y-2">
              {wins.map((w, i) => (
                <div
                  key={`${w}-${i}`}
                  className="text-xs text-ink bg-white border border-stroke rounded-xl px-3 py-2"
                >
                  {w}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-[11px] text-muted">No wins yet.</div>
          )}
        </section>
      )}

      {activePanel === "patterns" && (
        <section className="rounded-2xl bg-card border border-stroke p-4 space-y-3">
          <div className="text-sm font-semibold">Patterns</div>
          <div className="space-y-2">
            <div className="text-xs text-muted bg-white border border-stroke rounded-xl px-3 py-2">
              No insights yet.
            </div>
          </div>
        </section>
      )}

      {activePanel === "grounding" && (
        <section className="rounded-2xl bg-card border border-stroke p-4 space-y-3">
          <div className="text-sm font-semibold">Grounding</div>
          <div className="grid gap-2">
            {GROUNDING.map((g) => (
              <div
                key={g.title}
                className="rounded-xl border border-stroke bg-white px-3 py-2"
              >
                <div className="text-xs text-ink">{g.title}</div>
                <div className="text-[11px] text-muted">{g.detail}</div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
