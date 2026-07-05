"use client";

import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function About() {
  const { dict } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" eyebrow={dict.about.heading} title={dict.about.title} />

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div className="space-y-6">
            {dict.about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p
                  className={
                    i === 0
                      ? "text-xl leading-relaxed md:text-2xl"
                      : "text-base leading-relaxed text-muted md:text-lg"
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="grid content-start gap-8">
            {dict.about.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.15 + i * 0.1}>
                <p className="text-gradient text-5xl font-bold md:text-6xl">{stat.value}</p>
                <p className="mt-1 text-sm tracking-[0.25em] text-muted uppercase">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
