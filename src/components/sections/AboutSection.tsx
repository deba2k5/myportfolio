import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, Calendar } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-container bg-card/50" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <div className="vintage-divider w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="vintage-card p-4">
              <div className="aspect-square bg-gradient-to-br from-vintage-tan to-vintage-cream rounded-lg flex items-center justify-center">
                <span className="text-6xl font-display text-vintage-brown/50">Photo</span>
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-vintage-brown/20 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg font-body text-foreground leading-relaxed">
              Hello! I'm a passionate developer and researcher with a deep curiosity for technology
              and innovation. My journey in the world of code began with a simple fascination
              that has evolved into a dedicated pursuit of excellence.
            </p>
            <p className="text-lg font-body text-muted-foreground leading-relaxed">
              I believe in the power of technology to transform lives and solve complex problems.
              Every project I undertake is an opportunity to learn, grow, and create something
              meaningful that makes a difference.
            </p>

            {/* Quick Info */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              <div className="vintage-card p-4 text-center">
                <MapPin className="w-5 h-5 text-vintage-rust mx-auto mb-2" />
                <span className="text-sm text-muted-foreground">Location</span>
                <p className="font-display text-foreground">Your City</p>
              </div>
              <div className="vintage-card p-4 text-center">
                <Mail className="w-5 h-5 text-vintage-rust mx-auto mb-2" />
                <span className="text-sm text-muted-foreground">Email</span>
                <p className="font-display text-foreground text-sm">hello@email.com</p>
              </div>
              <div className="vintage-card p-4 text-center">
                <Calendar className="w-5 h-5 text-vintage-rust mx-auto mb-2" />
                <span className="text-sm text-muted-foreground">Experience</span>
                <p className="font-display text-foreground">3+ Years</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
