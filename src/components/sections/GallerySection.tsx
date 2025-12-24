import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryImages = [
  { id: 1, title: 'Conference Presentation', category: 'Events' },
  { id: 2, title: 'Team Hackathon', category: 'Events' },
  { id: 3, title: 'Workshop Session', category: 'Teaching' },
  { id: 4, title: 'Award Ceremony', category: 'Achievements' },
  { id: 5, title: 'Research Lab', category: 'Work' },
  { id: 6, title: 'Tech Meetup', category: 'Community' },
  { id: 7, title: 'Coding Marathon', category: 'Events' },
  { id: 8, title: 'Project Demo Day', category: 'Work' },
];


const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));

  return (
    <section id="gallery" className="section-container bg-card/50" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Photo Gallery</h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="section-subtitle mt-2"
          >
            Moments from my journey
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="vintage-divider w-24 mx-auto mt-4 origin-center"
          />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => openLightbox(index)}
              whileHover={{ 
                scale: 1.05, 
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="vintage-card-hover cursor-pointer overflow-hidden group"
            >
              <div className="aspect-square bg-gradient-to-br from-vintage-tan to-vintage-cream flex items-center justify-center relative">
                <span className="text-lg font-display text-vintage-brown/40">{image.id}</span>
                <motion.div 
                  className="absolute inset-0 bg-vintage-espresso/0 group-hover:bg-vintage-espresso/60 transition-colors flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <p className="text-vintage-cream font-display font-semibold">{image.title}</p>
                    <span className="text-vintage-cream/70 text-sm font-body">{image.category}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-vintage-espresso/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-vintage-cream hover:bg-vintage-cream/10"
              onClick={closeLightbox}
            >
              <X size={24} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 text-vintage-cream hover:bg-vintage-cream/10"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={32} />
            </Button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="vintage-card max-w-4xl w-full aspect-video flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <span className="text-6xl font-display text-vintage-brown/50">
                  {galleryImages[selectedImage].id}
                </span>
                <p className="mt-4 font-display text-xl text-foreground">
                  {galleryImages[selectedImage].title}
                </p>
                <span className="text-muted-foreground font-body">
                  {galleryImages[selectedImage].category}
                </span>
              </div>
            </motion.div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 text-vintage-cream hover:bg-vintage-cream/10"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={32} />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
