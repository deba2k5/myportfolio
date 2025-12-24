import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import vintageBg from '@/assets/vintage-bg.png';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${vintageBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-vintage-cream/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground font-body italic mb-4"
          >
            Welcome to my world
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 vintage-text-shadow"
          >
            Your Name Here
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-vintage-brown font-display italic mb-8"
          >
            Developer • Researcher • Innovator
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-12"
          >
            Crafting elegant solutions through code, exploring the frontiers of technology,
            and transforming ideas into impactful digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" className="group">
              <Download className="group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={scrollToAbout}
            >
              Explore My Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="text-vintage-brown hover:text-vintage-rust transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1 }}
        className="absolute top-20 left-10 w-32 h-32 border-2 border-vintage-brown rounded-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-20 right-10 w-24 h-24 border-2 border-vintage-brown"
        style={{ transform: 'rotate(45deg)' }}
      />
    </section>
  );
};

export default HeroSection;
