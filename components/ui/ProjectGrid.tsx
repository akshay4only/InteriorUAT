'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cardHoverVariant } from '@/lib/animations';

// Sample project data driving the gallery layout and cards.
const projects = [
  {
    title: 'Maison de Lumière',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'The Atelier Suite',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b85?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Sierra Residence',
    location: 'Los Angeles, USA',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Gallery Retreat',
    location: 'Barcelona, Spain',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Eclipse Pavilion',
    location: 'Copenhagen, Denmark',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80'
  }
];

/**
 * ProjectGrid renders a responsive masonry-style gallery of portfolio cards.
 */
export default function ProjectGrid() {
  return (
    <div className="columns-1 gap-6 sm:columns-2 xl:columns-3">
      {projects.map((project) => (
        <motion.article
          key={project.title}
          className="group mb-6 overflow-hidden rounded-[2rem] border border-white/10 bg-black/50 shadow-glow transition duration-300 hover:-translate-y-1"
          variants={cardHoverVariant}
          initial="rest"
          whileHover="hover"
          whileFocus="hover"
          tabIndex={0}
        >
          {/* Card image panel with hover zoom and overlay */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} interior preview`}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-bronze">Project</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ivory">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{project.location}</p>
            </div>
          </div>

          {/* Hover overlay that appears when the card is focused or hovered. */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:opacity-100 group-focus:opacity-100">
            <span className="rounded-full border border-bronze/80 bg-black/60 px-5 py-3 text-sm uppercase tracking-[0.3em] text-bronze backdrop-blur-xl">
              Quick view
            </span>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
