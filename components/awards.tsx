"use client";

import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Awards() {
  const { dict } = useLanguage();

  return (
    <section id="awards" className="py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="05" eyebrow={dict.awards.heading} title={dict.awards.title} />

        <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {dict.awards.items.map((award, i) => (
            <Reveal key={award.name} delay={i * 0.06}>
              <div className="flex items-baseline justify-between gap-6 py-6 transition-all hover:pl-3">
                <div>
                  <h3 className="text-lg font-semibold md:text-2xl">{award.name}</h3>
                  <p className="mt-1 text-sm text-muted md:text-base">{award.detail}</p>
                </div>
                <p className="text-gradient flex-none text-lg font-bold md:text-xl">
                  {award.year}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
