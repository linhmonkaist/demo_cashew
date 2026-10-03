"use client";

import { Scene } from "@/components/art";
import { useI18n } from "@/components/language";
import { ui } from "@/lib/content";

export default function LetterPage() {
  const { t } = useI18n();
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-bold">{t(ui.letterTitle)}</h1>
      <Scene tone="news" label={t(ui.placeholder)} className="mt-6 h-56 w-full rounded-3xl" />
      <p className="mt-6 text-lg text-muted">{t(ui.updated)}</p>
    </article>
  );
}
