import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, Calendar } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="section-title"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="vintage-divider w-24 mx-auto mt-4 origin-center"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -2 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <motion.div
              className="vintage-card p-4"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square bg-gradient-to-br from-vintage-tan to-vintage-cream rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-6xl font-display text-vintage-brown/50">Photo</span>
              </div>
            </motion.div>
            {/* Decorative frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -top-4 -left-4 w-full h-full border-2 border-vintage-brown/20 rounded-lg -z-10"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg font-body text-foreground leading-relaxed"
            >
              Hello! I'm a passionate developer and researcher with a deep curiosity for technology
              and innovation. My journey in the world of code began with a simple fascination
              that has evolved into a dedicated pursuit of excellence.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg font-body text-muted-foreground leading-relaxed"
            >
              I believe in the power of technology to transform lives and solve complex problems.
              Every project I undertake is an opportunity to learn, grow, and create something
              meaningful that makes a difference.
            </motion.p>

            {/* Quick Info */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {[
                { icon: MapPin, label: 'Location', value: 'Your City' },
                { icon: Mail, label: 'Email', value: 'hello@email.com' },
                { icon: Calendar, label: 'Experience', value: '3+ Years' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="vintage-card p-4 text-center cursor-default"
                >
                  <item.icon className="w-5 h-5 text-vintage-rust mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <p className="font-display text-foreground text-sm">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
