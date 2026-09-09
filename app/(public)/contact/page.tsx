import type { Metadata } from "next";
import { StoryPage } from "@/components/public/StoryPage";

export const metadata: Metadata = {
  title: "Contact — BusinessOS",
};

export default function ContactPage() {
  return (
    <StoryPage
      kicker="Contact"
      title="Talk about the trade you run."
      lead="House plans, a second branch, or a pharmacy that is not open on the site yet — write to us with the business you actually have."
    >
      <p className="max-w-xl text-[0.95rem] leading-7 text-mute">
        Email{" "}
        <a href="mailto:hello@businessos.ke" className="font-medium text-accent">
          hello@businessos.ke
        </a>
        . Say what you run, where it sits, and how many people need to use the
        system. We will not drop you into a demo full of someone else’s clients.
      </p>
    </StoryPage>
  );
}
