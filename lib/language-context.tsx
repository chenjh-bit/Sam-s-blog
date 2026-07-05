"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { MotionConfig } from "motion/react";
import { en, type Dictionary } from "@/content/en";
import { zh } from "@/content/zh";

type Lang = "en" | "zh";

interface LanguageContextValue {
  lang: Lang;
  dict: Dictionary;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "zh") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dict: lang === "en" ? en : zh,
      toggle: () =>
        setLang((prev) => {
          const next: Lang = prev === "en" ? "zh" : "en";
          localStorage.setItem("lang", next);
          return next;
        }),
    }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
