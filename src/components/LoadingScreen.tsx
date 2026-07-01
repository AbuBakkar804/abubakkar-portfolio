import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 18, 100)
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(() => setVisible(false), 400)
        }
        return next
      })
    }, 180)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-[#050816]"
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <motion.div
            className="text-4xl md:text-6xl font-bold text-gradient font-[var(--font-display)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Abu Bakkar
          </motion.div>
          <div className="mt-6 w-56 h-1 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-[#00E5FF]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-xs tracking-[0.3em] text-slate-400 uppercase">
            Loading {Math.floor(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
