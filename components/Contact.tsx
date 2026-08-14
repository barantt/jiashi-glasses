"use client";

import { useState } from "react";
import {
  IconCalendar,
  IconCheck,
  IconClock,
  IconMapPin,
  IconPhone,
} from "./icons";
import { contactSection, form, store } from "@/config/contact";

type Errors = Partial<Record<"name" | "phone" | "service", string>>;

function validate(fields: {
  name: string;
  phone: string;
  service: string;
}): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) {
    errors.name = form.validation.name;
  }
  if (!/^1[3-9]\d{9}$/.test(fields.phone.trim())) {
    errors.phone = form.validation.phone;
  }
  if (!fields.service) {
    errors.service = form.validation.service;
  }
  return errors;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [remark, setRemark] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate({ name, phone, service });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    // 演示站点：模拟提交，接入真实后台后替换此段逻辑
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute -left-32 top-0 h-[26rem] w-[26rem] rounded-full bg-navy-600/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-24 h-[30rem] w-[30rem] rounded-full bg-green-400/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        {/* 门店信息 */}
        <div>
          <p className="flex items-center gap-3">
            <span className="rule-green w-10" />
            <span className="font-latin text-xs font-semibold uppercase tracking-[0.3em] text-green-300 sm:text-sm">
              {contactSection.eyebrow}
            </span>
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-snug text-cream sm:text-4xl lg:text-[2.6rem]">
            {contactSection.titleLines[0]}
            <br />
            {contactSection.titleLines[1]}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-navy-100 sm:text-lg">
            {contactSection.subtitle}
          </p>

          <ul className="mt-10 space-y-6">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green-300">
                <IconMapPin className="h-5.5 w-5.5" />
              </span>
              <span>
                <span className="block text-sm text-navy-200">
                  {contactSection.labels.address}
                </span>
                <span className="mt-1 block font-medium text-cream">
                  {store.addressLine}
                </span>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green-300">
                <IconClock className="h-5.5 w-5.5" />
              </span>
              <span>
                <span className="block text-sm text-navy-200">
                  {contactSection.labels.hours}
                </span>
                <span className="mt-1 block font-medium text-cream">
                  {store.hoursLine}
                </span>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green-300">
                <IconPhone className="h-5.5 w-5.5" />
              </span>
              <span>
                <span className="block text-sm text-navy-200">
                  {contactSection.labels.phone}
                </span>
                <a
                  href={store.phoneHref}
                  className="mt-1 block font-latin text-lg font-semibold text-cream transition-colors duration-200 hover:text-green-300"
                >
                  {store.phoneDisplay}
                </a>
              </span>
            </li>
          </ul>
        </div>

        {/* 预约表单 */}
        <div className="rounded-3xl border border-white/10 bg-white p-7 shadow-[0_28px_72px_rgb(0_0_0/0.4)] sm:p-10">
          {done ? (
            <div
              aria-live="polite"
              className="flex min-h-[26rem] flex-col items-center justify-center text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-400/15 text-green-600">
                <IconCheck className="h-8 w-8" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">
                {form.success.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-mute">
                {form.success.desc}
              </p>
              <button
                type="button"
                onClick={() => setDone(false)}
                className="mt-8 rounded-full border border-navy-200 px-6 py-2.5 text-sm font-semibold text-navy-800 transition-colors duration-200 hover:border-navy-800"
              >
                {form.success.again}
              </button>
            </div>
          ) : (
            <>
              <h3 className="flex items-center gap-3 font-display text-2xl font-bold text-navy-900">
                <IconCalendar className="h-6 w-6 text-green-600" />
                {form.heading}
              </h3>
              <p className="mt-2 text-sm text-ink-mute">{form.subHeading}</p>

              <form onSubmit={onSubmit} noValidate className="mt-7 space-y-5">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">
                    {form.labels.name} <span className="text-[#c0392b]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={form.placeholders.name}
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={`field ${errors.name ? "field-error" : ""}`}
                  />
                  {errors.name && (
                    <p id="contact-name-error" role="alert" className="mt-1.5 text-sm text-[#c0392b]">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-ink">
                    {form.labels.phone} <span className="text-[#c0392b]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={form.placeholders.phone}
                    autoComplete="tel"
                    inputMode="numeric"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                    className={`field ${errors.phone ? "field-error" : ""}`}
                  />
                  {errors.phone && (
                    <p id="contact-phone-error" role="alert" className="mt-1.5 text-sm text-[#c0392b]">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-service" className="mb-1.5 block text-sm font-medium text-ink">
                    {form.labels.service} <span className="text-[#c0392b]" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="contact-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? "contact-service-error" : undefined}
                    className={`field ${errors.service ? "field-error" : ""} ${
                      service === "" ? "text-ink-mute/60" : ""
                    }`}
                  >
                    <option value="" disabled>
                      {form.placeholders.service}
                    </option>
                    {form.serviceOptions.map((o) => (
                      <option key={o} value={o} className="text-ink">
                        {o}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="contact-service-error" role="alert" className="mt-1.5 text-sm text-[#c0392b]">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-remark" className="mb-1.5 block text-sm font-medium text-ink">
                    {form.labels.remark}
                  </label>
                  <textarea
                    id="contact-remark"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    placeholder={form.placeholders.remark}
                    rows={3}
                    className="field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-400 px-7 py-3.5 text-base font-semibold text-navy-950 shadow-[0_8px_24px_rgb(88_185_37/0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-300 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {submitting ? form.submitting : form.submit}
                </button>

                <p className="text-center text-xs leading-relaxed text-ink-mute">
                  {form.privacy}
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
