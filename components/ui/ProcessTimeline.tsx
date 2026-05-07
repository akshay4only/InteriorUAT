'use client';

import { motion } from 'framer-motion';

// List of process steps displayed in the horizontal timeline.
const processItems = [
  {
    title: 'Consultation',
    description: 'Align vision, budget, and site context through strategic briefs and initial studies.'
  },
  {
    title: 'Design',
    description: 'Craft spatial narratives with material boards, refined plans, and immersive imagery.'
  },
  {
    title: 'Execution',
    description: 'Deliver precision installations, styling, and quality oversight from concept to completion.'
  }
];

/**
 * ProcessTimeline visualizes the studio process in a horizontally scrollable timeline.
 */
export default function ProcessTimeline() {
  return (
    <section id="process" className="overflow-hidden px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-bronze">Design journey</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ivory sm:text-4xl">A refined process built for clarity and confidence.</h2>
        </div>

        {/* Horizontal scroller using snap behavior for a polished timeline experience */}
        <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
          {processItems.map((step, index) => (
            <motion.div
              key={step.title}
              className="snap-start min-w-[18rem] rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-glow transition duration-300 hover:bg-black/80"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-bronze/30 bg-bronze/10 text-lg font-semibold text-bronze">
                {index + 1}
              </div>
              <h3 className="text-2xl font-semibold text-ivory">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
