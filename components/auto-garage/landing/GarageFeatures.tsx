import {
  CustomersIcon,
  FeatureIcon,
  InventoryIcon,
  ReportsIcon,
  SalesIcon,
} from "@/components/Icons";
import { GarageFeatureIcon } from "@/components/auto-garage/GarageIcons";
import { garageFeatures } from "@/lib/garage-demo";

function FeatureVisual({ icon }: { icon: string }) {
  const className = "h-6 w-6 text-ink";
  if (icon === "customers") return <CustomersIcon className={className} />;
  if (icon === "inventory") return <InventoryIcon className={className} />;
  if (icon === "sales") return <SalesIcon className={className} />;
  if (icon === "reports") return <ReportsIcon className={className} />;
  if (
    icon === "vehicle" ||
    icon === "jobs" ||
    icon === "staff" ||
    icon === "history"
  ) {
    return <GarageFeatureIcon name={icon} className={className} />;
  }
  return <FeatureIcon name="dashboard" className={className} />;
}

export function GarageFeatures() {
  return (
    <section id="features" className="scroll-mt-20 border-b border-line bg-paper">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          What the floor actually needs
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-8 text-mute">
          From the person at the counter to the invoice and the next reminder —
          once you have started taking cars, not before.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {garageFeatures.map((feature) => (
            <li
              key={feature.name}
              className="rounded-xl border border-line bg-white p-5 shadow-[0_8px_24px_rgba(22,21,19,0.04)]"
            >
              <FeatureVisual icon={feature.icon} />
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
