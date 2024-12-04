'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about-section" className="min-h-screen flex flex-col justify-center pt-10 sm:pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mb-10 sm:mb-20"
      >
        <h2 className="text-3xl sm:text-5xl md:text-7xl leading-tight">
          Elevating businesses through expertise in creating remarkable digital user experiences, 
          driving innovation, and delivering impeccable design solutions.
        </h2>
      </motion.div>

      <div className="flex justify-center py-10 sm:py-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-cream flex items-center justify-center"
        >
          <Image 
            src="/moon-icon.svg" 
            alt="Decorative moon icon"
            width={40}
            height={40}
            className="invert sm:w-[60px] sm:h-[60px]"
          />
        </motion.div>
      </div>
    </section>
  );
} 