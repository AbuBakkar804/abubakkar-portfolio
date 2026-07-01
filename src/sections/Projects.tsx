import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX, FiClock } from 'react-icons/fi'
import { PROJECTS, type Project } from '@/constants/data'

const statusColor: Record<Project['status'], string> = {
  Completed: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/10',
  'In Progress': 'text-amber-400 border-amber-400/40 bg-amber-400/10',
  Concept: 'text-sky-400 border-sky-400/40 bg-sky-400/10',
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden glass glow-border cursor-pointer"
      onClick={() => onOpen(project)}
      data-cursor-hover
    >
      <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[#050816]/30 group-hover:bg-[#050816]/10 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white/90 font-[var(--font-display)] group-hover:scale-110 transition-transform duration-500">
          {project.title
            .split(' ')
            .map((w) => w[0])
            .slice(0, 3)
            .join('')}
        </div>
        <span
          className={`absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full border ${statusColor[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-sm text-slate-400 line-clamp-2 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[10px] px-2 py-1 text-slate-500">+{project.tech.length - 3}</span>
          )}
        </div>
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <FiClock size={12} /> {project.timeline}
          </span>
          <span className="text-[#00E5FF] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Details <FiExternalLink size={12} />
          </span>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="glass glow-border rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:text-[#00E5FF]"
        >
          <FiX />
        </button>
        <span className={`inline-block text-xs px-3 py-1 rounded-full border mb-4 ${statusColor[project.status]}`}>
          {project.status}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold font-[var(--font-display)] mb-3">{project.title}</h3>
        <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>

        <p className="text-sm uppercase tracking-wider text-[#38BDF8] mb-2">Technologies</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              {t}
            </span>
          ))}
        </div>

        <p className="text-sm uppercase tracking-wider text-[#38BDF8] mb-2">Key Features</p>
        <ul className="grid grid-cols-2 gap-2 mb-6">
          {project.features.map((f) => (
            <li key={f} className="text-sm text-slate-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> {f}
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-600 hover:border-[#00E5FF] hover:text-[#00E5FF] transition-colors text-sm"
            >
              <FiGithub /> GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#00E5FF] text-[#050816] font-semibold text-sm"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="section-padding relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#38BDF8] tracking-[0.35em] text-xs uppercase mb-3">Selected work</p>
        <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-display)]">
          My <span className="text-gradient">Projects</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setActive} />
        ))}
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
