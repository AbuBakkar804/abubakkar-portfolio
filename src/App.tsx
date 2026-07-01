import { ThemeProvider } from '@/hooks/useTheme'
import { useLenis } from '@/hooks/useLenis'
import LoadingScreen from '@/components/LoadingScreen'
import CustomCursor from '@/components/CustomCursor'
import { ScrollProgressBar, ScrollToTopButton } from '@/components/ScrollUtils'
import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects'
import Timeline from '@/sections/Timeline'
import Achievements from '@/sections/Achievements'
import { Services, Experience, Certificates } from '@/sections/ExtraSections'
import Github from '@/sections/Github'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'

function App() {
  useLenis()

  return (
    <ThemeProvider>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Achievements />
        <Services />
        <Experience />
        <Certificates />
        <Github />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </ThemeProvider>
  )
}

export default App
