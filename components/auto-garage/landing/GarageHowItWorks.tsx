import Image from "next/image";
import { garageSteps } from "@/lib/garage-demo";

const stepImages = [
  {
    src: "/images/garage/customer.jpg",
    alt: "Customer at a garage reception counter while a service advisor uses a laptop.",
  },
  {
    src: "/images/garage/inspection.jpg",
    alt: "Technician inspecting a vehicle on a lift in the workshop.",
  },
  {
    src: "/images/garage/reports.jpg",
    alt: "Garage owner reviewing reports on a laptop in the office.",
  },
] as const;

export function GarageHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-b border-line bg-white"
    >
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          How a garage becomes yours
        </h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {garageSteps.map((step, index) => (
            <li
              key={step.number}
              className="overflow-hidden rounded-xl border border-line bg-paper"
            >
              <div className="relative aspect-[16/10] bg-[#efece6]">
                <Image
                  src={stepImages[index].src}
                  alt={stepImages[index].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="font-serif text-3xl text-ink/25">{step.number}</p>
                <h3 className="mt-3 text-lg font-medium text-ink">{step.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-mute">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
