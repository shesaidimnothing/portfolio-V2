'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CustomCursor from '../components/CustomCursor';

export default function Veille() {
  return (
    <>
      <CustomCursor />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-black text-[#FFFEF2] p-8 md:p-16"
      >
        {/* Bouton de retour */}
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mb-8 px-4 py-2 border border-[#FFFEF2] rounded-full"
          >
            ← Back
          </motion.button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light mb-12"
          >
            Technology Watch
          </motion.h1>

          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-light mb-4">The Rise of Generative AI in Web Development</h2>
            
            <div className="space-y-4 text-lg text-cream/80">
              <p>
                The year 2023-2024 marked a major turning point in the web development industry with the increasing integration of generative AI. Tools like GitHub Copilot, Amazon CodeWhisperer, and other solutions based on advanced language models are rapidly transforming how developers write and maintain their code.
              </p>

              <h3 className="text-xl font-light mt-8 mb-4">Impact on Development</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Increased productivity through intelligent code completion</li>
                <li>Automatic generation of unit tests</li>
                <li>Code documentation assistance</li>
                <li>Refactoring and optimization suggestions</li>
              </ul>

              <h3 className="text-xl font-light mt-8 mb-4">Challenges and Issues</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Quality and reliability of generated code</li>
                <li>Potential dependency on AI tools</li>
                <li>Intellectual property concerns</li>
                <li>Need for human verification</li>
              </ul>

              <h3 className="text-xl font-light mt-8 mb-4">Future Perspectives</h3>
              <p>
                Expected future developments include improved contextual understanding, deeper integration with development environments, and the development of specialized features for different languages and frameworks.
              </p>

              <div className="mt-8 p-4 bg-[#2a2a2a] rounded-lg">
                <h4 className="text-lg font-light mb-2">Sources and References</h4>
                <ul className="list-none space-y-2">
                  <li>• GitHub Copilot Documentation</li>
                  <li>• State of AI Report 2023</li>
                  <li>• Developer Survey 2023</li>
                </ul>
              </div>
            </div>
          </motion.article>
        </div>
      </motion.div>
    </>
  );
} 