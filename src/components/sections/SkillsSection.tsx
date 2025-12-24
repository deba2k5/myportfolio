import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Layout, Terminal, Cloud, Cpu } from 'lucide-react';

const skills = [
  {
    category: 'Programming Languages',
    icon: Code,
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
  },
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    icon: Terminal,
    items: ['Node.js', 'Express', 'Django', 'FastAPI', 'GraphQL'],
  },
  {
    category: 'Database',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'],
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
  },
  {
    category: 'AI & ML',
    icon: Cpu,
    items: ['TensorFlow', 'PyTorch', 'OpenCV', 'NLP', 'Deep Learning'],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-container" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mt-2">Technologies I work with</p>
          <div className="vintage-divider w-24 mx-auto mt-4" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="vintage-card-hover p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-vintage-rust/10 flex items-center justify-center">
                  <skill.icon className="w-5 h-5 text-vintage-rust" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm font-body bg-secondary text-secondary-foreground rounded-full border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
