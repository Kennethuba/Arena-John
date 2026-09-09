const points = [
  {
    title: "You pay for the software",
    text: "BusinessOS is a subscription. It is not a free sample of another company’s day, and it is not a shared dashboard with everyone else’s clients in it.",
  },
  {
    title: "The business inside it is yours",
    text: "Your garage name. Your logo. Your address. When a new person signs up, they get empty books — because they do not have customers yet.",
  },
  {
    title: "The floor still has to be run",
    text: "A guide sits in the workspace to explain how a job, a part and an unpaid invoice are supposed to move. It does not invent work for you.",
  },
] as const;

export function Ownership() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-mute">
            The arrangement
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            Own the workspace. Subscribe to keep it.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-mute">
            Most software drops you into someone else’s demo. BusinessOS opens a
            company that has not traded yet — then stays with that company as
            the work arrives.
          </p>
        </div>
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {points.map((point, index) => (
            <li key={point.title} className="border-t border-line pt-6">
              <p className="font-serif text-4xl text-ink/25">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-medium text-ink">{point.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-7 text-mute">
                {point.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
