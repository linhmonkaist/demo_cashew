"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Scene } from "@/components/art";
import { useI18n } from "@/components/language";
import { articles, ui } from "@/lib/content";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <Link href="/su-kien" className="text-brand-dark underline">{t(ui.backNews)}</Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/su-kien" className="text-sm font-semibold text-brand-dark">{t(ui.backNews)}</Link>
      <p className="mt-4 text-sm text-muted">20 {t({ vi: "Tháng 4, 2026", en: "April 2026" })}</p>
      <h1 className="mt-2 text-4xl font-bold leading-tight">{t(article.title)}</h1>
      <Scene tone="news" label={t(article.title)} className="mt-6 h-64 w-full rounded-3xl" />
      <div className="mt-6 space-y-4">
        {article.paragraphs.map((paragraph) => (
          <p key={paragraph.vi} className="leading-8">{t(paragraph)}</p>
        ))}
      </div>
    </article>
  );
}
