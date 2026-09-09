import Image from "next/image";
import { garageReports } from "@/lib/garage-demo";

export function GarageReports() {
  return (
    <section id="reports" className="scroll-mt-20 border-b border-line bg-paper">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
              Reports that answer real garage questions
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-mute">
              Not a dump of spreadsheets. Each report is meant to tell you
              something you can act on today — cash, jobs, parts or people.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#efece6] lg:col-span-6">
            <Image
              src="/images/garage/reports.jpg"
              alt="Garage owner reviewing sales and job reports on a laptop in a small workshop office."
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {garageReports.map((report) => (
            <li
              key={report.name}
              className="rounded-xl border border-line bg-white p-5 shadow-[0_8px_24px_rgba(22,21,19,0.04)]"
            >
              <h3 className="text-base font-medium text-ink">{report.name}</h3>
              <p className="mt-2 text-sm leading-6 text-mute">{report.shows}</p>
              <p className="mt-3 text-sm leading-6 text-ink">
                <span className="text-mute">Answers: </span>
                {report.answers}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
