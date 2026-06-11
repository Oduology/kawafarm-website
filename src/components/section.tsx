import type { PropsWithChildren } from "react";

export function Section({
  children,
  eyebrow,
  title,
  text,
  id,
  className = ""
}: PropsWithChildren<{ eyebrow?: string; title?: string; text?: string; id?: string; className?: string }>) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {title ? (
          <div className="mb-10 max-w-3xl">
            {eyebrow ? <p className="text-sm font-black uppercase tracking-[0.24em] text-amber">{eyebrow}</p> : null}
            <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">{title}</h2>
            {text ? <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{text}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="mesh overflow-hidden px-5 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-amber">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-normal text-slate-950 sm:text-6xl dark:text-white">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{text}</p>
        </div>
        <div className="glass rounded-lg p-5 shadow-glow">
          <div className="rounded-lg border border-white/30 bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">Live farm intelligence</span>
              <span className="rounded-full bg-amber px-3 py-1 text-xs font-black text-slate-950">Online</span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {["Soil", "Demand", "Crop health", "Logistics"].map((item, index) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                  <div className="text-xs text-slate-400">{item}</div>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-emerald-400" style={{ width: `${64 + index * 8}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
