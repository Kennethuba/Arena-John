import type { Metadata } from "next";
import { StoryPage } from "@/components/public/StoryPage";

export const metadata: Metadata = {
  title: "Pricing — BusinessOS",
  description:
    "You subscribe to BusinessOS so the workspace — name, logo, customers, jobs — stays yours.",
};

const plans = [
  {
    name: "Workshop",
    price: "From KSh 2,500 / month",
    text: "One business. Your name and logo. Empty books until you work. A guide on how the floor runs.",
  },
  {
    name: "Floor",
    price: "From KSh 6,500 / month",
    text: "Staff logins with permissions. The company still owns the records.",
  },
  {
    name: "House",
    price: "Talk to us",
    text: "More than one branch. Each branch keeps its own books.",
  },
] as const;

export default function PricingPage() {
  return (
    <StoryPage
      kicker="Pricing"
      title="You pay to own the running of it."
      lead="The subscription is for BusinessOS. What you put in the workspace is the business you already have. These figures are a starting conversation, not a checkout."
    >
      <ul className="grid gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <li key={plan.name} className="border border-line p-6">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-mute">
              {plan.name}
            </p>
            <p className="mt-3 text-xl font-medium text-ink">{plan.price}</p>
            <p className="mt-3 text-sm leading-6 text-mute">{plan.text}</p>
          </li>
        ))}
      </ul>
      <p className="mt-10 max-w-xl text-sm leading-6 text-mute">
        Auto Garage can be opened today as a preview on this device. A live
        subscription — with billing — connects later. You will not be shown
        another garage’s jobs in the meantime.
      </p>
      <a
        href="/get-started"
        className="mt-8 inline-flex bg-ink px-5 py-3 text-sm font-medium text-white hover:bg-[#2c2a27]"
      >
        Open your workspace
      </a>
    </StoryPage>
  );
}
