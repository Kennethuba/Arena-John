import { redirect } from "next/navigation";
import { garageRoutes } from "@/lib/garage-routes";

export default function AutoGarageDashboardAliasPage() {
  redirect(garageRoutes.dashboard);
}
