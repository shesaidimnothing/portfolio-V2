'use client';
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ isOpen, onClose, children }) {
  const scrollContainerRef = useRef(null);
  const previousHashRef = useRef(null);
  const pageScrollPositionRef = useRef(0);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Empêcher le scroll du body quand le modal est ouvert
    if (isOpen) {
      // Save the current page scroll position
      pageScrollPositionRef.current = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      // Store the current hash when modal opens
      previousHashRef.current = window.location.hash;
      // Prevent body scroll and maintain scroll position
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${pageScrollPositionRef.current}px`;
      document.body.style.width = '100%';
    } else {
      // Restore page scroll position when modal closes
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      // Restore scroll position
      window.scrollTo(0, pageScrollPositionRef.current);
    }

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      // Cleanup: ensure body styles are reset
      if (!isOpen) {
        document.body.style.overflow = 'unset';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
      }
    };
  }, [onClose, isOpen]);

  // Save scroll position when closing
  useEffect(() => {
    if (!isOpen && scrollContainerRef.current && previousHashRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollTop;
      const hash = previousHashRef.current || 'default';
      localStorage.setItem(`modal-scroll-${hash}`, scrollPosition.toString());
    }
  }, [isOpen]);

  // Restore scroll position when opening
  useEffect(() => {
    if (isOpen && scrollContainerRef.current) {
      // Small delay to ensure the content is rendered
      setTimeout(() => {
        const hash = window.location.hash || 'default';
        const savedScroll = localStorage.getItem(`modal-scroll-${hash}`);
        if (savedScroll) {
          scrollContainerRef.current.scrollTop = parseInt(savedScroll, 10);
        }
      }, 100);
    }
  }, [isOpen]);

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
            className="fixed inset-x-0 top-[10%] mx-auto w-full max-w-3xl h-[80vh] bg-[#1a1a1a] rounded-lg z-50 overflow-hidden flex flex-col"
          >
            <div className="p-6 relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-2xl hover:opacity-70"
              >
                ×
              </button>
            </div>
            <div 
              ref={scrollContainerRef}
              className="flex-1 overflow-y-auto px-6 pb-6"
            >
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 