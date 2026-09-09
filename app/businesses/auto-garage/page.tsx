import type { Metadata } from "next";
import { GarageFooter } from "@/components/auto-garage/GarageFooter";
import { GarageHeader } from "@/components/auto-garage/GarageHeader";
import { GarageBenefits } from "@/components/auto-garage/landing/GarageBenefits";
import { GarageCapabilities } from "@/components/auto-garage/landing/GarageCapabilities";
import { GarageCta } from "@/components/auto-garage/landing/GarageCta";
import { GarageFeatures } from "@/components/auto-garage/landing/GarageFeatures";
import { GarageHero } from "@/components/auto-garage/landing/GarageHero";
import { GarageYours } from "@/components/auto-garage/landing/GarageYours";
import { GarageHowItWorks } from "@/components/auto-garage/landing/GarageHowItWorks";
import { GaragePreview } from "@/components/auto-garage/landing/GaragePreview";
import { GarageReports } from "@/components/auto-garage/landing/GarageReports";
import { GarageWorkflow } from "@/components/auto-garage/landing/GarageWorkflow";

export const metadata: Metadata = {
  title: "Auto Garage — BusinessOS",
  description:
    "Open your garage on BusinessOS. Your name, your logo, empty books until a car comes in.",
};

export default function AutoGarageLandingPage() {
  return (
    <>
      <GarageHeader />
      <main id="main">
        <GarageHero />
        <GarageYours />
        <GarageFeatures />
        <GarageCapabilities />
        <GarageReports />
        <GarageHowItWorks />
        <GaragePreview />
        <GarageWorkflow />
        <GarageBenefits />
        <GarageCta />
      </main>
      <GarageFooter />
    </>
  );
}
