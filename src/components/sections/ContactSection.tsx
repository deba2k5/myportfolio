import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Code, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com', color: 'hover:text-foreground' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: 'hover:text-blue-600' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:text-sky-500' },
  { name: 'CodeChef', icon: Code, url: 'https://codechef.com', color: 'hover:text-amber-600' },
  { name: 'LeetCode', icon: Trophy, url: 'https://leetcode.com', color: 'hover:text-yellow-500' },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I will get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-container" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mt-2">Let's create something amazing together</p>
          <div className="vintage-divider w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              <p className="text-muted-foreground font-body">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-vintage-rust/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-vintage-rust" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground font-body">Email</span>
                  <p className="font-display text-foreground">hello@youremail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-vintage-rust/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-vintage-rust" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground font-body">Location</span>
                  <p className="font-display text-foreground">Your City, Country</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-vintage-rust/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-vintage-rust" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground font-body">Phone</span>
                  <p className="font-display text-foreground">+1 234 567 890</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Connect With Me
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 vintage-card flex items-center justify-center text-muted-foreground transition-colors ${link.color}`}
                    title={link.name}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="vintage-card p-8 space-y-6">
              <div>
                <label className="block text-sm font-display font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border focus:border-vintage-rust"
                />
              </div>

              <div>
                <label className="block text-sm font-display font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border focus:border-vintage-rust"
                />
              </div>

              <div>
                <label className="block text-sm font-display font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project or just say hi..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background border-border focus:border-vintage-rust resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
