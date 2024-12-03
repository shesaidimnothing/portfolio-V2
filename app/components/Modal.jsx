'use client';
import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed inset-x-0 top-0 mx-auto w-full p-8 bg-black border-b border-[#FFFEF2] z-50"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl hover:opacity-70"
            >
              ×
            </button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 