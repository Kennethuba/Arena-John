import { garageRoutes } from "@/lib/garage-routes";

export const workspaceNav = [
  { href: garageRoutes.dashboard, label: "Dashboard", icon: "dashboard" },
  { href: garageRoutes.customers, label: "Customers", icon: "customers" },
  { href: garageRoutes.vehicles, label: "Vehicles", icon: "vehicles" },
  { href: garageRoutes.jobs, label: "Job Cards", icon: "jobs" },
  { href: garageRoutes.history, label: "Service History", icon: "history" },
  { href: garageRoutes.inventory, label: "Inventory", icon: "inventory" },
  { href: garageRoutes.purchases, label: "Purchases", icon: "purchases" },
  { href: garageRoutes.sales, label: "Sales", icon: "sales" },
  { href: garageRoutes.suppliers, label: "Suppliers", icon: "suppliers" },
  { href: garageRoutes.reminders, label: "Reminders", icon: "reminders" },
  { href: garageRoutes.reports, label: "Reports", icon: "reports" },
  { href: garageRoutes.settings, label: "Settings", icon: "settings" },
] as const;
