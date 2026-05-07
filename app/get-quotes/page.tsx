'use client';

import { FormEvent, useState } from 'react';

const requirementOptions = [
  'Full home interior',
  'Modular kitchen',
  'Office',
  'Complete renovation'
];

const contactPhone = '+91 98765 43210';
const whatsappUrl = 'https://wa.me/919876543210';
const telUrl = 'tel:+919876543210';

interface QuoteFormState {
  fullName: string;
  phoneNumber: string;
  area: string;
  requirement: string;
}

export default function GetQuotesPage() {
  const [formState, setFormState] = useState<QuoteFormState>({
    fullName: '',
    phoneNumber: '',
    area: '',
    requirement: requirementOptions[0]
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: keyof QuoteFormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [field]: event.target.value });
    if (error) setError('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.fullName || !formState.phoneNumber || !formState.area || !formState.requirement) {
      setError('Please complete every field before sending your inquiry.');
      return;
    }
    setSubmitted(true);
    setFormState({ fullName: '', phoneNumber: '', area: '', requirement: requirementOptions[0] });
  };

  return (
    <main className="bg-charcoal text-ivory">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="mb-12 max-w-3xl space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-bronze">Get Quotes</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-ivory sm:text-5xl">
            Request a tailored interior design estimate.
          </h1>
          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            Tell us about your project and we’ll create a custom plan for your home, office, or renovation.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="rounded-[2.5rem] border border-white/10 bg-black/60 p-8 shadow-glow sm:p-10">
            <h2 className="text-2xl font-semibold text-ivory">Send inquiry</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Complete the form below and our team will get back to you with a thoughtful project proposal.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <label className="block text-sm text-slate-200">
                <span className="mb-2 block uppercase tracking-[0.28em] text-slate-400">Full name</span>
                <input
                  type="text"
                  value={formState.fullName}
                  onChange={handleChange('fullName')}
                  placeholder="Jane Doe"
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-ivory outline-none transition focus:border-bronze focus:bg-white/10"
                />
              </label>

              <label className="block text-sm text-slate-200">
                <span className="mb-2 block uppercase tracking-[0.28em] text-slate-400">Phone number</span>
                <input
                  type="tel"
                  value={formState.phoneNumber}
                  onChange={handleChange('phoneNumber')}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-ivory outline-none transition focus:border-bronze focus:bg-white/10"
                />
              </label>

              <label className="block text-sm text-slate-200">
                <span className="mb-2 block uppercase tracking-[0.28em] text-slate-400">City / area</span>
                <input
                  type="text"
                  value={formState.area}
                  onChange={handleChange('area')}
                  placeholder="Global City, Virar West"
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-ivory outline-none transition focus:border-bronze focus:bg-white/10"
                />
              </label>

              <label className="block text-sm text-slate-200">
                <span className="mb-2 block uppercase tracking-[0.28em] text-slate-400">Requirement</span>
                <select
                  value={formState.requirement}
                  onChange={handleChange('requirement')}
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-ivory outline-none transition focus:border-bronze focus:bg-white/10"
                >
                  {requirementOptions.map((option) => (
                    <option key={option} value={option} className="bg-[#111111] text-ivory">
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              {error ? <p className="text-sm text-rose-300">{error}</p> : null}
              {submitted ? <p className="text-sm text-emerald-300">Thank you! Your inquiry has been submitted successfully.</p> : null}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-bronze/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-bronze transition hover:bg-bronze/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-bronze"
              >
                Send inquiry
              </button>
            </form>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Or reach out instantly via</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-[10rem] items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
                >
                  WhatsApp
                </a>
                <a
                  href={telUrl}
                  className="inline-flex min-w-[10rem] items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-[2.5rem] border border-white/10 bg-black/60 p-8 shadow-glow sm:p-10">
              <h2 className="text-2xl font-semibold text-ivory">Contact details</h2>
              <div className="mt-8 space-y-6 text-sm leading-7 text-slate-300">
                <div className="space-y-3 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-lg font-semibold text-ivory">📍 Our Office</p>
                  <p>Global City, Virar West, Maharashtra 401303</p>
                  <p>Vasai-Virar Region, Maharashtra</p>
                </div>
                <div className="space-y-3 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-lg font-semibold text-ivory">📞 Call Us</p>
                  <p>{contactPhone}</p>
                  <p>Mon - Sat, 10:00 AM - 7:00 PM</p>
                </div>
                <div className="space-y-3 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-lg font-semibold text-ivory">✉️ Email Us</p>
                  <p>info@artandconcept.com</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/60 shadow-glow">
              <iframe
                title="Art & Concept office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15050.677149123344!2d72.80220893314818!3d19.462467662455064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b4fecfeb3427%3A0x3b382f1a4e6b84c4!2sVirar%2C%20Maharashtra%20401101!5e0!3m2!1sen!2sin!4v1719446313899!5m2!1sen!2sin"
                className="h-80 w-full border-0"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
