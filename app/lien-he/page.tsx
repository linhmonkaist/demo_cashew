"use client";

import { ContactForm } from "@/components/forms";
import { useI18n } from "@/components/language";
import { company, ui } from "@/lib/content";

export default function ContactPage() {
  const { t } = useI18n();
  return (
    <section className="bg-sand">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-brand-dark">{t({ vi: "Liên hệ", en: "Contact" })}</h1>
          <h2 className="mt-6 text-2xl font-semibold">{company.name}</h2>
          <dl className="mt-4 space-y-3 text-sm leading-6">
            <div>
              <dt className="font-semibold">{t(ui.address)}</dt>
              <dd>{company.address}</dd>
              <dd className="mt-1">{company.address2}</dd>
            </div>
            <div>
              <dt className="font-semibold">Email</dt>
              <dd>
                <a className="text-brand-dark underline" href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">{t(ui.hotline)}</dt>
              <dd>
                <a className="text-brand-dark underline" href={`tel:${company.phoneRaw}`}>{company.phone}</a>
              </dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
