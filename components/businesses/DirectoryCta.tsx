export function DirectoryCta() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-site px-5 py-24 sm:px-8 lg:py-32">
        <h2 className="max-w-3xl font-serif text-4xl tracking-tight text-ink sm:text-6xl sm:leading-[1.08]">
          Open the trade you already run.
        </h2>
        <p className="mt-6 text-xl text-mute">
          Explore how BusinessOS can fit the way you work.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="/features"
            className="inline-flex items-center justify-center bg-ink px-5 py-3 text-[0.95rem] font-medium text-white transition-colors hover:bg-[#2c2a27]"
          >
            Explore Features
          </a>
          <a
            href="/get-started"
            className="inline-flex items-center justify-center border border-ink px-5 py-3 text-[0.95rem] font-medium text-ink transition-colors hover:bg-paper"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
