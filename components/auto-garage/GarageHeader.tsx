"use client";

import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";
import { garageRoutes } from "@/lib/garage-routes";

const nav = [
  { href: "#features", label: "Features" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#reports", label: "Reports" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#preview", label: "Preview" },
  { href: "#benefits", label: "Benefits" },
] as const;

export function GarageHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex max-w-site items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <div className="flex items-center gap-3">
          <Logo href="/" />
          <span className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />
          <a
            href={garageRoutes.landing}
            className="text-sm text-mute transition-colors hover:text-ink"
          >
            Auto Garage
          </a>
        </div>

        <nav
          className="hidden items-center gap-6 text-[0.92rem] text-mute lg:flex"
          aria-label="Auto Garage"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={garageRoutes.login}
            className="px-3 py-2 text-[0.92rem] text-ink transition-colors hover:text-accent"
          >
            Log In
          </a>
          <a
            href={garageRoutes.signup}
            className="inline-flex items-center rounded-md bg-ink px-4 py-2 text-[0.92rem] font-medium text-white transition-colors hover:bg-[#2c2a27]"
          >
            Sign Up
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <div id={menuId} className="border-t border-line bg-white lg:hidden">
          <nav
            className="mx-auto flex max-w-site flex-col px-5 py-4 sm:px-8"
            aria-label="Mobile"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-line py-3.5 text-base text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={garageRoutes.login}
              className="border-b border-line py-3.5 text-base text-ink"
              onClick={() => setOpen(false)}
            >
              Log In
            </a>
            <a
              href={garageRoutes.signup}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-ink px-4 py-3 text-base font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Sign Up
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
