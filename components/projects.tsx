"use client";

import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const badgeAccents = [
  "border-violet/30 bg-violet/15 text-violet",
  "border-pink/30 bg-pink/15 text-pink",
  "border-orange/30 bg-orange/15 text-orange",
  "border-cyan/30 bg-cyan/15 text-cyan",
];

export function Projects() {
  const { dict } = useLanguage();
  const lastIndex = dict.projects.items.length - 1;

  return (
    <section id="projects" className="py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          eyebrow={dict.projects.heading}
          title={dict.projects.title}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {dict.projects.items.map((project, i) => {
            const featured = i === 0 || i === lastIndex;
            return (
              <Reveal
                key={project.title}
                delay={(i % 2) * 0.08}
                className={featured ? "md:col-span-2" : ""}
              >
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.18] hover:bg-white/[0.05] md:p-9">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(500px_circle_at_85%_-10%,rgba(236,72,153,0.13),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden
                    className="absolute -top-5 right-3 text-[6.5rem] leading-none font-bold text-white/[0.045] select-none transition-colors group-hover:text-white/[0.08]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold tracking-wider uppercase ${badgeAccents[i % badgeAccents.length]}`}
                    >
                      {project.badge}
                    </span>
                    <h3 className="mt-5 text-2xl font-bold md:text-3xl">{project.title}</h3>
                    <p
                      className={`mt-3 leading-relaxed text-muted ${
                        featured ? "md:max-w-3xl" : ""
                      }`}
                    >
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-2.5 py-1 text-xs tracking-wider text-muted uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
