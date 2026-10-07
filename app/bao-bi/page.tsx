"use client";

import Link from "next/link";
import { asset } from "@/lib/asset";
import { useI18n } from "@/components/language";
import { packingProcess, ui } from "@/lib/content";

export default function PackingPage() {
  const { t } = useI18n();

  return (
    <article className="mx-auto max-w-5xl px-4 py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark">{t(ui.kernelTag)}</p>
      <h1 className="mt-2 text-4xl font-bold">{t(ui.packingTitle)}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{t(packingProcess.lead)}</p>

      <div className="mt-12 space-y-14">
        {packingProcess.steps.map((step, index) => (
          <section key={step.image} className="grid items-center gap-6 md:grid-cols-2">
            <img
              src={asset(step.image)}
              alt={t(step.title)}
              width={1600}
              height={900}
              className={`h-72 w-full rounded-3xl object-cover ${index % 2 === 1 ? "md:order-2" : ""}`}
            />
            <div>
              <p className="text-sm font-semibold text-brand-dark">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-1 text-2xl font-semibold">{t(step.title)}</h2>
              <p className="mt-3 leading-8 text-muted">{t(step.body)}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-14 rounded-3xl bg-sand p-6 md:p-8">
        <p className="text-lg leading-8">{t(packingProcess.close)}</p>
        <Link href="/lien-he" className="mt-5 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white">
          {t(ui.orderAdvice)}
        </Link>
      </div>
    </article>
  );
}
