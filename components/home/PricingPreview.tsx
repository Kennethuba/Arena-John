const plans = [
  {
    name: "Workshop",
    price: "From KSh 2,500 / month",
    text: "One business, your name on it, empty books until you work.",
  },
  {
    name: "Floor",
    price: "From KSh 6,500 / month",
    text: "Staff can sign in. The records still belong to the company.",
  },
  {
    name: "House",
    price: "Talk to us",
    text: "Several branches. Each one keeps its own books.",
  },
] as const;

export function PricingPreview() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            You subscribe so the workspace stays yours.
          </h2>
          <p className="mt-5 text-lg leading-8 text-mute">
            Payment is how you keep the system. It is not how you rent someone
            else’s clients. Figures below are a starting point, not a checkout.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <li key={plan.name} className="border border-line bg-white p-6">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-mute">
                {plan.name}
              </p>
              <p className="mt-3 text-xl font-medium text-ink">{plan.price}</p>
              <p className="mt-3 text-sm leading-6 text-mute">{plan.text}</p>
            </li>
          ))}
        </ul>
        <a
          href="/pricing"
          className="mt-8 inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-ink"
        >
          How subscription works
          <span aria-hidden="true" className="ml-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
