import { garageRoutes } from "@/lib/garage-routes";

export type GuideTurn = {
  role: "user" | "guide";
  text: string;
};

const scenarios = [
  {
    keys: ["empty", "blank", "no data", "nothing", "zero", "why is"],
    answer: (name: string) =>
      `${name} starts with empty books because it is a new company. There are no clients, jobs, parts or sales until you add them. That is not a missing demo — it is your garage, unopened. Put your logo in Settings, then add a customer, their vehicle, and a job card.`,
  },
  {
    keys: ["logo", "brand", "company details", "customise", "customize", "name"],
    answer: () =>
      "Open Settings. That page is the garage identity: name, legal company name, phone, address, city, a short line under the name, and a logo. The sidebar and invoices should look like the business you already run — BusinessOS is only the software you subscribe to.",
  },
  {
    keys: ["first car", "first customer", "start", "how do i use", "get started", "walk-in"],
    answer: () =>
      "A normal first day: 1) Settings — name and logo. 2) Customers — the person at the counter. 3) Vehicles — their number plate, attached to that person. 4) Job Cards — what is wrong and who is working on it. 5) Inventory if you use a part. 6) Sales — invoice when the car is ready. Do not start with reports. Reports need work to have happened.",
  },
  {
    keys: ["job card", "job cards", "repair", "bay"],
    answer: () =>
      "A job card is the work, not the sale. Open it on a vehicle that already exists. Set Scheduled when the car is booked, In Progress when a technician is on it, Waiting Parts when the bay is stuck, Ready when the owner can collect, Completed when it has left. Service History only shows Ready and Completed jobs.",
  },
  {
    keys: ["waiting parts", "no parts", "out of stock", "stalled"],
    answer: () =>
      "Business case: the car is on the lift and the filter is not on the shelf. Mark the job Waiting Parts so the dashboard shows the stall. Add or restock the part in Inventory. When the part arrives, put the job back to In Progress. Do not close the job and open another one — the history belongs to this visit.",
  },
  {
    keys: ["hasn't paid", "hasnt paid", "outstanding", "debt", "owe", "payment"],
    answer: () =>
      "Business case: the work is done, the owner says they will pay on Friday. Create the invoice in Sales as Due, not Paid. Outstanding Payments on the dashboard is that number. When the money comes, record payment on that same invoice. Do not create a second invoice to mark it paid.",
  },
  {
    keys: ["low stock", "inventory", "spare", "parts"],
    answer: () =>
      "Parts are yours, not a catalogue. Add only what you keep. Set a low-stock level that matches how you buy — if you reorder oil at 8 litres, put 8. The dashboard Low Stock list is a warning, not a shopping website. Purchases is where a supplier order will live once you start using it.",
  },
  {
    keys: ["report", "sales overview", "kpi", "numbers"],
    answer: () =>
      "Reports read your books, not sample books. Today's Jobs, sales and outstanding payments stay at zero until you record work. That is the point of owning the system: the numbers are only as true as what you typed. Use Reports after a few jobs, not on the morning you sign up.",
  },
  {
    keys: ["own", "subscribe", "pay", "whose", "businessos"],
    answer: (name: string) =>
      `You subscribe to BusinessOS. ${name} — the name, logo, customers and jobs — is yours. The top bar still says BusinessOS because that is the product you pay for. The sidebar should say your garage. Nobody else's clients appear here, because they are not your clients.`,
  },
  {
    keys: ["customer without", "unknown customer", "no record", "new person"],
    answer: () =>
      "Business case: someone arrives with a car and you have never seen them. Do not open a job on a blank vehicle. Add the person first (Customers), register the plate (Vehicles), then open the job. If they return next month, you find them by name or plate instead of creating a second ghost record.",
  },
  {
    keys: ["reminder", "service due", "follow up"],
    answer: () =>
      "Reminders are for the next visit, not for today's job. When a service is finished, the vehicle's history is the memory. Reminders will hold 'come back at 10,000 km' or 'oil in six months'. A new garage has none, because nobody has been asked to return yet.",
  },
  {
    keys: ["supplier", "purchase"],
    answer: () =>
      "Suppliers are who you buy from. Purchases are those orders. Customers are who bring cars. Do not mix them. A new company has neither until you add them — there is no default wholesaler.",
  },
];

export function welcomeCopy(garageName: string, fresh: boolean) {
  if (fresh) {
    return `This is ${garageName}. There are no clients and no jobs yet — a new company has not done any work. Ask how to take in the first car, how to put your logo on the system, or what to do when a customer has not paid.`;
  }
  return `This is ${garageName}. I can walk a job through the bay, explain a stuck repair, or talk through a business case. Ask in plain language.`;
}

export function suggestedPrompts(pathname: string, fresh: boolean) {
  if (fresh) {
    return [
      "Why is everything empty?",
      "How do I take in the first car?",
      "How do I put my logo on this?",
    ];
  }
  if (pathname.startsWith(garageRoutes.customers)) {
    return ["Someone has arrived with no record", "How do I add a customer?"];
  }
  if (pathname.startsWith(garageRoutes.vehicles)) {
    return ["How do I register a number plate?", "A car without a customer"];
  }
  if (pathname.startsWith(garageRoutes.jobs)) {
    return ["How does a job card work?", "The car is waiting on parts"];
  }
  if (pathname.startsWith(garageRoutes.inventory)) {
    return ["How should I track parts?", "What does low stock mean?"];
  }
  if (pathname.startsWith(garageRoutes.sales)) {
    return ["The customer hasn't paid", "When do I create an invoice?"];
  }
  if (pathname.startsWith(garageRoutes.settings)) {
    return ["What belongs in company details?", "How do I add our logo?"];
  }
  if (pathname.startsWith(garageRoutes.reports)) {
    return ["Why are the reports empty?", "What should I read first?"];
  }
  return [
    "How do I use this garage?",
    "A customer hasn't paid",
    "Parts ran out mid-job",
  ];
}

export function answerGuide(
  question: string,
  garageName: string,
): string {
  const q = question.toLowerCase();
  for (const scenario of scenarios) {
    if (scenario.keys.some((key) => q.includes(key))) {
      return scenario.answer(garageName);
    }
  }
  return `I can help with how ${garageName} is meant to run: first car in, job cards, parts, invoices, and cases like a customer who has not paid. Try one of the questions below, or ask about Settings if you want the garage to look like yours.`;
}
