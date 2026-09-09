import { Features } from "@/components/home/Features";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { Ownership } from "@/components/home/Ownership";
import { PricingPreview } from "@/components/home/PricingPreview";
import { SecurityPreview } from "@/components/home/SecurityPreview";
import { SupportedBusinesses } from "@/components/home/SupportedBusinesses";
import { Workflows } from "@/components/home/Workflows";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Ownership />
      <SupportedBusinesses />
      <Workflows />
      <Features />
      <SecurityPreview />
      <PricingPreview />
      <FinalCta />
    </main>
  );
}
