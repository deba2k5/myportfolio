import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const research = [
  {
    title: 'Deep Learning for Medical Image Analysis',
    journal: 'IEEE International Conference on Machine Learning',
    year: '2024',
    abstract: 'A novel approach to detecting anomalies in medical imaging using convolutional neural networks with attention mechanisms.',
    link: '#',
  },
  {
    title: 'Natural Language Processing in Education',
    journal: 'Journal of Educational Technology',
    year: '2023',
    abstract: 'Exploring the application of NLP techniques to improve automated essay scoring and feedback systems.',
    link: '#',
  },
  {
    title: 'Blockchain for Supply Chain Transparency',
    journal: 'ACM Computing Surveys',
    year: '2023',
    abstract: 'A comprehensive review of blockchain implementations in supply chain management and their impact on transparency.',
    link: '#',
  },
];

const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="research" className="section-container bg-card/50" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Research & Publications</h2>
          <p className="section-subtitle mt-2">Contributing to the body of knowledge</p>
          <div className="vintage-divider w-24 mx-auto mt-4" />
        </motion.div>

        {/* Research Papers */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {research.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="vintage-card-hover p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-vintage-brown/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-vintage-brown" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-sm font-display text-vintage-rust font-semibold">
                      {paper.year}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm font-body text-muted-foreground">
                      {paper.journal}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {paper.title}
                  </h3>
                  <p className="text-muted-foreground font-body mb-4">
                    {paper.abstract}
                  </p>
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4" />
                    Read Paper
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
