import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend, FiPhone } from 'react-icons/fi'
import { PROFILE } from '@/constants/data'

// Fill these in with your own EmailJS credentials: https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_uuwxxp7'
const EMAILJS_TEMPLATE_ID = 'template_gh4oiba'
const EMAILJS_PUBLIC_KEY = '2u3bZytg3AqHIDtuw'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    if (EMAILJS_SERVICE_ID.startsWith('YOUR_')) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#38BDF8] tracking-[0.35em] text-xs uppercase mb-3">Let's talk</p>
        <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-display)]">
          Get In <span className="text-gradient">Touch</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-4"
        >
          <p className="text-slate-400 leading-relaxed mb-6">
            Have a project in mind or want to collaborate? I'd love to hear from you — reach out through
            the form or any of the channels below.
          </p>

          <a href={`mailto:${PROFILE.email}`} data-cursor-hover className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-[#00E5FF]/40 glow-border">
            <FiMail className="text-[#00E5FF]" size={18} />
            <span className="text-sm text-slate-300">{PROFILE.email}</span>
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" data-cursor-hover className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-[#00E5FF]/40 glow-border">
            <FiGithub className="text-[#00E5FF]" size={18} />
            <span className="text-sm text-slate-300">GitHub Profile</span>
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" data-cursor-hover className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-[#00E5FF]/40 glow-border">
            <FiLinkedin className="text-[#00E5FF]" size={18} />
            <span className="text-sm text-slate-300">LinkedIn Profile</span>
          </a>
          <a href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`} data-cursor-hover className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-[#00E5FF]/40 glow-border">
            <FiPhone className="text-[#00E5FF]" size={18} />
            <span className="text-sm text-slate-300">{PROFILE.phone}</span>
          </a>
          <div className="flex items-center gap-4 glass rounded-2xl p-4">
            <FiMapPin className="text-[#00E5FF]" size={18} />
            <span className="text-sm text-slate-300">{PROFILE.location}</span>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass glow-border rounded-3xl p-6 md:p-8 space-y-4"
        >
          <div>
            <label className="text-xs text-slate-400 uppercase tracking-wider">Name</label>
            <input
              required
              name="user_name"
              type="text"
              placeholder="Your name"
              className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#00E5FF]/60 transition-colors"
            />
          </div>
          <div>
            <label className="text-xs text-slate-400 uppercase tracking-wider">Email</label>
            <input
              required
              name="user_email"
              type="email"
              placeholder="your@email.com"
              className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#00E5FF]/60 transition-colors"
            />
          </div>
          <div>
            <label className="text-xs text-slate-400 uppercase tracking-wider">Message</label>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#00E5FF]/60 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            data-cursor-hover
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#00E5FF] font-semibold text-[#050816] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-shadow disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'} <FiSend size={16} />
          </button>

          {status === 'success' && (
            <p className="text-sm text-emerald-400 text-center">Message sent successfully! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-amber-400 text-center">
              Add your EmailJS Service ID, Template ID, and Public Key in src/sections/Contact.tsx to enable this form.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
