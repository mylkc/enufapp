export default function Navbar() {
  const tabs = ["Grow", "Home", "Watch", "Me"];
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex flex-col">
        <div className="text-[11px] tracking-[0.28em] uppercase text-zinc-500">ENUF</div>
        <div className="text-xl font-semibold">Real-feeling stories</div>
      </div>
      <nav className="hidden sm:flex items-center gap-2 text-xs">
        {tabs.map((t) => (
          <button
            key={t}
            className={`px-3 py-1.5 rounded-full border border-white/10 ${
              t === "Watch" ? "bg-white text-black font-medium" : "bg-zinc-900/60 text-zinc-300"
            }`}
          >
            {t}
          </button>
        ))}
      </nav>
    </header>
  );
}
