import { PageHeader, Ornament } from "@/components/page-header";
import { SectionLabel, Tag, HalftonePlaceholder } from "@/components/news-bits";
import { projects } from "@/lib/portfolio-data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Projects — Nitin Agrawal",
  description:
    "Projects including websites, web applications, and API-based systems built using React, PHP, WordPress, and Laravel.",
};

export default function ProjectsPage() {
  const [hero, ...rest] = projects;

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={
          <>
            Selected <span className="italic font-normal">Work</span>
          </>
        }
        lede="These are some of the projects I have worked on, including websites, web applications, and backend systems built based on real requirements."
        meta="Recent projects"
      />


{/* Hero filing */}
<section className="border-b border-foreground">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
    <div className="border-2 border-foreground">
      <div className="flex items-center justify-between gap-4 border-b border-foreground bg-foreground px-5 py-2 text-background sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em]">
          <span className="text-accent">&#x25A0;</span> Project &middot; No. 01
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Latest Project
        </p>
      </div>


      <Link href={hero.link || "#"} target="_blank" className="block group">
        <div className="grid grid-cols-1 lg:grid-cols-12 cursor-pointer">

          {/* LEFT CONTENT */}
          <div className="border-b border-foreground p-6 sm:p-10 lg:col-span-7 lg:border-b-0 lg:border-r group-hover:bg-neutral-100 transition-colors">
            <h2 className="mt-3 font-serif text-4xl font-black leading-[0.95] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {hero.title}
            </h2>

            <p className="mt-5 font-body text-lg italic leading-relaxed text-neutral-700">
              {hero.blurb}
            </p>

            <p className="mt-5 font-body text-base leading-relaxed text-neutral-800 sm:text-lg">
              {hero.description}
            </p>

            <ul className="mt-6 grid gap-2 border-t border-foreground pt-5">
              {hero.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 flex-none bg-accent" />
                  <span className="font-body text-base text-neutral-800">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {hero.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="p-5 sm:p-6 lg:col-span-5">
            <figure className="border border-foreground bg-background h-full">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/password-validation.jpg"
                  alt={hero.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <figcaption className="border-t border-foreground px-3 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                View Project — {hero.title}
              </figcaption>
            </figure>
          </div>

        </div>
      </Link>
    </div>
  </div>
</section>

      {/* Remaining filings — 2 column collapsed grid */}
      <section className="border-b border-foreground">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
          <div className="flex items-center justify-between gap-4 border-b border-foreground pb-3">
            <SectionLabel>&#x25A0; Other Work</SectionLabel>
            <SectionLabel className="text-neutral-500">
              {rest.length} projects
            </SectionLabel>
          </div>

          <div className="mt-8 grid grid-cols-1 border border-foreground md:grid-cols-2">
            {rest.map((p, i) => (
              <Link
                href={p.link || "#"}
                target="_blank"
                key={p.slug}
                className="block"
              >
                <article
                  key={p.slug}
                  className="group border-b border-foreground p-6 transition-colors last:border-b-0 hover:bg-neutral-100 sm:p-8 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-foreground md:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                      Project No. {String(i + 2).padStart(2, "0")}
                    </p>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mt-3 font-serif text-3xl font-black leading-[1.05] tracking-tight text-balance sm:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 font-body text-base italic leading-relaxed text-neutral-700">
                    {p.blurb}
                  </p>
                  <p className="mt-4 font-body text-sm leading-relaxed text-neutral-800">
                    {p.description}
                  </p>

                  <ul className="mt-5 grid gap-1.5 border-t border-foreground/40 pt-4">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span
                          className="mt-2 inline-block h-1.5 w-1.5 flex-none bg-accent"
                          aria-hidden
                        />
                        <span className="font-body text-sm text-neutral-800">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl px-4">
        <Ornament />
      </div>
    </>
  );
}
