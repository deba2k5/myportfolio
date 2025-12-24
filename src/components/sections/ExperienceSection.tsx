import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Building } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Innovation Labs',
    duration: 'Jan 2023 - Present',
    description: 'Leading development of cloud-native applications using microservices architecture. Mentoring junior developers and driving technical decisions.',
    technologies: ['React', 'Node.js', 'AWS', 'Kubernetes'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Solutions Inc.',
    duration: 'Jun 2021 - Dec 2022',
    description: 'Built and maintained multiple client-facing web applications. Implemented CI/CD pipelines and improved system performance by 40%.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Research Intern',
    company: 'AI Research Institute',
    duration: 'Jan 2021 - May 2021',
    description: 'Conducted research on machine learning algorithms for natural language processing. Published findings in peer-reviewed journal.',
    technologies: ['Python', 'TensorFlow', 'NLP', 'Data Analysis'],
  },
  {
    role: 'Software Development Intern',
    company: 'StartUp Hub',
    duration: 'Jun 2020 - Dec 2020',
    description: 'Developed mobile-responsive web applications and REST APIs. Collaborated with design team to implement pixel-perfect UIs.',
    technologies: ['React', 'Express', 'MongoDB', 'Figma'],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="experience" className="section-container" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience</h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="section-subtitle mt-2"
          >
            My professional journey
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="vintage-divider w-24 mx-auto mt-4 origin-center"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2 origin-top"
          />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  x: isLeft ? -60 : 60,
                  y: 30 
                }}
                animate={isInView ? { 
                  opacity: 1, 
                  x: 0,
                  y: 0 
                } : {}}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.3 + index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className={`relative mb-8 md:mb-12 ${
                  isLeft ? 'md:pr-8 md:text-right md:ml-0 md:mr-[50%]' : 'md:pl-8 md:ml-[50%]'
                } pl-8 md:pl-0`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, type: 'spring', stiffness: 300 }}
                  className={`absolute top-0 w-4 h-4 rounded-full bg-vintage-rust border-4 border-background ${
                    isLeft ? 'left-0 md:left-auto md:-right-2' : 'left-0 md:-left-2'
                  } md:transform md:translate-x-0`}
                />

                {/* Content Card */}
                <motion.div 
                  className="vintage-card-hover p-6"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                  }}
                >
                  <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                    <Building className="w-4 h-4 text-vintage-rust" />
                    <span className="text-sm font-body text-muted-foreground">{exp.company}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-display text-vintage-gold font-medium">
                    {exp.duration}
                  </span>
                  <p className={`text-muted-foreground font-body mt-3 mb-4 ${isLeft ? 'md:text-right' : ''}`}>
                    {exp.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.2 + techIndex * 0.05 }}
                        className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded font-body"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
