import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiZap, FiSettings, FiBarChart2, FiServer, FiFileText, FiAward, FiBriefcase } from 'react-icons/fi'
import { SERVICES, EXPERIENCE, CERTIFICATES } from '@/constants/data'

const icons = [FiCode, FiCpu, FiZap, FiSettings, FiBarChart2, FiServer, FiFileText]

export function Services() {
  return (
    <section id="services" className="section-padding relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#38BDF8] tracking-[0.35em] text-xs uppercase mb-3">How I can help</p>
        <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-display)]">
          My <span className="text-gradient">Services</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {SERVICES.map((s, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6, borderColor: 'rgba(0,229,255,0.4)' }}
              className="glass glow-border rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#00E5FF] flex items-center justify-center mb-4">
                <Icon className="text-[#050816]" size={20} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section className="section-padding relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#38BDF8] tracking-[0.35em] text-xs uppercase mb-3">Where I've worked</p>
        <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-display)]">
          <span className="text-gradient">Experience</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-5">
        {EXPERIENCE.map((e) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="glass glow-border rounded-2xl p-6 flex gap-5"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#00E5FF] flex items-center justify-center shrink-0">
              <FiBriefcase className="text-[#050816]" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{e.role}</h3>
              <p className="text-[#38BDF8] text-sm">{e.company}</p>
              <p className="text-xs text-slate-500 mb-2">{e.period}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{e.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function Certificates() {
  return (
    <section className="section-padding relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#38BDF8] tracking-[0.35em] text-xs uppercase mb-3">Recognition</p>
        <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-display)]">
          <span className="text-gradient">Certificates</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {CERTIFICATES.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.04 }}
            className="glass glow-border rounded-2xl overflow-hidden"
          >
            <div className="h-40 bg-gradient-to-br from-[#2563EB]/40 via-[#050816] to-[#00E5FF]/20 flex items-center justify-center">
              <FiAward size={40} className="text-[#00E5FF]" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{c.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
