import React, { useEffect } from 'react';
import { ArrowLeft, Search, Sliders, Zap, Repeat, Users, Globe, BrainCircuit, Lock, FileKey, Eye } from 'lucide-react';
import { RevealWrapper } from './RevealWrapper';
import { Breadcrumbs } from './Breadcrumbs';

interface ApproachPageProps {
  onBack: () => void;
}

const ApproachPage: React.FC<ApproachPageProps> = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

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
        <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Méthodologie</span>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-6 pt-16 space-y-32 mb-24 pb-24">
        
        {/* SECTION 1 : PHILOSOPHIE */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
            <div>
                <div className="mb-6">
                   <Breadcrumbs currentPage="Notre Méthodologie" onNavigateHome={onBack} />
                </div>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#EAB308]/30 bg-[#EAB308]/10 text-[#EAB308] text-[10px] font-bold uppercase tracking-wider mb-6">
                    <Sliders size={12} /> Philosophie
                </div>
                <h1 className="text-6xl md:text-8xl font-bold font-display uppercase leading-[0.9] tracking-tighter mb-8">
                    Du Fond <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-white/50">À La Forme.</span>
                </h1>
                <p className="text-xl text-white/60 max-w-xl leading-relaxed border-l border-[#EAB308] pl-6">
                    Notre méthode n'est pas un process théorique. C'est une mécanique d'exécution conçue pour convertir la complexité en trajectoires stables.
                </p>
            </div>
            <div className="relative h-full min-h-[400px] border border-white/5 bg-[#0A0A0A] p-8 flex flex-col justify-end overflow-hidden group rounded-3xl">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#EAB308] blur-[150px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                 <h3 className="relative z-10 text-2xl font-bold uppercase mb-2">L'Intention Stratégique</h3>
                 <p className="relative z-10 text-white/50 text-sm">
                    "Diagnostiquer juste, aligner fort, transformer vite."
                 </p>
            </div>
        </section>

        {/* SECTION 2 : LE PROCESS (4 PHASES) */}
        <section>
            <div className="flex items-end justify-between mb-16 border-b border-white/5 pb-6">
                <h2 className="text-4xl font-bold font-display uppercase">La Mécanique <span className="text-[#EAB308]">D'Exécution</span></h2>
                <span className="text-xs font-bold uppercase tracking-widest text-white/40 hidden md:block">Cycle de Transformation</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* PHASE 1 */}
                <RevealWrapper className="p-8 bg-[#0A0A0A] border border-white/5 flex flex-col min-h-[320px] relative group hover:-translate-y-2 transition-transform duration-500 rounded-2xl">
                    <span className="absolute top-4 right-4 text-[80px] font-bold text-white/[0.03] leading-none group-hover:text-[#EAB308]/10 transition-colors">01</span>
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-[#EAB308]">
                        <Search size={24} />
                    </div>
                    <h3 className="text-xl font-bold uppercase mb-4">Observation &<br/>Diagnostic</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-auto">
                        Cartographies des risques, analyse des processus et détection des goulots d'étranglement. On scanne le réel.
                    </p>
                    <div className="mt-6 h-1 w-12 bg-[#EAB308]"></div>
                </RevealWrapper>

                {/* PHASE 2 */}
                <RevealWrapper className="p-8 bg-[#0A0A0A] border border-white/5 flex flex-col min-h-[320px] relative group hover:-translate-y-2 transition-transform duration-500 delay-100 rounded-2xl">
                    <span className="absolute top-4 right-4 text-[80px] font-bold text-white/[0.03] leading-none group-hover:text-[#EAB308]/10 transition-colors">02</span>
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-[#EAB308]">
                        <Sliders size={24} />
                    </div>
                    <h3 className="text-xl font-bold uppercase mb-4">Alignement aux<br/>Standards</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-auto">
                        Mise en conformité ISO 9001, ESG et cadres réglementaires. On solidifie les fondations avant de construire.
                    </p>
                    <div className="mt-6 h-1 w-12 bg-white/20 group-hover:bg-[#EAB308] transition-colors"></div>
                </RevealWrapper>

                {/* PHASE 3 */}
                <RevealWrapper className="p-8 bg-[#0A0A0A] border border-white/5 flex flex-col min-h-[320px] relative group hover:-translate-y-2 transition-transform duration-500 delay-200 rounded-2xl">
                    <span className="absolute top-4 right-4 text-[80px] font-bold text-white/[0.03] leading-none group-hover:text-[#EAB308]/10 transition-colors">03</span>
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-[#EAB308]">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-bold uppercase mb-4">Transformation &<br/>Optimisation</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-auto">
                        Déploiement de modèles scalables et de mécanismes robustes. On active la performance.
                    </p>
                    <div className="mt-6 h-1 w-12 bg-white/20 group-hover:bg-[#EAB308] transition-colors"></div>
                </RevealWrapper>

                {/* PHASE 4 */}
                <RevealWrapper className="p-8 bg-[#EAB308] text-black border border-[#EAB308] flex flex-col min-h-[320px] relative group hover:-translate-y-2 transition-transform duration-500 delay-300 rounded-2xl" themeColor="#000">
                    <span className="absolute top-4 right-4 text-[80px] font-bold text-black/[0.05] leading-none">04</span>
                    <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-6 text-black">
                        <Repeat size={24} />
                    </div>
                    <h3 className="text-xl font-bold uppercase mb-4">Amélioration<br/>Continue</h3>
                    <p className="text-black/70 text-sm leading-relaxed mb-auto">
                        Suivi, boucles de rétroaction et ajustements. La stratégie est vivante, elle doit évoluer.
                    </p>
                    <div className="mt-6 h-1 w-12 bg-black"></div>
                </RevealWrapper>
            </div>
        </section>

        {/* SECTION 3 : LE COLLECTIF (ARCHITECTURE HUMAINE) */}
        <section className="border-t border-white/5 pt-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                     <h2 className="text-4xl font-bold font-display uppercase mb-6">Architecture <br/><span className="text-[#EAB308]">Humaine</span></h2>
                     <p className="text-white/60 text-lg leading-relaxed mb-8">
                        Le Collectif Moweh n'est pas une équipe "en soutien". C'est une alliance d'experts opérationnels et sectoriels qui forment l'infrastructure de nos interventions.
                     </p>
                     <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/5">
                        <Users size={16} className="text-[#EAB308]" />
                        <span className="text-xs font-bold uppercase tracking-widest">Opérations Synchronisées</span>
                     </div>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <RevealWrapper className="p-8 bg-[#0A0A0A] border border-white/5 group rounded-2xl">
                        <Globe className="text-[#EAB308] mb-6 group-hover:scale-110 transition-transform" size={32} />
                        <h4 className="text-xl font-bold uppercase mb-3">Expertise Terrain</h4>
                        <p className="text-sm text-white/50 leading-relaxed">
                            Un réseau d'experts capables d'intervenir au plus près des réalités locales. Pas de théorie hors-sol, uniquement du pragmatisme contextuel.
                        </p>
                    </RevealWrapper>

                    <RevealWrapper className="p-8 bg-[#0A0A0A] border border-white/5 group rounded-2xl">
                        <BrainCircuit className="text-[#EAB308] mb-6 group-hover:scale-110 transition-transform" size={32} />
                        <h4 className="text-xl font-bold uppercase mb-3">Intelligence Sectorielle</h4>
                        <p className="text-sm text-white/50 leading-relaxed">
                            Des spécialistes issus de la finance, de l'industrie et de la gouvernance publique pour une compréhension fine des dynamiques de valeur.
                        </p>
                    </RevealWrapper>

                    <RevealWrapper className="p-8 bg-[#0A0A0A] border border-white/5 group md:col-span-2 flex items-center gap-6 rounded-2xl">
                        <div className="h-16 w-16 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#EAB308] transition-colors">
                            <Repeat className="text-white" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold uppercase mb-1">Exécution Coordonnée</h4>
                            <p className="text-sm text-white/50">Une organisation synchronisée qui garantit cohérence, vitesse et précision dans chaque manœuvre.</p>
                        </div>
                    </RevealWrapper>
                </div>
            </div>
        </section>

        {/* SECTION 4 : CADRE ÉTHIQUE & POLITIQUES */}
        <section className="bg-neutral-900/20 border-y border-white/5 py-24 -mx-4 md:-mx-6 px-4 md:px-6">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-[#EAB308] text-xs font-bold uppercase tracking-widest mb-2 block">Le Cadre Intangible</span>
                        <h2 className="text-4xl font-bold font-display uppercase text-white">Politiques & <span className="text-white/40">Éthique</span></h2>
                    </div>
                    <p className="text-white/60 text-sm max-w-md text-right md:text-left">
                        Notre crédibilité repose sur un cadre strict. Ces politiques ne sont pas optionnelles, elles sont l'ossature de notre autorité.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group border-l-2 border-white/10 pl-6 hover:border-[#EAB308] transition-colors">
                        <Lock className="text-white/40 mb-4 group-hover:text-[#EAB308] transition-colors" size={24} />
                        <h4 className="text-lg font-bold uppercase mb-2">Confidentialité Absolue</h4>
                        <p className="text-sm text-white/50 leading-relaxed mb-4">
                            Toutes les données, décisions et stratégies sont protégées avec les plus hauts standards (Chiffrement, ISO 27001).
                        </p>
                        <span className="text-[10px] font-bold uppercase text-white/30 group-hover:text-white transition-colors">Politique SEC-01</span>
                    </div>

                    <div className="group border-l-2 border-white/10 pl-6 hover:border-[#EAB308] transition-colors">
                        <FileKey className="text-white/40 mb-4 group-hover:text-[#EAB308] transition-colors" size={24} />
                        <h4 className="text-lg font-bold uppercase mb-2">Anti-Corruption</h4>
                        <p className="text-sm text-white/50 leading-relaxed mb-4">
                            Alignement strict sur la norme ISO 37001. Refus de tout biais d'influence ou de conflit d'intérêt.
                        </p>
                        <span className="text-[10px] font-bold uppercase text-white/30 group-hover:text-white transition-colors">Politique ETH-04</span>
                    </div>

                    <div className="group border-l-2 border-white/10 pl-6 hover:border-[#EAB308] transition-colors">
                        <Eye className="text-white/40 mb-4 group-hover:text-[#EAB308] transition-colors" size={24} />
                        <h4 className="text-lg font-bold uppercase mb-2">Impartialité Analytique</h4>
                        <p className="text-sm text-white/50 leading-relaxed mb-4">
                            Nos rapports sont des outils de décision, jamais de séduction. Nous livrons la réalité terrain, aussi dure soit-elle.
                        </p>
                        <span className="text-[10px] font-bold uppercase text-white/30 group-hover:text-white transition-colors">Politique QLT-02</span>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 5 : SIGNATURE */}
        <section className="text-center py-24">
            <h2 className="text-5xl md:text-8xl font-display font-bold uppercase text-white/10 tracking-tight select-none pointer-events-none">
                Transformer.
            </h2>
            <h2 className="text-5xl md:text-8xl font-display font-bold uppercase text-white/20 tracking-tight select-none pointer-events-none -mt-4 md:-mt-8">
                Structurer.
            </h2>
            <h2 className="text-5xl md:text-8xl font-display font-bold uppercase text-[#EAB308] tracking-tight select-none -mt-4 md:-mt-8">
                Élever.
            </h2>
        </section>

      </div>
    </div>
  );
};
export default ApproachPage;