export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-glow/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-glow/15 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-acid/10 rounded-full blur-[140px] animate-blob animation-delay-4000" />

      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <circle
          cx="50%"
          cy="50%"
          r="300"
          fill="none"
          stroke="rgba(139,92,246,0.08)"
          strokeWidth="1"
          className="animate-[spin_60s_linear_infinite]"
        />
        <circle
          cx="50%"
          cy="50%"
          r="450"
          fill="none"
          stroke="rgba(6,182,212,0.06)"
          strokeWidth="1"
          className="animate-[spin_90s_linear_infinite_reverse]"
        />
        <circle
          cx="50%"
          cy="50%"
          r="600"
          fill="none"
          stroke="rgba(163,230,53,0.05)"
          strokeWidth="1"
          className="animate-[spin_120s_linear_infinite]"
        />
      </svg>

      <div className="absolute inset-0 bg-noise opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.08),transparent_50%)]" />
    </div>
  );
}
