import {
  CustomerMockup,
  DashboardMockup,
  InventoryMockup,
  InvoiceMockup,
  JobCardMockup,
  ReportsMockup,
  VehicleHistoryMockup,
  VehicleProfileMockup,
} from "@/components/auto-garage/mockups";

const previews = [
  {
    title: "Garage Dashboard",
    description: "Today’s jobs, vehicles in service, sales and stock — in one view.",
    span: "lg:col-span-2",
    node: <DashboardMockup compact />,
  },
  {
    title: "Job Card",
    description: "Track a repair from check-in through labour, parts and handover.",
    span: "",
    node: <JobCardMockup />,
  },
  {
    title: "Vehicle Profile",
    description: "Registration, mileage and the current job on the vehicle.",
    span: "",
    node: <VehicleProfileMockup />,
  },
  {
    title: "Service History",
    description: "Every service stays attached to the registration number.",
    span: "",
    node: <VehicleHistoryMockup />,
  },
  {
    title: "Inventory",
    description: "See what is on the shelf and what is about to run out.",
    span: "",
    node: <InventoryMockup />,
  },
  {
    title: "Customer Profile",
    description: "People, vehicles and balances in a single record.",
    span: "",
    node: <CustomerMockup />,
  },
  {
    title: "Invoice",
    description: "Quotations, invoices and outstanding amounts on the job.",
    span: "",
    node: <InvoiceMockup />,
  },
  {
    title: "Reports",
    description: "A clear picture of jobs, sales and garage performance.",
    span: "",
    node: <ReportsMockup />,
  },
];

export function GaragePreview() {
  return (
    <section id="preview" className="scroll-mt-20 border-b border-line bg-paper">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          What it looks like once you have work
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-8 text-mute">
          These screens use sample work so you can see the shape of a busy day.
          Your own garage will not contain these jobs. Sign up and the books are
          blank until you write in them.
        </p>
        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {previews.map((preview) => (
            <li key={preview.title} className={preview.span}>
              <figure>
                {preview.node}
                <figcaption className="mt-3">
                  <p className="text-sm font-medium text-ink">{preview.title}</p>
                  <p className="mt-1 text-sm text-mute">{preview.description}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
