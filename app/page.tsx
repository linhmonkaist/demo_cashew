"use client";

import Link from "next/link";
import { Scene } from "@/components/art";
import { asset } from "@/lib/asset";
import { NewsletterForm } from "@/components/forms";
import {
  certificates,
  intro,
  packingProcess,
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
              {t({ vi: "Công ty TNHH Xuất Nhập Khẩu Hoàng Minh Cashew", en: "Hoang Minh Cashew Import Export Co., Ltd." })}
            </h1>
            <p className="mt-5 text-base leading-7 text-muted">{t(intro)}</p>
            <Link href="/gioi-thieu" className="mt-6 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white">
              {t(ui.seeMore)}
            </Link>
          </div>
          <img
            src={asset("/factory.jpg")}
            alt={t({ vi: "Biển hiệu Công ty TNHH Xuất Nhập Khẩu Hoàng Minh Cashew", en: "Hoang Minh Cashew factory sign" })}
            width={1024}
            height={682}
            className="h-72 w-full rounded-3xl object-cover md:h-96"
          />
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-center text-3xl font-bold">{t(ui.kernels)}</h2>
          <p className="mt-2 text-center text-brand-dark">{t(ui.kernelTag)}</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Link key={product.slug} href={`/san-pham/${product.slug}`} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <img
                  src={asset(product.image)}
                  alt={t(product.name)}
                  width={540}
                  height={540}
                  className="h-48 w-full bg-white object-cover"
                />
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
          <p className="mx-auto mt-3 max-w-3xl text-center leading-7 text-muted">{t(packingProcess.lead)}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {packingProcess.steps.map((step) => (
              <Link key={step.image} href="/bao-bi" className="overflow-hidden rounded-3xl border border-black/5 bg-white">
                <img src={asset(step.image)} alt={t(step.title)} width={1600} height={900} className="h-40 w-full object-cover" />
                <p className="p-4 text-sm font-semibold">{t(step.title)}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/bao-bi" className="inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white">
              {t(ui.seeProcess)}
            </Link>
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
                {item.image ? (
                  <img src={asset(item.image)} alt={item.title} width={1700} height={2200} className="h-44 w-full rounded-2xl bg-white object-cover object-top" />
                ) : (
                  <Scene tone="cert" label={item.title} className="h-36 w-full rounded-2xl" />
                )}
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
