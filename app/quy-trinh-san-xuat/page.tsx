"use client";

import Link from "next/link";
import { asset } from "@/lib/asset";
import { useI18n } from "@/components/language";
import { packingProcess, ui } from "@/lib/content";

export default function ProductionProcessPage() {
  const { t } = useI18n();

  return (
    <article className="mx-auto max-w-5xl px-4 py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark">{t(ui.kernelTag)}</p>
      <h1 className="mt-2 text-4xl font-bold">{t(ui.packingTitle)}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{t(packingProcess.lead)}</p>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{t(packingProcess.preparationTitle)}</h2>
        <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {packingProcess.chapters.map((chapter) => (
            <div key={chapter.title.vi}>
              <h3 className="text-lg font-semibold text-brand-dark">{t(chapter.title)}</h3>
              <p className="mt-2 leading-8 text-muted">{t(chapter.body)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t(packingProcess.lineTitle)}</h2>
        <div className="mt-8 space-y-14">
          {packingProcess.steps.map((step, index) => {
            const imageOnRight = index % 2 === 1;
            return (
              <section key={step.image} className="grid items-center gap-6 md:grid-cols-2">
                <div className={imageOnRight ? "md:order-1" : "md:order-2"}>
                  <h3 className="text-2xl font-semibold">{t(step.title)}</h3>
                  <p className="mt-3 leading-8 text-muted">{t(step.body)}</p>
                </div>
                <img
                  src={asset(step.image)}
                  alt={t(step.title)}
                  width={1600}
                  height={900}
                  className={`h-72 w-full rounded-3xl object-cover ${imageOnRight ? "md:order-2" : "md:order-1"}`}
                />
              </section>
            );
          })}
        </div>
      </section>

      <div className="mt-16 rounded-3xl bg-sand p-6 md:p-8">
        <p className="text-lg leading-8">{t(packingProcess.close)}</p>
        <Link href="/lien-he" className="mt-5 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white">
          {t(ui.orderAdvice)}
        </Link>
      </div>
    </article>
  );
}
