import { motion } from 'framer-motion'
import { ACHIEVEMENTS } from '@/constants/data'
import { useCountUp } from '@/hooks/useCountUp'

function Counter({ value, label }: { value: number; label: string }) {
  const { ref, value: current } = useCountUp(value)
  return (
    <div ref={ref} className="glass glow-border rounded-2xl p-8 text-center">
      <p className="text-4xl md:text-5xl font-bold text-gradient font-[var(--font-display)]">
        {current}
        {value >= 1000 ? '+' : '+'}
      </p>
      <p className="text-sm text-slate-400 mt-2">{label}</p>
    </div>
  )
}

export default function Achievements() {
  return (
    <section className="section-padding relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#38BDF8] tracking-[0.35em] text-xs uppercase mb-3">By the numbers</p>
        <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-display)]">
          My <span className="text-gradient">Achievements</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {ACHIEVEMENTS.map((a) => (
          <Counter key={a.label} value={a.value} label={a.label} />
        ))}
      </div>
    </section>
  )
}
