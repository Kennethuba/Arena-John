"use client";

import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/content";

function isCurrentPath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const pathname = usePathname();

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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex max-w-site items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-7 text-[0.92rem] text-mute lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const current = isCurrentPath(pathname, link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-ink ${
                  current ? "font-medium text-ink" : "text-mute"
                }`}
                aria-current={current ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/login"
            className="px-3 py-2 text-[0.92rem] text-ink transition-colors hover:text-accent"
          >
            Log In
          </a>
          <a
            href="/get-started"
            className="inline-flex items-center bg-ink px-4 py-2 text-[0.92rem] font-medium text-white transition-colors hover:bg-[#2c2a27]"
          >
            Get Started
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
        <div
          id={menuId}
          className="border-t border-line bg-white lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-site flex-col px-5 py-4 sm:px-8"
            aria-label="Mobile"
          >
            {navLinks.map((link) => {
              const current = isCurrentPath(pathname, link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`border-b border-line py-3.5 text-base ${
                    current ? "font-medium text-ink" : "text-mute"
                  }`}
                  aria-current={current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="/login"
              className="border-b border-line py-3.5 text-base text-ink"
              onClick={() => setOpen(false)}
            >
              Log In
            </a>
            <a
              href="/get-started"
              className="mt-4 inline-flex items-center justify-center bg-ink px-4 py-3 text-base font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
