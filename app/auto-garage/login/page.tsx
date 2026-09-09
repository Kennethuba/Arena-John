import { redirect } from "next/navigation";
import { garageRoutes } from "@/lib/garage-routes";

export default function AutoGarageLoginAliasPage() {
  redirect(garageRoutes.login);
}
