import type { Metadata } from "next";
import { DirectoryCta } from "@/components/businesses/DirectoryCta";
import { DirectoryGrid } from "@/components/businesses/DirectoryGrid";
import { DirectoryHero } from "@/components/businesses/DirectoryHero";
import { DirectoryWorkflows } from "@/components/businesses/DirectoryWorkflows";
import { WhySpecific } from "@/components/businesses/WhySpecific";

export const metadata: Metadata = {
  title: "Businesses — BusinessOS",
  description:
    "Explore how BusinessOS adapts to auto garages, pharmacies, SACCOs, hardware shops, car washes, tailors and retailers — instead of forcing every business into the same workflow.",
};

export default function BusinessesPage() {
  return (
    <main id="main">
      <DirectoryHero />
      <DirectoryGrid />
      <DirectoryWorkflows />
      <WhySpecific />
      <DirectoryCta />
    </main>
  );
}
