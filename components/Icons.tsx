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

export function DashboardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="5" rx="1" />
      <rect x="13" y="10" width="8" height="11" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
    </svg>
  );
}

export function SalesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M4 15c2.5-1 4.5-5 8-5s5.5 4 8 5" />
      <path d="M4 19h16" />
      <circle cx="12" cy="7" r="2.5" />
    </svg>
  );
}

export function PurchasesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M6 7h15l-1.5 9H8L6 4H3" />
      <circle cx="9" cy="20" r="1.2" />
      <circle cx="18" cy="20" r="1.2" />
    </svg>
  );
}

export function InventoryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M4 7.5 12 4l8 3.5v9L12 20l-8-3.5v-9Z" />
      <path d="M12 12 4 8.5M12 12l8-3.5M12 12v8" />
    </svg>
  );
}

export function CustomersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.2" />
      <path d="M16 19a4.5 4.5 0 0 1 5-4.4" />
    </svg>
  );
}

export function SuppliersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M3 17V8l6-3 6 3v9" />
      <path d="M15 10h4l2 3v4h-6" />
      <circle cx="7.5" cy="17" r="2" />
      <circle cx="16.5" cy="17" r="2" />
    </svg>
  );
}

export function PaymentsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <rect x="3" y="6" width="18" height="12" rx="1.5" />
      <path d="M3 10h18" />
      <path d="M7 14h3" />
    </svg>
  );
}

export function ReportsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M6 19V10" />
      <path d="M12 19V5" />
      <path d="M18 19v-7" />
    </svg>
  );
}

export function RemindersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <circle cx="12" cy="13" r="7" />
      <path d="M12 10v3.5l2 1.5" />
      <path d="M9 5.5 12 4l3 1.5" />
    </svg>
  );
}

export function RulesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M5 6h10" />
      <path d="M5 12h6" />
      <path d="M5 18h8" />
      <path d="M16 10.5 18.5 13 22 8" />
    </svg>
  );
}

export function PermissionsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <rect x="5" y="11" width="14" height="9" rx="1.5" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function AuditIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M8 6h11v14H8z" />
      <path d="M5 4h11v3" />
      <path d="M11 11h5M11 15h5" />
    </svg>
  );
}

const icons = {
  dashboard: DashboardIcon,
  sales: SalesIcon,
  purchases: PurchasesIcon,
  inventory: InventoryIcon,
  customers: CustomersIcon,
  suppliers: SuppliersIcon,
  payments: PaymentsIcon,
  reports: ReportsIcon,
  reminders: RemindersIcon,
  rules: RulesIcon,
  permissions: PermissionsIcon,
  audit: AuditIcon,
} as const;

export function FeatureIcon({
  name,
  className,
}: {
  name: keyof typeof icons;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} />;
}
