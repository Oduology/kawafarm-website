import type { Metadata } from "next";
import { Award, Bot } from "lucide-react";
import { PageHero, Section } from "@/components/section";
import { Reveal } from "@/components/motion";
import { farmlinguaFeatures } from "@/lib/content";

export const metadata: Metadata = {
  title: "Farmlingua",
  description: "Farmlingua is AI assistance built for African farmers with planting advice, pest management, fertilizer guidance, and market information."
};

export default function FarmlinguaPage() {
  return (
    <>
      <PageHero
        eyebrow="Farmlingua"
        title="AI Assistance Built for African Farmers"
        text="Farmlingua turns agricultural knowledge into accessible guidance for planting, pests, fertilizer decisions, and market information in farmer-friendly contexts."
      />

      <Section title="Farmer intelligence, closer to the field" text="Farmlingua is designed for practical decisions: what to plant, what might be wrong with a crop, when to act, and how market signals should shape the next move.">
        <div className="grid gap-6 md:grid-cols-2">
          {farmlinguaFeatures.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                <feature.icon className="h-9 w-9 text-farm dark:text-emerald-300" />
                <h2 className="mt-6 text-2xl font-black text-slate-950 dark:text-white">{feature.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" title="Recognized by BGI Nexus" text="The BGI Nexus Grant badge reflects early recognition for Kawafarm's approach to technology-backed agricultural development.">
        <div className="glass grid gap-8 rounded-lg p-8 md:grid-cols-[auto_1fr] md:items-center md:p-12">
          <div className="grid h-28 w-28 place-items-center rounded-lg bg-amber text-slate-950">
            <Award className="h-14 w-14" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-amber">BGI Nexus Grant Recipient</p>
            <h2 className="mt-3 text-4xl font-black text-white">Building AI that understands farming realities.</h2>
          </div>
        </div>
      </Section>

      <Section eyebrow="AI interface" title="Designed for simple, useful support">
        <div className="mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-4 shadow-2xl dark:border-white/10 dark:bg-white/[0.04]">
          <div className="rounded-lg bg-slate-950 p-6 text-white">
            <div className="flex items-center gap-3 border-b border-white/10 pb-5">
              <Bot className="h-8 w-8 text-emerald-300" />
              <div>
                <p className="text-sm font-black">Farmlingua AI</p>
                <p className="text-xs text-slate-400">Planting guidance and pest support</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              <div className="max-w-[82%] rounded-lg bg-white/10 p-4 text-sm text-slate-200">My tomato leaves are curling. What should I check first?</div>
              <div className="ml-auto max-w-[86%] rounded-lg bg-emerald-500 p-4 text-sm font-semibold text-slate-950">
                Check leaf underside for pests, soil moisture pattern, and recent fertilizer use. If you can, inspect for whiteflies and send a clear leaf photo.
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
