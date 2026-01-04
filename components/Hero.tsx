import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { RevealWrapper } from './RevealWrapper';

export const Hero = () => {
  const tickerItems = [
    "Stratégie Corporative", "Intelligence Économique", "Conformité ISO", 
    "Diplomatie d'Affaires", "Gestion de Crise", "Lobbying", 
    "Restructuration", "Audits de Sécurité"
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-moweh-light-bg dark:bg-moweh-dark">
      
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="h-full w-full object-cover opacity-10 dark:opacity-40 grayscale contrast-125 brightness-125 dark:brightness-50"
        >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-network-connection-background-3141-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-moweh-light-bg via-moweh-light-bg/80 to-transparent dark:from-moweh-dark dark:via-moweh-dark/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 flex items-center gap-3 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/30 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moweh-accent1 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-moweh-accent1"></span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-600 dark:text-neutral-300 uppercase">
            Un Partenaire qui transforme
          </span>
        </motion.div>

        <h1 className="font-display max-w-5xl text-center text-3xl font-bold uppercase leading-[0.95] tracking-tighter text-[#050505] dark:text-white sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem]">
          <motion.span 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block text-neutral-400 dark:text-neutral-500"
          >
            LE PARTENAIRE STRATEGIQUE
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="block text-[#050505] dark:text-white md:text-transparent md:bg-clip-text md:bg-[length:200%_auto] md:bg-gradient-to-r md:from-[#050505] md:via-moweh-accent1 md:to-[#050505] md:dark:from-white md:dark:via-moweh-accent1 md:dark:to-white md:animate-shine"
          >
            DE VOTRE TRANSFORMATION.
          </motion.span>
        </h1>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans mt-8 max-w-2xl text-base font-light leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg"
        >
          un Cabinet de conseil stratégique qui s’attache à révéler les angles morts systémiques des organisations et des chaînes de valeur.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12"
        >
             <RevealWrapper className="rounded-full" themeColor="#EAB308">
                 <button className="group flex items-center gap-6 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white transition-all hover:bg-white/10">
                    <div className="relative overflow-hidden h-4 flex flex-col">
                        <span className="group-hover:-translate-y-full transition-transform duration-300">Explorer le cabinet</span>
                        <span className="absolute top-full left-0 text-[#EAB308] group-hover:-translate-y-full transition-transform duration-300">Explorer le cabinet</span>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/20 dark:border-white/20 transition-all group-hover:border-moweh-accent1 group-hover:bg-moweh-accent1 group-hover:text-black group-hover:scale-110">
                        <ArrowDownRight className="h-4 w-4" />
                    </div>
                 </button>
             </RevealWrapper>
        </motion.div>
      </div>

      {/* Infinite Ticker */}
      <div className="group absolute bottom-0 z-30 w-full border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/50 backdrop-blur-md overflow-hidden py-4 flex hover:cursor-none">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex animate-marquee items-center justify-around gap-12 px-4 min-w-full shrink-0 group-hover:[animation-play-state:paused]">
            {tickerItems.map((item, index) => (
              <span key={index} className="text-sm font-medium uppercase tracking-widest text-black/80 dark:text-white/60 flex items-center gap-4 whitespace-nowrap hover:text-[#EAB308] transition-colors cursor-default">
                 {item} <span className="w-1.5 h-1.5 rounded-full bg-moweh-accent1" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};