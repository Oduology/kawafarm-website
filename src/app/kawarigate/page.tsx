import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  CloudRain,
  Droplets,
  Fuel,
  HandCoins,
  Leaf,
  LineChart,
  Map,
  PackageCheck,
  ShieldCheck,
  Sprout,
  SunMedium,
  Tractor,
  Users,
  Wrench
} from "lucide-react";
import { Reveal } from "@/components/motion";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Kawarigate",
  description:
    "Kawarigate helps African farmers access affordable solar irrigation systems through flexible harvest-based financing, technical support, and AI-powered agricultural guidance."
};

const challengeCards = [
  {
    icon: CloudRain,
    title: "Unpredictable Weather Patterns",
    text: "Farmers face increasing uncertainty due to changing climate conditions."
  },
  {
    icon: Sprout,
    title: "Drought-Related Crop Losses",
    text: "Lack of water often results in lower yields and reduced income."
  },
  {
    icon: Fuel,
    title: "Rising Fuel Costs",
    text: "Petrol and diesel pumps are expensive to operate and maintain."
  },
  {
    icon: LineChart,
    title: "Limited Productivity",
    text: "Many farmers cannot maximize land utilization throughout the year."
  },
  {
    icon: Tractor,
    title: "Restricted Dry Season Farming",
    text: "Without irrigation, productive farming seasons remain limited."
  },
  {
    icon: HandCoins,
    title: "High Upfront Equipment Costs",
    text: "Modern irrigation systems remain inaccessible for many smallholder farmers."
  }
];

const systems = [
  {
    title: "Smallholder System",
    range: "0.5 - 2 hectares",
    includes: ["Solar panels", "DC water pump", "Water storage options", "Drip irrigation connection"]
  },
  {
    title: "Medium Scale System",
    range: "2 - 10 hectares",
    includes: ["Larger solar array", "High-capacity pump", "Sprinkler integration", "Expanded distribution network"]
  },
  {
    title: "Commercial System",
    range: "10+ hectares",
    includes: ["2HP-10HP+ solar pumping systems", "Deep borehole pumping", "River abstraction systems", "Large-scale irrigation infrastructure"]
  }
];

const benefits = [
  {
    icon: Fuel,
    title: "Zero Fuel Costs",
    text: "Solar irrigation eliminates ongoing petrol and diesel expenses."
  },
  {
    icon: SunMedium,
    title: "Year-Round Farming",
    text: "Support continuous production during dry season, rainy season, and off-season periods."
  },
  {
    icon: LineChart,
    title: "Increased Productivity",
    text: "Reliable water supply supports better crop establishment, higher yields, and improved crop quality."
  },
  {
    icon: HandCoins,
    title: "Increased Farmer Income",
    text: "Higher production and lower operating costs improve profitability."
  },
  {
    icon: ShieldCheck,
    title: "Climate Resilience",
    text: "Farmers become less dependent on unpredictable rainfall."
  },
  {
    icon: Leaf,
    title: "Environmental Sustainability",
    text: "Kawarigate promotes renewable energy adoption, lower emissions, and reduced fossil fuel consumption."
  }
];

const supportServices = [
  { icon: Wrench, title: "Installation Support", text: "Professional setup and commissioning." },
  { icon: ShieldCheck, title: "Maintenance Support", text: "Routine inspections and servicing." },
  { icon: Users, title: "Community Service Hubs", text: "Cluster-based repair and support centers." },
  { icon: Droplets, title: "Irrigation Advisory", text: "Guidance on efficient water use and scheduling." },
  { icon: Sprout, title: "Agronomic Support", text: "Recommendations throughout the production cycle." }
];

const aiFeatures = [
  "Planting Recommendations",
  "Pest and Disease Management",
  "Fertilizer Guidance",
  "Irrigation Scheduling",
  "Harvest Planning",
  "Market Information",
  "Climate Advisories"
];

const impacts = [
  {
    title: "Agricultural Productivity",
    stats: ["Increased crop yields", "More farming cycles annually", "Reduced crop losses"]
  },
  {
    title: "Economic Growth",
    stats: ["Increased farmer income", "Rural job creation", "Stronger local economies"]
  },
  {
    title: "Food Security",
    stats: ["Improved food availability", "Stable production levels", "Reduced import dependence"]
  },
  {
    title: "Sustainable Agriculture",
    stats: ["Renewable energy adoption", "Climate-smart farming", "Reduced environmental impact"]
  }
];

const ecosystem = [
  ["Kawafarm Farms", "Generate practical agricultural insights"],
  ["Kawarigate", "Solves irrigation challenges"],
  ["Farmlingua", "Delivers agricultural intelligence"],
  ["Kawafarm Market", "Provides market access"]
];

export default function KawarigatePage() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden px-5 pb-12 pt-28 sm:px-6 lg:px-8">
        <Image
          src="/images/kawarigate-irrigation-hero.png"
          alt="Solar-powered irrigation system on farmland with drip lines, water tank, and farmers"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/74 to-slate-950/18" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 pt-16 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100 backdrop-blur">
                <Droplets className="h-4 w-4 text-amber" />
                Climate-smart irrigation financing
              </div>
              <h1 className="mt-7 text-4xl font-black tracking-normal text-white sm:text-6xl lg:text-7xl">
                Solar-Powered Irrigation Financing for African Farmers
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Helping farmers access affordable solar irrigation systems through flexible harvest-based financing, technical support, and AI-powered agricultural guidance.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-white">
                  Apply for Kawarigate <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white hover:text-slate-950">
                  Partner With Us
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass rounded-lg p-4 shadow-glow">
              <div className="rounded-lg bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">Harvest-based finance</span>
                  <span className="rounded-full bg-amber px-3 py-1 text-xs font-black text-slate-950">Irrigation asset</span>
                </div>
                <div className="mt-5 grid gap-3">
                  {[
                    ["System access", "Immediate"],
                    ["Repayment model", "Harvest-linked"],
                    ["Support layer", "Technical + AI"],
                    ["Primary outcome", "Year-round farming"]
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.06] p-4">
                      <span className="text-sm text-slate-300">{label}</span>
                      <span className="text-sm font-black text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section
        eyebrow="Why Kawarigate exists"
        title="Making Irrigation Accessible for Every Farmer"
        text="Across Africa, millions of farmers remain dependent on seasonal rainfall, making agricultural production vulnerable to drought, climate variability, and unpredictable weather conditions."
      >
        <div className="glass rounded-lg p-6 md:p-10">
          <p className="max-w-5xl text-2xl font-black leading-tight text-slate-950 md:text-4xl dark:text-white">
            While irrigation can dramatically increase yields and enable year-round farming, most farmers cannot afford the high upfront cost of purchasing modern irrigation equipment.
          </p>
          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Kawarigate bridges this gap by combining solar-powered irrigation technology with flexible financing, enabling farmers to access irrigation immediately and repay gradually through harvest proceeds.
          </p>
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="The challenge" title="Agriculture Should Not Depend on Rain Alone">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <Reveal>
            <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-white/10">
              <Image
                src="/images/kawarigate-drought-field.png"
                alt="African farmland affected by drought and inconsistent rainfall"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/76 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-amber">Water risk</p>
                <h2 className="mt-3 text-3xl font-black text-white">Rainfall uncertainty keeps productive land underused.</h2>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {challengeCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.04}>
                <div className="h-full rounded-lg border border-white/10 bg-white/[0.06] p-5">
                  <card.icon className="h-7 w-7 text-amber" />
                  <h3 className="mt-4 text-lg font-black text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Our solution"
        title="Affordable Irrigation Through Harvest-Based Financing"
        text="Instead of paying large sums upfront, farmers gain immediate access to irrigation systems and repay over time through harvest proceeds. This approach lowers financial barriers while enabling productivity gains from day one."
      >
        <div className="grid gap-5 md:grid-cols-4">
          {["Solar irrigation technology", "Structured financing", "Farmer support services", "AI-powered farm advisory"].map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-farm text-sm font-black text-white">{index + 1}</div>
                <h3 className="mt-6 text-xl font-black text-slate-950 dark:text-white">{item}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="mesh" eyebrow="How Kawarigate works" title="A practical four-step path from enrollment to repayment">
        <div className="grid gap-6">
          <Reveal>
            <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-amber">Step 1</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white">Community Enrollment</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                Farmers join through cooperatives, farmer groups, community clusters, and agricultural associations. This improves accountability, support, and long-term sustainability.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-amber">Step 2</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white">Irrigation System Selection</h2>
              <div className="mt-6 grid gap-5 lg:grid-cols-3">
                {systems.map((system) => (
                  <div key={system.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.04]">
                    <h3 className="text-xl font-black text-slate-950 dark:text-white">{system.title}</h3>
                    <p className="mt-2 text-sm font-black text-farm dark:text-emerald-300">Suitable for {system.range}</p>
                    <div className="mt-5 grid gap-2">
                      {system.includes.map((item) => (
                        <p key={item} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                          <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-amber" />
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-lg border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-amber">Step 3</p>
                <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white">Installation & Training</h2>
                <div className="mt-5 grid gap-3">
                  {["Equipment installation", "Farmer onboarding", "Operational training", "Troubleshooting guidance", "Maintenance education"].map((item) => (
                    <p key={item} className="flex gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      <PackageCheck className="h-5 w-5 shrink-0 text-farm dark:text-emerald-300" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="h-full rounded-lg border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-amber">Step 4</p>
                <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white">Harvest-Based Repayment</h2>
                <div className="mt-5 grid gap-3">
                  {["No large upfront payment", "Flexible repayment structure", "Improved cash flow", "Reduced financial pressure", "Faster adoption"].map((item) => (
                    <p key={item} className="flex gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      <HandCoins className="h-5 w-5 shrink-0 text-farm dark:text-emerald-300" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section eyebrow="Benefits" title="What farmers gain with Kawarigate">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.04}>
              <div className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04]">
                <benefit.icon className="h-8 w-8 text-farm dark:text-emerald-300" />
                <h2 className="mt-6 text-xl font-black text-slate-950 dark:text-white">{benefit.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{benefit.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="Farmer support services" title="More Than Equipment Financing" text="Every participating farmer receives ongoing support.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {supportServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.06] p-5">
                <service.icon className="h-7 w-7 text-amber" />
                <h2 className="mt-5 text-lg font-black text-white">{service.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-300">{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Powered by Farmlingua AI" title="Every Kawarigate Farmer Gains Access to Farmlingua" text="Farmlingua is Kawafarm's AI-powered multilingual agricultural assistant, designed to make agricultural knowledge more accessible regardless of literacy level.">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-white/[0.04]">
              <div className="rounded-lg bg-slate-950 p-6 text-white">
                <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                  <Bot className="h-8 w-8 text-emerald-300" />
                  <div>
                    <p className="text-sm font-black">Farmlingua AI</p>
                    <p className="text-xs text-slate-400">Irrigation scheduling and crop guidance</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4">
                  <div className="max-w-[82%] rounded-lg bg-white/10 p-4 text-sm text-slate-200">
                    My drip line pressure is low and my okra field needs watering. What should I check?
                  </div>
                  <div className="ml-auto max-w-[86%] rounded-lg bg-emerald-500 p-4 text-sm font-semibold text-slate-950">
                    Check the pump filter, tank level, blocked emitters, and main valve position. Irrigate early morning and inspect the farthest drip line first.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-3 sm:grid-cols-2">
              {aiFeatures.map((feature) => (
                <div key={feature} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                  <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-farm dark:text-emerald-300" />
                  <p className="text-sm font-bold leading-6 text-slate-700 dark:text-slate-200">{feature}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="mesh" eyebrow="Expected impact" title="Creating Long-Term Agricultural Transformation">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact, index) => (
            <Reveal key={impact.title} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                <div className="text-5xl font-black text-farm dark:text-emerald-300">{String(index + 1).padStart(2, "0")}</div>
                <h2 className="mt-5 text-xl font-black text-slate-950 dark:text-white">{impact.title}</h2>
                <div className="mt-4 grid gap-2">
                  {impact.stats.map((stat) => (
                    <p key={stat} className="text-sm leading-6 text-slate-600 dark:text-slate-300">{stat}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="Kawafarm ecosystem" title="Part of a Bigger Agricultural Ecosystem">
        <div className="grid gap-5 lg:grid-cols-4">
          {ecosystem.map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.06] p-6">
                <Map className="h-8 w-8 text-amber" />
                <h2 className="mt-5 text-xl font-black text-white">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.06] p-7">
          <p className="max-w-5xl text-lg leading-8 text-slate-200">
            Together, these systems create a complete ecosystem that helps farmers produce more, farm sustainably, access knowledge, and reach reliable markets.
          </p>
        </div>
      </Section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg bg-farm p-8 text-white shadow-glow md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-amber">Ready to irrigate more land?</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <h2 className="max-w-3xl text-4xl font-black md:text-5xl">Ready to Irrigate More Land and Increase Production?</h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-amber px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-white">
                Apply for Kawarigate
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white transition hover:bg-white hover:text-slate-950">
                Become a Financing Partner
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 text-sm font-black text-white transition hover:bg-white hover:text-slate-950">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
