'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Hero from './components/Hero';
import Project from './components/Project';
import Contact from './components/Contact';
import Loader from './components/Loader.jsx';
import NeonSeparator from './components/NeonSeparator.jsx';
import CustomCursor from './components/CustomCursor.tsx';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" isLoading={isLoading} setIsLoading={setIsLoading} />
        ) : (
          <motion.main 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-black text-[#FFFEF2]"
          >
            <div className="max-w-[2000px] mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-8">
              <Header />
              <Hero />
              <AboutSection />
              <NeonSeparator />
              <Project />
              <Contact />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
