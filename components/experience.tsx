"use client";

import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Experience() {
  const { dict } = useLanguage();

  return (
    <section id="experience" className="py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          eyebrow={dict.experience.heading}
          title={dict.experience.title}
        />

        <div className="space-y-6">
          {dict.experience.jobs.map((job) => (
            <Reveal key={job.org}>
              <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 md:p-12">
                <div
                  aria-hidden
                  className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-violet via-pink to-orange"
                />
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold tracking-[0.25em] text-cyan uppercase">
                      {job.role}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold md:text-3xl">{job.org}</h3>
                    <p className="mt-1 text-muted">{job.lab}</p>
                  </div>
                  <p className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-muted">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-8 space-y-4">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed text-foreground/85">
                      <span aria-hidden className="mt-0.5 flex-none text-pink">
                        ▸
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
