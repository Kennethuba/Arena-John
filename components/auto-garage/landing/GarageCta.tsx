import { garageRoutes } from "@/lib/garage-routes";

export function GarageCta() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-site px-5 py-24 sm:px-8 lg:py-32">
        <h2 className="max-w-3xl font-serif text-4xl tracking-tight text-ink sm:text-6xl sm:leading-[1.08]">
          Open a garage under your name.
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-mute">
          You subscribe to BusinessOS. The customers, plates and job cards are
          yours. Nothing is waiting in the books until you take the first car.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
    </section>
  );
}
