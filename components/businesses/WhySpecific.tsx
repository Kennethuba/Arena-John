import { whyPoints } from "@/lib/directory";

export function WhySpecific() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            You do not need a generic shop system.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-mute">
            You need the order your trade already has — and a workspace that
            belongs to the company paying for it.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {whyPoints.map((point) => (
            <li key={point.number} className="border-t border-line pt-6">
              <p className="font-serif text-4xl text-ink/25">{point.number}</p>
              <h3 className="mt-4 text-lg font-medium text-ink">
                {point.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-7 text-mute">
                {point.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
