import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { AuthBackLink } from "@/components/auto-garage/auth/FormFields";
import { LoginForm } from "@/components/auto-garage/auth/LoginForm";
import { garageRoutes } from "@/lib/garage-routes";

export const metadata: Metadata = {
  title: "Log in — Auto Garage · BusinessOS",
  description: "Log in to your BusinessOS Auto Garage account.",
};

export default function AutoGarageLoginPage() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-site items-center justify-between px-5 py-3.5 sm:px-8">
          <div className="flex items-center gap-3">
            <Logo href="/" />
            <span className="h-4 w-px bg-line" aria-hidden="true" />
            <span className="text-sm text-mute">Auto Garage</span>
          </div>
          <AuthBackLink href={garageRoutes.landing} />
        </div>
      </header>

      <main
        id="main"
        className="mx-auto flex max-w-site justify-center px-5 py-16 sm:px-8"
      >
        <div className="w-full max-w-md">
          <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-mute">
            Auto Garage
          </p>
          <div className="mt-4 rounded-xl border border-line bg-white p-6 shadow-[0_12px_40px_rgba(22,21,19,0.06)] sm:p-8">
            <h1 className="font-serif text-3xl tracking-tight text-ink">
              Back to your garage
            </h1>
            <p className="mt-2 text-sm leading-6 text-mute">
              This email&apos;s books only. A new address is a new company.
            </p>
            <div className="mt-8">
              <LoginForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
