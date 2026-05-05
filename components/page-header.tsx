import type { ReactNode } from "react"

type PageHeaderProps = {
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
  meta?: string
}

export function PageHeader({ eyebrow, title, lede, meta }: PageHeaderProps) {
  return (
    <header className="border-b border-foreground bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:py-14">
        <div className="flex items-center justify-between gap-4 border-b border-foreground pb-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-600">{eyebrow}</p>
          {meta && (
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-500">{meta}</p>
          )}
        </div>

        <h1 className="mt-6 font-serif text-5xl font-black leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        {lede && (
          <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-neutral-700 text-pretty sm:text-xl">
            {lede}
          </p>
        )}

        <Ornament className="mt-10" />
      </div>
    </header>
  )
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 text-neutral-400 ${className}`}>
      <span className="h-px flex-1 bg-foreground/30" aria-hidden />
      <span className="font-serif text-xl tracking-[0.6em]" aria-hidden>
        &#x2727; &#x2727; &#x2727;
      </span>
      <span className="h-px flex-1 bg-foreground/30" aria-hidden />
    </div>
  )
}
