"use client";

import { garageRoutes } from "@/lib/garage-routes";
import { useGarage } from "@/lib/garage-context";
import {
  dashboardStats,
  formatMoney,
  isFreshWorkspace,
  partStatus,
  startOfToday,
} from "@/lib/garage-store";
import { NavIcon } from "@/components/auto-garage/app/NavIcon";

function greeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

function todayLabel() {
  return new Date().toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function statusClass(status: string) {
  if (status === "In Progress") return "bg-blue-50 text-blue-700";
  if (status === "Waiting Parts") return "bg-amber-50 text-amber-700";
  if (status === "Scheduled") return "bg-violet-50 text-violet-700";
  if (status === "Ready" || status === "Completed") return "bg-emerald-50 text-emerald-700";
  if (status === "Critical") return "bg-rose-50 text-rose-700";
  if (status === "Low") return "bg-amber-50 text-amber-700";
  return "bg-slate-100 text-slate-600";
}

function timeAgo(at: number) {
  const mins = Math.max(1, Math.round((Date.now() - at) / 60000));
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}

export function DashboardHome() {
  const { workspace } = useGarage();
  const fresh = isFreshWorkspace(workspace);
  const stats = dashboardStats(workspace);
  const today = startOfToday();
  const todaysJobs = workspace.jobs.filter((job) => job.createdAt >= today);
  const pendingInvoices = workspace.invoices.filter((invoice) => invoice.status !== "Paid");
  const lowParts = workspace.parts.filter((part) => partStatus(part) !== "OK");
  const salesDays = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    date.setHours(0, 0, 0, 0);
    const start = date.getTime();
    const end = start + 86400000;
    const sales = workspace.invoices
      .filter(
        (invoice) =>
          invoice.status === "Paid" &&
          invoice.createdAt >= start &&
          invoice.createdAt < end,
      )
      .reduce((sum, invoice) => sum + invoice.amount, 0);
    return {
      label: date.toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
      sales,
    };
  });
  const maxSales = Math.max(1, ...salesDays.map((day) => day.sales));

  const kpis = [
    {
      label: "Today's Jobs",
      value: String(stats.todaysJobs),
      hint: stats.todaysJobs === 0 ? "No jobs yet today" : "Opened today",
      color: "bg-blue-50 text-blue-600",
      icon: "jobs",
    },
    {
      label: "Vehicles in Service",
      value: String(stats.inService),
      hint: stats.inService === 0 ? "Bay is empty" : "Currently in the workshop",
      color: "bg-emerald-50 text-emerald-600",
      icon: "vehicles",
    },
    {
      label: "Pending Jobs",
      value: String(stats.pending),
      hint: stats.pending === 0 ? "Nothing waiting" : "Waiting or scheduled",
      color: "bg-amber-50 text-amber-600",
      icon: "history",
    },
    {
      label: "Today's Sales",
      value: formatMoney(stats.todaysSales),
      hint: stats.todaysSales === 0 ? "No sales recorded" : "Paid invoices today",
      color: "bg-violet-50 text-violet-600",
      icon: "sales",
    },
    {
      label: "Outstanding Payments",
      value: formatMoney(stats.outstanding),
      hint: stats.outstanding === 0 ? "Nothing outstanding" : "Unpaid invoices",
      color: "bg-rose-50 text-rose-600",
      icon: "sales",
    },
    {
      label: "Low Stock Parts",
      value: String(stats.lowParts),
      hint: stats.lowParts === 0 ? "Stock looks fine" : "Items need restocking",
      color: "bg-orange-50 text-orange-600",
      icon: "inventory",
    },
  ];

  const actions = [
    { href: garageRoutes.jobs, label: "New Job Card", color: "bg-blue-50 text-blue-700" },
    { href: garageRoutes.vehicles, label: "Add Vehicle", color: "bg-emerald-50 text-emerald-700" },
    { href: garageRoutes.customers, label: "Add Customer", color: "bg-violet-50 text-violet-700" },
    { href: garageRoutes.sales, label: "Create Invoice", color: "bg-orange-50 text-orange-700" },
    { href: garageRoutes.sales, label: "Record Payment", color: "bg-rose-50 text-rose-700" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            {greeting()}, {workspace.profile.garageName}
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Here&apos;s what&apos;s happening in your garage today.
          </p>
        </div>
        <p className="text-sm text-slate-500">{todayLabel()}</p>
      </div>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {kpis.map((kpi) => (
          <article
            key={kpi.label}
            className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
          >
            <span
              className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${kpi.color}`}
            >
              <NavIcon name={kpi.icon} />
            </span>
            <p className="mt-3 text-sm text-slate-500">{kpi.label}</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{kpi.value}</p>
            <p className="mt-1 text-xs text-slate-400">{kpi.hint}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] xl:col-span-1">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Today&apos;s Jobs</h2>
            <a href={garageRoutes.jobs} className="text-sm text-blue-600">
              View all
            </a>
          </div>
          {todaysJobs.length === 0 ? (
            <Empty text="No jobs opened today. Create a job card to get started." />
          ) : (
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-slate-400">
                <tr>
                  <th className="pb-2 font-medium">Job #</th>
                  <th className="pb-2 font-medium">Vehicle</th>
                  <th className="pb-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {todaysJobs.slice(0, 5).map((job) => (
                  <tr key={job.id} className="border-t border-slate-100">
                    <td className="py-2.5">{job.number}</td>
                    <td className="py-2.5">{job.plate}</td>
                    <td className="py-2.5">
                      <span className={`rounded-full px-2 py-0.5 text-xs ${statusClass(job.status)}`}>
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </article>

        <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Pending Payments</h2>
            <a href={garageRoutes.sales} className="text-sm text-blue-600">
              View all
            </a>
          </div>
          {pendingInvoices.length === 0 ? (
            <Empty text="No outstanding invoices." />
          ) : (
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-slate-400">
                <tr>
                  <th className="pb-2 font-medium">Invoice</th>
                  <th className="pb-2 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {pendingInvoices.slice(0, 5).map((invoice) => (
                  <tr key={invoice.id} className="border-t border-slate-100">
                    <td className="py-2.5">
                      {invoice.number}
                      <span className="block text-xs text-slate-400">
                        {invoice.customerName}
                      </span>
                    </td>
                    <td className="py-2.5">{formatMoney(invoice.amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </article>

        <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
          <h2 className="mb-3 font-semibold text-slate-900">Quick Actions</h2>
          <ul className="space-y-2">
            {actions.map((action) => (
              <li key={action.label}>
                <a
                  href={action.href}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium ${action.color}`}
                >
                  {action.label}
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] xl:col-span-1">
          <h2 className="mb-4 font-semibold text-slate-900">Sales Overview</h2>
          {salesDays.every((day) => day.sales === 0) ? (
            <Empty text="No sales in the last 7 days." />
          ) : (
            <div className="flex h-40 items-end gap-2">
              {salesDays.map((day) => (
                <div key={day.label} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="w-full rounded-sm bg-blue-500/80"
                    style={{ height: `${Math.max(6, (day.sales / maxSales) * 100)}%` }}
                  />
                  <span className="text-[0.6rem] text-slate-400">{day.label}</span>
                </div>
              ))}
            </div>
          )}
        </article>

        <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
          <h2 className="mb-3 font-semibold text-slate-900">Recent Activity</h2>
          {workspace.activity.length === 0 ? (
            <Empty text="Nothing has happened in this garage yet." />
          ) : (
            <ul className="space-y-3">
              {workspace.activity.slice(0, 6).map((item) => (
                <li key={item.id} className="text-sm">
                  <p className="text-slate-800">{item.text}</p>
                  <p className="text-xs text-slate-400">
                    {item.detail} · {timeAgo(item.at)}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </article>

        <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Low Stock Parts</h2>
            <a href={garageRoutes.inventory} className="text-sm text-blue-600">
              View all
            </a>
          </div>
          {lowParts.length === 0 ? (
            <Empty text="No low-stock parts. Add inventory to track levels." />
          ) : (
            <ul className="space-y-2 text-sm">
              {lowParts.slice(0, 6).map((part) => (
                <li key={part.id} className="flex items-center justify-between">
                  <span>{part.name}</span>
                  <span className="flex items-center gap-2">
                    {part.stock}
                    <span className={`rounded-full px-2 py-0.5 text-xs ${statusClass(partStatus(part))}`}>
                      {partStatus(part)}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </article>
      </section>

      <p className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm text-slate-500 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
        You subscribe to BusinessOS. {workspace.profile.garageName} — the name,
        the logo, the customers — is yours.
      </p>
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return (
    <p className="rounded-xl bg-slate-50 px-3 py-8 text-center text-sm text-slate-500">
      {text}
    </p>
  );
}
