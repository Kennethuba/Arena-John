import Image from "next/image";
import { garageCapabilities } from "@/lib/garage-demo";

export function GarageCapabilities() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-20 border-b border-line bg-white"
    >
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            What the system actually does
          </h2>
          <p className="mt-5 text-lg leading-8 text-mute">
            Auto Garage is built around the work that happens in the bay — not
            a generic shop counter.
          </p>
        </div>

        <ul className="mt-14 space-y-16">
          {garageCapabilities.map((item, index) => (
            <li
              key={item.title}
              className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-[#efece6] lg:col-span-6 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-6">
                <p className="font-serif text-3xl text-ink/20">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-3xl tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-[1.05rem] leading-8 text-mute">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
