import type { Metadata } from "next";
import { securityPoints } from "@/lib/content";
import { StoryPage } from "@/components/public/StoryPage";

export const metadata: Metadata = {
  title: "Security — BusinessOS",
  description:
    "Each email is a company. Records stay with that company. Access can be closed without mixing books.",
};

export default function SecurityPage() {
  return (
    <StoryPage
      kicker="Security"
      title="Your records are not a shared drawer."
      lead="BusinessOS is built so a new person cannot walk into another company’s day. Separation is the product, not a setting buried in a menu."
    >
      <ul className="grid gap-10 sm:grid-cols-2">
        {securityPoints.map((point) => (
          <li key={point.title} className="border-t border-line pt-5">
            <h2 className="text-lg font-medium text-ink">{point.title}</h2>
            <p className="mt-2 text-sm leading-6 text-mute">{point.text}</p>
          </li>
        ))}
      </ul>
    </StoryPage>
  );
}
