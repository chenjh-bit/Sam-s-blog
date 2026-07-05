"use client";

import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const accents = [
  { dot: "bg-violet", chip: "hover:border-violet/60" },
  { dot: "bg-pink", chip: "hover:border-pink/60" },
  { dot: "bg-orange", chip: "hover:border-orange/60" },
  { dot: "bg-cyan", chip: "hover:border-cyan/60" },
];

export function Skills() {
  const { dict } = useLanguage();

  return (
    <section id="skills" className="py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02" eyebrow={dict.skills.heading} title={dict.skills.title} />

        <div className="grid gap-5 md:grid-cols-2">
          {dict.skills.groups.map((group, i) => {
            const accent = accents[i % accents.length];
            return (
              <Reveal key={group.name} delay={(i % 2) * 0.08}>
                <div className="h-full rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 transition-colors hover:border-white/[0.16] md:p-8">
                  <div className="flex items-center gap-3">
                    <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${accent.dot}`} />
                    <h3 className="text-xl font-semibold">{group.name}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-muted transition-all hover:-translate-y-0.5 hover:text-foreground ${accent.chip}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
