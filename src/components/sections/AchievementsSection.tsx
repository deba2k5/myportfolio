import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Star, Medal } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Hackathon Winner',
    description: 'First place in National Coding Championship 2024',
    year: '2024',
  },
  {
    icon: Award,
    title: 'Best Innovation Award',
    description: 'Recognized for groundbreaking AI research project',
    year: '2023',
  },
  {
    icon: Star,
    title: 'Open Source Contributor',
    description: '500+ contributions to major open source projects',
    year: '2023',
  },
  {
    icon: Medal,
    title: 'Academic Excellence',
    description: 'Graduated with honors in Computer Science',
    year: '2022',
  },
  {
    icon: Trophy,
    title: 'Competitive Programming',
    description: 'Ranked in top 1% on CodeChef and LeetCode',
    year: '2022',
  },
  {
    icon: Award,
    title: 'Research Publication',
    description: 'Published paper in IEEE International Conference',
    year: '2023',
  },
];


const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="achievements" className="section-container" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Achievements</h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="section-subtitle mt-2"
          >
            Milestones in my journey
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="vintage-divider w-24 mx-auto mt-4 origin-center"
          />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="vintage-card-hover p-6 text-center group cursor-default"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-vintage-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-vintage-gold/30 transition-colors"
              >
                <achievement.icon className="w-8 h-8 text-vintage-gold" />
              </motion.div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-sm text-vintage-rust font-display font-semibold"
              >
                {achievement.year}
              </motion.span>
              <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
