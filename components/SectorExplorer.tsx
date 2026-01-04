import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sectors } from '../data/sectors';
import { RevealWrapper } from './RevealWrapper';
import { CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';

interface SectorExplorerProps {
  onContactClick?: () => void;
}

export const SectorExplorer: React.FC<SectorExplorerProps> = ({ onContactClick }) => {
  const [activeTab, setActiveTab] = useState(sectors[0].id);
  const activeSector = sectors.find((s) => s.id === activeTab) || sectors[0];

  return (
    <section id="approach" className="relative z-10 bg-[#080808] py-20 md:py-32 overflow-hidden">
        {/* Animated Background Accent */}
        <AnimatePresence mode="wait">
            <motion.div 
                key={activeSector.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.05, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-0 right-0 h-full w-2/3 blur-[120px] pointer-events-none"
                style={{ backgroundColor: activeSector.themeColor }}
            />
        </AnimatePresence>

      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:mb-16 md:gap-8">
          <div className="max-w-xl">
            <span className="mb-2 block text-[10px] font-bold tracking-[0.2em] text-moweh-accent1 uppercase md:mb-4 md:text-xs">
              Nos terrains d'opération
            </span>
            <h2 className="font-display text-3xl font-bold uppercase text-white md:text-5xl">
              Secteurs <br />
              <span className="text-white/40">Stratégiques</span>
            </h2>
          </div>
          
          {/* Tabs */}
          <div className="w-full md:w-auto overflow-hidden">
             <div className="flex w-full overflow-x-auto pb-4 md:pb-0 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                <div className="flex gap-2 rounded-full border border-white/5 bg-white/5 p-1 backdrop-blur-sm min-w-max">
                {sectors.map((sector) => (
                    <button
                    key={sector.id}
                    onClick={() => setActiveTab(sector.id)}
                    className={`relative px-4 py-2 md:px-6 md:py-2.5 text-[10px] md:text-xs font-bold uppercase tracking-wide transition-colors duration-300 rounded-full whitespace-nowrap ${
                        activeTab === sector.id ? 'text-black' : 'text-neutral-400 hover:text-white'
                    }`}
                    >
                    {activeTab === sector.id && (
                        <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: sector.themeColor }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{sector.label}</span>
                    </button>
                ))}
                </div>
             </div>
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
            <motion.div
                key={activeSector.id}
                initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="grid gap-6 md:gap-8 lg:grid-cols-12 lg:gap-12"
            >
                {/* Left Column: Info & KPIs */}
                <div className="lg:col-span-5">
                    <RevealWrapper 
                        className="rounded-2xl border border-white/5 bg-neutral-900/50 p-6 md:p-8 backdrop-blur-md h-full flex flex-col justify-between group"
                        themeColor={activeSector.themeColor}
                    >
                        <div>
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mb-6 inline-flex rounded-xl p-3 md:p-4 text-black shadow-lg transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundColor: activeSector.themeColor }}
                            >
                                {React.cloneElement(activeSector.icon as React.ReactElement, { size: 24 })}
                            </motion.div>
                            
                            <h3 className="font-display mb-4 text-2xl md:text-3xl font-bold text-white leading-tight">
                                {activeSector.title}
                            </h3>
                            
                            <p className="font-sans text-base md:text-lg font-light leading-relaxed text-neutral-400">
                                {activeSector.description}
                            </p>
                        </div>

                        <div className="mt-8 md:mt-12 grid grid-cols-3 gap-2 md:gap-4 border-t border-white/10 pt-6 md:pt-8">
                            {activeSector.kpis.map((kpi, idx) => (
                                <div key={idx} className="text-center">
                                    <div 
                                        className="font-display text-xl md:text-3xl font-bold"
                                        style={{ color: activeSector.themeColor }}
                                    >
                                        {kpi.value}
                                    </div>
                                    <div className="mt-1 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-neutral-500 truncate">
                                        {kpi.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealWrapper>
                </div>

                {/* Right Column: Services List */}
                <div className="lg:col-span-7">
                    <div className="grid h-full grid-cols-1 gap-3 md:gap-4 md:grid-cols-2">
                        {activeSector.services.map((service, idx) => (
                            <RevealWrapper 
                                key={idx} 
                                className="group flex items-center gap-3 md:gap-4 rounded-xl border border-white/5 bg-neutral-900/30 p-4 md:p-6 cursor-default"
                                radius={150}
                                themeColor={activeSector.themeColor}
                            >
                                <motion.div
                                    variants={{
                                        rest: { x: 0, scale: 1 },
                                        hover: { x: 5, scale: 1.2 }
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <CheckCircle2 
                                        className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0 transition-colors opacity-50 group-hover:opacity-100" 
                                        style={{ color: activeSector.themeColor }}
                                    />
                                </motion.div>
                                <motion.span 
                                    variants={{
                                        rest: { x: 0 },
                                        hover: { x: 5 }
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="text-sm md:text-base font-medium text-neutral-300 group-hover:text-white leading-tight"
                                >
                                    {service}
                                </motion.span>
                            </RevealWrapper>
                        ))}
                        
                        {/* Call to Action Card */}
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="group relative flex flex-col justify-center overflow-hidden rounded-xl bg-white p-6 md:col-span-2 mt-2 md:mt-0 cursor-pointer"
                            onClick={onContactClick}
                        >
                             <div 
                                className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20"
                                style={{ backgroundColor: activeSector.themeColor }} 
                             />
                             <div className="relative z-10 flex items-center justify-between gap-4">
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold text-black leading-tight">Besoin d'expertise spécifique ?</h4>
                                    <p className="text-xs md:text-sm text-neutral-600 mt-1">Nos équipes interviennent sous 24h.</p>
                                </div>
                                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-black text-white transition-all flex-shrink-0 group-hover:bg-[#EAB308] group-hover:text-black shadow-lg">
                                    <ArrowRight className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
                                </div>
                             </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};