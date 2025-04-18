'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Modal from './Modal';
import Image from 'next/image';

const projects = [
  {
    title: "REBUY-R",
    description: "NextJS/ReactJS/PostgreSQL Based APP for second-hand marketplace, WebDevelopment",
    year: "2024",
    image: "/img/rebuyr.png"
  },
  {
    title: "Site d'accueil agence immobilière",
    description: "ReactJS Based APP,WebDevelopment",
    year: "2024",
    image: "/img/re-landingpage.png"
  },
  {
    title: "Application météo",
    description: "ReactJS Based APP using OpenWeather API, WebDevelopment",
    year: "2024",
    image: "/img/weather-app.png"
  },
];

export default function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setIsModalOpen(window.location.hash === '#projects');
    };

    // Vérifier au chargement
    checkHash();

    // Écouter les changements de hash
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleProjectClick = () => {
    window.location.hash = 'projects';
    setIsModalOpen(true);
  };

  const handleClose = () => {
    window.location.hash = '';
    setIsModalOpen(false);
  };

  return (
    <section id="work-section" className="py-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-20 py-20"
      >
        <div className="text-center flex flex-col items-center">
          <motion.div 
            className="text-8xl font-light group-hover:text-cream/70 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            +2
          </motion.div>
          <div className="mt-4 text-sm tracking-wider">
            TOTAL PROJECTS
          </div>
        </div>
        <div className="text-center">
          <motion.div 
            className="text-8xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            +1
          </motion.div>
          <div className="mt-4 text-sm tracking-wider">YEARS OF EXPERIENCE</div>
        </div>
      </motion.div>
      
      <div className="flex justify-center mt-8">
        <motion.button
          onClick={handleProjectClick}
          className="px-6 py-3 border border-[#FFFEF2] rounded-full text-base hover:bg-[#FFFEF2] hover:text-black transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See My Projects
        </motion.button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <div className="space-y-8">
          <h2 className="text-4xl mb-8">Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 border-b border-cream/20 pb-8"
              >
                {project.image && (
                  <div className="w-full md:w-1/2 relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      style={{ maxHeight: '200px' }}
                    />
                  </div>
                )}
                <div className="flex flex-col justify-between w-full md:w-1/2">
                  <div>
                    <h3 className="text-xl font-light mb-2">{project.title}</h3>
                    <p className="text-sm text-cream/70">{project.description}</p>
                  </div>
                  <div className="text-sm text-cream/50 mt-4">{project.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
} 