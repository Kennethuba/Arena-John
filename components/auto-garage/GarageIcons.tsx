type IconProps = {
  className?: string;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function VehicleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M4 15V10l2.2-4h11.6L20 10v5" />
      <path d="M4 15h16v2H4z" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
      <path d="M7 10h10" />
    </svg>
  );
}

export function JobsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <rect x="6" y="3.5" width="12" height="17" rx="1.5" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  );
}

export function StaffIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <circle cx="12" cy="8" r="3" />
      <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
      <path d="M16 11.5 18 13l3-3" />
    </svg>
  );
}

export function HistoryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <circle cx="12" cy="13" r="7" />
      <path d="M12 10v3.5l2.2 1.3" />
      <path d="M8.5 5.2 12 3.8l3.5 1.4" />
    </svg>
  );
}

const garageIcons = {
  vehicle: VehicleIcon,
  jobs: JobsIcon,
  staff: StaffIcon,
  history: HistoryIcon,
} as const;

export function GarageFeatureIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  if (name in garageIcons) {
    const Icon = garageIcons[name as keyof typeof garageIcons];
    return <Icon className={className} />;
  }
  return null;
}
