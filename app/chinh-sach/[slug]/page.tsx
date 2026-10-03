"use client";

import { useParams } from "next/navigation";
import { useI18n } from "@/components/language";
import { policies, ui } from "@/lib/content";

export default function PolicyPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();
  const policy = policies.find((item) => item.slug === slug) ?? {
    title: ui.updated,
    body: ui.updated,
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-bold">{t(policy.title)}</h1>
      <p className="mt-6 text-lg text-muted">{t(policy.body)}</p>
    </article>
  );
}
