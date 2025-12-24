import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: null,
    github: '#',
    live: '#',
  },
  {
    title: 'AI Image Generator',
    description: 'A machine learning application that generates artistic images using neural networks and style transfer.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    image: null,
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team features, and smart scheduling.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
    image: null,
    github: '#',
    live: '#',
  },
  {
    title: 'Healthcare Dashboard',
    description: 'Analytics dashboard for healthcare providers with patient data visualization and appointment tracking.',
    tech: ['Vue.js', 'D3.js', 'Python', 'MongoDB'],
    image: null,
    github: '#',
    live: '#',
  },
  {
    title: 'Social Media Analytics',
    description: 'Platform for analyzing social media trends, sentiment analysis, and engagement metrics.',
    tech: ['React', 'NLP', 'Redis', 'GraphQL'],
    image: null,
    github: '#',
    live: '#',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-container bg-card/50" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mt-2">Some of my recent work</p>
          <div className="vintage-divider w-24 mx-auto mt-4" />
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="vintage-card-hover h-full flex flex-col">
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-vintage-tan to-vintage-cream flex items-center justify-center border-b border-border">
                    <span className="text-2xl font-display text-vintage-brown/50">Preview</span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-vintage-rust/10 text-vintage-rust rounded font-body"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                      <Button variant="social" size="sm" className="flex-1">
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                      <Button variant="vintage" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
