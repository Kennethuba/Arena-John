export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/businesses", label: "Businesses" },
  { href: "/features", label: "Features" },
  { href: "/security", label: "Security" },
  { href: "/pricing", label: "Pricing" },
] as const;

export const footerLinks = {
  product: [
    { href: "/", label: "Home" },
    { href: "/businesses", label: "Businesses" },
    { href: "/features", label: "Features" },
    { href: "/security", label: "Security" },
    { href: "/pricing", label: "Pricing" },
  ],
  company: [
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
} as const;

export const businesses = [
  {
    slug: "auto-garage",
    name: "Auto Garage",
    href: "/businesses/auto-garage",
    image: "/images/businesses/auto-garage.jpg",
    alt: "Mechanic inspecting the engine of a silver saloon in a professional auto garage, with a job card and tools on the workbench.",
    description:
      "The workshop you already run: vehicles, job cards, parts, labour, customers and the next service — empty until a car comes in.",
  },
  {
    slug: "pharmacy",
    name: "Pharmacy",
    href: "/businesses/pharmacy",
    image: "/images/businesses/pharmacy.jpg",
    alt: "Pharmacist in a white coat reviewing a prescription at a dispensing counter in a well-stocked pharmacy.",
    description:
      "Track medicines, batches, expiry dates, stock, suppliers, sales and inventory movement.",
  },
  {
    slug: "sacco",
    name: "SACCO / Financial Institution",
    href: "/businesses/sacco",
    image: "/images/businesses/sacco.jpg",
    alt: "SACCO officer assisting a member with paperwork at a wooden teller counter while others wait in the branch.",
    description:
      "Manage members, savings, loans, guarantees, repayments, statements and financial records.",
  },
  {
    slug: "hardware",
    name: "Hardware / Construction",
    href: "/businesses/hardware",
    image: "/images/businesses/hardware.jpg",
    alt: "Hardware shopkeeper checking stock on a clipboard beside pipes, paint, tools and construction materials.",
    description:
      "Manage products, quotations, purchases, stock, suppliers, customer credit and sales.",
  },
  {
    slug: "car-wash",
    name: "Car Wash",
    href: "/businesses/car-wash",
    image: "/images/businesses/car-wash.jpg",
    alt: "Attendant pressure-washing a white SUV in an outdoor car wash bay with towels and membership cards nearby.",
    description:
      "Manage vehicles, services, payments, memberships, repeat visits and customer history.",
  },
  {
    slug: "tailor",
    name: "Tailor",
    href: "/businesses/tailor",
    image: "/images/businesses/tailor.jpg",
    alt: "Tailor sewing at a machine beside a navy suit on a mannequin, fabrics, patterns and a measuring tape.",
    description:
      "Manage customers, measurements, orders, fabrics, deposits, production and collections.",
  },
  {
    slug: "retail",
    name: "Retail",
    href: "/businesses/retail",
    image: "/images/businesses/retail.jpg",
    alt: "Retail shopkeeper using a laptop and barcode scanner at a counter in a neighbourhood shop stocked with goods.",
    description:
      "Manage products, purchases, stock, customers, sales and business performance.",
  },
] as const;

export const workflows = [
  {
    slug: "auto-garage",
    name: "Auto Garage",
    summary: "Work follows the vehicle, not a generic sale.",
    image: "/images/businesses/auto-garage.jpg",
    accent: "#B45309",
    steps: [
      "Customer",
      "Vehicle",
      "Inspection",
      "Diagnosis",
      "Job Card",
      "Repair",
      "Payment",
      "Service History",
      "Reminder",
    ],
  },
  {
    slug: "pharmacy",
    name: "Pharmacy",
    summary: "Every sale is tied to a batch and an expiry date.",
    image: "/images/businesses/pharmacy.jpg",
    accent: "#0F766E",
    steps: [
      "Supplier",
      "Product",
      "Batch",
      "Expiry",
      "Stock",
      "Sale",
      "Stock Update",
      "Expiry Monitoring",
    ],
  },
  {
    slug: "sacco",
    name: "SACCO",
    summary: "Money moves through members, not a shop counter.",
    image: "/images/businesses/sacco.jpg",
    accent: "#166534",
    steps: [
      "Member",
      "Savings",
      "Loan",
      "Approval",
      "Disbursement",
      "Repayment",
      "Statement",
    ],
  },
] as const;

export const features = [
  {
    name: "Your name on the door",
    description: "Garage name, legal name, address and logo — not a borrowed brand.",
    icon: "dashboard",
  },
  {
    name: "Empty books on day one",
    description: "A new company has no clients, jobs or sales. That is the truth of opening.",
    icon: "customers",
  },
  {
    name: "Work in the right order",
    description: "Customer, vehicle, job, parts, invoice — the way the floor already moves.",
    icon: "rules",
  },
  {
    name: "Stock that belongs to you",
    description: "Only the parts you keep. Low stock is a warning, not a catalogue.",
    icon: "inventory",
  },
  {
    name: "Money against the job",
    description: "What was billed, what was paid, what is still outstanding — on that visit.",
    icon: "payments",
  },
  {
    name: "Reports from your work",
    description: "Numbers stay at zero until you have done the work. No sample week.",
    icon: "reports",
  },
  {
    name: "A guide on the floor",
    description: "Ask how to take in a car, or what to do when someone has not paid.",
    icon: "reminders",
  },
  {
    name: "Staff you choose",
    description: "People reach only the parts of the company you open for them.",
    icon: "permissions",
  },
  {
    name: "A trail you can read",
    description: "Who changed a job, an invoice or a stock level, and when.",
    icon: "audit",
  },
  {
    name: "Suppliers, separately",
    description: "Who you buy from is not who brings a car. The books stay distinct.",
    icon: "suppliers",
  },
  {
    name: "Purchases",
    description: "Orders you place, against your own suppliers, at your own cost.",
    icon: "purchases",
  },
  {
    name: "Sales",
    description: "Invoices that come from work you actually finished.",
    icon: "sales",
  },
] as const;

export const securityPoints = [
  {
    title: "Role-based access",
    text: "People only reach the parts of the business they are responsible for.",
  },
  {
    title: "Permissions",
    text: "View, edit and approve can be granted separately, not as an all-or-nothing switch.",
  },
  {
    title: "Business separation",
    text: "Each email is a company. A new person does not inherit another garage’s clients.",
  },
  {
    title: "Audit trails",
    text: "Sensitive actions leave a trail that can be reviewed later.",
  },
  {
    title: "Secure authentication",
    text: "Access starts with a controlled sign-in, not a shared password on the wall.",
  },
  {
    title: "Controlled access",
    text: "When someone leaves the business, their access can be closed immediately.",
  },
] as const;
