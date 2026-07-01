export const PROFILE = {
  name: 'Abu Bakkar',
  roles: [
    'AI Engineer',
    'Machine Learning Enthusiast',
    'Python Developer',
    'Computer Science Student',
    'Generative AI Learner',
  ],
  location: 'Mardan, Pakistan',
  email: 'abubakkar735037@gmail.com',
  phone: '+92 328 5322360',
  github: 'https://github.com/AbuBakkar804',
  linkedin: 'https://www.linkedin.com/in/abu-bakkar-748666340',
  resumeUrl: '/resume.pdf',
  about: `I am a passionate Computer Science student with a strong interest in Artificial Intelligence, Machine Learning, Python Development, and Software Engineering. I enjoy solving real-world problems by building intelligent applications, modern web applications, and automation tools. My focus is on continuous learning, creating scalable software, and contributing to innovative AI solutions.`,
  education: {
    degree: 'BS Computer Science',
    university: 'University of Engineering and Technology (UET) Mardan',
    semester: '4th Semester',
  },
  goal: 'Become an AI Engineer specializing in Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI while building impactful real-world software solutions.',
}

export const SKILLS = [
  {
    category: 'Programming',
    items: ['Python', 'C', 'C++', 'OOP'],
  },
  {
    category: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    category: 'Artificial Intelligence',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Generative AI',
      'Prompt Engineering',
      'LLMs',
    ],
  },
  {
    category: 'Data Science',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
  },
  {
    category: 'ML Frameworks',
    items: ['TensorFlow', 'PyTorch (Learning)'],
  },
  {
    category: 'Tools & Platforms',
    items: ['FastAPI', 'Streamlit', 'Git', 'GitHub', 'VS Code', 'ReportLab', 'CVAT'],
  },
]

export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  features: string[]
  status: 'Completed' | 'In Progress' | 'Concept'
  timeline: string
  demoUrl?: string
  githubUrl?: string
  gradient: string
}

export const PROJECTS: Project[] = [
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    description:
      'A multilingual AI-powered resume analysis tool that reviews resumes, scores them, and provides actionable improvement suggestions using Large Language Models — live and deployed.',
    tech: ['Python', 'Streamlit', 'LLMs', 'NLP', 'Multilingual Support'],
    features: [
      'Resume Scoring',
      'AI Improvement Suggestions',
      'Multilingual Support',
      'Instant Analysis',
      'Clean Interactive UI',
    ],
    status: 'Completed',
    timeline: '2025',
    demoUrl: 'https://ai-resume-analyzer-qvd5parowd3oybz3gvpyqv.streamlit.app/',
    gradient: 'from-blue-600 via-sky-500 to-cyan-400',
  },
  {
    id: 'ai-code-reviewer',
    title: 'AI Code Reviewer',
    description:
      'An intelligent AI-powered code review platform capable of reviewing Python code, detecting bugs, suggesting improvements, explaining errors, and providing optimization recommendations using Large Language Models.',
    tech: ['Python', 'FastAPI', 'Streamlit', 'LLMs', 'GitHub API'],
    features: [
      'Authentication',
      'Code Analysis',
      'Error Detection',
      'Optimization Suggestions',
      'Security Suggestions',
      'AI Explanations',
    ],
    status: 'Completed',
    timeline: '2025',
    githubUrl: 'https://github.com/AbuBakkar804',
    gradient: 'from-blue-600 via-sky-500 to-cyan-400',
  },
  {
    id: 'ai-voice-analyzer',
    title: 'AI Voice Analyzer',
    description:
      'An AI application capable of analyzing human voice using trained Machine Learning models — detecting emotion, age, and gender from speech in real time.',
    tech: ['Python', 'Streamlit', 'Machine Learning', 'Librosa'],
    features: [
      'Emotion Detection',
      'Age Prediction',
      'Gender Prediction',
      'Speech Analysis',
      'Audio Visualization',
      'Waveform & Spectrogram',
    ],
    status: 'In Progress',
    timeline: '2025 — Present',
    githubUrl: 'https://github.com/AbuBakkar804/voice-ai-project',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
  },
  {
    id: 'discharge-summary-generator',
    title: 'AI Medical Discharge Summary Generator',
    description:
      'Generates professional medical discharge summaries using AI, complete with structured PDF reports and QR codes for quick record access.',
    tech: ['Python', 'Streamlit', 'ReportLab', 'NLP'],
    features: ['PDF Generation', 'QR Codes', 'Medical Summary Structuring', 'NLP Text Generation'],
    status: 'Completed',
    timeline: '2024',
    gradient: 'from-sky-500 via-blue-600 to-violet-500',
  },
  {
    id: 'titanic-survival-predictor',
    title: 'Titanic Survival Predictor',
    description:
      'A classic Machine Learning project performing exploratory data analysis and building a predictive model for passenger survival.',
    tech: ['Python', 'Scikit-learn', 'FastAPI', 'Streamlit'],
    features: ['EDA', 'Feature Engineering', 'Prediction API', 'Interactive UI'],
    status: 'Completed',
    timeline: '2024',
    gradient: 'from-blue-500 via-cyan-500 to-teal-400',
  },
  {
    id: 'python-snake-game',
    title: 'Python Snake Game',
    description: 'A GUI-based Snake game built with Python, featuring scoring, difficulty levels, and pause/resume functionality.',
    tech: ['Python', 'Tkinter'],
    features: ['Score Tracking', 'Difficulty Levels', 'Pause', 'Resume'],
    status: 'Completed',
    timeline: '2023',
    gradient: 'from-indigo-500 via-blue-500 to-sky-400',
  },
  {
    id: 'number-guessing-game',
    title: 'Number Guessing Game',
    description: 'A Python GUI game supporting Player vs Player and Computer modes, complete with statistics tracking.',
    tech: ['Python', 'Tkinter'],
    features: ['PvP Mode', 'Computer Mode', 'Statistics'],
    status: 'Completed',
    timeline: '2023',
    gradient: 'from-blue-400 via-sky-500 to-cyan-500',
  },
  {
    id: 'atm-bank-management',
    title: 'ATM Bank Management System',
    description: 'An object-oriented C++ console application simulating core ATM and bank management operations.',
    tech: ['C++', 'OOP'],
    features: ['Account Management', 'Transactions', 'Balance Inquiry'],
    status: 'Completed',
    timeline: '2023',
    gradient: 'from-slate-500 via-blue-500 to-sky-400',
  },
  {
    id: 'question-paper-generator',
    title: 'Question Paper Generator',
    description: 'A Python GUI tool that automatically generates formatted exam question papers as downloadable PDFs.',
    tech: ['Python', 'ReportLab', 'GUI'],
    features: ['PDF Generation', 'Custom Templates', 'GUI Interface'],
    status: 'Completed',
    timeline: '2023',
    gradient: 'from-cyan-500 via-sky-500 to-blue-600',
  },
  {
    id: 'pakistan-map-concept',
    title: 'Pakistan Swimming Pool & Picnic Spot Map',
    description:
      'An interactive GIS application concept to locate swimming pools, rivers, picnic spots, lakes, and tourist attractions across Pakistan using maps, filtering, and geolocation.',
    tech: ['React', 'Maps API', 'Geolocation'],
    features: ['Interactive Map', 'Filtering', 'Geolocation', 'Points of Interest'],
    status: 'Concept',
    timeline: 'Planned',
    gradient: 'from-teal-400 via-cyan-500 to-blue-500',
  },
]

export const TIMELINE = [
  { year: '2022', title: 'Learning C', desc: 'Built strong programming fundamentals with the C language.' },
  { year: '2022', title: 'Learning C++', desc: 'Advanced into object-oriented programming with C++.' },
  { year: '2023', title: 'Object-Oriented Programming', desc: 'Mastered OOP principles through real projects.' },
  { year: '2023', title: 'Python', desc: 'Adopted Python as a primary language for scripting and automation.' },
  { year: '2024', title: 'Artificial Intelligence', desc: 'Began exploring the foundations of AI.' },
  { year: '2024', title: 'Machine Learning', desc: 'Studied ML algorithms, model training, and evaluation.' },
  { year: '2025', title: 'Natural Language Processing', desc: 'Explored NLP techniques and language understanding.' },
  { year: '2025', title: 'Generative AI', desc: 'Dove into LLMs, prompt engineering, and generative systems.' },
  { year: 'Now', title: 'Current Projects', desc: 'Building AI-powered applications and refining ML skills.' },
]

export const ACHIEVEMENTS = [
  { label: 'Projects Completed', value: 9 },
  { label: 'GitHub Repositories', value: 15 },
  { label: 'Technologies Learned', value: 20 },
  { label: 'Hours of Coding', value: 1200 },
]

export const SERVICES = [
  { title: 'Python Development', desc: 'Robust, clean, and efficient Python applications and scripts.' },
  { title: 'Machine Learning', desc: 'Model design, training, evaluation, and deployment.' },
  { title: 'AI Applications', desc: 'End-to-end AI-powered tools using modern LLMs.' },
  { title: 'Automation', desc: 'Automating repetitive workflows to save time and effort.' },
  { title: 'Data Analysis', desc: 'Turning raw data into actionable insights.' },
  { title: 'FastAPI & Streamlit', desc: 'Building fast APIs and interactive data apps.' },
  { title: 'Technical Documentation', desc: 'Clear, professional documentation for technical projects.' },
]

export const EXPERIENCE = [
  {
    role: 'Generative AI Beginner (Intern)',
    company: 'Zoobi Apps and Games Technology',
    period: '2025',
    desc: 'Gaining hands-on experience with generative AI concepts and applications in a professional environment.',
  },
]

export const CERTIFICATES: { title: string; issuer: string; image?: string }[] = [
  { title: 'Python Programming', issuer: 'Certificate Placeholder' },
  { title: 'Machine Learning Foundations', issuer: 'Certificate Placeholder' },
  { title: 'Generative AI Essentials', issuer: 'Certificate Placeholder' },
]

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Services', href: '#services' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
]
