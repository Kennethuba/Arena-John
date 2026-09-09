"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import {
  clearGarageSession,
  getGarageSession,
  type GarageSession,
} from "@/lib/garage-auth";
import { garageRoutes } from "@/lib/garage-routes";
import {
  ensureWorkspace,
  saveWorkspace,
  type Workspace,
} from "@/lib/garage-store";

type GarageContextValue = {
  session: GarageSession;
  workspace: Workspace;
  update: (next: Workspace | ((current: Workspace) => Workspace)) => void;
  signOut: () => void;
};

const GarageContext = createContext<GarageContextValue | null>(null);

export function GarageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [session, setSession] = useState<GarageSession | null>(null);
  const [workspace, setWorkspace] = useState<Workspace | null>(null);

  useEffect(() => {
    const current = getGarageSession();
    if (!current) {
      router.replace(garageRoutes.login);
      return;
    }
    const data = ensureWorkspace({
      email: current.email,
      garageName: current.garageName,
      companyName: current.companyName,
      fullName: current.fullName,
      phone: current.phone,
    });
    setSession(current);
    setWorkspace(data);
  }, [router]);

  const update = useCallback(
    (next: Workspace | ((current: Workspace) => Workspace)) => {
      setWorkspace((current) => {
        if (!current) return current;
        const resolved = typeof next === "function" ? next(current) : next;
        saveWorkspace(resolved.profile.email, resolved);
        return resolved;
      });
    },
    [],
  );

  const signOut = useCallback(() => {
    clearGarageSession();
    router.push(garageRoutes.landing);
  }, [router]);

  const value = useMemo(() => {
    if (!session || !workspace) return null;
    return { session, workspace, update, signOut };
  }, [session, workspace, update, signOut]);

  if (!value) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F8FC] text-sm text-mute">
        Opening your workspace…
      </div>
    );
  }

  return (
    <GarageContext.Provider value={value}>{children}</GarageContext.Provider>
  );
}

export function useGarage() {
  const value = useContext(GarageContext);
  if (!value) {
    throw new Error("useGarage must be used inside GarageProvider");
  }
  return value;
}
