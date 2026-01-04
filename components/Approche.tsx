import React from 'react';
import { RevealWrapper } from './RevealWrapper';
import { FileText, Map, Zap, BarChart3, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ApprocheProps {
  onContactClick?: () => void;
}

export const Approche: React.FC<ApprocheProps> = ({ onContactClick }) => {
  const steps = [
    {
      num: "01",
      title: "Cartographie des Risques",
      desc: "Identification des angles morts systémiques et audit de l'existant. Nous scannons votre environnement pour révéler les menaces invisibles.",
      deliverable: "Rapport d'Audit & Matrice des Risques",
      icon: <FileText className="h-4 w-4" />
    },
    {
      num: "02",
      title: "Architecture Stratégique",
      desc: "Modélisation de la réponse. Nous construisons des scénarios robustes et des cadres juridiques pour structurer l'action.",
      deliverable: "Plan Directeur & Feuille de Route",
      icon: <Map className="h-4 w-4" />
    },
    {
      num: "03",
      title: "Déploiement Opérationnel",
      desc: "Exécution sur le terrain ou pilotage de crise. Nos équipes intègrent vos structures pour garantir une mise en œuvre sans friction.",
      deliverable: "KPIs & Reporting Temps Réel",
      icon: <Zap className="h-4 w-4" />
    },
    {
      num: "04",
      title: "Pérennisation & Rétroaction",
      desc: "Analyse d'impact et ajustement des processus. Nous transformons l'expérience en actif défensif pour l'avenir.",
      deliverable: "Certification & Optimisation Continue",
      icon: <BarChart3 className="h-4 w-4" />
    }
  ];

  return (
    <section id="approche" className="relative z-10 border-b border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-moweh-dark py-24 lg:py-32 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl font-bold uppercase text-neutral-900 dark:text-white md:text-5xl">
              Notre <span className="text-moweh-accent1">Approche</span>
            </h2>
            <p className="mt-4 max-w-lg text-lg text-neutral-600 dark:text-neutral-400">
              Une méthodologie chirurgicale éprouvée sur les marchés les plus volatils.
            </p>
          </div>
          
          <button 
            onClick={onContactClick}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white transition-colors hover:text-moweh-accent1 dark:hover:text-moweh-accent1"
          >
            <span>Démarrer un audit</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="hidden lg:block absolute top-[5rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-moweh-accent1/30 to-transparent z-0" />

          {steps.map((step, idx) => (
            <RevealWrapper key={idx} className="group relative pt-8" radius={100}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-neutral-200 dark:border-white/5 bg-white dark:bg-neutral-900/60 p-6 backdrop-blur-sm transition-colors shadow-sm dark:shadow-none group-hover:bg-neutral-50 dark:group-hover:bg-neutral-900/80">
                
                {/* Header */}
                <div className="mb-6 flex items-center justify-between relative">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-[#050505] font-display text-xl font-bold text-neutral-400 dark:text-white transition-all group-hover:border-moweh-accent1/50 group-hover:text-moweh-accent1 group-hover:scale-110 shadow-lg">
                    {step.num}
                  </span>

                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 dark:bg-white/5 text-moweh-accent1 dark:shadow-inner border border-neutral-100 dark:border-transparent"
                  >
                    {step.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="mb-8">
                  <h3 className="font-display mb-3 text-xl font-bold text-neutral-900 dark:text-white group-hover:text-moweh-accent1 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {step.desc}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-auto border-t border-neutral-100 dark:border-white/10 pt-4">
                  <span className="mb-1 block text-[10px] font-bold uppercase text-neutral-400 dark:text-neutral-500">
                    Livrable
                  </span>
                  <span className="text-xs font-medium text-moweh-accent2 dark:text-moweh-accent1">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};