import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function NewsCard({
  children,
  className,
  hover = false,
  inverted = false,
}: {
  children: ReactNode
  className?: string
  hover?: boolean
  inverted?: boolean
}) {
  return (
    <article
      className={cn(
        "border border-foreground p-5 sm:p-6",
        inverted ? "bg-foreground text-background" : "bg-background",
        hover && "hard-shadow-hover",
        className,
      )}
    >
      {children}
    </article>
  )
}

export function CardKicker({
  children,
  inverted = false,
}: {
  children: ReactNode
  inverted?: boolean
}) {
  return (
    <p
      className={cn(
        "font-mono text-[10px] uppercase tracking-[0.3em]",
        inverted ? "text-neutral-400" : "text-neutral-600",
      )}
    >
      {children}
    </p>
  )
}

export function CardTitle({
  children,
  className,
  size = "md",
}: {
  children: ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
}) {
  const sizes = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-3xl sm:text-4xl lg:text-5xl",
  }
  return (
    <h3
      className={cn(
        "font-serif font-black leading-[1.05] tracking-tight text-balance",
        sizes[size],
        className,
      )}
    >
      {children}
    </h3>
  )
}

export function CardLede({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p className={cn("font-body text-base leading-relaxed text-neutral-700 text-pretty", className)}>
      {children}
    </p>
  )
}
