"use client";

import { type FormEvent } from "react";
import { useGarage } from "@/lib/garage-context";
import {
  formatMoney,
  newId,
  nextNumber,
  partStatus,
  type InvoiceStatus,
  type JobStatus,
} from "@/lib/garage-store";
import { Field, ModuleScreen } from "@/components/auto-garage/app/ModuleScreen";

function addActivity(
  text: string,
  detail: string,
): { id: string; text: string; detail: string; at: number } {
  return { id: newId(), text, detail, at: Date.now() };
}

export function CustomersModule() {
  const { workspace, update } = useGarage();

  function onAdd(event: FormEvent<HTMLFormElement>, close: () => void) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (!name) return;
    update((ws) => ({
      ...ws,
      customers: [
        { id: newId(), name, phone, email, createdAt: Date.now() },
        ...ws.customers,
      ],
      activity: [
        addActivity("New customer registered", name),
        ...ws.activity,
      ],
    }));
    close();
  }

  return (
    <ModuleScreen
      title="Customers"
      description="People who bring vehicles into your garage."
      actionLabel="Add Customer"
      empty="No customers yet. Add the first one to start job cards and invoices."
      form={(close) => (
        <form className="space-y-3" onSubmit={(event) => onAdd(event, close)}>
          <Field label="Full name" name="name" required />
          <Field label="Phone" name="phone" type="tel" />
          <Field label="Email" name="email" type="email" />
          <button className="w-full rounded-lg bg-slate-900 py-2 text-sm font-medium text-white">
            Save customer
          </button>
        </form>
      )}
    >
      {workspace.customers.length
        ? workspace.customers.map((customer) => (
            <div
              key={customer.id}
              className="flex items-center justify-between border-b border-slate-100 py-3 last:border-0"
            >
              <div>
                <p className="text-sm font-medium text-slate-900">{customer.name}</p>
                <p className="text-xs text-slate-500">
                  {customer.phone || "No phone"} · {customer.email || "No email"}
                </p>
              </div>
            </div>
          ))
        : undefined}
    </ModuleScreen>
  );
}

export function VehiclesModule() {
  const { workspace, update } = useGarage();

  function onAdd(event: FormEvent<HTMLFormElement>, close: () => void) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const customerId = String(data.get("customerId") || "");
    const customer = workspace.customers.find((item) => item.id === customerId);
    const plate = String(data.get("plate") || "").trim().toUpperCase();
    const model = String(data.get("model") || "").trim();
    if (!customer || !plate) return;
    update((ws) => ({
      ...ws,
      vehicles: [
        {
          id: newId(),
          customerId: customer.id,
          customerName: customer.name,
          plate,
          model,
          createdAt: Date.now(),
        },
        ...ws.vehicles,
      ],
      activity: [
        addActivity("New vehicle added", `${plate}${model ? ` · ${model}` : ""}`),
        ...ws.activity,
      ],
    }));
    close();
  }

  return (
    <ModuleScreen
      title="Vehicles"
      description="Registration numbers attached to customers."
      actionLabel="Add Vehicle"
      empty="No vehicles yet. Add a customer first, then register their car."
      form={(close) =>
        workspace.customers.length === 0 ? (
          <p className="text-sm text-slate-500">Add a customer before adding a vehicle.</p>
        ) : (
          <form className="space-y-3" onSubmit={(event) => onAdd(event, close)}>
            <Field label="Customer">
              <select
                name="customerId"
                required
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              >
                {workspace.customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Number plate" name="plate" required />
            <Field label="Make / model" name="model" />
            <button className="w-full rounded-lg bg-slate-900 py-2 text-sm font-medium text-white">
              Save vehicle
            </button>
          </form>
        )
      }
    >
      {workspace.vehicles.length
        ? workspace.vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="flex items-center justify-between border-b border-slate-100 py-3 last:border-0"
            >
              <div>
                <p className="text-sm font-medium text-slate-900">{vehicle.plate}</p>
                <p className="text-xs text-slate-500">
                  {vehicle.model || "Model not set"} · {vehicle.customerName}
                </p>
              </div>
            </div>
          ))
        : undefined}
    </ModuleScreen>
  );
}

export function JobsModule() {
  const { workspace, update } = useGarage();

  function onAdd(event: FormEvent<HTMLFormElement>, close: () => void) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const vehicleId = String(data.get("vehicleId") || "");
    const vehicle = workspace.vehicles.find((item) => item.id === vehicleId);
    const technician = String(data.get("technician") || "").trim();
    const status = String(data.get("status") || "Scheduled") as JobStatus;
    if (!vehicle) return;
    const number = nextNumber("JOB", workspace.jobs.length);
    update((ws) => ({
      ...ws,
      jobs: [
        {
          id: newId(),
          number,
          vehicleId: vehicle.id,
          plate: vehicle.plate,
          customerName: vehicle.customerName,
          status,
          technician,
          createdAt: Date.now(),
        },
        ...ws.jobs,
      ],
      activity: [
        addActivity("Job card created", `${number} · ${vehicle.plate}`),
        ...ws.activity,
      ],
    }));
    close();
  }

  return (
    <ModuleScreen
      title="Job Cards"
      description="Work from check-in through completion."
      actionLabel="New Job Card"
      empty="No job cards yet. Add a vehicle, then open a job."
      form={(close) =>
        workspace.vehicles.length === 0 ? (
          <p className="text-sm text-slate-500">Add a vehicle before opening a job card.</p>
        ) : (
          <form className="space-y-3" onSubmit={(event) => onAdd(event, close)}>
            <Field label="Vehicle">
              <select
                name="vehicleId"
                required
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              >
                {workspace.vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.plate} · {vehicle.customerName}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Technician" name="technician" />
            <Field label="Status">
              <select
                name="status"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              >
                <option>Scheduled</option>
                <option>In Progress</option>
                <option>Waiting Parts</option>
                <option>Ready</option>
                <option>Completed</option>
              </select>
            </Field>
            <button className="w-full rounded-lg bg-slate-900 py-2 text-sm font-medium text-white">
              Create job card
            </button>
          </form>
        )
      }
    >
      {workspace.jobs.length
        ? workspace.jobs.map((job) => (
            <div
              key={job.id}
              className="flex items-center justify-between border-b border-slate-100 py-3 last:border-0"
            >
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {job.number} · {job.plate}
                </p>
                <p className="text-xs text-slate-500">
                  {job.customerName}
                  {job.technician ? ` · ${job.technician}` : ""}
                </p>
              </div>
              <span className="text-xs text-slate-600">{job.status}</span>
            </div>
          ))
        : undefined}
    </ModuleScreen>
  );
}

export function InventoryModule() {
  const { workspace, update } = useGarage();

  function onAdd(event: FormEvent<HTMLFormElement>, close: () => void) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const stock = Number(data.get("stock") || 0);
    const minStock = Number(data.get("minStock") || 5);
    if (!name) return;
    update((ws) => ({
      ...ws,
      parts: [{ id: newId(), name, stock, minStock }, ...ws.parts],
      activity: [
        addActivity("Part stock updated", `${name} · ${stock} units`),
        ...ws.activity,
      ],
    }));
    close();
  }

  return (
    <ModuleScreen
      title="Inventory"
      description="Spare parts on the shelf."
      actionLabel="Add Part"
      empty="No parts yet. Add stock so low-stock alerts can appear on the dashboard."
      form={(close) => (
        <form className="space-y-3" onSubmit={(event) => onAdd(event, close)}>
          <Field label="Part name" name="name" required />
          <Field label="Quantity" name="stock" type="number" required />
          <Field label="Low-stock level" name="minStock" type="number" />
          <button className="w-full rounded-lg bg-slate-900 py-2 text-sm font-medium text-white">
            Save part
          </button>
        </form>
      )}
    >
      {workspace.parts.length
        ? workspace.parts.map((part) => (
            <div
              key={part.id}
              className="flex items-center justify-between border-b border-slate-100 py-3 last:border-0"
            >
              <p className="text-sm font-medium text-slate-900">{part.name}</p>
              <p className="text-sm text-slate-500">
                {part.stock} · {partStatus(part)}
              </p>
            </div>
          ))
        : undefined}
    </ModuleScreen>
  );
}

export function SalesModule() {
  const { workspace, update } = useGarage();

  function onAdd(event: FormEvent<HTMLFormElement>, close: () => void) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const customerName = String(data.get("customerName") || "").trim();
    const amount = Number(data.get("amount") || 0);
    const dueDate = String(data.get("dueDate") || "");
    const status = String(data.get("status") || "Due") as InvoiceStatus;
    if (!customerName || !amount) return;
    const number = nextNumber("INV", workspace.invoices.length);
    update((ws) => ({
      ...ws,
      invoices: [
        {
          id: newId(),
          number,
          customerName,
          amount,
          dueDate,
          status,
          createdAt: Date.now(),
        },
        ...ws.invoices,
      ],
      activity: [
        addActivity(
          status === "Paid" ? "Payment received" : "Invoice created",
          `${number} · ${formatMoney(amount)}`,
        ),
        ...ws.activity,
      ],
    }));
    close();
  }

  function markPaid(id: string) {
    update((ws) => ({
      ...ws,
      invoices: ws.invoices.map((invoice) =>
        invoice.id === id ? { ...invoice, status: "Paid" as const } : invoice,
      ),
      activity: [
        addActivity("Payment received", id),
        ...ws.activity,
      ],
    }));
  }

  return (
    <ModuleScreen
      title="Sales"
      description="Invoices and payments."
      actionLabel="Create Invoice"
      empty="No invoices yet. Create one after a job is complete."
      form={(close) => (
        <form className="space-y-3" onSubmit={(event) => onAdd(event, close)}>
          <Field label="Customer name" name="customerName" required />
          <Field label="Amount (KSh)" name="amount" type="number" required />
          <Field label="Due date" name="dueDate" type="date" />
          <Field label="Status">
            <select
              name="status"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            >
              <option>Due</option>
              <option>Paid</option>
            </select>
          </Field>
          <button className="w-full rounded-lg bg-slate-900 py-2 text-sm font-medium text-white">
            Save invoice
          </button>
        </form>
      )}
    >
      {workspace.invoices.length
        ? workspace.invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex items-center justify-between border-b border-slate-100 py-3 last:border-0"
            >
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {invoice.number} · {formatMoney(invoice.amount)}
                </p>
                <p className="text-xs text-slate-500">
                  {invoice.customerName} · {invoice.status}
                </p>
              </div>
              {invoice.status !== "Paid" ? (
                <button
                  type="button"
                  className="text-sm text-blue-600"
                  onClick={() => markPaid(invoice.id)}
                >
                  Record payment
                </button>
              ) : null}
            </div>
          ))
        : undefined}
    </ModuleScreen>
  );
}

export function HistoryModule() {
  const { workspace } = useGarage();
  const done = workspace.jobs.filter((job) => job.status === "Completed" || job.status === "Ready");
  return (
    <ModuleScreen
      title="Service History"
      description="Completed and ready jobs, attached to the vehicle."
      empty="No service history yet. Completed jobs will appear here."
    >
      {done.length
        ? done.map((job) => (
            <div key={job.id} className="border-b border-slate-100 py-3 last:border-0">
              <p className="text-sm font-medium text-slate-900">
                {job.plate} · {job.number}
              </p>
              <p className="text-xs text-slate-500">{job.customerName}</p>
            </div>
          ))
        : undefined}
    </ModuleScreen>
  );
}

export function SimpleModule({
  title,
  description,
  empty,
}: {
  title: string;
  description: string;
  empty: string;
}) {
  return (
    <ModuleScreen title={title} description={description} empty={empty} />
  );
}

export function SettingsModule() {
  const { workspace, update, signOut } = useGarage();
  const profile = workspace.profile;

  async function onSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const logoFile = data.get("logo");
    let logoDataUrl = profile.logoDataUrl;
    if (logoFile instanceof File && logoFile.size > 0) {
      try {
        const { readFileAsLogo } = await import("@/lib/garage-logo");
        logoDataUrl = await readFileAsLogo(logoFile);
      } catch {
        return;
      }
    }
    update((ws) => ({
      ...ws,
      profile: {
        ...ws.profile,
        garageName: String(data.get("garageName") || "").trim() || ws.profile.garageName,
        companyName: String(data.get("companyName") || "").trim(),
        fullName: String(data.get("fullName") || "").trim(),
        phone: String(data.get("phone") || "").trim(),
        address: String(data.get("address") || "").trim(),
        city: String(data.get("city") || "").trim(),
        tagline: String(data.get("tagline") || "").trim(),
        role: String(data.get("role") || "").trim() || "Owner",
        logoDataUrl,
      },
    }));
  }

  function clearLogo() {
    update((ws) => ({
      ...ws,
      profile: { ...ws.profile, logoDataUrl: undefined },
    }));
  }

  return (
    <ModuleScreen
      title="Settings"
      description="This is your company, not a shared demo. BusinessOS is the subscription that keeps it running."
    >
      <form className="max-w-xl space-y-4" onSubmit={onSave}>
        <div className="flex items-center gap-4">
          {profile.logoDataUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile.logoDataUrl}
              alt=""
              className="h-16 w-16 rounded-xl object-cover"
            />
          ) : (
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-slate-800 text-lg font-medium text-white">
              {profile.garageName.slice(0, 1).toUpperCase()}
            </span>
          )}
          <div>
            <Field label="Garage logo" name="logo" type="file" accept="image/*" />
            {profile.logoDataUrl ? (
              <button
                type="button"
                className="mt-2 text-xs text-slate-500"
                onClick={clearLogo}
              >
                Remove logo
              </button>
            ) : (
              <p className="mt-1 text-xs text-slate-400">
                Square image works best. Stored with this garage only.
              </p>
            )}
          </div>
        </div>
        <Field label="Garage name" name="garageName" required />
        <Field label="Legal / company name" name="companyName" />
        <Field label="Owner name" name="fullName" />
        <Field label="Your role" name="role" />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Address" name="address" />
        <Field label="City" name="city" />
        <Field label="Line under the name" name="tagline" />
        <p className="text-sm text-slate-500">
          Signed in as {profile.email}. Records for this email stay in this
          workspace. A different email is a different company, with empty books.
        </p>
        <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white">
          Save company details
        </button>
      </form>
      <button
        type="button"
        onClick={signOut}
        className="mt-6 rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700"
      >
        Sign out
      </button>
    </ModuleScreen>
  );
}

export function ReportsModule() {
  const { workspace } = useGarage();
  const stats = {
    customers: workspace.customers.length,
    vehicles: workspace.vehicles.length,
    jobs: workspace.jobs.length,
    invoices: workspace.invoices.length,
  };
  return (
    <ModuleScreen
      title="Reports"
      description="A live snapshot. Detailed report views will connect next."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">{key}</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
          </div>
        ))}
      </div>
    </ModuleScreen>
  );
}
