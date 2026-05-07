'use client';

import { useState } from 'react';
import Link from 'next/link';

// Navigation links used in both desktop and mobile versions of the header.
const navItems = [
  { label: 'Studio', href: '#studio' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Get Quotes', href: '/get-quotes' },
  { label: 'Connect', href: '#contact' }
];

// Mega menu items displayed on hover for the desktop submenu.
const megaMenuItems = [
  { title: 'Residential', description: 'Signature homes with sculptural details' },
  { title: 'Hospitality', description: 'Clean, premium interiors for modern guests' },
  { title: 'Curated objects', description: 'Bespoke finishes and art-driven pieces' }
];

/**
 * GlassNavbar renders the top navigation with a desktop mega-menu and mobile drawer.
 */
export default function GlassNavbar() {
  // isOpen controls the mobile menu drawer state.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl transition duration-500 ease-out">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-10">
        {/* Brand logo / home anchor */}
        <Link href="/" className="text-lg font-semibold uppercase tracking-[0.32em] text-ivory">
          Aditya's Interior
        </Link>

        {/* Desktop navigation including a hover-triggered mega menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <div className="group relative">
            <button className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-ivory transition hover:text-bronze focus-visible:text-bronze">
              Services
              <span aria-hidden="true">▾</span>
            </button>
            <div className="pointer-events-none absolute left-0 top-full mt-4 hidden w-[22rem] rounded-3xl border border-white/10 bg-black/80 p-6 shadow-glow transition duration-300 group-hover:pointer-events-auto group-hover:block">
              <div className="space-y-4">
                {megaMenuItems.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/5 bg-white/5 p-4 transition hover:border-bronze/40 hover:bg-white/10">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-ivory">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop nav links are hidden on mobile */}
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm uppercase tracking-[0.3em] text-ivory transition hover:text-bronze focus-visible:text-bronze">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger button toggles the drawer */}
        <button
          onClick={() => setIsOpen((prev: boolean) => !prev)}
          aria-label="Open menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ivory transition hover:border-bronze/40 hover:text-bronze focus-visible:border-bronze focus-visible:text-bronze md:hidden"
        >
          <span className="block h-0.5 w-5 bg-current before:content-[''] before:block before:h-0.5 before:w-5 before:translate-y-1.5 before:bg-current after:content-[''] after:block after:h-0.5 after:w-5 after:-translate-y-1.5 after:bg-current" />
        </button>
      </div>

      {/* Mobile menu drawer shown only when isOpen is true */}
      {isOpen ? (
        <div className="absolute inset-x-0 top-full border-t border-white/10 bg-black/95 px-6 py-8 shadow-2xl md:hidden">
          <div className="space-y-6">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="block text-base uppercase tracking-[0.3em] text-ivory transition hover:text-bronze focus-visible:text-bronze" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-ivory">Explore</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Luxury design services from planning to final styling.</p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
