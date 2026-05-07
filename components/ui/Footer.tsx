'use client';

/**
 * Footer provides site-wide branding, contact, and copyright information.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/90 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 sm:px-8 lg:px-10 lg:flex-row lg:justify-between lg:items-start">
        <div className="max-w-xl space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-bronze">Bespoke Interior</p>
          <h2 className="text-2xl font-semibold text-ivory sm:text-3xl">Designed for calm, crafted for comfort.</h2>
          <p className="text-sm leading-7 text-slate-400">
            A luxury portfolio studio focused on thoughtful interiors, tailored spaces, and quiet attention to detail.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
            <p>+91 98765 43210</p>
            <p>info@artandconcept.com</p>
            <p>Mon - Sat, 10:00 AM - 7:00 PM</p>
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Location</p>
            <p>Global City, Virar West, Maharashtra 401303</p>
            <p>Vasai-Virar Region, Maharashtra</p>
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Quick Links</p>
            <p>Home</p>
            <p>Projects</p>
            <p>Get Quotes</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs uppercase tracking-[0.3em] text-slate-500 sm:px-8 lg:px-10">
        © {new Date().getFullYear()} Bespoke Interior Design. Crafted for luxury experiences.
      </div>
    </footer>
  );
}
