"use client"

import type React from "react"
import { useState } from "react"
import { Send, Check, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()

  if (!form.name || !form.email || !form.message) return

  setStatus("sending")

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    if (data.success) {
      setStatus("sent")
      setForm({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setStatus("idle"), 4000)
    } else {
      alert("Something went wrong")
      setStatus("idle")
    }
  } catch (error) {
    console.error(error)
    alert("Server error")
    setStatus("idle")
  }
}
  const labelClass = "font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600"
  const fieldClass =
    "w-full border-0 border-b-2 border-foreground bg-transparent px-1 py-2.5 font-mono text-sm text-foreground transition-colors placeholder:text-neutral-400 placeholder:italic focus:bg-neutral-100 focus:outline-none focus-visible:bg-neutral-100"

  return (
    <form onSubmit={handleSubmit} className="grid gap-7" noValidate>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className={labelClass}>
            01 — Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={fieldClass}
            autoComplete="name"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className={labelClass}>
            02 — Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your email address"
            className={fieldClass}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="subject" className={labelClass}>
          03 — Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          placeholder="Project discussion or job opportunity"
          className={fieldClass}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className={labelClass}>
          04 — Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Share your requirement or idea. I will review and respond soon."
          className={cn(fieldClass, "min-h-32 resize-y")}
        />
      </div>

      <div className="flex flex-col items-start justify-between gap-4 border-t border-foreground pt-6 sm:flex-row sm:items-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
          I will review your message and respond within 24 hours.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className={cn(
            "inline-flex min-h-[44px] w-full items-center justify-center gap-2 border border-foreground px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] transition-all sm:w-auto",
            status === "sent"
              ? "bg-accent text-accent-foreground"
              : "bg-foreground text-background hover:bg-background hover:text-foreground",
            status === "sending" && "cursor-not-allowed opacity-70",
          )}
        >
          {status === "sending" && (
            <>
              Sending<span className="ml-1 animate-pulse">…</span>
            </>
          )}
          {status === "sent" && (
            <>
              <Check className="h-4 w-4" strokeWidth={1.5} /> Message Sent
            </>
          )}
          {status === "idle" && (
            <>
              Send Message <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </>
          )}
        </button>
      </div>

      {status === "sent" && (
        <div
          role="status"
          className="border-2 border-accent bg-background p-4"
          aria-live="polite"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            <Send className="mr-1 inline h-3 w-3" strokeWidth={1.5} aria-hidden /> Message received
          </p>
          <p className="mt-2 font-serif text-lg font-bold leading-snug">
           Your message has been received. I will get back to you within 24 hours.
          </p>
        </div>
      )}
    </form>
  )
}
