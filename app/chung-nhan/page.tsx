"use client";

import { Scene } from "@/components/art";
import { useI18n } from "@/components/language";
import { certClose, certIntro, certificates, commitments, ui } from "@/lib/content";

export default function CertificatesPage() {
  const { t } = useI18n();
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-bold">{t(ui.certTitle)}</h1>
      <p className="mt-4 leading-8">{t(certIntro)}</p>
      <div className="mt-6 space-y-4">
        {certificates.map((item) => (
          <section key={item.title} className="overflow-hidden rounded-3xl border border-black/5">
            <Scene tone="cert" label={item.title} className="h-40 w-full" />
            <p className="p-5 leading-7">{t(item.body)}</p>
          </section>
        ))}
      </div>
      <ul className="mt-6 space-y-3">
        {commitments.map((item) => (
          <li key={item.vi} className="leading-7">{t(item)}</li>
        ))}
      </ul>
      <p className="mt-6 leading-8">{t(certClose)}</p>
    </article>
  );
}
