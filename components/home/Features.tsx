import { FeatureIcon } from "@/components/Icons";
import { features } from "@/lib/content";

export function Features() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          What you actually keep.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-8 text-mute">
          Not a catalogue of modules. The records of one company, held in one
          place, under a name you put there.
        </p>

        <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature) => (
            <li key={feature.name} className="bg-white p-5">
              <FeatureIcon
                name={feature.icon}
                className="h-6 w-6 text-ink"
              />
              <h3 className="mt-4 text-base font-medium text-ink">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-mute">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
