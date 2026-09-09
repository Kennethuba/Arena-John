import Image from "next/image";

const businessTypes = [
  "Garage",
  "Pharmacy",
  "SACCO",
  "Hardware",
  "Car Wash",
  "Tailor",
  "Retail",
];

export function Hero() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-site items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-mute">
            Software for a business you already run
          </p>
          <h1 className="mt-5 font-serif text-[2.75rem] leading-[1.08] tracking-tight text-ink sm:text-6xl">
            You pay for the system.
            <br />
            The business inside it is yours.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-mute">
            BusinessOS is a subscription for people with a trade — a garage, a
            pharmacy, a SACCO, a hardware shop. You open a workspace under your
            name. It starts empty, because nobody has brought you work yet.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/get-started"
              className="inline-flex items-center justify-center bg-ink px-5 py-3 text-[0.95rem] font-medium text-white transition-colors hover:bg-[#2c2a27]"
            >
              Open your workspace
            </a>
            <a
              href="#supported-businesses"
              className="inline-flex items-center justify-center border border-ink px-5 py-3 text-[0.95rem] font-medium text-ink transition-colors hover:bg-paper"
            >
              See the trades we serve
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <figure className="overflow-hidden border border-line bg-paper">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/hero/businessos-hero.jpg"
                alt="A BusinessOS workspace on a laptop, surrounded by tools from a garage, pharmacy, SACCO, hardware shop, car wash, tailor and retailer."
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="flex flex-wrap gap-x-3 gap-y-1 border-t border-line px-4 py-3 text-[0.72rem] uppercase tracking-[0.14em] text-mute">
              {businessTypes.map((type, index) => (
                <span key={type} className="inline-flex items-center gap-3">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-line">
                      ·
                    </span>
                  ) : null}
                  {type}
                </span>
              ))}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
