"use client";

import { useI18n } from "@/components/language";
import { marketIntro, markets, ui } from "@/lib/content";

export default function MarketsPage() {
  const { t } = useI18n();
  return (
    <article className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold">{t(ui.marketsTitle)}</h1>
      <p className="mt-6 leading-8">{t(marketIntro)}</p>
      <div className="mt-6 space-y-4">
        {markets.map((market) => (
          <section key={market.region.vi} className="rounded-3xl bg-sand p-5">
            <h2 className="text-xl font-semibold text-brand-dark">{t(market.region)}</h2>
            <p className="mt-2 leading-7">{t(market.detail)}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
