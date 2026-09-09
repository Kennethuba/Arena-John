export const demoGarage = {
  name: "Ridgeway Motors",
  location: "Industrial Area, Nairobi",
};

export const garageKpis = [
  { label: "Today's jobs", value: "12" },
  { label: "Vehicles in service", value: "8" },
  { label: "Pending jobs", value: "4" },
  { label: "Today's sales", value: "KSh 84,200" },
  { label: "Outstanding payments", value: "KSh 31,500" },
  { label: "Low-stock parts", value: "6" },
] as const;

export const garageJobs = [
  {
    id: "JC-1042",
    vehicle: "KCP 197W",
    model: "Toyota Premio",
    customer: "James Mwangi",
    mechanic: "Otieno",
    status: "In service",
    due: "Today, 16:00",
  },
  {
    id: "JC-1041",
    vehicle: "KDA 442M",
    model: "Mazda Demio",
    customer: "Amina Hassan",
    mechanic: "Wanjiku",
    status: "Waiting parts",
    due: "Tomorrow",
  },
  {
    id: "JC-1040",
    vehicle: "KCE 881A",
    model: "Subaru Forester",
    customer: "Peter Njoroge",
    mechanic: "Kamau",
    status: "Ready",
    due: "Today, 12:30",
  },
  {
    id: "JC-1038",
    vehicle: "KDG 215C",
    model: "Nissan X-Trail",
    customer: "Grace Atieno",
    mechanic: "Otieno",
    status: "Inspection",
    due: "Today, 17:45",
  },
] as const;

export const garageParts = [
  { name: "Oil filter — Premio", sku: "OF-1507", qty: 2, status: "Low" },
  { name: "Front brake pads", sku: "BP-440", qty: 1, status: "Low" },
  { name: "Spark plugs (set)", sku: "SP-16", qty: 3, status: "Low" },
  { name: "5W-30 engine oil", sku: "EO-5W30", qty: 18, status: "OK" },
] as const;

export const garageHistory = [
  { date: "12 Aug 2026", job: "JC-0988", work: "Service + oil", km: "86,420" },
  { date: "3 Mar 2026", job: "JC-0761", work: "Brake pads", km: "79,110" },
  { date: "18 Nov 2025", job: "JC-0544", work: "Battery replacement", km: "71,860" },
] as const;

export const garageFeatures = [
  {
    name: "Vehicle Management",
    description:
      "Manage customer vehicles, registration numbers, mileage and complete vehicle history.",
    icon: "vehicle",
  },
  {
    name: "Job Cards",
    description:
      "Create, assign and track repair jobs from vehicle check-in through completion.",
    icon: "jobs",
  },
  {
    name: "Customers",
    description:
      "Keep customer information, vehicles and service history organised.",
    icon: "customers",
  },
  {
    name: "Spare Parts & Inventory",
    description:
      "Track parts, stock levels, purchases, usage and low-stock items.",
    icon: "inventory",
  },
  {
    name: "Sales & Invoicing",
    description:
      "Handle quotations, invoices, payments and outstanding balances.",
    icon: "sales",
  },
  {
    name: "Mechanics & Staff",
    description: "Assign work and monitor job progress.",
    icon: "staff",
  },
  {
    name: "Service History",
    description:
      "Maintain a complete history of repairs and maintenance for every vehicle.",
    icon: "history",
  },
  {
    name: "Reports",
    description:
      "Understand sales, jobs, inventory, customers and overall garage performance.",
    icon: "reports",
  },
] as const;

export const garageSteps = [
  {
    number: "01",
    title: "Put your name on it",
    text: "Open a workspace. Add the garage name, the company, the logo. The books are empty.",
  },
  {
    number: "02",
    title: "Take work the way the bay already does",
    text: "Customer, vehicle, job card, parts, invoice. A guide in the corner will walk a first day or a stuck repair.",
  },
  {
    number: "03",
    title: "Read numbers that came from you",
    text: "Reports fill after jobs, not before. You subscribe so those records stay with this garage.",
  },
] as const;

export const garageBenefits = [
  {
    title: "Less paperwork",
    text: "Job cards, invoices and records live in one place instead of notebooks.",
  },
  {
    title: "Faster job tracking",
    text: "See whether a vehicle is in inspection, waiting on parts or ready for collection.",
  },
  {
    title: "Organised customer records",
    text: "Find a customer, their vehicles and past work without digging through files.",
  },
  {
    title: "Complete vehicle histories",
    text: "Every visit stays with the registration number for the next service.",
  },
  {
    title: "Better spare-parts control",
    text: "Stock levels update as parts are used, so shortages show up in time.",
  },
  {
    title: "Easier billing",
    text: "Quotations and invoices stay attached to the job that created them.",
  },
  {
    title: "Clear payment tracking",
    text: "See what has been paid, what is due and what is still outstanding.",
  },
  {
    title: "Useful business reports",
    text: "Read jobs, sales, inventory and performance without exporting spreadsheets.",
  },
] as const;

export const garageCapabilities = [
  {
    title: "Job cards that follow the vehicle",
    text: "Open a job at check-in, assign a technician, add parts and labour, then close it when the car is ready. Every stage stays on the same card.",
    image: "/images/garage/job-card.jpg",
    alt: "Mechanic filling a job card on a clipboard beside a tablet showing active garage jobs.",
  },
  {
    title: "Parts on the shelf, not in a notebook",
    text: "Stock levels move when parts are used on a job. See what is low before a repair stalls waiting for a filter or a pad.",
    image: "/images/garage/parts.jpg",
    alt: "Organised spare-parts shelves with oil, filters and labelled stock in a garage storeroom.",
  },
  {
    title: "Customers, vehicles and balances together",
    text: "Find a person, their registration numbers, what they owe and what was done last visit — without hunting through files.",
    image: "/images/garage/customer.jpg",
    alt: "Service advisor at a garage reception counter with a laptop and printed invoice.",
  },
  {
    title: "Work assigned, not shouted across the bay",
    text: "See who is on which job, what is waiting on parts, and which vehicles are ready for collection.",
    image: "/images/garage/mechanic.jpg",
    alt: "Two mechanics reviewing a job beside a hatchback with the bonnet open.",
  },
] as const;

export const garageReports = [
  {
    name: "Sales",
    shows: "Daily, weekly and monthly sales from completed jobs.",
    answers: "How much did the workshop take in, and is this week ahead of last week?",
  },
  {
    name: "Jobs",
    shows: "Open, in-service, waiting-parts, ready and completed jobs.",
    answers: "Where is the work stuck, and how many cars left the bay today?",
  },
  {
    name: "Outstanding payments",
    shows: "Invoices due, partly paid and overdue, by customer.",
    answers: "Who still owes the garage, and for which job?",
  },
  {
    name: "Mechanic activity",
    shows: "Jobs assigned, in progress and finished per technician.",
    answers: "Who is loaded, and who has capacity?",
  },
  {
    name: "Parts & inventory",
    shows: "Stock on hand, parts used on jobs, and low-stock items.",
    answers: "What is about to run out before the next purchase?",
  },
  {
    name: "Labour vs parts",
    shows: "Revenue split between labour and spare parts.",
    answers: "Is the garage earning from work, from parts, or both?",
  },
  {
    name: "Quotations",
    shows: "Quotes raised, approved, declined and converted to jobs.",
    answers: "Which estimates turned into actual work?",
  },
  {
    name: "Service due",
    shows: "Vehicles approaching mileage or date for the next service.",
    answers: "Who should be reminded before they go elsewhere?",
  },
  {
    name: "Customer history",
    shows: "Repeat visits, vehicles owned and lifetime spend.",
    answers: "Which customers keep coming back?",
  },
  {
    name: "Workshop performance",
    shows: "Vehicles in service, jobs completed, and average turnaround.",
    answers: "Is the bay busy, idle, or backed up?",
  },
] as const;

export const garageProcess = [
  {
    phase: "Check-in",
    steps: ["Customer", "Vehicle", "Inspection", "Diagnosis"],
  },
  {
    phase: "Workshop",
    steps: [
      "Quotation",
      "Approval",
      "Job Card",
      "Technician",
      "Parts & Labour",
      "Repair",
      "Quality Check",
    ],
  },
  {
    phase: "Close-out",
    steps: ["Invoice", "Payment", "Vehicle Handover", "Service History"],
  },
] as const;
