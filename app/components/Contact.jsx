'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-10 sm:py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-10 sm:space-y-20 w-full"
      >
        <h2 className="text-4xl sm:text-5xl md:text-7xl">Let's work together</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20">
          <div className="space-y-6 sm:space-y-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <h3 className="text-xs sm:text-sm tracking-wider opacity-70">EMAIL</h3>
              <a 
                href="mailto:contact@hugopottier.com" 
                className="text-base sm:text-xl hover:opacity-70 transition-opacity break-all"
              >
                hugopottier.pro@icloud.com
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <h3 className="text-sm tracking-wider opacity-70">SOCIALS</h3>
              <div className="space-y-2">
                <a 
                  href="https://www.linkedin.com/in/hugo-pottier-707326263/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-xl hover:opacity-70 transition-opacity"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/shesaidimnothing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-xl hover:opacity-70 transition-opacity"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <h3 className="text-sm tracking-wider opacity-70">LOCATION</h3>
            <p className="text-xl">Paris, France</p>
            <p className="text-xl">Available for remote work</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 