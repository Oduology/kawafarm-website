import type { Metadata } from "next";
import { PageHero, Section } from "@/components/section";
import { Reveal } from "@/components/motion";
import { storyTimeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Story",
  description: "The Kawafarm story: why it started, the agricultural challenges identified, and the farm-first path toward agritech."
};

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Technology that earns its place on the farm"
        text="Kawafarm started with a clear conviction: agricultural technology should be built close to the soil, close to producers, and close to the real market pressure that farmers face."
      />

      <Section title="Why Kawafarm started" text="Agriculture remains full of promise, but many farmers still work with fragmented demand, limited operational support, unreliable market access, and information gaps that make each planting decision riskier than it should be. Kawafarm was created to confront those challenges through practical farming first, then technology.">
        <div className="grid gap-6 lg:grid-cols-3">
          {["Fragmented buyer demand", "Limited decision support", "Weak farm-to-market systems"].map((item) => (
            <Reveal key={item}>
              <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                <h2 className="text-xl font-black text-slate-950 dark:text-white">{item}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Kawafarm treats this as an operating problem, not just a software opportunity, and builds from what the field reveals.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="Farm journey" title="From practical operations to scalable systems">
        <div className="grid gap-6">
          {storyTimeline.map((item, index) => (
            <Reveal key={item.title}>
              <div className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.06] p-6 md:grid-cols-[120px_1fr] md:p-8">
                <div className="text-5xl font-black text-amber">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h2 className="text-2xl font-black text-white">{item.title}</h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Future vision" title="A farm-first operating system for African agriculture" text="Kawafarm's future is a connected ecosystem where farm operations produce insight, market systems reduce guesswork, and AI tools make agricultural knowledge easier to access for the people doing the work.">
        <div className="glass rounded-lg p-8 md:p-12">
          <p className="max-w-4xl text-3xl font-black leading-tight text-slate-950 md:text-5xl dark:text-white">
            Real farms create the truth. Technology turns that truth into scale.
          </p>
        </div>
      </Section>
    </>
  );
}
