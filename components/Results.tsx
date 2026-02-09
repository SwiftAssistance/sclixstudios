import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

/* ── Stats ────────────────────────────────────────────────────── */
interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '340+', label: 'Leads generated last quarter' },
  { value: '4.2x', label: 'Average return on ad spend' },
  { value: '12', label: 'Active trade clients' },
  { value: '48 hrs', label: 'Average turnaround time' },
];

/* ── Testimonials ─────────────────────────────────────────────── */
interface Testimonial {
  quote: string;
  name: string;
  trade: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Before Scalix I was getting maybe two or three calls a week from my website. Now I am turning work away. Genuinely did not think marketing would make that much difference.",
    name: 'Dan Mitchell',
    trade: 'Plumber, Slough',
    stars: 5,
  },
  {
    quote:
      "They redid our website and set up Google Ads. Within the first month we had more enquiries than the previous three combined. Straightforward people to deal with too, which helps.",
    name: 'Chris Barker',
    trade: 'Electrician, Windsor',
    stars: 5,
  },
  {
    quote:
      "I was sceptical about paying someone to run my socials but the leads speak for themselves. They actually understand what tradesmen need, not just generic marketing talk.",
    name: 'Sarah Kelley',
    trade: 'Kitchen fitter, Maidenhead',
    stars: 5,
  },
];

/* ── Animation ────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: 'easeOut' },
  }),
};

/* ── Component ────────────────────────────────────────────────── */
export const Results: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });

  const testimonialsRef = useRef<HTMLDivElement>(null);
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: '-60px',
  });

  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="py-20 md:py-28 px-6 md:px-12 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="max-w-2xl mb-14">
          <h2
            id="results-heading"
            className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4"
          >
            The numbers don't lie
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We track everything. Every click, every call, every form
            submission. Here is a snapshot of what we have delivered for our
            trade clients over the last quarter.
          </p>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          role="list"
          aria-label="Key performance statistics"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              animate={statsInView ? 'visible' : 'hidden'}
              variants={fadeUp}
              className="bg-white rounded-xl border border-slate-200 p-6 text-center"
              role="listitem"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-navy mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-slate-500 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div ref={testimonialsRef}>
          <h3 className="text-2xl font-bold text-navy mb-8">
            What our clients say
          </h3>

          <ul
            className="grid gap-6 md:grid-cols-3"
            role="list"
            aria-label="Client testimonials"
          >
            {testimonials.map((t, i) => (
              <motion.li
                key={t.name}
                custom={i}
                initial="hidden"
                animate={testimonialsInView ? 'visible' : 'hidden'}
                variants={fadeUp}
                className="bg-white rounded-xl border border-slate-200 p-7 flex flex-col"
              >
                <Quote
                  size={24}
                  className="text-navy/20 mb-4 flex-shrink-0"
                  aria-hidden="true"
                />
                <blockquote className="text-slate-700 leading-relaxed mb-6 flex-1">
                  {t.quote}
                </blockquote>
                <footer className="border-t border-slate-100 pt-4">
                  <div
                    className="flex gap-0.5 mb-2"
                    role="img"
                    aria-label={`Rated ${t.stars} out of 5 stars`}
                  >
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <Star
                        key={s}
                        size={16}
                        className="fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="font-bold text-navy text-sm">{t.name}</p>
                  <p className="text-slate-500 text-sm">{t.trade}</p>
                </footer>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
