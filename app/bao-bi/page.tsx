"use client";

import { Scene } from "@/components/art";
import { useI18n } from "@/components/language";
import { packaging, ui } from "@/lib/content";

export default function PackingPage() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-bold">{t(ui.packingTitle)}</h1>
      <p className="mt-3 text-brand-dark">{t(ui.kernelTag)}</p>
      <div className="mt-6 space-y-5">
        {packaging.map((item) => (
          <article key={item.slug} className="overflow-hidden rounded-3xl border border-black/5">
            <Scene tone="pack" label={t(item.name)} className="h-48 w-full" />
            <div className="p-5">
              <h2 className="text-2xl font-semibold">{t(item.name)}</h2>
              <p className="mt-2 text-muted">{t(item.body)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
