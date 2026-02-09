import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Globe,
  Search,
  MousePointerClick,
  Megaphone,
  Palette,
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Globe size={28} aria-hidden="true" />,
    title: 'Websites that convert',
    description:
      'Fast, mobile-first sites built to turn visitors into enquiries. No templates. No recycled themes. Clean, purposeful design that loads in under two seconds and works on every device your customers use.',
  },
  {
    icon: <MousePointerClick size={28} aria-hidden="true" />,
    title: 'Google Ads management',
    description:
      'We put you at the top of Google when someone in your area searches for exactly what you do. You only pay when they click, and we make sure those clicks actually turn into phone calls.',
  },
  {
    icon: <Search size={28} aria-hidden="true" />,
    title: 'Search engine optimisation',
    description:
      'Ranking on Google takes patience and consistent effort. We handle the technical work — site structure, local listings, content — so your business climbs the results month after month.',
  },
  {
    icon: <Megaphone size={28} aria-hidden="true" />,
    title: 'Social media that works',
    description:
      'Consistent posts, local targeting, and content your customers actually want to see. Not stock photos with inspirational quotes — real content that shows off your work and builds trust.',
  },
  {
    icon: <Palette size={28} aria-hidden="true" />,
    title: 'Brand &amp; identity',
    description:
      'Logo, van livery, workwear, business cards. Everything a customer sees before they have even spoken to you. We make sure it all tells the same story and looks the part.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: 'easeOut' },
  }),
};

export const Services: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      ref={ref}
      aria-labelledby="services-heading"
      className="py-20 md:py-28 px-6 md:px-12 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4"
          >
            What we actually do
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Most tradesmen are brilliant at what they do but have never had
            the time (or interest) to figure out marketing. That is where we
            come in. Here is what we can take off your plate.
          </p>
        </div>

        <ul
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {services.map((service, i) => (
            <motion.li
              key={service.title}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="group rounded-xl border border-slate-200 p-7 hover:border-navy/20 hover:shadow-md transition-all duration-200"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy mb-5 group-hover:bg-navy group-hover:text-white transition-colors duration-200">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-[0.95rem]">
                {service.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
