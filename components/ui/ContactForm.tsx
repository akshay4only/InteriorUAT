'use client';

import { FormEvent, useState } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

/**
 * ContactForm renders a validated minimal inquiry form with accessible field states.
 */
export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  /**
   * Generic input handler for the form fields.
   * It updates the corresponding field and clears existing errors.
   */
  const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [field]: event.target.value });
    if (error) setError('');
  };

  /**
   * Form submission handler with simple client-side validation.
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setError('Please complete all fields before sending.');
      return;
    }

    // Simulate a successful submit state and clear inputs.
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="rounded-[3rem] border border-white/10 bg-black/70 px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-bronze">Connect</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ivory sm:text-4xl">Begin your next interior story.</h2>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm text-slate-200">
              <span className="mb-2 block uppercase tracking-[0.3em] text-slate-400">Name</span>
              <input
                type="text"
                value={formState.name}
                onChange={handleChange('name')}
                placeholder="Your full name"
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-ivory outline-none transition focus:border-bronze focus:bg-white/10"
              />
            </label>
            <label className="block text-sm text-slate-200">
              <span className="mb-2 block uppercase tracking-[0.3em] text-slate-400">Email</span>
              <input
                type="email"
                value={formState.email}
                onChange={handleChange('email')}
                placeholder="you@example.com"
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-ivory outline-none transition focus:border-bronze focus:bg-white/10"
              />
            </label>
          </div>

          <label className="block text-sm text-slate-200">
            <span className="mb-2 block uppercase tracking-[0.3em] text-slate-400">Project details</span>
            <textarea
              value={formState.message}
              onChange={handleChange('message')}
              rows={6}
              placeholder="Tell us about your vision"
              className="min-h-[180px] w-full rounded-[2rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-ivory outline-none transition focus:border-bronze focus:bg-white/10"
            />
          </label>

          {/* Display validation and confirmation messages conditionally. */}
          {error ? <p className="text-sm text-rose-300">{error}</p> : null}
          {submitted ? <p className="text-sm text-emerald-300">Thank you — your message has been prepared for review.</p> : null}

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full border border-bronze/40 bg-bronze/10 px-7 py-4 text-sm uppercase tracking-[0.3em] text-bronze transition hover:bg-bronze/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-bronze"
          >
            Send inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
