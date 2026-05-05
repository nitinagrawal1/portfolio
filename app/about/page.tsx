import { PageHeader, Ornament } from "@/components/page-header";
import { SectionLabel, PullQuote, Tag } from "@/components/news-bits";
import { MapPin, Code2, Palette, Coffee, Rocket, BookOpen } from "lucide-react";

export const metadata = {
  title: "About — Nitin Agrawal",
  description:
    "Freelance web developer based in Jaipur working on websites, web applications, and APIs using React, PHP, and WordPress.",
};

const facts = [
  { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan, India" },
  { icon: Code2, label: "Skills", value: "React, JavaScript, PHP, WordPress" },
  {
    icon: Palette,
    label: "Focus",
    value: "Websites, applications, and APIs",
  },
  { icon: Coffee, label: "Preference", value: "Chai and simple workflows" },
  { icon: Rocket, label: "Availability", value: "Open for freelance and jobs" },
];
export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="&#x25A0; Section E &middot; Profile"
        title={
          <>
            About <span className="italic font-normal">Me</span>
          </>
        }
        lede="I work on web projects where I build interfaces, develop features, and handle integrations based on project requirements. I have experience working with React, PHP, WordPress, and APIs across different types of projects."
        meta="Jaipur, Rajasthan, India"
      />

      {/* Body */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Article body */}
            <article className="lg:col-span-8 lg:border-r lg:border-foreground lg:pr-10">
              <SectionLabel>The Story</SectionLabel>
              <h2 className="mt-3 font-serif text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                From learning to building real projects.
              </h2>

              <div className="mt-6 columns-1 gap-8 font-body text-base leading-relaxed text-neutral-800 sm:text-lg sm:[column-rule:1px_solid_#111] md:columns-2">
<p className="drop-cap drop-cap-accent text-justify">
  I work as a freelance web developer based in Jaipur. I work on different types of projects including websites, web applications, and backend features. I use React, PHP, and WordPress depending on what the project requires.
</p>

<p className="mt-4 text-justify">
  I have experience working on WordPress websites, React based applications, and backend APIs using Laravel. My work includes building layouts, handling forms, integrating APIs, and managing dynamic data.
</p>

<p className="mt-4 text-justify">
  I completed my MCA from JECRC University and BCA from Parishkar College. Most of my learning has come from working on real projects and solving practical problems.
</p>

<p className="mt-4 text-justify">
  I focus on building simple and useful solutions that work properly and are easy to manage. I keep improving my skills by working on real use cases and learning through projects.
</p>
              </div>

<PullQuote cite="On the work">
I focus on building simple and useful web solutions that are easy to use and maintain.
</PullQuote>

<h3 className="font-serif text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
  Approach to work
</h3>

<p className="mt-3 font-body text-base leading-relaxed text-neutral-800 sm:text-lg">
I write simple and structured code so it is easy to understand and update. I focus on usability, responsiveness, and proper functionality while building projects. I prefer solving real problems instead of just building demo features.
</p>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="border-2 border-foreground">
                <div className="border-b border-foreground bg-foreground px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-background">
                  Fact Box
                </div>
                <ul className="divide-y divide-foreground">
                  {facts.map((f) => (
                    <li key={f.label} className="flex items-start gap-3 p-4">
                      <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center border border-foreground">
                        <f.icon
                          className="h-4 w-4"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                          {f.label}
                        </p>
                        <p className="mt-1 font-serif text-base font-bold leading-tight">
                          {f.value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border border-foreground p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                  <BookOpen
                    className="mr-1 inline h-3 w-3"
                    strokeWidth={1.5}
                    aria-hidden
                  />{" "}
                  Currently Studying
                </p>
                <h3 className="mt-3 font-serif text-xl font-black leading-tight">
                  In the reading pile this week
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Tag>React</Tag>
                  <Tag>JavaScript</Tag>
                  <Tag>API Integration</Tag>
                  <Tag>Frontend Projects</Tag>
                </div>
              </div>

              <div className="mt-6 border-2 border-accent p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  &#x25A0; Note
                </p>
<p className="mt-3 font-body text-sm italic leading-relaxed text-neutral-700">
I am available for freelance projects. If you have any work related to web development, you can contact me.
</p>
              </div>
            </aside>
          </div>

          <Ornament />
        </div>
      </section>
    </>
  );
}
