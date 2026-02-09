import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

export const Hero: React.FC = () => (
  <section
    aria-labelledby="hero-heading"
    className="relative min-h-[90vh] flex items-center bg-navy text-white overflow-hidden"
  >
    {/* Subtle background texture — not a gradient blob */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }}
      aria-hidden="true"
    />

    <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-28 md:py-36">
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.div
          custom={0}
          variants={fade}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 mb-6"
        >
          <MapPin size={14} aria-hidden="true" />
          <span>Windsor &amp; Thames Valley</span>
        </motion.div>

        <motion.h1
          id="hero-heading"
          custom={1}
          variants={fade}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6"
        >
          Your work speaks for&nbsp;itself.
          <br />
          <span className="text-slate-300">Your website should&nbsp;too.</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fade}
          className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10"
        >
          We help tradesmen across Windsor and the Thames Valley get found
          online, win more quotes, and stop relying on word of mouth alone.
          No jargon. No fluff. Just marketing that actually brings in work.
        </motion.p>

        <motion.div
          custom={3}
          variants={fade}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-navy font-bold px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Get a free website audit
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a
            href="#results"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:border-white/60 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            See our results
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
