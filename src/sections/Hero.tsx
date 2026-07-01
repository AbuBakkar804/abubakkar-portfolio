import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight } from 'react-icons/fi'
import HeroScene from '@/components/HeroScene'
import { PROFILE } from '@/constants/data'

function useTypewriter(words: string[], speed = 70, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text.length < currentWord.length) {
      timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), speed / 1.6)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(PROFILE.roles)

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <HeroScene />

      {/* animated gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#2563EB]/30 rounded-full blur-[120px] animate-pulse -z-10" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[#00E5FF]/20 rounded-full blur-[120px] animate-pulse -z-10" />

      <div className="section-padding w-full grid lg:grid-cols-2 gap-10 items-center pt-32">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#38BDF8] tracking-[0.35em] text-xs md:text-sm uppercase mb-4"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold font-[var(--font-display)] leading-tight"
          >
            Hi, I'm <span className="text-gradient">{PROFILE.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 h-9 text-xl md:text-2xl font-medium text-slate-300"
          >
            <span>{typed}</span>
            <span className="inline-block w-[2px] h-6 bg-[#00E5FF] ml-1 animate-pulse align-middle" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-6 text-slate-400 max-w-xl leading-relaxed"
          >
            Building intelligent, real-world software at the intersection of Machine Learning,
            Generative AI, and modern web engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href={PROFILE.resumeUrl}
              data-cursor-hover
              download
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#00E5FF] font-semibold text-[#050816] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-shadow"
            >
              Download CV <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#projects"
              data-cursor-hover
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glow-border font-semibold hover:border-[#00E5FF]/50 transition-colors"
            >
              View Projects <FiArrowRight />
            </a>
            <a
              href="#contact"
              data-cursor-hover
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 font-semibold hover:border-[#00E5FF] hover:text-[#00E5FF] transition-colors"
            >
              Hire Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex gap-4"
          >
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:text-[#00E5FF] hover:-translate-y-1 transition-all"
            >
              <FiGithub />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:text-[#00E5FF] hover:-translate-y-1 transition-all"
            >
              <FiLinkedin />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 text-xs tracking-widest uppercase"
      >
        Scroll Down
      </motion.div>
    </section>
  )
}
