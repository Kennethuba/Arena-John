import Image from "next/image";
import { workflows } from "@/lib/content";

export function Workflows() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
              The work has an order. The software follows it.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-mute lg:col-span-6">
            A car cannot be invoiced before it is diagnosed. A tablet cannot be
            sold past its expiry. A loan cannot skip the member. That order is
            the product.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {workflows.map((workflow) => (
            <article
              key={workflow.slug}
              className="border border-line bg-white"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#efece6]">
                <Image
                  src={workflow.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="px-5 py-5">
                <p
                  className="text-[0.72rem] font-medium uppercase tracking-[0.16em]"
                  style={{ color: workflow.accent }}
                >
                  {workflow.name}
                </p>
                <p className="mt-2 text-sm text-mute">{workflow.summary}</p>
                <ol className="mt-6">
                  {workflow.steps.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <div className="flex w-6 shrink-0 flex-col items-center">
                        <span
                          className="flex h-6 w-6 items-center justify-center rounded-full border text-[0.65rem] font-medium"
                          style={{
                            borderColor: workflow.accent,
                            color: workflow.accent,
                          }}
                        >
                          {index + 1}
                        </span>
                        {index < workflow.steps.length - 1 ? (
                          <span
                            className="w-px flex-1"
                            style={{ backgroundColor: `${workflow.accent}33` }}
                            aria-hidden="true"
                          />
                        ) : null}
                      </div>
                      <p
                        className={`text-sm text-ink ${
                          index < workflow.steps.length - 1 ? "pb-4 pt-0.5" : "pt-0.5"
                        }`}
                      >
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
