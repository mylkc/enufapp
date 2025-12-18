import { useMemo, useState } from "react";

export const CORE_MOODS = [
  {
    id: "good",
    label: "Good",
    level: 5,
    icon: "/mood-5-big-smile.png",
    subMoods: [
      "Happy",
      "Proud",
      "Motivated",
      "Grateful",
      "Calm",
      "Excited",
      "Productive",
    ],
    reasons: [
      "I accomplished something",
      "Someone made my day",
      "I am proud of myself",
      "Something went right today",
      "I had fun",
      "I made progress",
      "I feel supported",
    ],
  },
  {
    id: "okay",
    label: "Okay",
    level: 4,
    icon: "/mood-4-smile.png",
    subMoods: [
      "Neutral",
      "Tired",
      "Indifferent",
      "Distracted",
      "Meh",
      "Content",
      "Unfocused",
    ],
    reasons: [
      "Just a normal day",
      "Nothing special happened",
      "I am tired",
      "I am distracted",
      "I do not feel strongly either way",
      "I am going with the flow",
    ],
  },
  {
    id: "stressed",
    label: "Stressed",
    level: 3,
    icon: "/mood-3-neutral.png",
    subMoods: [
      "Overwhelmed",
      "Anxious",
      "Under Pressure",
      "Burned Out",
      "Irritated",
      "Rushed",
      "Worried",
    ],
    reasons: [
      "Too many responsibilities",
      "Deadlines coming up",
      "School or work pressure",
      "Too much noise or chaos",
      "I feel rushed",
      "I am overwhelmed",
      "I am overthinking",
    ],
  },
  {
    id: "sad",
    label: "Sad",
    level: 2,
    icon: "/mood-2-frown.png",
    subMoods: [
      "Lonely",
      "Hopeless",
      "Unmotivated",
      "Drained",
      "Disappointed",
      "Sensitive",
      "Heartbroken",
    ],
    reasons: [
      "I miss someone",
      "I feel alone",
      "Something did not go well",
      "I am disappointed",
      "I feel drained",
      "I am discouraged",
      "I feel left out",
    ],
  },
  {
    id: "angry",
    label: "Angry",
    level: 1,
    icon: "/mood-1-deep-frown.png",
    subMoods: [
      "Frustrated",
      "Annoyed",
      "Resentful",
      "Irritated",
      "Hurt",
      "Enraged",
      "Impatient",
    ],
    reasons: [
      "Someone upset me",
      "I feel misunderstood",
      "Something unfair happened",
      "I am irritated",
      "I am frustrated with myself",
      "I am frustrated with others",
      "Plans fell apart",
    ],
  },
];

const UNIVERSAL_REASONS = [
  {
    category: "Relationships and People",
    items: [
      "Family",
      "Friends",
      "Romantic partner or crush",
      "Breakup or conflict",
      "Feeling disconnected",
      "Social anxiety",
      "Support from someone",
    ],
  },
  {
    category: "Work or School",
    items: [
      "School workload",
      "Job stress",
      "Deadlines",
      "Performance pressure",
      "Feeling accomplished",
      "Conflict with others",
      "Not being productive",
    ],
  },
  {
    category: "Self and Mental State",
    items: [
      "Confidence",
      "Self-esteem",
      "Overthinking",
      "ADHD symptoms",
      "Depression symptoms",
      "Anxiety symptoms",
      "Burnout",
    ],
  },
  {
    category: "Personal Life and Routine",
    items: [
      "Financial stress",
      "Physical health",
      "Not enough sleep",
      "Good sleep",
      "Exercise or no exercise",
      "Eating habits",
      "Messy environment",
      "Too much screen time",
    ],
  },
  {
    category: "Goals and Progress",
    items: [
      "Making progress",
      "Falling behind",
      "Not meeting expectations",
      "Feeling stuck",
      "New achievements",
    ],
  },
  {
    category: "Life Events",
    items: [
      "Something good happened",
      "Something bad happened",
      "Unexpected change",
      "Plans cancelled",
      "New opportunities",
    ],
  },
  {
    category: "External Factors",
    items: [
      "Weather",
      "Traffic",
      "Arguments",
      "Something online bothered me",
      "Overstimulation",
      "Boredom",
    ],
  },
];

export default function MoodSelector({ onComplete, onCancel }) {
  const [coreMoodId, setCoreMoodId] = useState(null);
  const [subMood, setSubMood] = useState("");
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [showReasons, setShowReasons] = useState(false);
  const [stage, setStage] = useState("core"); // core -> sub -> reasons
  const goBack = () => {
    if (stage === "reason") {
      setStage("sub");
    } else if (stage === "sub") {
      setStage("core");
      setSubMood("");
      setShowReasons(false);
    }
  };

  const coreMood = useMemo(
    () => CORE_MOODS.find((m) => m.id === coreMoodId) || null,
    [coreMoodId]
  );

  const toggleReason = (reason) => {
    setShowReasons(true);
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  };

  const handleCoreSelect = (id) => {
    setCoreMoodId(id);
    setSubMood("");
    setSelectedReasons([]);
    setShowReasons(false);
    setStage("sub");
  };

  const handleConfirm = (isQuick = false) => {
    if (!coreMood || !onComplete) return;
    const chosenSub = subMood || coreMood.label;
    const baseLabel = `${coreMood.label}${chosenSub ? ` - ${chosenSub}` : ""}`;
    const emotionTag = (subMood || coreMood.label || "").toLowerCase();
    const reasonText =
      !isQuick && selectedReasons.length
        ? `${baseLabel} | Reasons: ${selectedReasons.join(", ")}`
        : baseLabel;

    onComplete({
      label: reasonText,
      level: coreMood.level,
      core: coreMood.label,
      subMood: chosenSub,
      reasons: isQuick ? [] : selectedReasons,
      emotionTag,
    });
  };

  const step = !coreMood ? "core" : !subMood ? "sub" : "reason";
  const renderIcon = (icon, label) => {
    if (typeof icon === "string" && icon.endsWith(".png")) {
      return (
        <img
          src={icon}
          alt={label}
          className="w-8 h-8 object-contain"
        />
      );
    }
    return <span className="text-2xl leading-none">{icon}</span>;
  };

  return (

    <section className="space-y-6">
      {onCancel && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="text-muted hover:text-ink text-lg px-2"
            aria-label="Close mood selector"
          >
            A-
          </button>
        </div>
      )}

      {/* Immersive card */}
      <div className="rounded-3xl bg-white/85 border border-stroke p-0 overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.55)]">
        {/* Stage indicator */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-stroke bg-white backdrop-blur">
          <div className="flex items-center gap-3">
            {stage !== "core" && (
              <button
                type="button"
                onClick={goBack}
                className="flex items-center gap-1 rounded-full bg-white border border-stroke px-3 py-1 text-[11px] text-ink hover:bg-white"
              >
                ← Back
              </button>
            )}
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted">
              <span className={stage === "core" ? "text-ink" : ""}>Choose Mood</span>
              <span>•</span>
              <span className={stage === "sub" ? "text-ink" : ""}>Narrow</span>
              <span>•</span>
              <span className={stage === "reason" ? "text-ink" : ""}>Reasons</span>
            </div>
          </div>
        </div>

        {/* Stage content */}
        <div className="p-5 sm:p-6 space-y-6">
          {stage === "core" && (
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {CORE_MOODS.map((m) => {
                const active = m.id === coreMoodId;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => handleCoreSelect(m.id)}
                    aria-label={m.label}
                    className={`flex items-center justify-center rounded-2xl border px-4 py-4 text-left transition ${
                      active
                        ? "border-ink bg-ink text-white shadow-lg shadow-black/10"
                        : "border-stroke bg-white text-ink hover:border-ink/30"
                    }`}
                  >
                    {renderIcon(m.icon, m.label)}
                  </button>
                );
              })}
            </div>
          )}

          {stage === "sub" && coreMood && (
            <div className="space-y-4">
              <div className="text-sm font-semibold text-ink">
                Narrow it down
              </div>
              <div className="flex flex-wrap gap-2">
                {coreMood.subMoods.map((m) => {
                  const active = subMood === m;
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => {
                        setSubMood(m);
                        setStage("reason");
                        setShowReasons(true);
                      }}
                      className={`px-3 py-1.5 rounded-full text-sm border transition ${
                        active
                          ? "bg-ink text-white border-ink"
                          : "bg-white border-stroke text-ink hover:border-stroke"
                      }`}
                    >
                      {m}
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleConfirm(true)}
                  className="px-3 py-1.5 rounded-full bg-ink text-white text-xs font-semibold"
                >
                  Quick log this mood
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowReasons(true);
                    setStage("reason");
                  }}
                  className="text-[11px] text-muted underline decoration-dotted"
                >
                  Skip to reasons
                </button>
              </div>
            </div>
          )}

          {stage === "reason" && coreMood && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-ink">
                  Add a reason (optional)
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {coreMood.reasons.map((reason) => {
                  const active = selectedReasons.includes(reason);
                  return (
                    <button
                      key={reason}
                      type="button"
                      onClick={() => toggleReason(reason)}
                      className={`px-3 py-1.5 rounded-full text-xs border transition ${
                        active
                          ? "bg-ink text-white border-ink"
                          : "bg-white border-stroke text-ink hover:border-stroke"
                      }`}
                    >
                      {reason}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-3">
                {UNIVERSAL_REASONS.map((group) => (
                  <div key={group.category} className="space-y-2">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-muted">
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => {
                        const active = selectedReasons.includes(item);
                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => toggleReason(item)}
                            className={`px-3 py-1.5 rounded-full text-xs border transition ${
                              active
                                ? "bg-ink text-white border-ink"
                                : "bg-white border-stroke text-ink hover:border-stroke"
                            }`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1 border-t border-stroke/60">
            <div className="text-xs text-muted min-h-[32px]">
              {coreMood ? (
                <>
                  <span className="font-medium text-ink">
                    {coreMood.label}
                    {subMood ? ` • ${subMood}` : ""}
                  </span>
                  {selectedReasons.length > 0 && (
                    <span className="text-muted">
                      {" "}
                      | {selectedReasons.join(", ")}
                    </span>
                  )}
                </>
              ) : (
                "Choose your core mood to get started."
              )}
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                type="button"
                disabled={!coreMood}
                onClick={() => handleConfirm(true)}
                className={`px-4 py-2 rounded-full text-xs font-semibold ${
                  coreMood
                    ? "bg-ink text-white hover:bg-ink/90"
                    : "bg-stroke text-muted cursor-not-allowed"
                }`}
              >
                Quick log
              </button>
              <button
                type="button"
                disabled={!coreMood}
                onClick={() => handleConfirm(false)}
                className={`px-4 py-2 rounded-full text-xs font-semibold ${
                  coreMood
                    ? "bg-white text-ink border border-stroke hover:bg-white"
                    : "bg-stroke text-muted cursor-not-allowed"
                }`}
              >
                Log with details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
