import { Logo } from "@/components/Logo";
import { footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-mute">
            Subscribe to the system. Own the business inside it.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-mute">
            Product
          </p>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.product.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-mute">
            Company
          </p>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
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
