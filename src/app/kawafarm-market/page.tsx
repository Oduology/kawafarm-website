import type { Metadata } from "next";
import { ArrowRight, MapPin, Store } from "lucide-react";
import { PageHero, Section } from "@/components/section";
import { Reveal } from "@/components/motion";
import { marketProducts, marketWorkflow } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kawafarm Market",
  description: "Kawafarm Market helps farms grow with demand through reservations, aggregation, verification, and delivery."
};

export default function KawafarmMarketPage() {
  return (
    <>
      <PageHero
        eyebrow="Kawafarm Market"
        title="Grow With Demand, Not Guesswork"
        text="Kawafarm Market is a demand-led produce system connecting farm uploads, buyer reservations, peer buying, harvest verification, and delivery coordination."
      />

      <Section title="Market workflow" text="The product is designed to reduce uncertainty before harvest and make buyer demand visible earlier in the production cycle.">
        <div className="grid gap-4 lg:grid-cols-5">
          {marketWorkflow.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <div className="relative h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                <step.icon className="h-8 w-8 text-farm dark:text-emerald-300" />
                <h2 className="mt-5 text-lg font-black text-slate-950 dark:text-white">{step.title}</h2>
                {index < marketWorkflow.length - 1 ? <ArrowRight className="absolute right-5 top-6 hidden h-5 w-5 text-amber lg:block" /> : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="Pilot traction" title="Operating from the market, not just toward it">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-8">
              <Store className="h-10 w-10 text-amber" />
              <h2 className="mt-6 text-3xl font-black">Physical store at NOIC Gbagada Lagos</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                The pilot connects real customers to produce availability and gives Kawafarm direct insight into buying behavior, reservation interest, and demand patterns.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-8">
              <MapPin className="h-10 w-10 text-emerald-300" />
              <div className="mt-6 text-6xl font-black text-white">300+</div>
              <p className="mt-3 text-lg font-bold text-slate-200">customers served through early aggregation and retail activity.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Products" title="Current pilot produce">
        <div className="grid gap-5 sm:grid-cols-3">
          {marketProducts.map((product) => (
            <Reveal key={product}>
              <div className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-lg bg-farm text-2xl font-black text-white">{product.slice(0, 1)}</div>
                <h2 className="mt-6 text-2xl font-black text-slate-950 dark:text-white">{product}</h2>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
