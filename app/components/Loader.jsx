'use client';
import { motion } from 'framer-motion';

const Loader = ({ isLoading, setIsLoading }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (!isLoading) {
          setIsLoading(false);
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-32 h-32 border-4 border-[#FFFEF2] rounded-full"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ 
            scale: [0, 1, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: 0,
            ease: "easeInOut"
          }}
          onAnimationComplete={() => setIsLoading(false)}
          className="absolute top-1/2 left-1/2 w-16 h-16 border-4 border-[#FFFEF2] rounded-full -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </motion.div>
  );
};

export default Loader; 