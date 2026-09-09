import Image from "next/image";
import { garageProcess } from "@/lib/garage-demo";

export function GarageWorkflow() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          From check-in to handover
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-8 text-mute">
          Work follows the vehicle — not a generic sale — through every stage
          the garage actually uses.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {garageProcess.map((group) => (
            <article
              key={group.phase}
              className="rounded-xl border border-line bg-paper p-6"
            >
              <h3 className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink">
                {group.phase}
              </h3>
              <ol className="mt-6">
                {group.steps.map((step, index) => (
                  <li key={step} className="flex flex-col">
                    <span className="font-serif text-[1.55rem] leading-tight tracking-tight text-ink">
                      {step}
                    </span>
                    {index < group.steps.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="py-1.5 text-sm text-mute"
                      >
                        ↓
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>

        <figure className="relative mt-12 aspect-[21/9] overflow-hidden rounded-xl bg-[#efece6] sm:aspect-[2.4/1]">
          <Image
            src="/images/garage/handover.jpg"
            alt="Mechanic handing car keys to a customer after service, with the invoice on a clipboard."
            fill
            sizes="(max-width: 1024px) 100vw, 72rem"
            className="object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
