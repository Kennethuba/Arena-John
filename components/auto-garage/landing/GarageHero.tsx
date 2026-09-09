import Image from "next/image";
import { garageRoutes } from "@/lib/garage-routes";

export function GarageHero() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-site items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-mute">
            Auto Garage · BusinessOS
          </p>
          <h1 className="mt-5 font-serif text-[2.75rem] leading-[1.08] tracking-tight text-ink sm:text-6xl">
            Open your garage on software you own.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-mute">
            Put your name and logo on the system. Day one is empty — no sample
            customers, no borrowed jobs — because this is not someone else&apos;s
            workshop. You subscribe to BusinessOS so the floor stays yours.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={garageRoutes.signup}
              className="inline-flex items-center justify-center rounded-md bg-ink px-5 py-3 text-[0.95rem] font-medium text-white transition-colors hover:bg-[#2c2a27]"
            >
              Open my garage
            </a>
            <a
              href={garageRoutes.login}
              className="inline-flex items-center justify-center rounded-md border border-ink px-5 py-3 text-[0.95rem] font-medium text-ink transition-colors hover:bg-paper"
            >
              Log In
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <figure className="overflow-hidden rounded-xl border border-line">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/garage/hero-workshop.jpg"
                alt="Mechanic working on a silver saloon in a Nairobi auto garage, with a laptop and job card on the workbench."
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
