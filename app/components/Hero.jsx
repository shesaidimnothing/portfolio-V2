'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="space-y-40">
      <HeroCard 
        title="Hugo — Pottier"
        description="FRONTEND DEVELOPER/STUDENT AT EFREI PARIS"
        specialization="SPECIALIZING IN WEB DESIGN"
      />
    </div>
  );
}

function HeroCard({ title, description, specialization }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <h2 className="text-4xl sm:text-5xl md:text-7xl mb-4 sm:mb-8">{title}</h2>
      <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm mt-4 gap-2 sm:gap-0">
        <div>{description}</div>
        <div>{specialization}</div>
      </div>
    </motion.div>
  );
} 