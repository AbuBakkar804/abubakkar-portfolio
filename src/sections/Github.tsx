import { motion } from 'framer-motion'
import { FiGithub, FiStar, FiGitBranch, FiUsers } from 'react-icons/fi'
import { useGithubProfile } from '@/hooks/useGithubProfile'
import { PROFILE } from '@/constants/data'

const GITHUB_USERNAME = 'AbuBakkar804'

export default function Github() {
  const { user, repos, loading, error } = useGithubProfile(GITHUB_USERNAME)

  return (
    <section id="github" className="section-padding relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#38BDF8] tracking-[0.35em] text-xs uppercase mb-3">Open source</p>
        <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-display)]">
          <span className="text-gradient">GitHub</span> Activity
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {error && (
          <p className="text-center text-sm text-slate-500 mb-8">
            Live GitHub data unavailable right now — showing profile link instead.
          </p>
        )}

        {user && (
          <div className="flex flex-wrap justify-center gap-5 mb-10">
            <div className="glass glow-border rounded-2xl px-6 py-4 flex items-center gap-3">
              <FiGithub className="text-[#00E5FF]" /> <span className="font-semibold">{user.public_repos}</span>
              <span className="text-slate-400 text-sm">Repos</span>
            </div>
            <div className="glass glow-border rounded-2xl px-6 py-4 flex items-center gap-3">
              <FiUsers className="text-[#00E5FF]" /> <span className="font-semibold">{user.followers}</span>
              <span className="text-slate-400 text-sm">Followers</span>
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass rounded-2xl p-6 h-32 animate-pulse" />
            ))}

          {!loading &&
            repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass glow-border rounded-2xl p-6 block"
              >
                <h3 className="font-semibold mb-2 truncate">{repo.name}</h3>
                <p className="text-sm text-slate-400 line-clamp-2 mb-4 h-10">
                  {repo.description || 'No description provided.'}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{repo.language || 'N/A'}</span>
                  <span className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <FiStar size={12} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiGitBranch size={12} /> {repo.forks_count}
                    </span>
                  </span>
                </div>
              </motion.a>
            ))}

          {!loading && !error && repos.length === 0 && (
            <p className="col-span-full text-center text-slate-500 text-sm">No public repositories found.</p>
          )}
        </div>

        <div className="text-center mt-10">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glow-border hover:border-[#00E5FF]/50 transition-colors"
          >
            <FiGithub /> View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}
