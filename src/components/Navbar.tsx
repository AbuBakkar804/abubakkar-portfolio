import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX, FiMusic, FiVolumeX } from 'react-icons/fi'
import { NAV_LINKS } from '@/constants/data'
import { useTheme } from '@/hooks/useTheme'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [musicOn, setMusicOn] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-5 md:px-10 py-4">
        <a href="#home" data-cursor-hover className="font-bold text-lg md:text-xl font-[var(--font-display)]">
          <span className="text-gradient">Abu</span>Bakkar<span className="text-[#00E5FF]">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm text-slate-300">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor-hover
                className="relative hover:text-[#00E5FF] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-[#00E5FF] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            data-cursor-hover
            onClick={() => setMusicOn((m) => !m)}
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-slate-300 hover:text-[#00E5FF] transition-colors"
            aria-label="Toggle music"
            title="Ambient music (demo toggle)"
          >
            {musicOn ? <FiMusic size={15} /> : <FiVolumeX size={15} />}
          </button>
          <button
            data-cursor-hover
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-slate-300 hover:text-[#00E5FF] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>
          <button
            data-cursor-hover
            onClick={() => setOpen(true)}
            className="lg:hidden w-9 h-9 rounded-full glass flex items-center justify-center"
            aria-label="Open menu"
          >
            <FiMenu size={17} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#050816]/98 flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full glass flex items-center justify-center"
              aria-label="Close menu"
            >
              <FiX size={18} />
            </button>
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="text-2xl font-[var(--font-display)] text-slate-200 hover:text-[#00E5FF]"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
