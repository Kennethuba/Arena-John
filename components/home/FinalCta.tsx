export function FinalCta() {
  return (
    <section id="get-started" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-site px-5 py-24 sm:px-8 lg:py-32">
        <h2 className="max-w-3xl font-serif text-4xl tracking-tight text-ink sm:text-6xl sm:leading-[1.08]">
          Open a company that has not traded yet.
        </h2>
        <p className="mt-6 max-w-xl text-xl text-mute">
          Then fill it with your own work. Auto Garage is ready. The other
          trades follow the same idea.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="/get-started"
            className="inline-flex items-center justify-center bg-ink px-5 py-3 text-[0.95rem] font-medium text-white transition-colors hover:bg-[#2c2a27]"
          >
            Get Started
          </a>
          <a
            href="#supported-businesses"
            className="inline-flex items-center justify-center border border-ink px-5 py-3 text-[0.95rem] font-medium text-ink transition-colors hover:bg-paper"
          >
            See the trades
          </a>
        </div>
      </div>
    </section>
  );
}
