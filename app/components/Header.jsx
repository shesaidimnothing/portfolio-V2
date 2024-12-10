'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ChatModal from './ChatModal';

export default function Header() {
  const [time, setTime] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#chatassistant') {
      setIsChatOpen(true);
    }

    const handleHashChange = () => {
      setIsChatOpen(window.location.hash === '#chatassistant');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleChatClick = () => {
    if (!isChatOpen) {
      window.location.hash = 'chatassistant';
    } else {
      window.location.hash = '';
    }
  };

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

    updateTime();

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
    <header className="flex flex-col sm:flex-row justify-between items-center py-4 sticky top-0 z-50 bg-black gap-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-4 text-center sm:text-left"
      >
        <div className="text-sm">
          <div>PARIS, FRANCE</div>
          <div>— {time}</div>
        </div>
      </motion.div>

      <nav className="flex gap-4 sm:gap-6 text-sm sm:text-base">
        <button onClick={scrollToAbout} className="hover:opacity-70">ABOUT</button>
        <button onClick={scrollToWork} className="hover:opacity-70">WORK</button>
        <button onClick={scrollToContact} className="hover:opacity-70">CONTACT</button>
      </nav>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="px-4 py-2 border border-[#FFFEF2] rounded-full text-sm sm:text-base"
        onClick={handleChatClick}
      >
        LET'S TALK
      </motion.button>

      <ChatModal 
        isOpen={isChatOpen}
        onClose={() => {
          window.location.hash = '';
          setIsChatOpen(false);
        }}
      />
    </header>
  );
} 