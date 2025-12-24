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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="section-container" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle mt-2">Milestones in my journey</p>
          <div className="vintage-divider w-24 mx-auto mt-4" />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="vintage-card-hover p-6 text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-vintage-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-vintage-gold/30 transition-colors">
                <achievement.icon className="w-8 h-8 text-vintage-gold" />
              </div>
              <span className="text-sm text-vintage-rust font-display font-semibold">
                {achievement.year}
              </span>
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
