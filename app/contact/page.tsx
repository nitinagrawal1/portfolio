import { PageHeader, Ornament } from "@/components/page-header";
import { SectionLabel } from "@/components/news-bits";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, Linkedin, MapPin, Github, Clock } from "lucide-react";

export const metadata = {
  title: "Contact — Nitin Agrawal",
  description:
    "Contact Nitin Agrawal, freelance web developer based in Jaipur. Available for web development projects and collaborations.",
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "nitinagrawal9197@gmail.com",
    href: "mailto:nitinagrawal9197@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99838 27848",
    href: "tel:+919983827848",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nitin-agrawal-826a39284",
    href: "https://www.linkedin.com/in/nitin-agrawal-826a39284/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/nitinagrawal1",
    href: "https://github.com/nitinagrawal1",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jaipur, Rajasthan, India",
    href: "https://maps.google.com/?q=Jaipur,Rajasthan,India",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Get in <span className="italic font-normal">touch</span>
          </>
        }
       lede="I am available for freelance projects. You can reach out to discuss your requirements, ideas, or any web development work."
        meta="Response time within 24 hours"
      />

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 gap-0 border border-foreground lg:grid-cols-12">
            {/* Form column */}
            <div className="border-b border-foreground p-6 sm:p-10 lg:col-span-7 lg:border-b-0 lg:border-r">
              <SectionLabel accent>&#x25A0; New Submission</SectionLabel>
              <h2 className="mt-3 font-serif text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl">
                Send a message
              </h2>
              <p className="mt-4 max-w-xl font-body text-base italic leading-relaxed text-neutral-700 sm:text-lg">
Share your project details or requirements. I will check and respond with next steps.
              </p>

              <div className="mt-8 border-t border-foreground pt-8">
                <ContactForm />
              </div>
            </div>

            {/* Channels column */}
            <aside className="p-6 sm:p-10 lg:col-span-5">
              <SectionLabel>&#x25A0; Direct Channels</SectionLabel>
              <h2 className="mt-3 font-serif text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                Other ways to connect
              </h2>

              <ul className="mt-6 divide-y divide-foreground border-y border-foreground">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-start gap-4 py-4 transition-colors hover:bg-neutral-100"
                    >
                      <span className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center border border-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                        <c.icon
                          className="h-4 w-4"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                          {c.label}
                        </p>
                        <p className="mt-1 break-all font-serif text-base font-bold text-foreground transition-colors group-hover:text-accent">
                          {c.value}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-2 border-foreground p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                  <Clock
                    className="mr-1 inline h-3 w-3"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  Availability
                </p>
                <p className="mt-3 font-serif text-xl font-bold leading-tight">
                  Monday — Saturday &middot; 10:00 AM to 7:00 PM IST
                </p>
                <p className="mt-2 font-body text-sm italic text-neutral-700">
                  All times in India Standard Time (UTC +5:30). I usually
                  respond within 24 hours.
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
