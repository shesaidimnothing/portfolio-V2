'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about-section" className="min-h-screen flex flex-col justify-center pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mb-20"
      >
        <h2 className="text-5xl md:text-7xl leading-tight">
          Elevating businesses through expertise in creating remarkable digital user experiences, 
          driving innovation, and delivering impeccable design solutions.
        </h2>
      </motion.div>

      <div className="flex justify-center py-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-24 h-24 rounded-full bg-cream flex items-center justify-center"
        >
          <Image 
            src="/moon-icon.svg" 
            alt="Decorative moon icon"
            width={60}
            height={60}
            className="invert"
          />
        </motion.div>
      </div>
    </section>
  );
} 