import { redirect } from "next/navigation";
import { garageRoutes } from "@/lib/garage-routes";

export default function AutoGarageSignupAliasPage() {
  redirect(garageRoutes.signup);
}
