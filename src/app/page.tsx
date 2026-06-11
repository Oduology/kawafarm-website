import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Radar, Sparkles } from "lucide-react";
import { FloatLayer, Reveal } from "@/components/motion";
import { Section } from "@/components/section";
import { metrics, products, sdgs, traction, whatWeDo } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden px-5 pb-12 pt-28 sm:px-6 lg:px-8">
        <Image src="/images/kawafarm-hero.png" alt="Drone view of technology-enabled farmland" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/72 to-slate-950/20" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100 backdrop-blur">
                <Sparkles className="h-4 w-4 text-amber" />
                Real farms. AI tools. Market systems.
              </div>
              <h1 className="mt-7 text-4xl font-black tracking-normal text-white sm:text-6xl lg:text-7xl">
                Building the Future of Agriculture Through Real Farms and Technology
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Kawafarm is a farm-first agritech company making farming accessible, efficient, and sustainable through real agricultural operations, AI-powered tools, and market systems.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/our-story" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-white">
                  Explore Our Story <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#products" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white hover:text-slate-950">
                  Discover Our Products <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          <FloatLayer className="hidden lg:block">
            <div className="glass ml-auto max-w-md rounded-lg p-4 shadow-glow">
              <div className="rounded-lg bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-emerald-300">Crop Intelligence</p>
                    <h2 className="mt-2 text-2xl font-black">Field OS</h2>
                  </div>
                  <Radar className="h-9 w-9 text-amber" />
                </div>
                <div className="mt-6 grid gap-3">
                  {["Crop health 91%", "Demand signal rising", "Harvest window active"].map((item) => (
                    <div key={item} className="rounded-lg border border-white/10 bg-white/[0.06] p-4 text-sm font-semibold text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FloatLayer>
        </div>

        <div className="relative z-10 mx-auto mt-12 grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.07}>
              <div className="glass rounded-lg p-5">
                <div className="text-3xl font-black text-white">{metric.value}</div>
                <div className="mt-1 text-sm font-semibold text-slate-200">{metric.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Section eyebrow="What we do" title="A complete farming intelligence stack" text="Kawafarm connects field operations, buyer demand, logistics, and farmer-facing support into one practical agritech ecosystem.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {whatWeDo.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04]">
                <item.icon className="h-8 w-8 text-farm dark:text-emerald-300" />
                <h3 className="mt-6 text-xl font-black text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="Our traction" title="Field proof before scale" text="Kawafarm is being built from lived agricultural operations, customer contact, and market validation.">
        <div className="relative grid gap-5 lg:grid-cols-6">
          {traction.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.06] p-5">
                <div className="mb-5 grid h-10 w-10 place-items-center rounded-full bg-amber text-sm font-black text-slate-950">{index + 1}</div>
                <p className="text-sm font-bold leading-6 text-slate-100">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Sustainable development goals" title="Growth aligned with impact" text="Kawafarm supports SDGs through food systems, innovation, decent work, and climate-aware production.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sdgs.map((sdg) => (
            <Reveal key={sdg.number}>
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                <img src={sdg.image} alt={`SDG ${sdg.number} ${sdg.title}`} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-black text-slate-950 dark:text-white">SDG {sdg.number}: {sdg.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{sdg.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="mesh" eyebrow="Why Kawafarm exists" title="Farm first. Learn deeply. Build technology that matters." text="Kawafarm exists because agriculture cannot be transformed from dashboards alone. The company starts with real farms, learns from production, understands farmer constraints, and then builds technology that solves what the field proves is important.">
        <div className="glass rounded-lg p-6 md:p-10">
          <p className="max-w-4xl text-2xl font-black leading-tight text-slate-950 md:text-4xl dark:text-white">
            Our mission is to make farming more accessible, efficient, and sustainable by uniting practical farm operations with AI-powered support and demand-led markets.
          </p>
        </div>
      </Section>

      <Section id="products" eyebrow="Products" title="Built from the field outward" text="Two product lines anchor Kawafarm's technology roadmap: market infrastructure and farmer intelligence.">
        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <Reveal key={product.title}>
              <Link href={product.href} className="group block h-full rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.04]">
                <product.icon className="h-9 w-9 text-farm dark:text-emerald-300" />
                <h3 className="mt-6 text-2xl font-black text-slate-950 dark:text-white">{product.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{product.text}</p>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <span key={feature} className="rounded-full bg-slate-100 px-4 py-2 text-xs font-black text-slate-700 dark:bg-white/10 dark:text-slate-200">
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
