import React, { useState, useRef, type FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const SERVICE_OPTIONS = [
  'Website design',
  'Google Ads',
  'SEO',
  'Social media',
  'Branding',
  'Not sure yet',
] as const;

interface FormData {
  name: string;
  contact: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  contact: '',
  service: '',
  message: '',
};

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const validate = (): boolean => {
    const next: typeof errors = {};

    if (!form.name.trim()) {
      next.name = 'Please enter your name.';
    }

    if (!form.contact.trim()) {
      next.contact = 'Please enter an email or phone number.';
    } else {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact);
      const isPhone = /^[\d\s+()-]{7,}$/.test(form.contact);
      if (!isEmail && !isPhone) {
        next.contact = 'Please enter a valid email or phone number.';
      }
    }

    if (!form.service) {
      next.service = 'Please pick a service.';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      aria-labelledby="contact-heading"
      className="py-20 md:py-28 px-6 md:px-12 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left column — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4"
            >
              Let's have a chat
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              No hard sell, no jargon. Just a straight conversation about
              where your business is now and where you want it to be. Fill in
              the form and we will get back to you within a working day.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Prefer to just call? Ring us on{' '}
              <a
                href="tel:01234567890"
                className="font-semibold text-navy underline underline-offset-2 hover:text-navy-light transition-colors"
              >
                01234 567 890
              </a>{' '}
              during working hours. If we miss you, leave a message and we
              will ring you back the same day.
            </p>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {submitted ? (
              <div
                className="rounded-xl border border-green-200 bg-green-50 p-8 text-center"
                role="status"
              >
                <CheckCircle
                  size={40}
                  className="text-green-600 mx-auto mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold text-navy mb-2">
                  Message received
                </h3>
                <p className="text-slate-600">
                  Thanks, {form.name.split(' ')[0]}. We will be in touch
                  within one working day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 rounded-xl border border-slate-200 bg-slate-50 p-7 md:p-8"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-navy mb-1.5"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="w-full rounded-lg border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-navy focus:ring-navy"
                    placeholder="e.g. James Wilson"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Contact */}
                <div>
                  <label
                    htmlFor="contact-detail"
                    className="block text-sm font-semibold text-navy mb-1.5"
                  >
                    Email or phone number
                  </label>
                  <input
                    id="contact-detail"
                    name="contact"
                    type="text"
                    autoComplete="email tel"
                    value={form.contact}
                    onChange={handleChange}
                    aria-invalid={!!errors.contact}
                    aria-describedby={
                      errors.contact ? 'contact-error' : undefined
                    }
                    className="w-full rounded-lg border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-navy focus:ring-navy"
                    placeholder="e.g. james@email.com or 07700 900123"
                  />
                  {errors.contact && (
                    <p
                      id="contact-error"
                      className="mt-1 text-sm text-red-600"
                      role="alert"
                    >
                      {errors.contact}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-sm font-semibold text-navy mb-1.5"
                  >
                    What do you need help with?
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    aria-invalid={!!errors.service}
                    aria-describedby={
                      errors.service ? 'service-error' : undefined
                    }
                    className="w-full rounded-lg border-slate-300 bg-white px-4 py-2.5 text-slate-900 focus:border-navy focus:ring-navy"
                  >
                    <option value="" disabled>
                      Pick a service...
                    </option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p
                      id="service-error"
                      className="mt-1 text-sm text-red-600"
                      role="alert"
                    >
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-navy mb-1.5"
                  >
                    Anything else you want us to know?{' '}
                    <span className="font-normal text-slate-400">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-navy focus:ring-navy resize-y"
                    placeholder="Tell us a bit about your business and what you are looking for."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full bg-navy text-white font-bold px-6 py-3 rounded-lg hover:bg-navy-light transition-colors focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                >
                  Send message
                  <Send size={16} aria-hidden="true" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
