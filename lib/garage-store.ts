export type JobStatus =
  | "In Progress"
  | "Waiting Parts"
  | "Scheduled"
  | "Ready"
  | "Completed";

export type InvoiceStatus = "Due" | "Paid" | "Overdue";

export type Customer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  createdAt: number;
};

export type Vehicle = {
  id: string;
  customerId: string;
  customerName: string;
  plate: string;
  model: string;
  createdAt: number;
};

export type Job = {
  id: string;
  number: string;
  vehicleId: string;
  plate: string;
  customerName: string;
  status: JobStatus;
  technician: string;
  createdAt: number;
};

export type Invoice = {
  id: string;
  number: string;
  customerName: string;
  amount: number;
  dueDate: string;
  status: InvoiceStatus;
  createdAt: number;
};

export type Part = {
  id: string;
  name: string;
  stock: number;
  minStock: number;
};

export type Activity = {
  id: string;
  text: string;
  detail: string;
  at: number;
};

export type GarageProfile = {
  email: string;
  garageName: string;
  companyName?: string;
  fullName?: string;
  phone?: string;
  address?: string;
  city?: string;
  tagline?: string;
  role?: string;
  logoDataUrl?: string;
};

export type Workspace = {
  profile: GarageProfile;
  customers: Customer[];
  vehicles: Vehicle[];
  jobs: Job[];
  invoices: Invoice[];
  parts: Part[];
  activity: Activity[];
};

const DB_KEY = "businessos.auto-garage.db";

function id() {
  return globalThis.crypto?.randomUUID?.() ?? `id-${Date.now()}-${Math.random()}`;
}

function readDb(): Record<string, Workspace> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(DB_KEY);
    return raw ? (JSON.parse(raw) as Record<string, Workspace>) : {};
  } catch {
    return {};
  }
}

function writeDb(db: Record<string, Workspace>) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

export function emptyWorkspace(profile: GarageProfile): Workspace {
  return {
    profile: {
      ...profile,
      email: profile.email.trim().toLowerCase(),
    },
    customers: [],
    vehicles: [],
    jobs: [],
    invoices: [],
    parts: [],
    activity: [],
  };
}

export function isFreshWorkspace(workspace: Workspace) {
  return (
    workspace.customers.length === 0 &&
    workspace.vehicles.length === 0 &&
    workspace.jobs.length === 0 &&
    workspace.invoices.length === 0 &&
    workspace.parts.length === 0
  );
}

export function getWorkspace(email: string): Workspace | null {
  const key = email.trim().toLowerCase();
  return readDb()[key] ?? null;
}

export function saveWorkspace(email: string, workspace: Workspace) {
  const key = email.trim().toLowerCase();
  const db = readDb();
  db[key] = workspace;
  writeDb(db);
}

export function ensureWorkspace(profile: GarageProfile): Workspace {
  const existing = getWorkspace(profile.email);
  if (existing) {
    existing.profile = { ...existing.profile, ...profile };
    saveWorkspace(profile.email, existing);
    return existing;
  }
  const created = emptyWorkspace(profile);
  saveWorkspace(profile.email, created);
  return created;
}

export function nextNumber(prefix: string, count: number) {
  return `${prefix}-${String(count + 1).padStart(3, "0")}`;
}

export function newId() {
  return id();
}

export function startOfToday() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date.getTime();
}

export function formatMoney(amount: number) {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}

export function partStatus(part: Part): "OK" | "Low" | "Critical" {
  if (part.stock <= 0 || part.stock <= Math.floor(part.minStock / 2)) {
    return "Critical";
  }
  if (part.stock <= part.minStock) return "Low";
  return "OK";
}

export function dashboardStats(ws: Workspace) {
  const today = startOfToday();
  const todaysJobs = ws.jobs.filter((job) => job.createdAt >= today);
  const inService = ws.jobs.filter(
    (job) => job.status === "In Progress" || job.status === "Waiting Parts",
  );
  const pending = ws.jobs.filter(
    (job) => job.status === "Waiting Parts" || job.status === "Scheduled",
  );
  const todaysSales = ws.invoices
    .filter((invoice) => invoice.status === "Paid" && invoice.createdAt >= today)
    .reduce((sum, invoice) => sum + invoice.amount, 0);
  const outstanding = ws.invoices
    .filter((invoice) => invoice.status !== "Paid")
    .reduce((sum, invoice) => sum + invoice.amount, 0);
  const lowParts = ws.parts.filter((part) => partStatus(part) !== "OK");

  return {
    todaysJobs: todaysJobs.length,
    inService: inService.length,
    pending: pending.length,
    todaysSales,
    outstanding,
    lowParts: lowParts.length,
  };
}
