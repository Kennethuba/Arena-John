"use client";

import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { garageRoutes } from "@/lib/garage-routes";
import { useGarage } from "@/lib/garage-context";
import { NavIcon } from "@/components/auto-garage/app/NavIcon";
import { workspaceNav } from "@/components/auto-garage/app/nav-config";
import { CompanyMark } from "@/components/auto-garage/app/CompanyMark";
import { GarageGuide } from "@/components/auto-garage/app/GarageGuide";

function initials(name?: string, email?: string) {
  if (name?.trim()) {
    return name
      .split(" ")
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  }
  return (email?.[0] || "G").toUpperCase();
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { workspace, signOut } = useGarage();
  const garageName = workspace.profile.garageName;
  const ownerName = workspace.profile.fullName || "Owner";
  const ownerRole = workspace.profile.role || "Owner";
  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const reminderBadge = 0;

  return (
    <div className="min-h-screen bg-[#F5F8FC] font-sans text-slate-800">
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 lg:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <Logo href={garageRoutes.dashboard} />
          <span className="hidden h-4 w-px bg-slate-200 sm:block" />
          <span className="hidden items-center gap-2 text-sm font-medium text-slate-700 sm:inline-flex">
            <CompanyMark size="sm" />
            {garageName}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="relative rounded-full p-2 text-slate-500 hover:bg-slate-50"
            aria-label="Notifications"
          >
            <NavIcon name="reminders" />
            {reminderBadge > 0 ? (
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            ) : null}
          </button>
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 hover:bg-slate-50"
              onClick={() => setUserOpen((value) => !value)}
              aria-expanded={userOpen}
            >
              <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-800 text-xs font-medium text-white">
                {workspace.profile.logoDataUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={workspace.profile.logoDataUrl}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                ) : (
                  initials(ownerName, workspace.profile.email)
                )}
              </span>
              <span className="hidden text-left sm:block">
                <span className="block text-sm font-medium leading-4 text-slate-800">
                  {ownerName}
                </span>
                <span className="block text-[0.7rem] text-slate-500">
                  {ownerRole}
                </span>
              </span>
            </button>
            {userOpen ? (
              <div className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-200 bg-white py-1 shadow-lg">
                <a
                  href={garageRoutes.settings}
                  className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                >
                  Settings
                </a>
                <button
                  type="button"
                  className="block w-full px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                  onClick={signOut}
                >
                  Sign out
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <div className="lg:grid lg:grid-cols-[16.5rem_1fr]">
        {menuOpen ? (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-slate-900/30 lg:hidden"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
        ) : null}

        <aside
          className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-slate-200 bg-white pt-14 transition-transform lg:static lg:z-0 lg:h-[calc(100vh-3.5rem)] lg:translate-x-0 lg:pt-0 ${
            menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Garage">
            {workspaceNav.map((item) => {
              const current =
                item.href === garageRoutes.dashboard
                  ? pathname === item.href
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={current ? "page" : undefined}
                  className={`mb-0.5 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${
                    current
                      ? "bg-[#E8F1FF] font-medium text-[#2B6CB0]"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <NavIcon name={item.icon} />
                  {item.label}
                  {item.label === "Reminders" && reminderBadge > 0 ? (
                    <span className="ml-auto rounded-full bg-red-500 px-1.5 text-[0.65rem] text-white">
                      {reminderBadge}
                    </span>
                  ) : null}
                </a>
              );
            })}
          </nav>
          <div className="border-t border-slate-200 px-4 py-4">
            <div className="flex items-center gap-3">
              <CompanyMark size="sm" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-slate-800">
                  {garageName}
                </p>
                <p className="truncate text-xs text-slate-500">
                  {workspace.profile.tagline ||
                    workspace.profile.city ||
                    "Your workspace"}
                </p>
              </div>
            </div>
            <p className="mt-2 text-[0.65rem] text-slate-400">
              BusinessOS subscription
            </p>
          </div>
        </aside>

        <main id="main" className="min-w-0 px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
      <GarageGuide />
    </div>
  );
}
