import Link from "next/link";
import { Github, Linkedin, Mail, Phone, MapPin, MessageCircle  } from "lucide-react";

const sections = [
  {
    label: "Sections",
    links: [
      { href: "/", label: "Front Page" },
      { href: "/about", label: "About" },
      { href: "/skills", label: "Skills" },
      { href: "/projects", label: "Projects" },
    ],
  },
  {
    label: "Departments",
    links: [
      { href: "/experience", label: "Experience" },
      { href: "/education", label: "Education" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t-4 border-foreground bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-12">
        <div className="grid grid-cols-1 border border-foreground md:grid-cols-12">
          {/* About */}
          <div className="col-span-1 p-6 md:col-span-5 md:border-r md:border-foreground md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              About
            </p>
            <h2 className="mt-2 font-serif text-3xl font-black leading-tight tracking-tight">
              Nitin <span className="italic font-normal">Agrawal</span>
            </h2>
            <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-neutral-700">
              Freelance web developer based in Jaipur working on websites, web
              applications, and APIs. I use React, PHP, and WordPress to build
              practical and working solutions based on project requirements.
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              <MapPin className="h-3 w-3" strokeWidth={1.5} aria-hidden />
              Jaipur, Rajasthan, India
            </div>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <nav
              key={section.label}
              aria-label={section.label}
              className="col-span-1 border-t border-foreground p-6 md:col-span-2 md:border-t-0 md:border-r md:border-foreground md:p-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                {section.label}
              </p>
              <ul className="mt-4 space-y-2 font-sans text-sm">
                {section.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-block border-b border-transparent transition-colors hover:border-foreground hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div className="col-span-1 border-t border-foreground p-6 md:col-span-3 md:border-t-0 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              Contact
            </p>
            <ul className="mt-4 space-y-3 font-sans text-sm">
              <li>
                <a
                  href="mailto:nitinagrawal9197@gmail.com"
                  className="group flex items-center gap-3 transition-colors hover:text-accent"
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center border border-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Mail className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <span className="break-all">nitinagrawal9197@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919983827848"
                  className="group flex items-center gap-3 transition-colors hover:text-accent"
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center border border-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Phone className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  +91 9983827848
                </a>
              </li>

              <li>
  <a
    href="https://wa.me/919983827848"
    target="_blank"
    rel="noreferrer"
    className="group flex items-center gap-3 transition-colors hover:text-accent"
  >
    <span className="flex h-9 w-9 flex-none items-center justify-center border border-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
      <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
    </span>
    WhatsApp
  </a>
</li>
              <li>
                <a
                  href="https://github.com/nitinagrawal1"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 transition-colors hover:text-accent"
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center border border-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Github className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nitin-agrawal-826a39284/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 transition-colors hover:text-accent"
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center border border-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-foreground pt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500 sm:flex-row sm:items-center">
          <span>
            &copy; {new Date().getFullYear()} Nitin Agrawal &middot; All Rights
            Reserved
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-accent" aria-hidden />{" "}
            Built using React and Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}
