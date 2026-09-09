import { businesses } from "@/lib/content";

const directoryCopy: Record<
  (typeof businesses)[number]["slug"],
  {
    name: string;
    shortLabel: string;
    description: string;
    workflows: string[];
  }
> = {
  "auto-garage": {
    name: "Auto Garage",
    shortLabel: "Garage",
    description:
      "Manage vehicles, job cards, technicians, parts, customer history, quotations, invoices and payments from one place.",
    workflows: [
      "Job Cards",
      "Vehicle History",
      "Parts & Inventory",
      "Technician Work",
      "Invoicing",
      "Payments",
    ],
  },
  pharmacy: {
    name: "Pharmacy",
    shortLabel: "Pharmacy",
    description:
      "Keep sales, stock, batches, expiry dates, suppliers, customers and pharmacy-specific records organised in one system.",
    workflows: [
      "Stock Management",
      "Batch Tracking",
      "Expiry Tracking",
      "Purchases",
      "Sales",
      "Reports",
    ],
  },
  sacco: {
    name: "SACCO",
    shortLabel: "SACCO",
    description:
      "Manage members, savings, loans, repayments, statements, transactions and financial reporting with workflows designed around SACCO operations.",
    workflows: [
      "Members",
      "Savings",
      "Loans",
      "Repayments",
      "Statements",
      "Reports",
    ],
  },
  hardware: {
    name: "Hardware & Construction",
    shortLabel: "Hardware",
    description:
      "Handle large inventories, quotations, customer credit, supplier purchases, deliveries, sales and construction-related products with ease.",
    workflows: [
      "Inventory",
      "Purchases",
      "Quotations",
      "Customer Credit",
      "Deliveries",
      "Sales",
    ],
  },
  "car-wash": {
    name: "Car Wash",
    shortLabel: "Car Wash",
    description:
      "Track customers, vehicles, services, bookings, payments, packages and repeat visits without losing track of the day's work.",
    workflows: [
      "Customers",
      "Vehicles",
      "Services",
      "Bookings",
      "Payments",
      "Service History",
    ],
  },
  tailor: {
    name: "Tailor",
    shortLabel: "Tailor",
    description:
      "Manage customers, measurements, fabrics, orders, fittings, production stages, deposits and deliveries from one workflow.",
    workflows: [
      "Customer Measurements",
      "Orders",
      "Fabrics",
      "Fittings",
      "Production",
      "Delivery",
    ],
  },
  retail: {
    name: "Retail",
    shortLabel: "Retail",
    description:
      "Manage products, purchases, sales, stock, customers, suppliers, payments and business reports from one connected system.",
    workflows: [
      "Products",
      "Inventory",
      "Purchases",
      "Sales",
      "Customers",
      "Reports",
    ],
  },
};

export const directoryBusinesses = businesses.map((business) => ({
  ...business,
  ...directoryCopy[business.slug],
}));

export const mosaicLayout: {
  slug: (typeof businesses)[number]["slug"];
  className: string;
}[] = [
  { slug: "auto-garage", className: "col-span-2 row-span-2" },
  { slug: "pharmacy", className: "col-span-1" },
  { slug: "sacco", className: "col-span-1" },
  { slug: "hardware", className: "col-span-1" },
  { slug: "car-wash", className: "col-span-1" },
  { slug: "tailor", className: "col-span-1 sm:col-span-2" },
  { slug: "retail", className: "col-span-1 sm:col-span-2" },
];

export const directoryWorkflows = [
  {
    name: "Auto Garage",
    steps: [
      "Customer",
      "Vehicle",
      "Job Card",
      "Technician",
      "Parts Used",
      "Invoice",
      "Payment",
    ],
  },
  {
    name: "Pharmacy",
    steps: [
      "Supplier",
      "Purchase",
      "Batch",
      "Expiry",
      "Stock",
      "Sale",
      "Report",
    ],
  },
  {
    name: "SACCO",
    steps: [
      "Member",
      "Savings",
      "Loan",
      "Repayment",
      "Statement",
      "Financial Report",
    ],
  },
] as const;

export const whyPoints = [
  {
    number: "01",
    title: "The right records",
    text: "A garage cares about plates and job cards. A pharmacy cares about batches. Those are not the same drawer.",
  },
  {
    number: "02",
    title: "The right order",
    text: "Work moves in the order the floor already uses — not a generic sale, then a generic report.",
  },
  {
    number: "03",
    title: "Your own numbers",
    text: "Reports read the company that opened the workspace. A new person does not inherit a sample week.",
  },
] as const;
