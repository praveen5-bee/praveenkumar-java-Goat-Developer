export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/25 blur-[120px] animate-blob" />
      <div
        className="absolute top-1/3 -right-32 h-[520px] w-[520px] rounded-full blur-[140px] animate-blob"
        style={{ background: "oklch(0.4 0.15 250 / 0.45)", animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[120px] animate-blob"
        style={{ animationDelay: "-12s" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at top, transparent 0%, #081320 70%)",
        }}
      />
    </div>
  );
}
