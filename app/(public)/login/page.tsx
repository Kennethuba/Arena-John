import type { Metadata } from "next";
import { garageRoutes } from "@/lib/garage-routes";
import { StoryPage } from "@/components/public/StoryPage";

export const metadata: Metadata = {
  title: "Log in — BusinessOS",
  description: "Return to the BusinessOS workspace that belongs to your company.",
};

export default function PublicLoginPage() {
  return (
    <StoryPage
      kicker="Log in"
      title="Return to your own books."
      lead="Each trade has its own door. Auto Garage is open. Logging in loads the company attached to that email — not a shared demo."
    >
      <div className="max-w-md border border-line p-6">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink">
          Auto Garage
        </p>
        <p className="mt-3 text-sm leading-6 text-mute">
          Customers, vehicles, job cards and sales for the garage you opened.
        </p>
        <a
          href={garageRoutes.login}
          className="mt-5 inline-flex bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-[#2c2a27]"
        >
          Log in to Auto Garage
        </a>
      </div>
      <p className="mt-8 text-sm text-mute">
        New company?{" "}
        <a href="/get-started" className="font-medium text-accent hover:text-ink">
          Get started
        </a>
        .
      </p>
    </StoryPage>
  );
}
