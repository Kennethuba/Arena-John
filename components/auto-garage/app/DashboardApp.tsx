"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";
import {
  clearGarageSession,
  getGarageSession,
  type GarageSession,
} from "@/lib/garage-auth";
import {
  garageJobs,
  garageKpis,
  garageParts,
} from "@/lib/garage-demo";
import { garageRoutes } from "@/lib/garage-routes";

const navItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "jobs", label: "Job Cards" },
  { id: "vehicles", label: "Vehicles" },
  { id: "customers", label: "Customers" },
  { id: "parts", label: "Spare Parts" },
  { id: "invoices", label: "Invoices" },
  { id: "reports", label: "Reports" },
] as const;

function statusClass(status: string) {
  if (status === "Ready" || status === "OK") return "bg-[#e8f3ea] text-[#166534]";
  if (status === "Waiting parts" || status === "Low") {
    return "bg-[#f8efe2] text-[#9a4b12]";
  }
  return "bg-[#eceff6] text-[#1E4B9E]";
}

export function DashboardApp() {
  const router = useRouter();
  const [session, setSession] = useState<GarageSession | null>(null);

  useEffect(() => {
    const current = getGarageSession();
    if (!current) {
      router.replace(garageRoutes.login);
      return;
    }
    setSession(current);
  }, [router]);

  function signOut() {
    clearGarageSession();
    router.push("/auto-garage");
  }

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-paper text-sm text-mute">
        Opening your garage…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper lg:grid lg:grid-cols-[16rem_1fr]">
      <aside className="border-b border-line bg-white lg:border-b-0 lg:border-r">
        <div className="flex items-center gap-2 border-b border-line px-4 py-4">
          <Logo href="/" />
        </div>
        <p className="px-4 pt-4 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-mute">
          {session.garageName}
        </p>
        <nav className="px-2 py-3" aria-label="Garage workspace">
          {navItems.map((item) =>
            item.id === "dashboard" ? (
              <a
                key={item.id}
                href="/auto-garage/dashboard"
                aria-current="page"
                className="block rounded-md bg-paper px-3 py-2 text-sm font-medium text-ink"
              >
                {item.label}
              </a>
            ) : (
              <span
                key={item.id}
                className="block rounded-md px-3 py-2 text-sm text-mute"
              >
                {item.label}
              </span>
            ),
          )}
        </nav>
      </aside>

      <div>
        <header className="flex items-center justify-between border-b border-line bg-white px-5 py-3 sm:px-8">
          <div>
            <p className="text-sm font-medium text-ink">Dashboard</p>
            <p className="text-xs text-mute">
              {session.fullName ? `${session.fullName} · ` : ""}
              {session.email}
            </p>
          </div>
          <button
            type="button"
            onClick={signOut}
            className="rounded-md border border-line px-3 py-1.5 text-sm text-ink hover:bg-paper"
          >
            Sign out
          </button>
        </header>

        <main id="main" className="px-5 py-6 sm:px-8">
          <h1 className="font-serif text-3xl tracking-tight text-ink">
            {session.garageName}
          </h1>
          <p className="mt-1 text-sm text-mute">
            Working application overview. Modules will connect as Auto Garage is
            built out.
          </p>

          <section className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {garageKpis.map((kpi) => (
              <article
                key={kpi.label}
                className="rounded-xl border border-line bg-white p-4 shadow-[0_8px_24px_rgba(22,21,19,0.04)]"
              >
                <p className="text-xs text-mute">{kpi.label}</p>
                <p className="mt-2 text-xl font-medium text-ink">{kpi.value}</p>
              </article>
            ))}
          </section>

          <section className="mt-6 overflow-hidden rounded-xl border border-line bg-white shadow-[0_8px_24px_rgba(22,21,19,0.04)]">
            <div className="border-b border-line px-4 py-3">
              <h2 className="text-sm font-medium text-ink">Today&apos;s jobs</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-paper text-mute">
                  <tr>
                    <th className="px-4 py-2 font-medium">Job</th>
                    <th className="px-4 py-2 font-medium">Vehicle</th>
                    <th className="px-4 py-2 font-medium">Customer</th>
                    <th className="px-4 py-2 font-medium">Mechanic</th>
                    <th className="px-4 py-2 font-medium">Status</th>
                    <th className="px-4 py-2 font-medium">Due</th>
                  </tr>
                </thead>
                <tbody>
                  {garageJobs.map((job) => (
                    <tr key={job.id} className="border-t border-line">
                      <td className="px-4 py-2.5">{job.id}</td>
                      <td className="px-4 py-2.5">
                        {job.vehicle} · {job.model}
                      </td>
                      <td className="px-4 py-2.5">{job.customer}</td>
                      <td className="px-4 py-2.5">{job.mechanic}</td>
                      <td className="px-4 py-2.5">
                        <span
                          className={`inline-flex px-2 py-0.5 text-xs font-medium ${statusClass(job.status)}`}
                        >
                          {job.status}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-mute">{job.due}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-6 rounded-xl border border-line bg-white p-4 shadow-[0_8px_24px_rgba(22,21,19,0.04)]">
            <h2 className="text-sm font-medium text-ink">Low-stock parts</h2>
            <ul className="mt-3 divide-y divide-line">
              {garageParts
                .filter((part) => part.status === "Low")
                .map((part) => (
                  <li
                    key={part.sku}
                    className="flex items-center justify-between py-2 text-sm"
                  >
                    <span>
                      {part.name}
                      <span className="ml-2 text-mute">{part.sku}</span>
                    </span>
                    <span className="text-mute">{part.qty} left</span>
                  </li>
                ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
