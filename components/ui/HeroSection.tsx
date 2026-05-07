'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroImageVariant, heroTextVariant, staggerContainer } from '@/lib/animations';

// Ordered headline lines used for stacked text reveal animations.
const headingLines = ['Aditya\'s Interiors', 'Editorial Luxury', 'Modern Craftsmanship'];

/**
 * HeroSection presents the entry experience with split-screen layout and motion reveal.
 */
export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">
        {/* Text column with staggered entrance animation */}
        <motion.div
          className="w-full max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="space-y-6">
            <motion.p variants={heroTextVariant} className="text-sm uppercase tracking-[0.35em] text-bronze">
              Editorial interiors
            </motion.p>
            <div className="space-y-4">
              {headingLines.map((line) => (
                <motion.h1
                  key={line}
                  variants={heroTextVariant}
                  className="text-5xl font-semibold leading-tight tracking-[-0.05em] text-ivory sm:text-6xl lg:text-7xl"
                >
                  {line}
                </motion.h1>
              ))}
            </div>
            <motion.p variants={heroTextVariant} className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Distinctive interior compositions grounded in tactile materiality, calm palette harmony, and refined detail.
            </motion.p>
            <motion.div variants={heroTextVariant} className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* Primary CTA button for exploring the project gallery */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-bronze/40 bg-bronze/5 px-7 py-3 text-sm uppercase tracking-[0.3em] text-bronze transition hover:bg-bronze/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-bronze"
              >
                Explore projects
              </a>
              {/* Secondary CTA button for contact section */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm uppercase tracking-[0.3em] text-ivory transition hover:border-bronze/40 hover:text-bronze focus-visible:outline focus-visible:outline-2 focus-visible:outline-bronze"
              >
                Request inquiry
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Image panel with a soft overlay and elegant border framing */}
        <motion.div
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#111111] shadow-glow sm:aspect-[5/6]"
          variants={heroImageVariant}
          initial="hidden"
          animate="visible"
        >
          {/* Gradient overlay improves contrast and depth on top of the photo. */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <Image
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury interior with editorial styling"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
          />
          <div className="absolute bottom-6 left-6 rounded-3xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl text-sm text-slate-200">
            <p className="font-semibold uppercase tracking-[0.28em] text-bronze">Featured house</p>
            <p className="mt-2 max-w-xs leading-relaxed">Layered textures and soft bronze accents for a modern residential retreat.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
