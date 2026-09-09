import Image from "next/image";
import { directoryBusinesses } from "@/lib/directory";

export function DirectoryGrid() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            One subscription. A different floor for each trade.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-mute">
            See how the work is supposed to move. Opening a workspace is
            separate — and starts with your own empty books.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 lg:grid-cols-2">
          {directoryBusinesses.map((business) => (
            <li key={business.slug}>
              <article className="group flex h-full flex-col border border-line bg-white motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1 hover:border-[#c8c4bb] hover:shadow-[0_12px_28px_rgba(22,21,19,0.06)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#efece6]">
                  <Image
                    src={business.image}
                    alt={business.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
                  <h3 className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink">
                    {business.name}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-mute">
                    {business.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {business.workflows.map((workflow) => (
                      <li
                        key={workflow}
                        className="border border-line px-2 py-1 text-[0.68rem] uppercase tracking-[0.12em] text-mute"
                      >
                        {workflow}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={business.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center self-start text-sm font-medium text-accent transition-colors hover:text-ink"
                  >
                    See More
                    <span className="sr-only"> about {business.name}</span>
                    <span
                      aria-hidden="true"
                      className="ml-1 inline-block motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
