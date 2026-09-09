import { redirect } from "next/navigation";
import { garageRoutes } from "@/lib/garage-routes";

export default function AutoGarageAliasPage() {
  redirect(garageRoutes.landing);
}
