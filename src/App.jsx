import HeroSection from './components/hero/HeroSection'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { highlights, profile, socialLinks } from './data/portfolioData'
import ProjectsSection from './sections/ProjectsSection'
import JourneySection from './sections/JourneySection'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    <>
      <Header />
      <HeroSection profile={profile} highlights={highlights} socialLinks={socialLinks} />
      <ProjectsSection />
      <JourneySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
