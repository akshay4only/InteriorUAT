'use client';

/**
 * FloatingContactButtons renders persistent action buttons for WhatsApp chat and phone dialing.
 */
export default function FloatingContactButtons() {
  const phoneNumber = '9870280248';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const telUrl = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/95 text-white shadow-[0_20px_60px_rgba(16,185,129,0.18)] transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
      >
        <span className="text-2xl">💬</span>
      </a>
      <a
        href={telUrl}
        aria-label="Call the studio"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-950/95 text-white shadow-[0_20px_60px_rgba(15,23,42,0.22)] transition hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
      >
        <span className="text-2xl">📞</span>
      </a>
    </div>
  );
}
