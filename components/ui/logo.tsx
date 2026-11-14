type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect width="200" height="200" rx="48" fill="var(--foreground)" />
      <path
        d="M137 55C123 41 105 34 84 36C55 39 37 58 37 82C37 104 53 116 83 124L111 131C137 138 151 151 151 172C151 195 130 211 101 212"
        transform="translate(0 -20)"
        stroke="var(--primary)"
        strokeWidth="17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M119 145L137 163L166 129"
        stroke="var(--background)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="151" cy="51" r="7" fill="var(--background)" />
    </svg>
  );
}

type LogoProps = {
  markClassName?: string;
  className?: string;
};

export function Logo({ markClassName = "size-8", className }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-bold tracking-tight text-foreground ${className ?? ""}`}
    >
      <LogoMark className={`shrink-0 ${markClassName}`} />
      <span>
        Sansam<span className="text-primary-hover">App</span>
      </span>
    </span>
  );
}
