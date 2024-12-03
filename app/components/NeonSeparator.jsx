'use client';
import { motion } from 'framer-motion';

const NeonSeparator = () => {
  return (
    <div className="py-20 relative">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#FFFEF2] to-transparent"
        style={{
          boxShadow: '0 0 10px #FFFEF2, 0 0 20px #FFFEF2, 0 0 30px #FFFEF2',
        }}
      />
    </div>
  );
};

export default NeonSeparator; 