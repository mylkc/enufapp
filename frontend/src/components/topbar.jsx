export default function TopBar({ onAdd }) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 flex justify-between items-center px-4 py-3 border-b border-stroke">
      <div className="text-xs tracking-widest text-muted">ENUF</div>

      <button
        onClick={onAdd}
        className="px-3 py-1.5 bg-ink text-white rounded-full text-sm font-semibold"
      >
        + ENUF
      </button>
    </div>
  );
}
