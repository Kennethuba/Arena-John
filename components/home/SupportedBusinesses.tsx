import Image from "next/image";
import { businesses } from "@/lib/content";

export function SupportedBusinesses() {
  return (
    <section
      id="supported-businesses"
      className="scroll-mt-20 border-b border-line bg-paper"
    >
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            Pick the trade you already have.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-mute">
            A garage does not sell the way a pharmacy does. Each workspace
            follows that trade — and starts with no clients until you add them.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {businesses.map((business) => (
            <li key={business.slug}>
              <article className="group flex h-full flex-col border border-line bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#efece6]">
                  <Image
                    src={business.image}
                    alt={business.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col px-5 py-5">
                  <h3 className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink">
                    {business.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-6 text-mute">
                    {business.description}
                  </p>
                  <a
                    href={business.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-ink"
                  >
                    See More
                    <span className="sr-only"> about {business.name}</span>
                    <span aria-hidden="true" className="ml-1">
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
