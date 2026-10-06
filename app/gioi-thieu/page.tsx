"use client";

import Link from "next/link";
import { asset } from "@/lib/asset";
import { useI18n } from "@/components/language";
import { certClose, certIntro, certificates, commitments, intro, ui } from "@/lib/content";

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark">{t({ vi: "Giới thiệu", en: "About" })}</p>
      <h1 className="mt-2 text-4xl font-bold">{t(ui.aboutTitle)}</h1>
      <img
        src={asset("/factory.jpg")}
        alt={t({ vi: "Biển hiệu Công ty TNHH Xuất Nhập Khẩu Hoàng Minh Cashew", en: "Hoang Minh Cashew factory sign" })}
        width={1024}
        height={682}
        className="mt-6 h-auto w-full rounded-3xl object-cover"
      />
      <p className="mt-6 text-base leading-8 text-ink/90">{t(intro)}</p>
      <h2 className="mt-10 text-2xl font-semibold">{t(ui.certTitle)}</h2>
      <p className="mt-3 leading-7">{t(certIntro)}</p>
      <ul className="mt-4 space-y-3">
        {certificates.map((item) => (
          <li key={item.title} className="rounded-2xl bg-sand p-4 leading-7">
            {t(item.body)}
          </li>
        ))}
      </ul>
      <ul className="mt-4 space-y-3">
        {commitments.map((item) => (
          <li key={item.vi} className="leading-7">
            {t(item)}
          </li>
        ))}
      </ul>
      <p className="mt-6 leading-8">{t(certClose)}</p>
      <Link href="/gioi-thieu/thu-ngo" className="mt-8 inline-flex text-sm font-semibold text-brand-dark underline">
        {t(ui.letterTitle)}
      </Link>
    </article>
  );
}
