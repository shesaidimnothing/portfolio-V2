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
            className="space-y-12 mb-16"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-6">The Evolution of Web Development in 2025</h2>
              
              <div className="space-y-4 text-lg text-cream/80">
                <p>
                  Early 2025 has brought significant changes to web development practices, particularly with the rise of new frameworks and tools that are reshaping how we build modern web applications.
                </p>

                <h3 className="text-xl font-light mt-8 mb-4">Key Trends</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Server Components and React Server Actions becoming mainstream</li>
                  <li>The rise of Meta-frameworks like Next.js 14 and Astro 4.0</li>
                  <li>View Transitions API adoption for smooth page transitions</li>
                  <li>Edge Computing and Edge Functions gaining traction</li>
                </ul>

                <h3 className="text-xl font-light mt-8 mb-4">Impact on Development</h3>
                <p>
                  These changes are pushing developers towards a more server-first mindset, with improved performance and SEO capabilities built into the framework level. The line between static and dynamic content continues to blur.
                </p>

                <div className="mt-6">
                  <h4 className="text-lg font-light mb-2">Sources</h4>
                  <ul className="list-none space-y-2">
                    <li>• Next.js 14 Documentation</li>
                    <li>• State of JS 2025</li>
                    <li>• Web.dev Updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-light mb-4">The Rise of Generative AI in Web Development</h2>
            
            <div className="space-y-4 text-lg text-cream/80">
              <p>
                The year 2024-2025 marked a major turning point in the web development industry with the increasing integration of generative AI. Tools like GitHub Copilot, Amazon CodeWhisperer, and other solutions based on advanced language models are rapidly transforming how developers write and maintain their code.
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

              <div className="mt-6">
                <h4 className="text-lg font-light mb-2">Sources and References</h4>
                <ul className="list-none space-y-2">
                  <li>• GitHub Copilot Documentation</li>
                  <li>• State of AI Report 2024</li>
                  <li>• Developer Survey 2024</li>
                </ul>
              </div>
            </div>
          </motion.article>
        </div>
      </motion.div>
    </>
  );
} 