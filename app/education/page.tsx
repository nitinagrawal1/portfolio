import { PageHeader, Ornament } from "@/components/page-header"
import { SectionLabel } from "@/components/news-bits"
import { education } from "@/lib/portfolio-data"
import { GraduationCap } from "lucide-react"

export const metadata = {
  title: "Education — Nitin Agrawal",
  description: "Educational background including MCA and BCA along with academic learning in computer applications.",
}

export default function EducationPage() {
  return (
    <>
      <PageHeader
eyebrow="Education"
title={
  <>
    Academic <span className="italic font-normal">Background</span>
  </>
}
lede="My educational background includes postgraduate and undergraduate studies in computer applications along with practical learning through projects."
meta="MCA and BCA"
      />

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
          {/* Transcript table */}
          <div className="border-2 border-foreground">
            <div className="flex items-center justify-between gap-4 border-b border-foreground bg-foreground px-5 py-3 text-background sm:px-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em]">
                <GraduationCap className="mr-2 inline h-3 w-3" strokeWidth={1.5} aria-hidden />
               Education Details

              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                Latest to earliest
              </p>
            </div>

            <ol>
              {education.map((item, i) => (
                <li
                  key={item.school + item.degree + i}
                  className={`grid grid-cols-1 lg:grid-cols-12 ${
                    i !== education.length - 1 ? "border-b border-foreground" : ""
                  }`}
                >
                  {/* Index */}
                  <div className="border-b border-foreground p-5 sm:p-6 lg:col-span-2 lg:border-b-0 lg:border-r">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                      Index
                    </p>
                    <p className="mt-2 font-serif text-5xl font-black italic leading-none text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>

                  {/* Course */}
                  <div className="border-b border-foreground p-5 sm:p-6 lg:col-span-6 lg:border-b-0 lg:border-r">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                      Course
                    </p>
                    <h2 className="mt-3 font-serif text-2xl font-black leading-tight tracking-tight text-balance sm:text-3xl">
                      {item.degree}
                    </h2>
                    <p className="mt-2 font-mono text-xs uppercase tracking-[0.25em] text-neutral-700">
                      {item.school}
                    </p>
                    {item.detail && (
                      <p className="mt-3 font-body text-sm italic leading-relaxed text-neutral-700">
                        {item.detail}
                      </p>
                    )}
                  </div>

                  {/* Duration */}
                  <div className="p-5 sm:p-6 lg:col-span-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                      Duration
                    </p>
                    <p className="mt-3 font-serif text-2xl font-bold leading-none">{item.period}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Footnote */}
          <div className="mt-8 border-t border-foreground pt-4">
<SectionLabel className="text-neutral-500">
  Additional Learning
</SectionLabel>

<p className="mt-3 max-w-2xl font-body text-base italic leading-relaxed text-neutral-700">
  Along with my education, I have learned by working on real projects involving websites, applications, and APIs.
</p>
          </div>

          <Ornament />
        </div>
      </section>
    </>
  )
}
