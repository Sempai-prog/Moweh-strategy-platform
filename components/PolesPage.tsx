import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Terminal, ChevronRight, Activity, Globe, ShieldCheck, Shield, ArrowRight, Lock, Zap, Info, ArrowLeft } from 'lucide-react';
import { RevealWrapper } from './RevealWrapper';
import { sectors } from '../data/sectors';
import { Breadcrumbs } from './Breadcrumbs';
import { Tooltip } from './Tooltip';

interface PolesPageProps {
  onBack: () => void;
}

// Micro-composant pour l'effet de décryptage (ROBUSTE & SAFE)
const DecryptedText = ({ 
    text, 
    values = [], 
    className, 
    reveal = false 
}: { 
    text: string, 
    values?: string[], 
    className?: string, 
    reveal?: boolean 
}) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&";
    const intervalRef = useRef<number | null>(null);
    const cycleIntervalRef = useRef<number | null>(null);
    const timeoutRef = useRef<number | null>(null);
    const wordIndexRef = useRef(0);

    // Fonction de nettoyage centralisée
    const clearAllTimers = () => {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        if (cycleIntervalRef.current) window.clearInterval(cycleIntervalRef.current);
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        // Cleanup au démontage
        return clearAllTimers;
    }, []);

    useEffect(() => {
        clearAllTimers();

        if (reveal) {
            const startScramble = (targetText: string) => {
                if (intervalRef.current) window.clearInterval(intervalRef.current);
                let iteration = 0;
                
                intervalRef.current = window.setInterval(() => {
                    setDisplayText(prev => 
                        targetText.split("").map((letter, index) => {
                            if (index < iteration) return targetText[index];
                            return chars[Math.floor(Math.random() * chars.length)];
                        }).join("")
                    );

                    if (iteration >= targetText.length) {
                        if (intervalRef.current) window.clearInterval(intervalRef.current);
                    }
                    iteration += 1 / 3;
                }, 30);
            };

            // Mode Cycle de mots
            if (values.length > 0) {
                // 1. Cycle rapide des mots
                cycleIntervalRef.current = window.setInterval(() => {
                    wordIndexRef.current = (wordIndexRef.current + 1) % values.length;
                }, 400);

                // 2. Scramble visual effect during cycle
                intervalRef.current = window.setInterval(() => {
                    const target = values[wordIndexRef.current % values.length];
                    setDisplayText(prev => 
                        target.split("").map((letter, index) => {
                            if (Math.random() > 0.5) return target[index];
                            return chars[Math.floor(Math.random() * chars.length)];
                        }).join("")
                    );
                }, 50);

                // 3. Stop cycle and resolve to final text
                timeoutRef.current = window.setTimeout(() => {
                    if (cycleIntervalRef.current) window.clearInterval(cycleIntervalRef.current);
                    if (intervalRef.current) window.clearInterval(intervalRef.current);
                    startScramble(text);
                }, 1600);
            } else {
                startScramble(text);
            }
        } else {
            setDisplayText(text); 
        }
        
        return clearAllTimers;
    }, [reveal, text, values]);

    return <span className={className}>{displayText}</span>;
};


const PolesPage: React.FC<PolesPageProps> = ({ onBack }) => {
  const [isHoveringAlliance, setIsHoveringAlliance] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#EAB308] selection:text-black animate-in fade-in duration-500">
      
      {/* HEADER NAVIGATION STICKY */}
      <div className="sticky top-0 z-50 w-full bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <button onClick={onBack} className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-[#EAB308] transition-colors">
          <div className="p-2 rounded-full border border-white/10 group-hover:bg-[#EAB308] group-hover:text-black transition-all">
            <ArrowLeft size={16} />
          </div>
          <span className="opacity-60 group-hover:opacity-100">Retour Accueil</span>
        </button>
        <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Expertise</span>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-6 pt-12 space-y-16 pb-24">
        
        {/* SECTION 1 : MASTER VISION */}
        <motion.section 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
            <motion.div variants={itemVariants} className="md:col-span-8 flex flex-col justify-end min-h-[40vh] border-l border-white/10 pl-8 md:pl-12 py-4">
                <div className="mb-8">
                    <Breadcrumbs currentPage="Pôles d'Expertise" onNavigateHome={onBack} />
                </div>
                
                <span className="inline-block text-[#EAB308] text-xs font-bold uppercase tracking-widest mb-6">
                    Vision Systémique
                </span>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9] tracking-tighter mb-8">
                    Décloisonner la <br/>
                    <span className="text-neutral-500">Complexité.</span>
                </h1>
                <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
                    Notre architecture d'intervention repose sur 4 piliers interconnectés. 
                    Nous ne traitons pas les symptômes, nous reconfigurons le système.
                </p>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col gap-6">
                <div className="flex-1 bg-neutral-900/30 border border-white/5 p-8 flex flex-col justify-center items-start hover:border-white/10 transition-colors duration-500 group rounded-2xl">
                    <Globe className="text-neutral-600 group-hover:text-[#EAB308] transition-colors mb-4" size={32} />
                    <h3 className="text-white font-bold text-lg">Portée Globale</h3>
                    <p className="text-neutral-500 text-sm mt-2">Intervention sur 3 continents avec une conformité locale stricte.</p>
                </div>
                <div className="flex-1 bg-neutral-900/30 border border-white/5 p-8 flex flex-col justify-center items-start hover:border-white/10 transition-colors duration-500 group rounded-2xl">
                    <ShieldCheck className="text-neutral-600 group-hover:text-[#EAB308] transition-colors mb-4" size={32} />
                    <h3 className="text-white font-bold text-lg">Sécurité Maximale</h3>
                    <p className="text-neutral-500 text-sm mt-2">Protocoles chiffrés et cloisonnement de l'information.</p>
                </div>
            </motion.div>
        </motion.section>

        {/* SECTIONS PÔLES - BENTO GRID */}
        <div className="space-y-32 pt-16">
            {sectors.map((sector, index) => (
                <motion.section 
                    key={sector.id}
                    id={sector.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="relative border-t border-white/5 pt-12"
                >
                    {/* Index & Titre Latéral */}
                    <div className="absolute left-0 top-0 -translate-y-1/2 flex items-center gap-4 bg-[#050505] pr-6">
                        <span className="text-xs font-bold text-[#EAB308]">0{index + 1}</span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">{sector.label}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        
                        {/* 1. MAIN CARD (Description) */}
                        <motion.div variants={itemVariants} className="md:col-span-12 lg:col-span-8 min-h-[280px]"> 
                            <RevealWrapper 
                                className="h-full p-8 md:p-10 bg-[#080808] border border-white/5 flex flex-col justify-center group rounded-3xl"
                                themeColor="#EAB308"
                            >
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-[#EAB308] bg-white/5 group-hover:scale-110 transition-transform duration-500">
                                        {sector.icon}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                                        {sector.title}
                                    </h2>
                                </div>
                                <p className="text-base text-neutral-400 max-w-2xl leading-relaxed">
                                    {sector.description}
                                </p>
                            </RevealWrapper>
                        </motion.div>

                        {/* 2. KPI CARD (Data with Tooltips) */}
                        <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-4">
                            <RevealWrapper 
                                className="h-full p-8 bg-neutral-900/20 border border-white/5 flex flex-col justify-between group rounded-3xl"
                                themeColor="#EAB308"
                            >
                                <div className="flex justify-between items-start">
                                    <Activity size={20} className="text-neutral-600" />
                                    <div className="flex gap-1">
                                        <div className="w-1 h-1 rounded-full bg-[#EAB308] animate-pulse"></div>
                                        <div className="w-1 h-1 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                                <div className="space-y-4 mt-4">
                                    {sector.kpis.map((kpi, i) => (
                                        <Tooltip key={i} content={kpi.tooltip || "Indicateur Clé"}>
                                            <div className="relative flex items-end justify-between border-b border-white/5 pb-2 group/kpi cursor-help w-full">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="text-[10px] font-medium uppercase text-neutral-500 group-hover/kpi:text-white transition-colors">
                                                        {kpi.label}
                                                    </span>
                                                    <Info size={10} className="text-neutral-700 group-hover/kpi:text-[#EAB308] opacity-0 group-hover/kpi:opacity-100 transition-all" />
                                                </div>
                                                <span className="font-display font-bold text-lg text-white group-hover/kpi:text-[#EAB308] transition-colors">{kpi.value}</span>
                                            </div>
                                        </Tooltip>
                                    ))}
                                </div>
                            </RevealWrapper>
                        </motion.div>

                        {/* 3. STRATEGIC ACTIONS (New CTAs) */}
                        <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-6">
                            <div className="h-full grid grid-rows-2 gap-4">
                                {/* Action 1 : Document */}
                                <RevealWrapper className="p-4 bg-[#080808] border border-white/5 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors rounded-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-neutral-900 rounded border border-white/10 text-neutral-400 group-hover:text-white transition-colors">
                                            <Download size={16} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xs text-white uppercase tracking-wide">Note de Synthèse</h4>
                                            <p className="text-[10px] text-neutral-500 mt-0.5">PDF • Analyse 2024</p>
                                        </div>
                                    </div>
                                    <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-[#EAB308] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                </RevealWrapper>

                                {/* Action 2 : Terminal Action */}
                                <RevealWrapper 
                                    className="p-4 bg-white/5 border border-white/10 flex items-center justify-between group cursor-pointer hover:border-[#EAB308]/50 transition-colors rounded-xl"
                                    themeColor="#EAB308"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-[#EAB308]/10 rounded border border-[#EAB308]/20 text-[#EAB308]">
                                            <Terminal size={16} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xs text-white uppercase tracking-wide">Initialiser le Protocole</h4>
                                            <p className="text-[10px] text-neutral-400 mt-0.5">Simulation d'audit</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className="text-neutral-400 group-hover:text-[#EAB308] group-hover:translate-x-1 transition-transform" />
                                </RevealWrapper>
                            </div>
                        </motion.div>

                        {/* 4. EXPERTISE LIST (Minimalist) */}
                        <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-6">
                            <RevealWrapper className="h-full p-8 bg-neutral-900/20 border border-white/5 flex flex-col justify-center rounded-3xl">
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-4 border-b border-white/5 pb-2">Champs d'intervention</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {sector.services.map((service, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-400 group cursor-default">
                                            <div className="w-1 h-1 rounded-full bg-neutral-700 group-hover:bg-[#EAB308] transition-colors"></div>
                                            <span className="group-hover:text-white transition-colors">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </RevealWrapper>
                        </motion.div>

                    </div>
                </motion.section>
            ))}
        </div>


        {/* =========================================================
            BENTO: L'ALLIANCE (Compact 85% Width)
           ========================================================= */}
        <section className="py-24 mb-20 relative">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-30 pointer-events-none" />
             
             <div className="max-w-[85%] mx-auto relative z-10">
                
                {/* Header Section Compact */}
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                        <Shield size={18} className="text-[#EAB308]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-white/60">Partenariat Stratégique</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-bold uppercase text-neutral-500">Systèmes Opérationnels</span>
                    </div>
                </div>

                <div 
                    className="grid grid-cols-1 md:grid-cols-12 gap-4"
                    onMouseEnter={() => setIsHoveringAlliance(true)}
                    onMouseLeave={() => setIsHoveringAlliance(false)}
                >
                    
                    {/* CARD 1: MAIN PITCH */}
                    <RevealWrapper 
                        className="md:col-span-8 p-10 bg-[#0A0A0A] border border-white/10 flex flex-col justify-center min-h-[300px] relative overflow-hidden group rounded-3xl"
                        themeColor="#EAB308"
                    >
                        {/* Refined Lock Icon */}
                        <div className="absolute -bottom-10 -right-10 opacity-10 transform rotate-12 group-hover:rotate-0 group-hover:scale-110 group-hover:opacity-20 transition-all duration-700 ease-in-out">
                            <Lock size={200} className="text-white" strokeWidth={1} />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold font-display uppercase leading-none z-10 relative">
                            <span className="block text-white mb-2">Ne cherchez pas un prestataire.</span>
                            <span className="block text-[#EAB308]">
                                <DecryptedText 
                                    text="EXIGEZ UN ALLIÉ." 
                                    values={["SOUVERAINETÉ.", "PUISSANCE.", "IMPACT.", "RÉSILIENCE."]}
                                    reveal={isHoveringAlliance} 
                                    className="text-[#EAB308]"
                                />
                            </span>
                        </h2>
                        <p className="mt-6 text-neutral-400 max-w-lg text-sm leading-relaxed z-10 relative">
                            Votre croissance mérite mieux qu'une intervention ponctuelle. Nous construisons l'architecture de votre résilience pour les 10 prochaines années avec une confidentialité militaire.
                        </p>
                    </RevealWrapper>

                    {/* CARD 2: ROI */}
                    <RevealWrapper 
                        className="md:col-span-4 p-8 bg-neutral-900/50 border border-white/5 flex flex-col justify-between group rounded-3xl"
                        themeColor="#EF4444" 
                    >
                        <div>
                            <div className="flex items-center gap-2 mb-4 text-red-500">
                                <Zap size={18} className="fill-current" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Hémorragie Silencieuse</span>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">L'inaction a un prix.</h3>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                Chaque jour sans stratégie est une part de marché cédée. Ne financez plus vos concurrents par votre inertie.
                            </p>
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-white/5">
                             <div className="flex items-end gap-2">
                                <span className="text-4xl font-bold text-white font-display">300%</span>
                                <span className="text-xs text-green-500 font-bold mb-1.5">+</span>
                             </div>
                             <div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">ROI Moyen (Y+1)</div>
                        </div>
                    </RevealWrapper>

                    {/* CARD 3: CTA */}
                    <RevealWrapper 
                        className="md:col-span-12 p-8 bg-white/5 border border-white/10 flex items-center justify-center group rounded-2xl"
                        themeColor="#EAB308"
                    >
                        <button className="relative overflow-hidden px-10 py-4 bg-[#EAB308] text-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#CA8A04] transition-all duration-300 flex items-center gap-4 group/btn shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] rounded-full">
                             <span className="relative z-10">Déclencher la Manœuvre</span>
                             <div className="relative z-10 bg-black/10 p-1.5 rounded-full group-hover/btn:translate-x-1 transition-transform">
                                <ArrowRight size={14} className="text-black" />
                             </div>
                             <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                        </button>
                    </RevealWrapper>

                </div>
             </div>
        </section>

      </div>
    </div>
  );
};

export default PolesPage;