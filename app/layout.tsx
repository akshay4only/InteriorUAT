import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import FloatContactButtons from '@/components/ui/FloatingContactButtons';
import Footer from '@/components/ui/Footer';
import GlassNavbar from '@/components/ui/GlassNavbar';
import './globals.css';

// Load the serif and sans fonts with CSS custom properties for global styling.
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
});

// Page metadata used by Next.js for SEO and browser titles.
export const metadata: Metadata = {
  title: 'Bespoke Interior Design',
  description: 'Editorial and luxurious interior design portfolio crafted with Next.js, Tailwind CSS, and motion-driven interactions.'
};

interface RootLayoutProps {
  children: ReactNode;
}

/**
 * RootLayout wraps all pages with global fonts, theme styling, and the base page shell.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} min-h-screen bg-charcoal text-ivory`}>
        {/* Decorative ambient radial glow behind the page content. */}
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_28%)]" />
        <GlassNavbar />
        <div className="pt-24">{children}</div>
        <Footer />
        <FloatContactButtons />
      </body>
    </html>
  );
}
