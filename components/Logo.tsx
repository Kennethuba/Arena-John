type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({ className = "", href = "/" }: LogoProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2.5 text-ink ${className}`}
      aria-label={href === "/" ? "BusinessOS home" : "BusinessOS"}
    >
      <svg
        viewBox="0 0 28 28"
        className="h-7 w-7 shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="1" y="1" width="12" height="12" rx="1.5" fill="#161513" />
        <rect x="15" y="1" width="12" height="12" rx="1.5" fill="#1E4B9E" />
        <rect
          x="1"
          y="15"
          width="12"
          height="12"
          rx="1.5"
          fill="#161513"
          fillOpacity="0.35"
        />
        <rect x="15" y="15" width="12" height="12" rx="1.5" fill="#161513" />
      </svg>
      <span className="text-[1.05rem] font-semibold tracking-tight">
        BusinessOS
      </span>
    </a>
  );
}
