"use client";

import Link from "next/link";
import { Scene } from "@/components/art";
import { useI18n } from "@/components/language";
import { articles } from "@/lib/content";

export default function NewsPage() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-center text-4xl font-bold text-brand-dark">{t({ vi: "Sự kiện", en: "News" })}</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.slug} href={`/su-kien/${article.slug}`} className="overflow-hidden rounded-3xl border border-black/5">
            <Scene tone="news" label={t(article.title)} className="h-40 w-full" />
            <div className="p-5">
              <p className="text-xs text-muted">20 {t({ vi: "Tháng 4, 2026", en: "April 2026" })}</p>
              <h2 className="mt-2 text-lg font-semibold leading-snug">{t(article.title)}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{t(article.excerpt)}</p>
              <p className="mt-3 text-sm font-semibold text-brand-dark">{t({ vi: "Chi tiết", en: "Details" })}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
