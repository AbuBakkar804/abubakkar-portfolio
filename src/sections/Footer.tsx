import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { NAV_LINKS, PROFILE } from '@/constants/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 mt-10">
      <div className="section-padding !py-14 grid md:grid-cols-3 gap-10">
        <div>
          <a href="#home" className="font-bold text-xl font-[var(--font-display)]">
            <span className="text-gradient">Abu</span>Bakkar<span className="text-[#00E5FF]">.</span>
          </a>
          <p className="text-sm text-slate-400 mt-3 max-w-xs leading-relaxed">
            AI Engineer & Machine Learning enthusiast, building intelligent software and modern web experiences.
          </p>
          <div className="flex gap-3 mt-5">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-[#00E5FF]">
              <FiGithub size={15} />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-[#00E5FF]">
              <FiLinkedin size={15} />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-[#00E5FF]">
              <FiMail size={15} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-slate-400 hover:text-[#00E5FF] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">Get In Touch</h4>
          <p className="text-sm text-slate-400">{PROFILE.email}</p>
          <p className="text-sm text-slate-400 mt-1">{PROFILE.phone}</p>
          <p className="text-sm text-slate-400 mt-1">{PROFILE.location}</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 mt-5 text-sm text-[#00E5FF] hover:gap-3 transition-all"
          >
            Back to top <FiArrowUp size={14} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {year} Abu Bakkar. All rights reserved. Built with React, TypeScript & Three.js.
      </div>
    </footer>
  )
}
