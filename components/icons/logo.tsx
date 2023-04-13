export const Logo = ({ className }: { className?: string }) => (
  <svg width="24" height="24" className={className}>
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="9.16%" stopColor="rgb(69, 94, 181)" />
        <stop offset="43.89%" stopColor="rgb(86, 67, 204)" />
        <stop offset="64.72%" stopColor="rgb(103, 63, 215)" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="12" fill="url(#grad)" />
  </svg>
);
