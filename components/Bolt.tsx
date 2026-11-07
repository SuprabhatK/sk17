export function Bolt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id="bolt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: "var(--purple)" }} />
          <stop offset="1" style={{ stopColor: "var(--teal)" }} />
        </linearGradient>
      </defs>
      <path d="M13.5 1 4 13.5h6L9 23l11-13.5h-6.5L13.5 1Z" fill="url(#bolt)" />
    </svg>
  );
}
