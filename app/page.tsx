"use client";

import Link from "next/link";
import { Scene } from "@/components/art";
import { NewsletterForm } from "@/components/forms";
import {
  certificates,
  intro,
  packaging,
  products,
  ui,
} from "@/lib/content";
import { useI18n } from "@/components/language";

export default function HomePage() {
  const { t } = useI18n();

  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark">
              {t({ vi: "Giới thiệu về", en: "Introduction to" })}
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-tight text-ink md:text-5xl">
              {t({ vi: "Công ty TNHH Xuất Nhập Khẩu Quang Bảo", en: "Quang Bao Import Export Co., Ltd." })}
            </h1>
            <p className="mt-5 text-base leading-7 text-muted">{t(intro)}</p>
            <Link href="/gioi-thieu" className="mt-6 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white">
              {t(ui.seeMore)}
            </Link>
          </div>
          <Scene tone="factory" label={t(ui.placeholder)} className="h-72 w-full rounded-3xl md:h-96" />
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-center text-3xl font-bold">{t(ui.kernels)}</h2>
          <p className="mt-2 text-center text-brand-dark">{t(ui.kernelTag)}</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Link key={product.slug} href={`/san-pham/${product.slug}`} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <Scene tone={product.tone} label={t(product.name)} className="h-40 w-full" />
                <div className="p-4">
                  <h3 className="font-semibold">{t(product.name)}</h3>
                  <p className="mt-1 text-sm text-muted">{t(product.summary)}</p>
                  <p className="mt-3 text-sm font-semibold text-brand-dark">{t(ui.quickView)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-center text-3xl font-bold">{t(ui.packingTitle)}</h2>
          <p className="mt-2 text-center text-brand-dark">{t(ui.kernelTag)}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {packaging.map((item) => (
              <Link key={item.slug} href="/bao-bi" className="overflow-hidden rounded-3xl border border-black/5">
                <Scene tone="pack" label={t(item.name)} className="h-44 w-full" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{t(item.name)}</h3>
                  <p className="mt-2 text-sm text-muted">{t(item.body)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-center text-3xl font-bold">{t(ui.certTitle)}</h2>
          <p className="mt-2 text-center text-brand-dark">{t(ui.kernelTag)}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {certificates.map((item) => (
              <Link key={item.title} href="/chung-nhan" className="rounded-3xl bg-white p-5 shadow-sm">
                <Scene tone="cert" label={item.title} className="h-36 w-full rounded-2xl" />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{t(item.body)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-bold">{t(ui.newsletter)}</h2>
          <p className="mt-2 max-w-xl text-white/90">{t(ui.newsletterHint)}</p>
          <p className="mt-2 text-white/90">{t(ui.kernelTag)}</p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
