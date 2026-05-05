import { PageHeader, Ornament } from "@/components/page-header";
import { SectionLabel, Marquee } from "@/components/news-bits";
import { skillGroups } from "@/lib/portfolio-data";

export const metadata = {
  title: "Skills — Nitin Agrawal",
  description: "Technologies and tools used in building websites, web applications, and API-based systems.",
}
export default function SkillsPage() {
  const allSkills = skillGroups.flatMap((g) => g.skills);
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title={
          <>
            Technical <span className="italic font-normal">Skills</span>
          </>
        }
        lede="These are the technologies and tools I have used while working on different projects including websites, applications, and APIs."
        meta="Frontend, Backend and Tools"
      />

      {/* Marquee of all tools */}
      <Marquee items={allSkills.slice(0, 18)} />

      {/* Catalogue table */}
      <section className="border-b border-foreground">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
          <div className="border border-foreground">
            {skillGroups.map((group, i) => (
              <div
                key={group.title}
                className={`grid grid-cols-1 lg:grid-cols-12 ${
                  i !== skillGroups.length - 1
                    ? "border-b border-foreground"
                    : ""
                }`}
              >
                <div className="border-b border-foreground p-6 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                    Category {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-black leading-[0.95] tracking-tight sm:text-4xl">
                    {group.title}
                  </h2>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                    {group.skills.length} technologies
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-8">
                  {group.skills.map((s, j) => (
                    <li
                      key={s}
                      className="group relative flex items-center gap-3 border-b border-r border-foreground p-4 transition-colors last:border-b-0 hover:bg-neutral-100 sm:p-5 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(3n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 sm:border-b sm:[&:nth-last-child(-n+1)]:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-last-child(-n+3)]:border-b-0"
                    >
                      <span className="font-mono text-[10px] tabular-nums text-neutral-400">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-base font-bold text-foreground transition-colors group-hover:text-accent">
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inverted "Currently Sharpening" */}
      <section className="border-b border-foreground bg-foreground text-background">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-400">
                Learning
              </p>

              <h2 className="mt-3 font-serif text-4xl font-black leading-[0.95] tracking-tight text-balance sm:text-5xl">
                Improving{" "}
                <span className="italic font-normal text-accent">skills</span>.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:border-l lg:border-background/40 lg:pl-10">
<p className="font-body text-lg leading-relaxed text-neutral-200 sm:text-xl">
  I continue to improve my skills by working on real projects involving websites, applications, and API integrations. I focus on building better solutions and understanding practical use cases.
</p>
              <ol className="mt-8 grid grid-cols-1 gap-0 border border-background sm:grid-cols-3">
                {[
                  {
                    n: "01",
                    t: "React",
                    d: "Building components and improving state management",
                  },
                  {
                    n: "02",
                    t: "JavaScript",
                    d: "Improving core concepts and problem solving",
                  },
                  {
                    n: "03",
                    t: "Projects",
                    d: "Working on real world web projects and API based systems",
                  },
                ].map((s, i, arr) => (
                  <li
                    key={s.n}
                    className={`p-5 ${i !== arr.length - 1 ? "border-b border-background sm:border-b-0 sm:border-r" : ""}`}
                  >
                    <p className="font-serif text-3xl font-black italic text-accent">
                      {s.n}
                    </p>
                    <p className="mt-2 font-serif text-xl font-bold">{s.t}</p>
                    <p className="mt-1 font-body text-sm text-neutral-300">
                      {s.d}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl px-4">
        <Ornament />
      </div>
    </>
  );
}
