import { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

// Replace YOUR_FORM_ID with your Formspree form ID.
// Sign up at https://formspree.io, create a form, and paste the ID here.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  usePageTitle('Contact');

  const [formState, setFormState] = useState<FormState>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setFormState('success');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const inputClass =
    'w-full bg-surface border border-border text-white placeholder-white/30 px-4 py-3 rounded focus:outline-none focus:border-white/50 transition';

  return (
    <div className='max-w-2xl mx-auto px-4 py-16'>
      <h1 className='text-4xl font-semibold text-white mb-2'>Book a Session</h1>
      <p className='text-white/60 mb-10'>
        Interested in concert coverage, band promos, or editorial work? Fill out
        the form below and I'll get back to you within 24 hours.
      </p>

      {formState === 'success' ? (
        <div className='border border-white/20 bg-white/5 rounded-xl px-8 py-12 text-center'>
          <p className='text-white text-xl font-semibold mb-2'>Message sent!</p>
          <p className='text-white/60'>
            Thanks for reaching out. I'll be in touch shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div>
              <label htmlFor='name' className='sr-only'>
                Name
              </label>
              <input
                id='name'
                type='text'
                placeholder='Name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>
              <input
                id='email'
                type='email'
                placeholder='Email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor='subject' className='sr-only'>
              Subject
            </label>
            <input
              id='subject'
              type='text'
              placeholder='Subject'
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor='message' className='sr-only'>
              Message
            </label>
            <textarea
              id='message'
              placeholder='Tell me about the project…'
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={inputClass}
            />
          </div>

          {formState === 'error' && (
            <p className='text-red-400 text-sm'>
              Something went wrong. Please try again or email directly.
            </p>
          )}

          <button
            type='submit'
            disabled={formState === 'submitting'}
            className='self-start border border-white px-10 py-3 uppercase tracking-wide text-sm hover:bg-white hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {formState === 'submitting' ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}
