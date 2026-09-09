import type { Metadata } from "next";
import { StoryPage } from "@/components/public/StoryPage";

export const metadata: Metadata = {
  title: "Privacy — BusinessOS",
};

export default function PrivacyPage() {
  return (
    <StoryPage
      kicker="Privacy"
      title="Your company stays your company."
      lead="A workspace is keyed to an email. Another person does not receive your customers, jobs or stock."
    >
      <div className="max-w-xl space-y-4 text-[0.95rem] leading-7 text-mute">
        <p>
          This preview keeps Auto Garage records in the browser under that
          email. It is not a live server account. When authentication is
          connected, the same rule holds: one company, one set of books.
        </p>
        <p>
          We do not use your garage’s clients as marketing samples on the public
          site. Landing pages show example screens. Your dashboard does not.
        </p>
      </div>
    </StoryPage>
  );
}
