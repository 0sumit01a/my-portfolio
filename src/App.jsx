<<<<<<< HEAD
import HeroSection from './components/hero/HeroSection';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { highlights, profile, socialLinks } from './data/portfolioData';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import JourneySection from './sections/JourneySection';
import ProjectsSection from './sections/ProjectsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white">
      <Header />
      <main>
        <HeroSection profile={profile} highlights={highlights} socialLinks={socialLinks} />
        <ProjectsSection />
        <JourneySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
=======
import React from 'react'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header></Header>
    </div>
  )
}

export default App
>>>>>>> de3704c5993911f1b4fd43b20e2a5a34b50fda67
