"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

function formatToday() {
  return new Date()
    .toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toUpperCase();
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    setToday(formatToday());
  }, []);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="border-b-4 border-foreground bg-background">
      {/* Edition strip */}
      <div className="bg-foreground text-background">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] sm:text-[11px]">
          <span>Freelancer Portfolio</span>
          <span className="hidden sm:inline">{today || "\u00A0"}</span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-accent" aria-hidden />
            Available for Work
          </span>
        </div>
      </div>

      {/* Masthead */}
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:py-8">
        <div className="flex items-start justify-between gap-4">
          {/* <Link href="/" className="block">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              Freelance Web Developer | React | PHP | WordPress
            </p>
            <h1 className="mt-1 font-serif text-4xl font-black leading-none tracking-tight sm:text-5xl lg:text-6xl">
              Nitin <span className="italic font-normal">Agrawal</span>
            </h1>
            <p className="mt-2 max-w-xl font-body text-sm italic text-neutral-600">
              I build websites, applications, and features based on real project
              needs
            </p>
          </Link> */}

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-none items-center justify-center border border-foreground bg-background transition-colors hover:bg-foreground hover:text-background lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav
        aria-label="Primary"
        className="hidden border-y border-foreground bg-background lg:block"
      >
        <ul className="mx-auto flex max-w-screen-xl items-stretch">
          {links.map((link, i) => {
            const active = isActive(link.href);
            return (
              <li
                key={link.href}
                className={cn(
                  "flex-1",
                  i !== links.length - 1 && "border-r border-foreground",
                )}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center justify-center gap-2 px-4 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.25em] transition-colors",
                    active
                      ? "bg-foreground text-background"
                      : "text-foreground hover:bg-foreground hover:text-background",
                  )}
                >
                  {active && (
                    <span
                      className="inline-block h-1.5 w-1.5 bg-accent"
                      aria-hidden
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile nav */}
      {open && (
        <nav
          aria-label="Primary mobile"
          className="border-t border-foreground bg-background lg:hidden"
        >
          <ul className="divide-y divide-foreground border-b border-foreground">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 font-mono text-xs uppercase tracking-[0.25em] transition-colors",
                      active
                        ? "bg-foreground text-background"
                        : "text-foreground hover:bg-neutral-100",
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {active && (
                        <span
                          className="inline-block h-2 w-2 bg-accent"
                          aria-hidden
                        />
                      )}
                      {link.label}
                    </span>
                    <span aria-hidden>&rsaquo;</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
