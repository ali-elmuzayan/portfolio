/**
 * Global ambient grid + soft conic glow. Server-rendered, fixed, behind everything.
 */
const BackgroundGrid = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.6]" />
      <div
        className="absolute -top-40 left-1/2 h-[680px] w-[1100px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.78 0.13 230 / 0.18), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-260px] right-[-120px] h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.7 0.16 300 / 0.15), transparent 70%)",
        }}
      />
    </div>
  );
};

export default BackgroundGrid;
