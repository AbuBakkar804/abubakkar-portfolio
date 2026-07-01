import { motion } from 'framer-motion'
import { SKILLS } from '@/constants/data'

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#00E5FF]/10 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#38BDF8] tracking-[0.35em] text-xs uppercase mb-3">What I work with</p>
        <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-display)]">
          My <span className="text-gradient">Skills</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {SKILLS.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: (gi % 3) * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass glow-border rounded-2xl p-6"
          >
            <h3 className="font-semibold text-lg mb-4 text-[#00E5FF]">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  data-cursor-hover
                  className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-[#00E5FF]/60 hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
