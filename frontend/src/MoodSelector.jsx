import { useState } from "react";

const MOODS = [
  {
    id: 1,
    label: "Really low",
    level: 1,
    image: "/mood-1-deep-frown.png",
    description: "Big sad. Everything feels heavy right now.",
  },
  {
    id: 2,
    label: "A bit low",
    level: 2,
    image: "/mood-2-frown.png",
    description: "Slightly down or off today.",
  },
  {
    id: 3,
    label: "In the middle",
    level: 3,
    image: "/mood-3-neutral.png",
    description: "Neutral. Not great, not terrible.",
  },
  {
    id: 4,
    label: "Pretty good",
    level: 4,
    image: "/mood-4-smile.png",
    description: "Feeling okay, maybe even optimistic.",
  },
  {
    id: 5,
    label: "Really good",
    level: 5,
    image: "/mood-5-big-smile.png",
    description: "Big happy. Today feels light.",
  },
];

export default function MoodSelector({ onComplete }) {
  const [selectedId, setSelectedId] = useState(null);
  const selected = MOODS.find((m) => m.id === selectedId) || null;

  const handleConfirm = () => {
    if (!selected || !onComplete) return;
    onComplete({ label: selected.label, level: selected.level });
  };

  return (
    <section className="space-y-6">
      <div>
        <div className="text-[11px] tracking-[0.28em] uppercase text-zinc-500">
          Mood
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold mt-1">
          How are you really feeling right now?
        </h1>
        <p className="text-xs text-zinc-500 mt-2 max-w-md">
          Tap the face that matches your current mood. No filters, no pressure.
        </p>
      </div>

      <div className="rounded-3xl bg-card border border-white/10 p-5 sm:p-6 flex flex-col gap-5">
        <div className="flex justify-between gap-2">
          {MOODS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setSelectedId(m.id)}
              className={`flex flex-col items-center gap-2 flex-1 px-1 sm:px-2 py-1 rounded-2xl transition-all ${
                selectedId === m.id
                  ? "bg-white text-black shadow-lg shadow-white/10"
                  : "bg-transparent text-zinc-300 hover:bg-white/5"
              }`}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-zinc-900/60 flex items-center justify-center border border-white/10 overflow-hidden">
                <img
                  src={m.image}
                  alt={m.label}
                   className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-center">
                {m.label}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-xs text-zinc-400 min-h-[32px]">
            {selected ? (
              <>
                <span className="font-medium text-zinc-50">{selected.label}: </span>
                {selected.description}
              </>
            ) : (
              "Choose one that feels the closest. There are no wrong answers."
            )}
          </div>
          <button
            type="button"
            disabled={!selected}
            onClick={handleConfirm}
            className={`px-4 py-2 rounded-full text-xs font-semibold ${
              selected
                ? "bg-white text-black hover:bg-zinc-100"
                : "bg-zinc-700 text-zinc-400 cursor-not-allowed"
            }`}
          >
            Log this feeling
          </button>
        </div>
      </div>
    </section>
  );
}
