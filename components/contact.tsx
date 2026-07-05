"use client";

import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./reveal";

export function Contact() {
  const { dict } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden pt-28 pb-10 md:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[26rem] w-[40rem] rounded-full bg-violet/20 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.3em] text-cyan uppercase">
            {dict.contact.heading}
          </p>
          <h2 className="text-gradient mx-auto mt-5 max-w-4xl text-[clamp(3rem,9vw,6.5rem)] leading-none font-bold tracking-tight">
            {dict.contact.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">{dict.contact.text}</p>
          <a
            href={`mailto:${dict.contact.email}`}
            className="mt-10 inline-block rounded-full bg-gradient-to-r from-violet via-pink to-orange px-9 py-4 text-lg font-semibold text-white shadow-[0_8px_40px_-8px_rgba(236,72,153,0.55)] transition-transform hover:scale-[1.04] active:scale-95"
          >
            {dict.contact.emailLabel} →
          </a>
          <p className="mt-5 text-sm text-muted select-all">{dict.contact.email}</p>
        </Reveal>
      </div>

      <footer className="relative z-10 mx-auto mt-24 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/[0.07] px-6 pt-8 pb-2 md:flex-row">
        <p className="text-sm text-muted">
          {dict.footer.credit} © {new Date().getFullYear()}
        </p>
        <p className="text-sm text-muted">{dict.footer.tech}</p>
      </footer>
    </section>
  );
}
