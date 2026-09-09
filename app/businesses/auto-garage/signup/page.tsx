import type { Metadata } from "next";
import Image from "next/image";
import { Logo } from "@/components/Logo";
import { AuthBackLink } from "@/components/auto-garage/auth/FormFields";
import { SignupForm } from "@/components/auto-garage/auth/SignupForm";
import { garageRoutes } from "@/lib/garage-routes";

export const metadata: Metadata = {
  title: "Create your garage account — Auto Garage · BusinessOS",
  description: "Create a BusinessOS Auto Garage account for your workshop.",
};

export default function AutoGarageSignupPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-site items-center justify-between px-5 py-3.5 sm:px-8">
          <div className="flex items-center gap-3">
            <Logo href="/" />
            <span className="h-4 w-px bg-line" aria-hidden="true" />
            <span className="text-sm text-mute">Auto Garage</span>
          </div>
          <AuthBackLink href={garageRoutes.landing} />
        </div>
      </header>

      <main id="main" className="mx-auto grid max-w-site lg:grid-cols-2">
        <section className="hidden border-r border-line bg-paper px-8 py-16 lg:flex lg:flex-col lg:justify-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-mute">
            BusinessOS Auto Garage
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.08] tracking-tight text-ink">
            This becomes your garage.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-8 text-mute">
            No sample customers. No borrowed jobs. You open the books, then you
            fill them.
          </p>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-xl bg-[#efece6]">
            <Image
              src="/images/garage/hero-workshop.jpg"
              alt="Mechanic working on a vehicle in a professional auto garage."
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="px-5 py-10 sm:px-8 lg:flex lg:items-start lg:justify-center lg:py-16">
          <div className="w-full max-w-md rounded-xl border border-line bg-white p-6 shadow-[0_12px_40px_rgba(22,21,19,0.06)] sm:p-8">
            <div className="lg:hidden">
              <h1 className="font-serif text-3xl tracking-tight text-ink">
                This becomes your garage.
              </h1>
              <p className="mt-2 text-sm leading-6 text-mute">
                No sample customers. No borrowed jobs.
              </p>
            </div>
            <h2 className="mt-6 font-serif text-3xl tracking-tight text-ink lg:mt-0">
              Open the workspace
            </h2>
            <p className="mt-2 text-sm leading-6 text-mute">
              Your name on the garage. Empty books until a car comes in.
            </p>
            <div className="mt-8">
              <SignupForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
