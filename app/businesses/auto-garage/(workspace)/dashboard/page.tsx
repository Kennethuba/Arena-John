import type { Metadata } from "next";
import { DashboardHome } from "@/components/auto-garage/app/DashboardHome";

export const metadata: Metadata = {
  title: "Dashboard — Auto Garage · BusinessOS",
};

export default function DashboardPage() {
  return <DashboardHome />;
}
