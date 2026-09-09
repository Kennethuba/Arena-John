import type { ReactNode } from "react";

export function StoryPage({
  kicker,
  title,
  lead,
  children,
}: {
  kicker?: string;
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <main id="main">
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-site px-5 py-16 sm:px-8 lg:py-24">
          {kicker ? (
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-mute">
              {kicker}
            </p>
          ) : null}
          <h1 className="mt-4 max-w-3xl font-serif text-4xl tracking-tight text-ink sm:text-6xl sm:leading-[1.08]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-mute">{lead}</p>
          <div className="mt-14">{children}</div>
        </div>
      </section>
    </main>
  );
}
