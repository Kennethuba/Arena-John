"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";
import {
  clearGarageSession,
  getGarageSession,
  type GarageSession,
} from "@/lib/garage-auth";
import { garageRoutes } from "@/lib/garage-routes";

export function DashboardPlaceholder() {
  const router = useRouter();
  const [session, setSession] = useState<GarageSession | null>(null);

  useEffect(() => {
    const current = getGarageSession();
    if (!current) {
      router.replace(garageRoutes.login);
      return;
    }
    setSession(current);
  }, [router]);

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-paper text-sm text-mute">
        Opening your garage…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-site items-center justify-between px-5 py-3.5 sm:px-8">
          <div className="flex items-center gap-3">
            <Logo href="/" />
            <span className="h-4 w-px bg-line" aria-hidden="true" />
            <span className="text-sm text-mute">Auto Garage</span>
          </div>
          <button
            type="button"
            className="rounded-md border border-line px-3 py-1.5 text-sm text-ink hover:bg-paper"
            onClick={() => {
              clearGarageSession();
              router.push(garageRoutes.landing);
            }}
          >
            Sign out
          </button>
        </div>
      </header>
      <main id="main" className="mx-auto max-w-site px-5 py-16 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-mute">
          Preview session
        </p>
        <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink">
          {session.garageName}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-mute">
          You are in a preview session for {session.email}. The Auto Garage
          workspace will be built next. No live account has been created.
        </p>
        <a
          href={garageRoutes.landing}
          className="mt-8 inline-flex text-sm font-medium text-accent hover:text-ink"
        >
          ← Back to Auto Garage
        </a>
      </main>
    </div>
  );
}
