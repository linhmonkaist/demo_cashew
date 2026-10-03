"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Copy, Lang } from "@/lib/content";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (copy: Copy) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("vi");

  useEffect(() => {
    const saved = window.localStorage.getItem("demo-cashew-lang");
    if (saved === "en" || saved === "vi") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "vi" ? "vi" : "en";
    window.localStorage.setItem("demo-cashew-lang", lang);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang: setLangState,
      t: (copy) => copy[lang],
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useI18n must be used within LanguageProvider");
  return value;
}
