import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, Mail } from "lucide-react";
import {
  SectionHeading,
  SectionLabel,
  Stat,
  Marquee,
  PullQuote,
  Tag,
} from "@/components/news-bits";
import { CardKicker, CardTitle, CardLede } from "@/components/news-card";
import { Ornament } from "@/components/page-header";
import { projects, skillGroups } from "@/lib/portfolio-data";

export default function HomePage() {
  const featured = projects.slice(0, 3);
  const tickerItems = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "PHP",
    "Laravel",
    "WordPress",
    "MySQL",
    "REST API",
    "GitHub",
    "Vercel",
  ];

  return (
    <>
      {/* ============== LEAD ARTICLE ============== */}
      <section className="border-b border-foreground">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
<div className="flex items-center justify-between gap-4 border-b border-foreground pb-4">
  <SectionLabel accent>
    &#x25A0; Portfolio — Web Development
  </SectionLabel>

  <SectionLabel className="text-neutral-500">
    Nitin Agrawal &middot; Freelance
  </SectionLabel>
</div>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Lede */}
            <div className="lg:col-span-8 lg:border-r lg:border-foreground lg:pr-10">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-600">
                Jaipur, Rajasthan, India
              </p>
              <h1 className="mt-4 font-serif text-5xl font-black leading-[0.92] tracking-tight text-balance sm:text-7xl lg:text-[7.5rem]">
                Nitin Agrawal,
                <br />
                <span className="italic font-normal">Freelancer</span>
              </h1>

              <p className="mt-6 font-body text-lg italic leading-relaxed text-neutral-700 sm:text-xl">
I work on web projects where I handle both design and functionality. I build user interfaces, develop features, and connect systems using React, PHP, WordPress, and APIs based on project needs.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t-2 border-foreground pt-6 sm:grid-cols-2">
                <p className="font-body text-base leading-relaxed text-neutral-800 drop-cap drop-cap-accent">
I have worked on different types of projects including websites, web applications, and backend APIs. My work usually involves building layouts, handling forms, and managing data flow between frontend and backend.
                </p>
                <p className="font-body text-base leading-relaxed text-neutral-800">
I also work on custom features like dynamic pages, CMS setup, and API integrations. I use tools like WordPress, ACF, and custom code to build practical and working solutions.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/projects"
                  className="inline-flex min-h-[44px] items-center gap-2 border border-foreground bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-[0.25em] text-background transition-all hover:bg-background hover:text-foreground"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] items-center gap-2 border border-foreground bg-background px-5 py-3 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:bg-foreground hover:text-background"
                >
                  Contact Me
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            {/* Sidebar — By the Numbers */}
            <aside className="lg:col-span-4">
              <div className="border-2 border-foreground">
                <div className="border-b border-foreground bg-foreground px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-background">
                  &#x25A0; By the Numbers
                </div>
                <div className="grid grid-cols-2">
                  <Stat
                    value="1+"
                    label="Years Experience"
                    className="border-b border-r border-foreground"
                  />
                  <Stat
                    value="7+"
                    label="Projects Built"
                    className="border-b border-foreground"
                  />
                  <Stat
                    value="100"
                    label="Lighthouse Score"
                    className="border-r border-foreground"
                  />
                  <Stat value="∞" label="Cups of Chai" />
                </div>
              </div>

              <div className="mt-6 border border-foreground p-5">
                <SectionLabel>Quick Info</SectionLabel>
                <ul className="mt-4 divide-y divide-foreground/30 font-body text-sm">
                  <li className="flex items-center justify-between gap-3 py-2">
                    <span>Position</span>
                    <span className="font-serif text-base font-bold">
                      Freelancer
                    </span>
                  </li>
                  <li className="flex items-center justify-between gap-3 py-2">
                    <span>Company</span>
                    <span className="font-mono text-xs uppercase tracking-widest">
                      Freelance Projects
                    </span>
                  </li>
                  <li className="flex items-center justify-between gap-3 py-2">
                    <span>Location</span>
                    <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest">
                      <MapPin
                        className="h-3 w-3"
                        strokeWidth={1.5}
                        aria-hidden
                      />{" "}
                      Jaipur, Rajasthan, India
                    </span>
                  </li>
                  <li className="flex items-center justify-between gap-3 py-2">
                    <span>Status</span>
                    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
                      <span
                        className="inline-block h-2 w-2 bg-accent"
                        aria-hidden
                      />{" "}
                      Open to Work
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============== TICKER ============== */}
      <Marquee items={tickerItems} />

      {/* ============== FEATURED WORK ============== */}
      <section className="border-b border-foreground">
        <div className="mx-auto max-w-screen-xl px-4 py-14 sm:py-20">
          <SectionHeading
            kicker="&#x25A0; Section B &middot; Selected Projects"
            title={
              <>
                Recent <span className="italic font-normal">Work</span>
              </>
            }
            meta="Continued on Page 04"
          />

          <div className="mt-10 grid grid-cols-1 border border-foreground md:grid-cols-3">
            {featured.map((p, i) => (
              <Link
                key={p.slug}
                href={p.link || "#"}
target="_blank"
                className={`group block p-6 transition-colors hover:bg-neutral-100 sm:p-8 ${
                  i !== featured.length - 1
                    ? "border-b border-foreground md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <CardKicker>
                  Project {String(i + 1).padStart(2, "0")} &middot; {p.tech[0]}
                </CardKicker>
                <CardTitle
                  size="md"
                  className="mt-3 group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-4"
                >
                  {p.title}
                </CardTitle>
                <CardLede className="mt-3">{p.blurb}</CardLede>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.slice(0, 3).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground">
                  View Project
                  <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 border-b-2 border-foreground pb-1 font-mono text-xs uppercase tracking-[0.3em] transition-colors hover:text-accent hover:border-accent"
            >
              All filings on Page 04
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============== PULL QUOTE ============== */}
      <section className="border-b border-foreground">
        <div className="mx-auto max-w-screen-xl px-4">
          <PullQuote cite="Nitin Agrawal, on the craft">
I focus on building simple and useful web solutions that work properly and are easy to maintain.
          </PullQuote>
        </div>
      </section>

      {/* ============== INVERTED — TOOLBOX ============== */}
      <section className="border-b border-foreground bg-foreground text-background">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-20">
          <div className="flex items-center justify-between gap-4 border-b border-background/30 pb-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-400">
              &#x25A0; Section C &middot; Tech Stack
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-400">
              The Stack of Record
            </p>
          </div>
          <h2 className="mt-6 font-serif text-4xl font-black leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Tools and Technologies
            <span className="italic font-normal text-accent"> I Use</span>.
          </h2>
          <p className="mt-4 max-w-2xl font-body text-base text-neutral-300 sm:text-lg">
These are the tools I use while working on different projects. I choose them based on what the project requires.
          </p>

          <div className="mt-10 grid grid-cols-1 border border-background lg:grid-cols-4">
            {skillGroups.map((g, i) => (
              <div
                key={g.title}
                className={`p-6 sm:p-7 ${
                  i !== skillGroups.length - 1
                    ? "border-b border-background lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                  No. {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-black leading-tight">
                  {g.title}
                </h3>
                <ul className="mt-4 space-y-1.5 font-body text-sm text-neutral-200">
                  {g.skills.slice(0, 6).map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span
                        className="inline-block h-1 w-3 bg-accent"
                        aria-hidden
                      />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              href="/skills"
              className="group inline-flex items-center gap-2 border-b-2 border-background pb-1 font-mono text-xs uppercase tracking-[0.3em] text-background transition-colors hover:text-accent hover:border-accent"
            >
              The full inventory
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============== EDITORIAL CARDS ============== */}
      <section className="border-b border-foreground">
        <div className="mx-auto max-w-screen-xl px-4 py-14 sm:py-20">
          <SectionHeading
            kicker="&#x25A0; Section D &middot; House Style"
            title={<>How I Work.</>}
          />

          <div className="mt-10 grid grid-cols-1 gap-0 border border-foreground md:grid-cols-3">
            {[
              {
                num: "I.",
                title: "Write clean and structured code.",
                body: "I write simple and structured code so that it is easy to understand and update later.",
              },
              {
                num: "II.",
                title: "Build responsive user interfaces.",
                body: "I build interfaces that work properly on different screen sizes and provide a smooth experience.",
              },
              {
                num: "III.",
                title: "Work on real world projects.",
                body: "I work on real projects and focus on solving practical problems using forms, APIs, and dynamic data.",
              },
            ].map((rule, i, arr) => (
              <div
                key={rule.num}
                className={`p-6 sm:p-8 ${i !== arr.length - 1 ? "border-b border-foreground md:border-b-0 md:border-r" : ""}`}
              >
                <p className="font-serif text-5xl font-black italic text-accent">
                  {rule.num}
                </p>
                <h3 className="mt-4 font-serif text-2xl font-bold leading-tight tracking-tight">
                  {rule.title}
                </h3>
                <p className="mt-3 font-body text-base leading-relaxed text-neutral-700">
                  {rule.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
          <div className="border-4 border-foreground p-8 text-center sm:p-14">
            <SectionLabel>&#x25A0; Classifieds &middot; Hire</SectionLabel>
<h2 className="mt-4 font-serif text-4xl font-black leading-[0.95] tracking-tight text-balance sm:text-5xl lg:text-6xl">
  Available for <span className="italic font-normal">freelance work</span>
</h2>
            <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-neutral-700 sm:text-lg">
I am available for freelance projects. If you have a requirement related to web development, you can contact me.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 border border-foreground bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] text-background transition-all hover:bg-background hover:text-foreground sm:w-auto"
              >
                Hire Me
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 border border-foreground bg-background px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:bg-foreground hover:text-background sm:w-auto"
              >
                Read the Bio
              </Link>
            </div>
          </div>
          <Ornament />
        </div>
      </section>
    </>
  );
}
