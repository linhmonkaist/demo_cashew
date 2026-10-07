"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { asset } from "@/lib/asset";
import { useI18n } from "@/components/language";
import { productShared, products, ui } from "@/lib/content";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p>{t({ vi: "Không tìm thấy sản phẩm.", en: "Product not found." })}</p>
        <Link href="/san-pham" className="mt-4 inline-block text-brand-dark underline">
          {t({ vi: "Về trang sản phẩm", en: "Back to products" })}
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm font-semibold text-brand-dark">{t(ui.contactPrice)}</p>
      <h1 className="mt-2 text-4xl font-bold">{t(product.name)}</h1>
      <img
        src={asset(product.image)}
        alt={t(product.name)}
        width={540}
        height={540}
        className="mt-6 h-72 w-full rounded-3xl bg-white object-contain"
      />
      <p className="mt-6 leading-8">{t(productShared.nutrition)}</p>
      <p className="mt-4 leading-8">{t(product.detail)}</p>
      <h2 className="mt-8 text-2xl font-semibold">{t(ui.process)}</h2>
      <ul className="mt-4 space-y-3">
        {productShared.processSteps.map((step) => (
          <li key={step.vi} className="rounded-2xl bg-sand p-4 leading-7">
            {t(step)}
          </li>
        ))}
      </ul>
      <h2 className="mt-8 text-2xl font-semibold">{t(ui.nutritionTitle)}</h2>
      <p className="mt-3 leading-8">{t(productShared.benefits)}</p>
      <h2 className="mt-8 text-2xl font-semibold">{t(ui.specs)}</h2>
      <dl className="mt-4 overflow-hidden rounded-2xl border border-black/10">
        {product.specs.map((spec) => (
          <div key={spec.label.vi} className="grid grid-cols-2 border-b border-black/10 last:border-0">
            <dt className="bg-sand px-4 py-3 text-sm font-medium">{t(spec.label)}</dt>
            <dd className="px-4 py-3 text-sm">{t(spec.value)}</dd>
          </div>
        ))}
      </dl>
      <h2 className="mt-10 text-xl font-semibold">{t(ui.related)}</h2>
      <div className="mt-3 flex flex-wrap gap-3">
        {products
          .filter((item) => item.slug !== product.slug)
          .map((item) => (
            <Link key={item.slug} href={`/san-pham/${item.slug}`} className="rounded-full bg-brand-soft px-4 py-2 text-sm font-medium text-brand-dark">
              {t(item.name)}
            </Link>
          ))}
      </div>
    </article>
  );
}
