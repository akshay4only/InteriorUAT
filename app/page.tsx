import HeroSection from '@/components/ui/HeroSection';
import ProjectGrid from '@/components/ui/ProjectGrid';
import ProcessTimeline from '@/components/ui/ProcessTimeline';
import ContactForm from '@/components/ui/ContactForm';

/**
 * HomePage composes the main landing experience with hero, portfolio, process, and contact sections.
 */
export default function HomePage() {
  return (
    <main className="relative overflow-hidden">

      {/* Hero section establishes the core visual identity and CTA actions */}
      <HeroSection />

      {/* Portfolio preview section with supporting headline and project grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-bronze">Bespoke practice</p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-ivory sm:text-5xl lg:text-6xl">
            Selected projects for modern living and elevated hospitality.
          </h2>
        </div>
        <ProjectGrid />
      </section>

      {/* Process section visualizes the studio's workflow */}
      <ProcessTimeline />

      {/* Contact section with an inquiry form */}
      <ContactForm />
    </main>
  );
}
