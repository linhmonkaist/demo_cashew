"use client";

import { FormEvent, useState } from "react";
import { ui } from "@/lib/content";
import { useI18n } from "./language";

export function ContactForm() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 rounded-3xl bg-white p-6 shadow-sm">
      <label className="block text-sm font-medium">
        {t(ui.name)}
        <input required name="name" className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2" />
      </label>
      <label className="block text-sm font-medium">
        Email
        <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2" />
      </label>
      <label className="block text-sm font-medium">
        {t(ui.phone)}
        <input required name="phone" className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2" />
      </label>
      <label className="block text-sm font-medium">
        {t(ui.message)}
        <textarea required name="message" rows={4} className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2" />
      </label>
      <button type="submit" className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white">
        {t(ui.send)}
      </button>
      {sent && <p className="text-sm text-brand-dark">{t(ui.sent)}</p>}
    </form>
  );
}

export function NewsletterForm() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
      <input
        required
        type="email"
        aria-label="Email"
        placeholder="email@company.com"
        className="w-full rounded-full border-0 px-4 py-3 text-ink"
      />
      <button type="submit" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">
        {t(ui.send)}
      </button>
      {sent && <p className="self-center text-sm">{t(ui.sent)}</p>}
    </form>
  );
}
