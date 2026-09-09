import type { ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { garageRoutes } from "@/lib/garage-routes";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function AuthShell({ title, subtitle, children }: AuthShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-site items-center justify-between px-5 py-3.5 sm:px-8">
          <div className="flex items-center gap-3">
            <Logo href="/" />
            <span className="hidden text-sm text-mute sm:inline">
              Auto Garage
            </span>
          </div>
          <a
            href={garageRoutes.landing}
            className="text-sm text-mute transition-colors hover:text-ink"
          >
            Back to Auto Garage
          </a>
        </div>
      </header>
      <main id="main" className="flex flex-1 items-start justify-center px-5 py-12 sm:px-8">
        <div className="w-full max-w-md rounded-xl border border-line bg-white p-6 shadow-[0_12px_40px_rgba(22,21,19,0.06)] sm:p-8">
          <h1 className="font-serif text-3xl tracking-tight text-ink">{title}</h1>
          <p className="mt-2 text-sm leading-6 text-mute">{subtitle}</p>
          <div className="mt-8">{children}</div>
        </div>
      </main>
    </div>
  );
}
