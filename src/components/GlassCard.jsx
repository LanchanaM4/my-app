export default function GlassCard({ children, className }) {
  return (
    <div
      className={`backdrop-blur-lg bg-white/30 shadow-2xl rounded-3xl p-8 border border-white/40 hover:bg-white/40 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
