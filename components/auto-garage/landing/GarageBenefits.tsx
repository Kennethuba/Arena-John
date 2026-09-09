import { garageBenefits } from "@/lib/garage-demo";

export function GarageBenefits() {
  return (
    <section
      id="benefits"
      className="scroll-mt-20 border-b border-line bg-white"
    >
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          What changes on a working day
        </h2>
        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {garageBenefits.map((benefit, index) => (
            <li key={benefit.title} className="flex gap-4">
              <span
                className="mt-0.5 font-serif text-xl text-mute"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-medium text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-mute">{benefit.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
