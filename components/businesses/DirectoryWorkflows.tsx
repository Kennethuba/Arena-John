import { directoryWorkflows } from "@/lib/directory";

export function DirectoryWorkflows() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
              Different businesses. Different workflows.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-mute lg:col-span-6">
            BusinessOS changes what matters depending on what your business
            actually does.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {directoryWorkflows.map((workflow) => (
            <article
              key={workflow.name}
              className="border-t border-ink pt-6"
            >
              <h3 className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink">
                {workflow.name}
              </h3>
              <ol className="mt-8">
                {workflow.steps.map((step, index) => (
                  <li key={step} className="flex flex-col">
                    <span className="font-serif text-[1.65rem] leading-tight tracking-tight text-ink sm:text-[1.85rem]">
                      {step}
                    </span>
                    {index < workflow.steps.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="py-2 text-sm text-mute"
                      >
                        ↓
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
