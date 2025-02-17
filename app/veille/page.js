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
            ← Retour
          </motion.button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light mb-12"
          >
            Veille Technologique
          </motion.h1>

          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-light mb-4">L'émergence de l'IA générative dans le développement web</h2>
            
            <div className="space-y-4 text-lg text-cream/80">
              <p>
                L'année 2023-2024 a marqué un tournant majeur dans l'industrie du développement web avec l'intégration croissante de l'IA générative. Des outils comme GitHub Copilot, Amazon CodeWhisperer et d'autres solutions basées sur des modèles de langage avancés transforment rapidement la façon dont les développeurs écrivent et maintiennent leur code.
              </p>

              <h3 className="text-xl font-light mt-8 mb-4">Impact sur le développement</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Augmentation de la productivité grâce à l'auto-complétion intelligente du code</li>
                <li>Génération automatique de tests unitaires</li>
                <li>Aide à la documentation du code</li>
                <li>Suggestions de refactoring et d'optimisation</li>
              </ul>

              <h3 className="text-xl font-light mt-8 mb-4">Enjeux et défis</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Qualité et fiabilité du code généré</li>
                <li>Dépendance potentielle aux outils d'IA</li>
                <li>Questions de propriété intellectuelle</li>
                <li>Nécessité de vérification humaine</li>
              </ul>

              <h3 className="text-xl font-light mt-8 mb-4">Perspectives d'avenir</h3>
              <p>
                Les prochaines évolutions attendues incluent l'amélioration de la compréhension contextuelle, l'intégration plus poussée avec les environnements de développement, et le développement de fonctionnalités spécialisées pour différents langages et frameworks.
              </p>

              <div className="mt-8 p-4 bg-[#2a2a2a] rounded-lg">
                <h4 className="text-lg font-light mb-2">Sources et références</h4>
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