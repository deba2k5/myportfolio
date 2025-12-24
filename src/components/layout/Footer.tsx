import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Portfolio
            </h3>
            <p className="text-sm text-muted-foreground font-body flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="w-4 h-4 text-vintage-rust fill-vintage-rust" /> in 2024
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-muted-foreground hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-muted-foreground hover:text-sky-500 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>

        <div className="vintage-divider mt-8 mb-6" />

        <p className="text-center text-sm text-muted-foreground font-body">
          © {new Date().getFullYear()} All rights reserved. Built with passion and purpose.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
