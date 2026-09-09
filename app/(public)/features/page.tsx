import type { Metadata } from "next";
import { features } from "@/lib/content";
import { FeatureIcon } from "@/components/Icons";
import { StoryPage } from "@/components/public/StoryPage";

export const metadata: Metadata = {
  title: "Features — BusinessOS",
  description:
    "What you keep when you subscribe: your name, empty books, work in the right order, and reports from your own day.",
};

export default function FeaturesPage() {
  return (
    <StoryPage
      kicker="Features"
      title="What sits inside a workspace you own."
      lead="These are not add-ons on a generic dashboard. They are the records of one company, once you have started trading."
    >
      <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <li key={feature.name} className="bg-white p-5">
            <FeatureIcon name={feature.icon} className="h-6 w-6 text-ink" />
            <h2 className="mt-4 text-base font-medium text-ink">{feature.name}</h2>
            <p className="mt-2 text-sm leading-6 text-mute">{feature.description}</p>
          </li>
        ))}
      </ul>
    </StoryPage>
  );
}
