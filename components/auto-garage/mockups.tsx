import type { ReactNode } from "react";
import {
  demoGarage,
  garageHistory,
  garageJobs,
  garageKpis,
  garageParts,
} from "@/lib/garage-demo";

function statusClass(status: string) {
  if (status === "Ready" || status === "OK" || status === "Paid") {
    return "bg-[#e8f3ea] text-[#166534]";
  }
  if (status === "Waiting parts" || status === "Low" || status === "Due") {
    return "bg-[#f8efe2] text-[#9a4b12]";
  }
  if (status === "In service" || status === "Inspection") {
    return "bg-[#eceff6] text-[#1E4B9E]";
  }
  return "bg-paper text-mute";
}

function StatusPill({ children }: { children: string }) {
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 text-[0.62rem] font-medium ${statusClass(children)}`}
    >
      {children}
    </span>
  );
}

function WindowFrame({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-white shadow-[0_12px_40px_rgba(22,21,19,0.08)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-line bg-paper px-3 py-2">
        <p className="truncate text-[0.7rem] text-mute">{title}</p>
        <p className="hidden text-[0.65rem] text-mute sm:block">
          {demoGarage.name}
        </p>
      </div>
      {children}
    </div>
  );
}

export function DashboardMockup({ compact = false }: { compact?: boolean }) {
  return (
    <WindowFrame
      title="BusinessOS Auto Garage · Dashboard"
      className="pointer-events-none select-none"
    >
      <div className={`bg-white ${compact ? "p-3" : "p-4"}`}>
        <div className="mb-3 flex items-end justify-between gap-3">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.14em] text-mute">
              Today
            </p>
            <p className="text-sm font-medium text-ink">Garage overview</p>
          </div>
          <p className="text-[0.7rem] text-mute">8 Sep 2026</p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {garageKpis.map((kpi) => (
            <div key={kpi.label} className="rounded-lg border border-line bg-paper px-2.5 py-2">
              <p className="text-[0.62rem] leading-4 text-mute">{kpi.label}</p>
              <p className="mt-1 text-sm font-medium text-ink">{kpi.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 overflow-hidden rounded-lg border border-line">
          <div className="border-b border-line bg-paper px-2.5 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-mute">
            Today&apos;s jobs
          </div>
          <table className="w-full text-left text-[0.7rem]">
            <thead className="text-mute">
              <tr className="border-b border-line">
                <th className="px-2.5 py-1.5 font-medium">Job</th>
                <th className="px-2.5 py-1.5 font-medium">Vehicle</th>
                <th className="hidden px-2.5 py-1.5 font-medium sm:table-cell">
                  Mechanic
                </th>
                <th className="px-2.5 py-1.5 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-ink">
              {garageJobs.map((job) => (
                <tr key={job.id} className="border-b border-line last:border-0">
                  <td className="px-2.5 py-1.5">{job.id}</td>
                  <td className="px-2.5 py-1.5">
                    {job.vehicle}
                    <span className="hidden text-mute sm:inline">
                      {" "}
                      · {job.model}
                    </span>
                  </td>
                  <td className="hidden px-2.5 py-1.5 sm:table-cell">
                    {job.mechanic}
                  </td>
                  <td className="px-2.5 py-1.5">
                    <StatusPill>{job.status}</StatusPill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </WindowFrame>
  );
}

export function JobCardMockup() {
  const job = garageJobs[0];
  return (
    <WindowFrame title="Job card · JC-1042">
      <div className="pointer-events-none select-none space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-ink">{job.vehicle}</p>
            <p className="text-[0.75rem] text-mute">{job.model}</p>
          </div>
          <StatusPill>{job.status}</StatusPill>
        </div>
        <dl className="grid grid-cols-2 gap-2 text-[0.75rem]">
          <div className="rounded-lg border border-line px-2.5 py-2">
            <dt className="text-mute">Customer</dt>
            <dd className="mt-0.5 text-ink">{job.customer}</dd>
          </div>
          <div className="rounded-lg border border-line px-2.5 py-2">
            <dt className="text-mute">Mechanic</dt>
            <dd className="mt-0.5 text-ink">{job.mechanic}</dd>
          </div>
          <div className="rounded-lg border border-line px-2.5 py-2">
            <dt className="text-mute">Due</dt>
            <dd className="mt-0.5 text-ink">{job.due}</dd>
          </div>
          <div className="rounded-lg border border-line px-2.5 py-2">
            <dt className="text-mute">Labour</dt>
            <dd className="mt-0.5 text-ink">KSh 6,500</dd>
          </div>
        </dl>
        <p className="text-[0.75rem] text-mute">
          Work: engine inspection, oil service, front pads.
        </p>
      </div>
    </WindowFrame>
  );
}

export function VehicleProfileMockup() {
  return (
    <WindowFrame title="Vehicle profile · KCP 197W">
      <div className="pointer-events-none select-none p-4 text-[0.75rem]">
        <p className="text-sm font-medium text-ink">Toyota Premio</p>
        <p className="text-mute">KCP 197W · James Mwangi</p>
        <dl className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-line px-2.5 py-2">
            <dt className="text-mute">Year</dt>
            <dd className="mt-0.5 text-ink">2014</dd>
          </div>
          <div className="rounded-lg border border-line px-2.5 py-2">
            <dt className="text-mute">Mileage</dt>
            <dd className="mt-0.5 text-ink">86,420 km</dd>
          </div>
          <div className="rounded-lg border border-line px-2.5 py-2">
            <dt className="text-mute">Colour</dt>
            <dd className="mt-0.5 text-ink">Silver</dd>
          </div>
          <div className="rounded-lg border border-line px-2.5 py-2">
            <dt className="text-mute">Next service</dt>
            <dd className="mt-0.5 text-ink">90,000 km</dd>
          </div>
        </dl>
        <p className="mt-3 text-mute">Open job JC-1042 · In service</p>
      </div>
    </WindowFrame>
  );
}

export function VehicleHistoryMockup() {
  return (
    <WindowFrame title="Service history · KCP 197W">
      <div className="pointer-events-none select-none p-4">
        <p className="text-sm font-medium text-ink">Toyota Premio · KCP 197W</p>
        <p className="text-[0.75rem] text-mute">James Mwangi · 86,420 km</p>
        <ol className="mt-3 space-y-2">
          {garageHistory.map((item) => (
            <li
              key={item.job}
              className="flex items-start justify-between gap-3 border-b border-line pb-2 text-[0.75rem] last:border-0 last:pb-0"
            >
              <span>
                <span className="block text-ink">{item.work}</span>
                <span className="text-mute">
                  {item.job} · {item.km} km
                </span>
              </span>
              <span className="shrink-0 text-mute">{item.date}</span>
            </li>
          ))}
        </ol>
      </div>
    </WindowFrame>
  );
}

export function InventoryMockup() {
  return (
    <WindowFrame title="Spare parts inventory">
      <div className="pointer-events-none select-none p-4">
        <ul className="space-y-2">
          {garageParts.map((part) => (
            <li
              key={part.sku}
              className="flex items-center justify-between gap-3 rounded-lg border border-line px-2.5 py-2 text-[0.75rem]"
            >
              <span>
                <span className="block text-ink">{part.name}</span>
                <span className="text-mute">{part.sku}</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-ink">{part.qty}</span>
                <StatusPill>{part.status}</StatusPill>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </WindowFrame>
  );
}

export function CustomerMockup() {
  return (
    <WindowFrame title="Customer profile">
      <div className="pointer-events-none select-none p-4">
        <p className="text-sm font-medium text-ink">James Mwangi</p>
        <p className="text-[0.75rem] text-mute">0722 118 440 · Westlands</p>
        <div className="mt-3 grid grid-cols-2 gap-2 text-[0.75rem]">
          <div className="rounded-lg border border-line px-2.5 py-2">
            <p className="text-mute">Vehicles</p>
            <p className="mt-0.5 text-ink">2</p>
          </div>
          <div className="rounded-lg border border-line px-2.5 py-2">
            <p className="text-mute">Open balance</p>
            <p className="mt-0.5 text-ink">KSh 12,800</p>
          </div>
        </div>
        <p className="mt-3 text-[0.75rem] text-ink">KCP 197W · Toyota Premio</p>
        <p className="text-[0.75rem] text-mute">KDG 118B · Honda Fit</p>
      </div>
    </WindowFrame>
  );
}

export function InvoiceMockup() {
  return (
    <WindowFrame title="Invoice · INV-5521">
      <div className="pointer-events-none select-none p-4 text-[0.75rem]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-ink">INV-5521</p>
            <p className="text-mute">JC-1042 · James Mwangi</p>
          </div>
          <StatusPill>Due</StatusPill>
        </div>
        <ul className="mt-3 space-y-1.5 border-y border-line py-3">
          <li className="flex justify-between">
            <span>Labour — inspection</span>
            <span>6,500</span>
          </li>
          <li className="flex justify-between">
            <span>Oil filter + 5W-30</span>
            <span>4,200</span>
          </li>
          <li className="flex justify-between">
            <span>Front brake pads</span>
            <span>7,800</span>
          </li>
        </ul>
        <p className="mt-3 flex justify-between font-medium text-ink">
          <span>Total</span>
          <span>KSh 18,500</span>
        </p>
      </div>
    </WindowFrame>
  );
}

export function ReportsMockup() {
  const bars = [42, 70, 55, 88, 63, 76, 50];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <WindowFrame title="Reports · This week">
      <div className="pointer-events-none select-none p-4">
        <p className="text-sm font-medium text-ink">Jobs completed</p>
        <p className="text-[0.75rem] text-mute">Week of 8 Sep 2026</p>
        <div className="mt-4 flex h-28 items-end gap-2">
          {bars.map((height, index) => (
            <div key={days[index]} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-sm bg-ink/80"
                style={{ height: `${height}%` }}
              />
              <span className="text-[0.6rem] text-mute">{days[index]}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-[0.75rem]">
          <div className="rounded-lg border border-line px-2.5 py-2">
            <p className="text-mute">Sales</p>
            <p className="text-ink">KSh 412,900</p>
          </div>
          <div className="rounded-lg border border-line px-2.5 py-2">
            <p className="text-mute">Open jobs</p>
            <p className="text-ink">8</p>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}
