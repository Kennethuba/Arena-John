import type { Metadata } from "next";
import { businesses } from "@/lib/content";
import { garageRoutes } from "@/lib/garage-routes";
import { StoryPage } from "@/components/public/StoryPage";

export const metadata: Metadata = {
  title: "Get started — BusinessOS",
  description:
    "Open a BusinessOS workspace under your own company name. Auto Garage is ready.",
};

export default function GetStartedPage() {
  return (
    <StoryPage
      kicker="Get started"
      title="Open a workspace that belongs to you."
      lead="Choose the trade you already run. You will sign up under your company name. The books start empty."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {businesses.map((business) => {
          const ready = business.slug === "auto-garage";
          return (
            <li key={business.slug} className="border border-line bg-white p-5">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink">
                {business.name}
              </p>
              <p className="mt-3 text-sm leading-6 text-mute">
                {business.description}
              </p>
              {ready ? (
                <a
                  href={garageRoutes.signup}
                  className="mt-5 inline-flex bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-[#2c2a27]"
                >
                  Open Auto Garage
                </a>
              ) : (
                <p className="mt-5 text-sm text-mute">Not open yet.</p>
              )}
            </li>
          );
        })}
      </ul>
      <p className="mt-10 text-sm text-mute">
        Already have a garage workspace?{" "}
        <a href={garageRoutes.login} className="font-medium text-accent hover:text-ink">
          Log in
        </a>
        .
      </p>
    </StoryPage>
  );
}
