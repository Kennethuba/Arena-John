import { securityPoints } from "@/lib/content";

export function SecurityPreview() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-site gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-[2.75rem] sm:leading-tight">
            Your books stay with your company.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-mute">
            A new login is a new company. Staff only reach what you give them.
            When someone leaves, you close their door — not the whole workshop.
          </p>
          <a
            href="/security"
            className="mt-8 inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-ink"
          >
            Learn about Security
            <span aria-hidden="true" className="ml-1">
              →
            </span>
          </a>
        </div>

        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-7">
          {securityPoints.map((point) => (
            <li key={point.title}>
              <h3 className="text-base font-medium text-ink">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mute">{point.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
