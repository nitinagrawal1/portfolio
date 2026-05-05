import { PageHeader, Ornament } from "@/components/page-header";
import { SectionLabel } from "@/components/news-bits";
import { experience } from "@/lib/portfolio-data";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export const metadata = {
  title: "Experience — Nitin Agrawal",
  description: "Experience working on web projects including WordPress development, APIs, and web applications using PHP and Laravel.",
}

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title={
          <>
            Work <span className="italic font-normal">Experience</span>
          </>
        }
       lede="I have worked on different web projects including websites, web applications, and backend APIs using PHP, Laravel, and WordPress."
        meta="Recent experience"
      />

      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
          <div className="border border-foreground">
            {experience.map((item, i) => (
              <article
                key={item.company}
                className={`grid grid-cols-1 lg:grid-cols-12 ${
                  i !== experience.length - 1
                    ? "border-b-2 border-foreground"
                    : ""
                }`}
              >
                {/* Dateline column */}
                <div className="border-b border-foreground p-6 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                    Entry {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-foreground">
                    <Calendar
                      className="h-4 w-4"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    {item.period}
                  </p>

                  <div className="mt-6 border-t border-foreground pt-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                      Company
                    </p>
                    <p className="mt-2 inline-flex items-center gap-2 font-serif text-2xl font-black leading-tight">
                      <Briefcase
                        className="h-5 w-5"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      {item.company}
                    </p>
                    <p className="mt-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-neutral-600">
                      <MapPin
                        className="h-3 w-3"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Story column */}
                <div className="p-6 lg:col-span-8 lg:p-10">
                  <SectionLabel accent>&#x25A0; Responsibilities</SectionLabel>
                  <h2 className="mt-3 font-serif text-3xl font-black leading-[0.95] tracking-tight text-balance sm:text-4xl lg:text-5xl">
                    {item.role}
                  </h2>
<p className="mt-4 font-body text-base leading-relaxed text-neutral-700 sm:text-lg">
I worked on projects as {item.role} at <strong>{item.company}</strong>, handling development tasks based on project requirements.
</p>

                  <ul className="mt-6 grid gap-3 border-t border-foreground pt-5">
                    {item.bullets.map((b, j) => (
                      <li key={b} className="flex items-start gap-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] tabular-nums text-accent">
                          {String(j + 1).padStart(2, "0")}.
                        </span>
                        <span className="font-body text-base leading-relaxed text-neutral-800 sm:text-lg">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <Ornament />
        </div>
      </section>
    </>
  );
}
