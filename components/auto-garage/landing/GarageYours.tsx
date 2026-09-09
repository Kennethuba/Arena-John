const points = [
  {
    title: "Your mark",
    text: "Garage name, legal name, address, city and logo. The sidebar should look like the board outside the bay — not like a product called Auto Garage.",
  },
  {
    title: "Empty on purpose",
    text: "A new person has no clients. The dashboard shows zeros because no car has come in. Sample jobs stay on this landing page, not in your books.",
  },
  {
    title: "Someone to ask",
    text: "Inside the workspace, a guide explains the floor: first car in, a job waiting on parts, a customer who has not paid. It does not invent work.",
  },
] as const;

export function GarageYours() {
  return (
    <section id="yours" className="scroll-mt-20 border-b border-line bg-paper">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          Day one is empty. That is the point.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-8 text-mute">
          You pay for BusinessOS. What you put in — customers, plates, job cards
          — is the garage you already run.
        </p>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {points.map((point) => (
            <li key={point.title} className="border-t border-line pt-6">
              <h3 className="text-lg font-medium text-ink">{point.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-7 text-mute">
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
