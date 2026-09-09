import Image from "next/image";
import { directoryBusinesses, mosaicLayout } from "@/lib/directory";

const mosaicItems = mosaicLayout.map((tile) => {
  const business = directoryBusinesses.find((item) => item.slug === tile.slug);
  if (!business) {
    throw new Error(`Missing directory business for ${tile.slug}`);
  }
  return { ...tile, business };
});

export function DirectoryHero() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-site items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:py-22">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-mute">
            The trades we serve
          </p>
          <h1 className="mt-5 font-serif text-[2.6rem] leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]">
            Software that follows the work you already do.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-mute">
            Each trade gets its own workspace, named after the company that
            opened it. Auto Garage is ready. The others follow the same rule:
            empty until you have clients.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div
            className="grid grid-cols-2 auto-rows-[7.25rem] gap-2 sm:grid-cols-4 sm:auto-rows-[7.5rem] lg:auto-rows-[6.75rem]"
          >
            {mosaicItems.map(({ slug, className, business }, index) => (
              <figure
                key={slug}
                className={`relative h-full overflow-hidden bg-[#efece6] ${className}`}
              >
                <Image
                  src={business.image}
                  alt={business.alt}
                  fill
                  priority={index < 3}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 18vw"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-0 left-0 bg-white px-2 py-1 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-ink">
                  {business.shortLabel}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
