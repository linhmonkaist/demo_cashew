"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, nav } from "@/lib/content";
import { useI18n } from "./language";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Shell({ children }: { children: React.ReactNode }) {
  const { lang, setLang, t } = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-ink">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-sm font-bold text-white">
              QB
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-brand-dark">Quang Bảo</span>
              <span className="block text-xs text-muted">Cashew export</span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-sm ${
                    isActive(pathname, item.href) ? "bg-brand-soft font-semibold text-brand-dark" : "text-ink/80 hover:bg-sand"
                  }`}
                >
                  {t(item.label)}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-20 min-w-56 rounded-2xl border border-black/5 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block rounded-xl px-3 py-2 text-sm hover:bg-sand">
                        {t(child.label)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-2">
            <div className="rounded-full border border-black/10 p-1 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLang("vi")}
                className={`rounded-full px-2 py-1 ${lang === "vi" ? "bg-brand text-white" : "text-ink/70"}`}
                aria-pressed={lang === "vi"}
              >
                VI
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-2 py-1 ${lang === "en" ? "bg-brand text-white" : "text-ink/70"}`}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              className="rounded-full border border-black/10 px-3 py-2 text-sm lg:hidden"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              Menu
            </button>
          </div>
        </div>
        {open && (
          <nav className="space-y-1 border-t border-black/5 px-4 py-3 lg:hidden">
            {nav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm font-medium hover:bg-sand"
                >
                  {t(item.label)}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-6 py-1.5 text-sm text-muted hover:bg-sand"
                  >
                    {t(child.label)}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-16 bg-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-lg font-semibold">{company.name}</p>
            <p className="mt-3 text-sm text-white/75">{company.address}</p>
            <p className="mt-2 text-sm text-white/75">{company.address2}</p>
          </div>
          <div>
            <p className="font-semibold">{t({ vi: "Tư vấn đặt hàng", en: "Order advice" })}</p>
            <a className="mt-3 block text-sm text-white/80" href={`tel:${company.phoneRaw}`}>
              {company.phone}
            </a>
            <a className="mt-1 block text-sm text-white/80" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </div>
          <div>
            <p className="font-semibold">{t({ vi: "Chính sách", en: "Policies" })}</p>
            <Link href="/chinh-sach/bao-mat" className="mt-3 block text-sm text-white/80">
              {t({ vi: "Bảo mật", en: "Privacy" })}
            </Link>
            <Link href="/chinh-sach/doi-tra" className="mt-1 block text-sm text-white/80">
              {t({ vi: "Hoàn, đổi, trả", en: "Returns" })}
            </Link>
            <Link href="/bao-bi" className="mt-1 block text-sm text-white/80">
              {t({ vi: "Bao bì đóng gói", en: "Packing" })}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
