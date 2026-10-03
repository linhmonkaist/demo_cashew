"use client";

import Link from "next/link";
import { Scene } from "@/components/art";
import { useI18n } from "@/components/language";
import { products, ui } from "@/lib/content";

export default function ProductsPage() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-center text-4xl font-bold text-brand-dark">{t({ vi: "Sản phẩm", en: "Products" })}</h1>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Link key={product.slug} href={`/san-pham/${product.slug}`} className="overflow-hidden rounded-3xl border border-black/5 bg-white">
            <Scene tone={product.tone} label={t(product.name)} className="h-44 w-full" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{t(product.name)}</h2>
              <p className="mt-2 text-sm text-muted">{t(product.summary)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
