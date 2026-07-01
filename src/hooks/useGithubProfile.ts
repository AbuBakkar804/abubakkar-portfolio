import { useEffect, useState } from 'react'

export type GithubRepo = {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
}

export type GithubUser = {
  login: string
  avatar_url: string
  public_repos: number
  followers: number
  following: number
  html_url: string
}

export function useGithubProfile(username: string) {
  const [user, setUser] = useState<GithubUser | null>(null)
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
        ])
        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API request failed')
        const userData = await userRes.json()
        const reposData = await reposRes.json()
        if (!cancelled) {
          setUser(userData)
          setRepos(Array.isArray(reposData) ? reposData : [])
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Failed to load GitHub data')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [username])

  return { user, repos, loading, error }
}
