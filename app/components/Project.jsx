'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from './Modal';

const projects = [
  {
    title: "Project 1",
    description: "UI/UX Design",
    year: "2024"
  },
  {
    title: "Project 2",
    description: "Web Development",
    year: "2023"
  },
  {
    title: "Project 3",
    description: "Mobile App",
    year: "2023"
  },
];

export default function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        id="work-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-20 py-20"
      >
        <div className="text-center">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="group"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="text-8xl font-light group-hover:text-cream/70 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              +20
            </motion.div>
            <div className="mt-4 text-sm tracking-wider group-hover:text-cream/70 transition-colors">
              TOTAL PROJECTS
            </div>
          </motion.button>
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-8">
          <h2 className="text-4xl mb-8">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex justify-between items-center border-b border-cream/20 pb-4"
              >
                <div>
                  <h3 className="text-xl font-light">{project.title}</h3>
                  <p className="text-sm text-cream/70">{project.description}</p>
                </div>
                <div className="text-sm text-cream/50">{project.year}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
} 