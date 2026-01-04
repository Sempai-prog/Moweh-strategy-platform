import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { RevealWrapper } from './RevealWrapper';

interface VisionProps {
  onContactClick?: () => void;
}

export const Vision: React.FC<VisionProps> = ({ onContactClick }) => {
  return (
    <section id="vision" className="relative z-10 flex min-h-[60vh] items-center justify-center bg-neutral-100 dark:bg-black py-24 text-center transition-colors duration-500">
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-moweh-accent1/5 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display mx-auto max-w-4xl text-4xl font-bold leading-tight text-neutral-900 dark:text-white md:text-6xl lg:text-7xl">
            "L'innovation n'est pas une option, c'est une <span className="text-moweh-accent2 dark:text-moweh-accent1">structure</span>."
          </h2>
          <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400">
            Nous transformons les organisations pour qu'elles ne subissent pas le futur, mais le construisent.
          </p>
          
          <div className="mt-12 flex justify-center">
            <RevealWrapper className="rounded-full" themeColor="#000">
                <button 
                    onClick={onContactClick}
                    className="group relative inline-flex items-center gap-6 overflow-hidden rounded-full bg-neutral-900 dark:bg-white px-8 py-4 text-white dark:text-black transition-all hover:px-10"
                >
                    <div className="relative overflow-hidden h-5 w-48">
                        <span className="absolute top-0 left-0 w-full text-center font-bold tracking-widest uppercase group-hover:-translate-y-full transition-transform duration-300">Solliciter une Intervention</span>
                        <span className="absolute top-full left-0 w-full text-center font-bold tracking-widest uppercase text-[#EAB308] dark:text-[#EAB308] group-hover:-translate-y-full transition-transform duration-300">Solliciter une Intervention</span>
                    </div>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
            </RevealWrapper>
          </div>
           
           <p className="mt-6 text-sm text-neutral-500">
                Réponse sous 4 heures pour les demandes urgentes.
            </p>
        </motion.div>
      </div>
    </section>
  );
};