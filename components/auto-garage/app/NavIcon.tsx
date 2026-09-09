type Props = { name: string; className?: string };

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function NavIcon({ name, className = "h-[18px] w-[18px]" }: Props) {
  switch (name) {
    case "dashboard":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="5" rx="1.5" />
          <rect x="14" y="11" width="7" height="10" rx="1.5" />
          <rect x="3" y="13" width="7" height="8" rx="1.5" />
        </svg>
      );
    case "customers":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <circle cx="9" cy="8" r="3" />
          <path d="M4 19a5 5 0 0 1 10 0" />
          <circle cx="17" cy="9" r="2.2" />
          <path d="M16 19a4 4 0 0 1 4.5-3.8" />
        </svg>
      );
    case "vehicles":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <path d="M4 15V10l2-4h12l2 4v5" />
          <path d="M4 15h16v2H4z" />
          <circle cx="7.5" cy="17.5" r="1.4" />
          <circle cx="16.5" cy="17.5" r="1.4" />
        </svg>
      );
    case "jobs":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <rect x="6" y="3.5" width="12" height="17" rx="1.5" />
          <path d="M9 8h6M9 12h6M9 16h4" />
        </svg>
      );
    case "history":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <circle cx="12" cy="13" r="7" />
          <path d="M12 10v3.2l2 1.2" />
        </svg>
      );
    case "inventory":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <path d="M4 8.5 12 4l8 4.5v9L12 22l-8-4.5v-9Z" />
          <path d="M12 12 4 8.5M12 12l8-3.5M12 12v10" />
        </svg>
      );
    case "purchases":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <path d="M6 7h15l-1.5 9H8L6 4H3" />
          <circle cx="9" cy="20" r="1.2" />
          <circle cx="18" cy="20" r="1.2" />
        </svg>
      );
    case "sales":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <rect x="3" y="6" width="18" height="12" rx="1.5" />
          <path d="M3 10h18M7 14h4" />
        </svg>
      );
    case "suppliers":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <path d="M3 17V8l6-3 6 3v9" />
          <path d="M15 10h4l2 3v4h-6" />
        </svg>
      );
    case "reminders":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <path d="M6 16V10a6 6 0 0 1 12 0v6" />
          <path d="M5 16h14" />
          <path d="M10 19a2 2 0 0 0 4 0" />
        </svg>
      );
    case "reports":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <path d="M6 19V10M12 19V5M18 19v-7" />
        </svg>
      );
    case "settings":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 4v2M12 18v2M4.9 7.5l1.7 1M17.4 15.5l1.7 1M4.9 16.5l1.7-1M17.4 8.5l1.7-1" />
        </svg>
      );
    default:
      return null;
  }
}
