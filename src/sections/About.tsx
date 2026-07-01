import { motion } from 'framer-motion'
import { FiTarget, FiBookOpen } from 'react-icons/fi'
import { PROFILE } from '@/constants/data'
import profilePhoto from '@/assets/profile.jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
}

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#2563EB]/20 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="text-center mb-16"
      >
        <p className="text-[#38BDF8] tracking-[0.35em] text-xs uppercase mb-3">Get to know me</p>
        <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-display)]">
          About <span className="text-gradient">Me</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl glass glow-border p-1 overflow-hidden">
            <div className="aspect-square rounded-3xl overflow-hidden relative bg-gradient-to-br from-[#2563EB]/30 via-[#050816] to-[#00E5FF]/20">
              <img
                src={profilePhoto}
                alt="Abu Bakkar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#00E5FF]/20 rounded-3xl" />
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-6 -right-6 glass glow-border rounded-2xl px-5 py-4"
          >
            <p className="text-2xl font-bold text-gradient">4th</p>
            <p className="text-xs text-slate-400">Semester</p>
          </motion.div>
        </motion.div>

        <div>
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="text-slate-300 leading-relaxed text-lg"
          >
            {PROFILE.about}
          </motion.p>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="mt-8 flex items-start gap-4 glass rounded-2xl p-5"
          >
            <FiBookOpen className="text-[#00E5FF] mt-1 shrink-0" size={22} />
            <div>
              <p className="font-semibold text-slate-100">{PROFILE.education.degree}</p>
              <p className="text-sm text-slate-400">{PROFILE.education.university}</p>
              <p className="text-sm text-slate-500 mt-1">{PROFILE.education.semester}</p>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="mt-4 flex items-start gap-4 glass rounded-2xl p-5"
          >
            <FiTarget className="text-[#38BDF8] mt-1 shrink-0" size={22} />
            <div>
              <p className="font-semibold text-slate-100 mb-1">Career Goal</p>
              <p className="text-sm text-slate-400 leading-relaxed">{PROFILE.goal}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
