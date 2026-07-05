"use client";

import { Reveal } from "./reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.3em] uppercase">
        <span className="text-gradient">{index}</span>
        <span className="h-px w-10 bg-white/20" aria-hidden />
        <span className="text-muted">{eyebrow}</span>
      </p>
      <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{title}</h2>
    </Reveal>
  );
}
