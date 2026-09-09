import { ensureWorkspace, getWorkspace } from "@/lib/garage-store";

export type GarageSession = {
  email: string;
  fullName?: string;
  garageName: string;
  companyName?: string;
  phone?: string;
  preview: true;
  createdAt: number;
};

export type RegisterInput = {
  garageName: string;
  companyName: string;
  phone: string;
  email: string;
  fullName: string;
  password: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

export type AuthResult =
  | { ok: true; session: GarageSession }
  | { ok: false; error: string };

const SESSION_KEY = "businessos.auto-garage.session";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function readSession(): GarageSession | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as GarageSession;
  } catch {
    return null;
  }
}

function writeSession(session: GarageSession) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

/**
 * Preview authentication only.
 * Replace these functions with a real API client later — keep the same signatures.
 * Passwords are never stored. No accounts are created on a server.
 */
export async function registerGarage(
  input: RegisterInput,
): Promise<AuthResult> {
  await wait(350);
  const session: GarageSession = {
    email: input.email,
    fullName: input.fullName,
    garageName: input.garageName,
    companyName: input.companyName,
    phone: input.phone,
    preview: true,
    createdAt: Date.now(),
  };
  writeSession(session);
  ensureWorkspace({
    email: session.email,
    garageName: session.garageName,
    companyName: session.companyName,
    fullName: session.fullName,
    phone: session.phone,
  });
  return { ok: true, session };
}

export async function loginGarage(input: LoginInput): Promise<AuthResult> {
  await wait(350);
  const existing = getWorkspace(input.email);
  const session: GarageSession = {
    email: input.email,
    fullName: existing?.profile.fullName,
    garageName: existing?.profile.garageName || "My garage",
    companyName: existing?.profile.companyName,
    phone: existing?.profile.phone,
    preview: true,
    createdAt: Date.now(),
  };
  writeSession(session);
  ensureWorkspace({
    email: session.email,
    garageName: session.garageName,
    companyName: session.companyName,
    fullName: session.fullName,
    phone: session.phone,
  });
  return { ok: true, session };
}

export function getGarageSession(): GarageSession | null {
  return readSession();
}

export function clearGarageSession(): void {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(SESSION_KEY);
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 9 && digits.length <= 15;
}
