'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ChatModal from './ChatModal';
import CustomCursor from './CustomCursor';

export default function Header() {
  const [time, setTime] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      
      const parisTime = new Date().toLocaleTimeString('fr-FR', options);
      setTime(parisTime);
    };

    // Update time immediately
    updateTime();

    // Update time every minute
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about-section');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = (e) => {
    e.preventDefault();
    const workSection = document.getElementById('work-section');
    workSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <header className="flex justify-between items-center py-4 sticky top-0 z-50 bg-black">
      <CustomCursor isModalOpen={isChatOpen} />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-4"
      >
        <div className="text-sm">
          <div>PARIS, FRANCE</div>
          <div>— {time}</div>
        </div>
      </motion.div>

      <nav className="flex gap-6">
        <button onClick={scrollToAbout} className="hover:opacity-70">ABOUT</button>
        <button onClick={scrollToWork} className="hover:opacity-70">WORK</button>
        <button onClick={scrollToContact} className="hover:opacity-70">CONTACT</button>
      </nav>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="px-4 py-2 border border-[#FFFEF2] rounded-full"
        onClick={() => setIsChatOpen(true)}
      >
        LET'S TALK
      </motion.button>

      <ChatModal 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </header>
  );
} 