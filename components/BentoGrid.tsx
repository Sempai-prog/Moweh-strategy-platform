import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealWrapper } from './RevealWrapper';
import { bentoCards } from '../data/bentoCards';
import { ArrowUpRight, X, CheckCircle2 } from 'lucide-react';

interface BentoGridProps {
  onContactClick?: () => void;
}

// Global Micro-component for "Slide Up" text effect (Awwwards Style)
export const StaggeredText = ({ text, className, color = "#EAB308", delay = 0 }: { text: string, className?: string, color?: string, delay?: number }) => {
  return (
    <div className={`relative overflow-hidden flex flex-col ${className}`}>
        <motion.span 
            variants={{
                rest: { y: 0 },
                hover: { y: "-100%" }
            }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay }}
            className="block"
        >
            {text}
        </motion.span>
        <motion.span 
            variants={{
                rest: { y: "100%" },
                hover: { y: 0 }
            }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay }}
            className="absolute inset-0 block font-medium"
            style={{ color: color }}
        >
            {text}
        </motion.span>
    </div>
  );
};

export const BentoGrid: React.FC<BentoGridProps> = ({ onContactClick }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedItem = bentoCards.find((c) => c.id === selectedId);

  return (
    <section id="poles" className="relative z-10 bg-moweh-dark px-4 py-32 md:px-12 lg:px-24">
      <div className="mb-16">
        <h2 className="font-display text-4xl font-bold uppercase text-white md:text-5xl">
          Pôles d'
          <span className="text-moweh-accent1">Expertise</span>
        </h2>
        <div className="mt-4 h-1 w-24 bg-moweh-accent1" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 auto-rows-auto">
        {bentoCards.map((card) => (
          <div
            key={card.id}
            className={`col-span-1 ${card.colSpan} row-span-1 min-h-[300px] perspective-1000`}
            onClick={() => setSelectedId(card.id)}
          >
            <RevealWrapper 
                className="h-full cursor-pointer rounded-2xl bg-neutral-900/40 backdrop-blur-sm overflow-hidden"
                themeColor={card.themeColor}
            >
              <div className="relative flex h-full flex-col justify-between p-8 z-10">
                {/* Subtle Background Gradient */}
                <motion.div 
                    variants={{
                        rest: { opacity: 0, scale: 0.8 },
                        hover: { opacity: 0.15, scale: 1.2 }
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`absolute -top-10 -right-10 h-64 w-64 bg-gradient-to-br ${card.bgGradient} blur-[80px] rounded-full pointer-events-none`} 
                />

                <div className="flex items-start justify-between">
                  {/* Icon Container with Magnetic Feel */}
                  <motion.div 
                    variants={{
                        rest: { scale: 1, rotate: 0, borderColor: "rgba(255,255,255,0.1)" },
                        hover: { scale: 1.15, rotate: 5, borderColor: card.themeColor, color: card.themeColor }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="rounded-full border p-3 text-white transition-colors duration-300"
                  >
                    {card.icon}
                  </motion.div>
                  
                  <motion.div
                    variants={{
                        rest: { x: 0, y: 0, opacity: 0.3 },
                        hover: { x: 4, y: -4, opacity: 1, color: card.themeColor }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                     <ArrowUpRight className="transition-colors" />
                  </motion.div>
                </div>

                <div className="mt-8 relative z-20">
                  <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 block opacity-70 group-hover:opacity-100 transition-opacity duration-300`} style={{ color: card.themeColor }}>
                    {card.category}
                  </span>
                  
                  {/* Animated Title */}
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                     <StaggeredText text={card.title} color={card.themeColor} />
                  </h3>
                  
                  <motion.p 
                    variants={{
                        rest: { y: 0, opacity: 0.6 },
                        hover: { y: -2, opacity: 0.9 }
                    }}
                    transition={{ duration: 0.4 }}
                    className="font-sans text-sm text-neutral-300 leading-relaxed max-w-[95%]"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </RevealWrapper>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-md"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedItem.id}`}
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-8 md:p-12">
                <div 
                    className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5"
                    style={{ color: selectedItem.themeColor }}
                >
                  {selectedItem.icon}
                  <span className="text-xs font-bold tracking-wider uppercase">{selectedItem.category}</span>
                </div>

                <h3 className="font-display mb-4 text-3xl font-bold text-white md:text-4xl">
                  {selectedItem.title}
                </h3>
                
                <p className="font-sans mb-8 text-lg leading-relaxed text-neutral-300 border-l-2 border-white/10 pl-6">
                  {selectedItem.details}
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  {selectedItem.bullets.map((bullet, idx) => (
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + (idx * 0.1) }}
                        key={idx} 
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: selectedItem.themeColor }} />
                      <span className="text-sm font-medium text-neutral-300">{bullet}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                    <button 
                        className={`group w-full rounded-xl py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3`}
                        style={{ backgroundColor: selectedItem.themeColor }}
                        onClick={() => {
                            setSelectedId(null);
                            if (onContactClick) onContactClick();
                        }}
                    >
                        <span>Discuter de ce besoin</span>
                        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={16} />
                    </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};