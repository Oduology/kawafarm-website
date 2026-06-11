import type { Metadata } from "next";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { PageHero, Section } from "@/components/section";
import { Reveal } from "@/components/motion";
import { contactDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kawafarm at NOIC Gbagada Lagos."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s build the next agricultural system"
        text="Reach Kawafarm for partnerships, market inquiries, farm operations, technology collaboration, or investment conversations."
      />

      <Section title="Talk to Kawafarm" text="Office: Kawafarm, NOIC Gbagada Lagos.">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <div className="grid gap-5 sm:grid-cols-2">
                {["Name", "Email", "Phone"].map((label) => (
                  <label key={label} className={label === "Phone" ? "sm:col-span-2" : ""}>
                    <span className="text-sm font-black text-slate-700 dark:text-slate-200">{label}</span>
                    <input
                      className="mt-2 h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-farm focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white"
                      placeholder={label}
                      type={label === "Email" ? "email" : "text"}
                    />
                  </label>
                ))}
                <label className="sm:col-span-2">
                  <span className="text-sm font-black text-slate-700 dark:text-slate-200">Message</span>
                  <textarea
                    className="mt-2 min-h-36 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-farm focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white"
                    placeholder="How can we help?"
                  />
                </label>
              </div>
              <button type="button" className="mt-6 rounded-full bg-farm px-7 py-4 text-sm font-black text-white transition hover:bg-slate-950 dark:hover:bg-amber dark:hover:text-slate-950">
                Send Message
              </button>
            </form>
          </Reveal>

          <div className="grid gap-5">
            {contactDetails.map((detail) => (
              <Reveal key={detail.title}>
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                  <detail.icon className="h-7 w-7 text-farm dark:text-emerald-300" />
                  <h2 className="mt-4 text-lg font-black text-slate-950 dark:text-white">{detail.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{detail.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" title="Find us in Lagos">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr]">
          <div className="grid min-h-[360px] place-items-center rounded-lg border border-white/10 bg-grid-dark bg-[length:28px_28px]">
            <div className="rounded-lg bg-white p-5 text-center text-slate-950 shadow-2xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-farm">Google Maps</p>
              <p className="mt-2 text-2xl font-black">NOIC Gbagada Lagos</p>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-8">
            <h2 className="text-2xl font-black">Social links</h2>
            <div className="mt-6 flex gap-3">
              {[Twitter, Linkedin, Instagram, Facebook].map((Icon, index) => (
                <a key={index} href="#" aria-label="Kawafarm social link" className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-amber hover:text-slate-950">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
