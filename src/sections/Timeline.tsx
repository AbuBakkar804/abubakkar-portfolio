import { motion } from 'framer-motion'
import { TIMELINE } from '@/constants/data'

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#38BDF8] tracking-[0.35em] text-xs uppercase mb-3">My journey</p>
        <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-display)]">
          Learning <span className="text-gradient">Timeline</span>
        </h2>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#2563EB] via-[#38BDF8] to-[#00E5FF] md:-translate-x-1/2" />

        {TIMELINE.map((item, i) => {
          const leftSide = i % 2 === 0
          return (
            <motion.div
              key={`${item.title}-${i}`}
              initial={{ opacity: 0, x: leftSide ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className={`relative mb-10 pl-12 md:pl-0 md:w-1/2 ${
                leftSide ? 'md:pr-10 md:text-right md:ml-0' : 'md:pl-10 md:ml-auto'
              }`}
            >
              <span className="absolute left-2.5 md:left-auto md:right-auto top-1 w-3 h-3 rounded-full bg-[#00E5FF] shadow-[0_0_12px_#00E5FF] md:top-1"
                style={leftSide ? { right: '-7px' } : { left: '-7px' }}
              />
              <div className="glass glow-border rounded-2xl p-5 inline-block w-full md:w-auto">
                <span className="text-xs text-[#38BDF8] font-semibold">{item.year}</span>
                <h3 className="font-semibold text-lg mt-1">{item.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
