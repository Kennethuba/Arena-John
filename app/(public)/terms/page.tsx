import type { Metadata } from "next";
import { StoryPage } from "@/components/public/StoryPage";

export const metadata: Metadata = {
  title: "Terms — BusinessOS",
};

export default function TermsPage() {
  return (
    <StoryPage
      kicker="Terms"
      title="Subscribe to run it. You still own what you put in."
      lead="BusinessOS is the software. The name, logo, customers and jobs are the company’s. A live contract will sit here when billing is connected."
    >
      <p className="max-w-xl text-[0.95rem] leading-7 text-mute">
        The Auto Garage preview is for trying the workspace on this device. It
        does not create a billed account, and it does not mix one email’s
        records with another’s.
      </p>
    </StoryPage>
  );
}
