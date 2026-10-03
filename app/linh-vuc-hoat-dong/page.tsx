"use client";

import { Scene } from "@/components/art";
import { useI18n } from "@/components/language";
import { business, dryingSteps, ui } from "@/lib/content";

export default function BusinessPage() {
  const { t } = useI18n();
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark">
        {t({ vi: "Lĩnh vực hoạt động", en: "Business" })}
      </p>
      <h1 className="mt-2 text-4xl font-bold">{t(business.title)}</h1>
      <Scene tone="factory" label={t(ui.placeholder)} className="mt-6 h-64 w-full rounded-3xl" />
      <p className="mt-6 leading-8">{t(business.lead)}</p>
      <h2 className="mt-8 text-2xl font-semibold">{t(ui.drying)}</h2>
      <ol className="mt-4 space-y-3">
        {dryingSteps.map((step, index) => (
          <li key={step.vi} className="rounded-2xl bg-sand p-4 leading-7">
            <span className="mr-2 font-semibold text-brand-dark">{index + 1}.</span>
            {t(step)}
          </li>
        ))}
      </ol>
      <p className="mt-6 leading-8">{t(business.close)}</p>
    </article>
  );
}
