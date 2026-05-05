import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/* ---------- Small uppercase label / kicker ---------- */
export function SectionLabel({
  children,
  className,
  accent = false,
}: {
  children: ReactNode
  className?: string
  accent?: boolean
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.3em]",
        accent ? "text-accent" : "text-neutral-600",
        className,
      )}
    >
      {children}
    </p>
  )
}

/* ---------- Section heading: kicker + serif title + rule ---------- */
export function SectionHeading({
  kicker,
  title,
  meta,
  className,
}: {
  kicker: string
  title: ReactNode
  meta?: string
  className?: string
}) {
  return (
    <div className={cn("border-b border-foreground pb-4", className)}>
      <div className="flex items-center justify-between gap-4">
        <SectionLabel>{kicker}</SectionLabel>
        {meta && <SectionLabel className="text-neutral-500">{meta}</SectionLabel>}
      </div>
      <h2 className="mt-3 font-serif text-3xl font-black leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  )
}

/* ---------- Bordered Stat block (collapsed grid friendly) ---------- */
export function Stat({
  value,
  label,
  className,
}: {
  value: ReactNode
  label: string
  className?: string
}) {
  return (
    <div className={cn("p-5", className)}>
      <p className="font-serif text-4xl font-black leading-none tracking-tight sm:text-5xl">{value}</p>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">{label}</p>
    </div>
  )
}

/* ---------- Pull quote ---------- */
export function PullQuote({
  children,
  cite,
}: {
  children: ReactNode
  cite?: string
}) {
  return (
    <figure className="my-8 border-y-4 border-foreground py-6">
      <blockquote className="font-serif text-2xl font-medium italic leading-snug text-balance sm:text-3xl">
        &ldquo;{children}&rdquo;
      </blockquote>
      {cite && (
        <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
          — {cite}
        </figcaption>
      )}
    </figure>
  )
}

/* ---------- Marquee ticker (CSS-only) ---------- */
export function Marquee({ items }: { items: string[] }) {
  const repeated = [...items, ...items]
  return (
    <div className="overflow-hidden border-y-2 border-foreground bg-foreground text-background">
      <div className="flex w-max animate-ticker">
        {repeated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex flex-none items-center gap-3 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em]"
          >
            <span className="inline-block h-1.5 w-1.5 bg-accent" aria-hidden />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------- Image placeholder (halftone) ---------- */
export function HalftonePlaceholder({
  caption,
  className,
}: {
  caption?: string
  className?: string
}) {
  return (
    <figure className={cn("border border-foreground bg-neutral-200/50", className)}>
      <div className="halftone-bg aspect-[4/3] w-full opacity-40" aria-hidden />
      {caption && (
        <figcaption className="border-t border-foreground px-3 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

/* ---------- Tag ---------- */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-foreground bg-background px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em]">
      {children}
    </span>
  )
}
