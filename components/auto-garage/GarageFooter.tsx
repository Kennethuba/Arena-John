import { Logo } from "@/components/Logo";
import { garageRoutes } from "@/lib/garage-routes";

export function GarageFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-site flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <Logo href="/" />
          <p className="mt-3 text-sm text-mute">
            Auto Garage is a BusinessOS product you subscribe to. The garage inside it is yours.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="/" className="text-ink hover:text-accent">
            BusinessOS
          </a>
          <a href="/businesses" className="text-ink hover:text-accent">
            All businesses
          </a>
          <a href={garageRoutes.login} className="text-ink hover:text-accent">
            Log In
          </a>
          <a href={garageRoutes.signup} className="text-ink hover:text-accent">
            Sign Up
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-site px-5 py-5 text-sm text-mute sm:px-8">
          © 2026 BusinessOS
        </p>
      </div>
    </footer>
  );
}
