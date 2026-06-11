import type { Metadata } from "next";
import { UserRound } from "lucide-react";
import { PageHero, Section } from "@/components/section";
import { Reveal } from "@/components/motion";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the Kawafarm leadership and advisory team."
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Operators, builders, and agricultural advisors"
        text="Kawafarm is led by a team combining farm operations, technology development, agronomic guidance, and market-building discipline."
      />

      <Section title="Leadership" text="The team is intentionally cross-functional: farm-first enough to understand field realities, and technical enough to build systems that can scale.">
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.06}>
              <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04]">
                <div className="grid aspect-[4/3] place-items-center rounded-lg bg-gradient-to-br from-emerald-100 via-slate-100 to-amber-100 dark:from-emerald-950 dark:via-slate-900 dark:to-amber-950">
                  <UserRound className="h-16 w-16 text-farm dark:text-emerald-300" />
                </div>
                <h2 className="mt-6 text-2xl font-black text-slate-950 dark:text-white">{member.name}</h2>
                <p className="mt-1 text-sm font-black uppercase tracking-[0.18em] text-amber">{member.role}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{member.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
