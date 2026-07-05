"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useLanguage } from "@/lib/language-context";
import { ShaderBackground } from "./shader-background";
import { Magnetic } from "./magnetic";

function MaskedLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
      <motion.span
        className={`block origin-bottom-left ${className}`}
        initial={{ y: "115%", rotate: 3 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const { dict, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const nameLines = dict.hero.name.split(" ");

  return (
    <section ref={sectionRef} className="relative flex min-h-svh flex-col overflow-hidden">
      <ShaderBackground className="absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-background"
      />

      <motion.div
        key={lang}
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-28 pb-40"
      >
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm font-semibold tracking-[0.35em] text-cyan uppercase md:text-base"
        >
          {dict.hero.greeting}
        </motion.p>

        <h1 className="mt-4 text-[clamp(3.4rem,13vw,9.5rem)] leading-[0.95] font-bold tracking-tight uppercase">
          {nameLines.map((line, i) => (
            <MaskedLine
              key={line}
              delay={0.3 + i * 0.14}
              className={i % 2 === 0 ? "text-gradient" : "text-outline"}
            >
              {line}
            </MaskedLine>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-xl text-lg text-muted md:text-2xl"
        >
          {dict.hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href="#projects"
              className="inline-block rounded-full bg-gradient-to-r from-violet via-pink to-orange px-7 py-3.5 font-semibold text-white shadow-[0_8px_40px_-8px_rgba(236,72,153,0.55)] transition-transform hover:scale-[1.04] active:scale-95"
            >
              {dict.hero.cta} ↓
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-block rounded-full border border-white/20 bg-background/20 px-7 py-3.5 font-semibold backdrop-blur-sm transition-colors hover:border-pink hover:text-pink"
            >
              {dict.hero.contactCta}
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        className="absolute inset-x-0 bottom-0 z-10"
      >
        <div className="mx-auto flex max-w-6xl items-end justify-between gap-8 px-6 pb-8">
          <p className="max-w-3xl text-[10px] leading-loose tracking-[0.25em] text-foreground/35 uppercase md:text-xs">
            {dict.hero.keywords.join("  ·  ")}
          </p>
          <div className="relative h-14 w-px flex-none overflow-hidden bg-white/15">
            <div className="absolute inset-x-0 top-0 h-1/2 animate-scrollline bg-gradient-to-b from-transparent to-cyan motion-reduce:animate-none" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
