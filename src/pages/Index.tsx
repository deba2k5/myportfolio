import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ResearchSection from '@/components/sections/ResearchSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import vintageBg from '@/assets/vintage-bg.png';

const Index = () => {
  return (
    <ParallaxProvider>
      <div
        className="min-h-screen relative"
        style={{
          backgroundImage: `url(${vintageBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Background Overlay for readability */}
        <div className="fixed inset-0 bg-vintage-cream/30 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <AchievementsSection />
            <ResearchSection />
            <ExperienceSection />
            <GallerySection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Index;
