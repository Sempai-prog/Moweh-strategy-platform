import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Shield, Eye, Lock, Globe, Users, Target, MoveRight } from 'lucide-react';
import { RevealWrapper } from './RevealWrapper';
import { Breadcrumbs } from './Breadcrumbs';

// DONNÉES TEAM
const teamMembers = [
  { name: "Direction Générale", role: "Stratégie & Gouvernance", impact: "Pilotage de la Vision", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" },
  { name: "Pôle Juridique", role: "Conformité & ISO", impact: "Sécurisation des Opérations", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" },
  { name: "Pôle Finance", role: "Ingénierie Financière", impact: "Optimisation des Flux", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" },
  { name: "Pôle Tech", role: "Transformation Digitale", impact: "Architecture de Données", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop" },
  { name: "Advisory Board", role: "Comité Stratégique", impact: "Anticipation des Risques", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop" },
];

interface VisionPageProps {
  onBack: () => void;
  onNavigate: (view: any) => void;
}

const VisionPage: React.FC<VisionPageProps> = ({ onBack, onNavigate }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#EAB308] selection:text-black animate-in fade-in duration-500">
      
      {/* NAV HEADER STICKY */}
      <div className="sticky top-0 z-50 w-full bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <button onClick={onBack} className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-[#EAB308] transition-colors">
          <div className="p-2 rounded-full border border-white/10 group-hover:bg-[#EAB308] group-hover:text-black transition-all">
            <ArrowLeft size={16} />
          </div>
          <span className="opacity-60 group-hover:opacity-100">Retour Accueil</span>
        </button>
        <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Manifeste</span>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-6 pb-24">

        {/* SECTION 1 : LE MANIFESTE (HERO) */}
        <section className="min-h-[80vh] flex flex-col justify-center border-b border-white/5 py-20 relative overflow-hidden">
             <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/[0.02] pointer-events-none select-none font-display leading-none">
                VISION
             </div>

             <div className="relative z-10 max-w-4xl">
                <div className="mb-8">
                   <Breadcrumbs currentPage="Manifeste & Vision" onNavigateHome={onBack} />
                </div>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#EAB308]/30 bg-[#EAB308]/10 text-[#EAB308] text-[10px] font-bold uppercase tracking-wider mb-8">
                    <Globe size={12} /> Identité & Positionnement
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display uppercase leading-[0.85] tracking-tighter mb-8 text-white">
                    Architectes <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-white/20">De l'Invisible.</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed mt-8 border-l-2 border-[#EAB308] pl-6">
                    Moweh Strategy n'est pas un cabinet de conseil. C'est une infrastructure de souveraineté pour les organisations qui refusent de subir leur environnement.
                </p>
             </div>
        </section>

        {/* SECTION 2 : LE CONSTAT (CONTEXTE) */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
             <div className="lg:col-span-5">
                <h2 className="text-4xl font-bold font-display uppercase mb-6 leading-tight">
                    La complexité est <br/>un <span className="text-[#EAB308]">champ de bataille.</span>
                </h2>
             </div>
             <div className="lg:col-span-7 space-y-8">
                <p className="text-lg text-white/50 leading-relaxed">
                    Dans une économie hyper-connectée, le danger ne vient pas de ce que vous voyez, mais de vos angles morts systémiques. Régulations changeantes, guerres d'influence, instabilité financière : nous transformons ces contraintes en leviers.
                </p>
                
                <button 
                    onClick={() => onNavigate('approach')}
                    className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
                >
                    <span className="border-b border-white/20 pb-1 group-hover:border-[#EAB308] transition-colors">Comprendre notre méthode</span>
                    <MoveRight size={14} className="group-hover:translate-x-2 transition-transform duration-300 text-[#EAB308]" />
                </button>
             </div>
        </section>

        {/* SECTION 3 : LA DOCTRINE (PILIERS) */}
        <section className="py-24 border-t border-white/5">
            <div className="flex items-end justify-between mb-12">
                 <h2 className="text-3xl font-bold font-display uppercase">Les 3 Fondations</h2>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-[#EAB308]">Dogme Interne</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: Shield, title: "L'Obligation", text: "Devoir réel envers nos partenaires. Pas de compromis." },
                    { icon: Lock, title: "La Confiance", text: "Fiabilité absolue. La base de tout engagement." },
                    { icon: Eye, title: "La Transparence", text: "Rien n'est laissé au hasard ou à l'interprétation." }
                ].map((item, idx) => (
                    <RevealWrapper key={idx} className="p-8 bg-[#0A0A0A] border border-white/5 group hover:bg-[#111] min-h-[250px] flex flex-col justify-between rounded-2xl">
                        <item.icon className="text-[#EAB308] h-8 w-8" />
                        <div>
                            <h3 className="text-xl font-bold uppercase mb-2 text-white">{item.title}</h3>
                            <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
                        </div>
                    </RevealWrapper>
                ))}
            </div>
        </section>

        {/* SECTION 4 : LE CORPS (TEAM BENTO + SLIDER) */}
        <section className="py-24 space-y-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                 <div>
                    <h2 className="text-4xl md:text-6xl font-bold font-display uppercase">Operational <span className="text-[#EAB308]">Backbone</span></h2>
                    <p className="text-white/40 text-sm mt-2 max-w-md">Le Collectif Moweh : une alliance d'experts opérationnels et sectoriels formant l'infrastructure de nos interventions.</p>
                 </div>
                 
                 <button 
                    onClick={() => onNavigate('contact')}
                    className="h-12 px-8 bg-[#EAB308] hover:bg-white text-black text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] rounded-full"
                 >
                    Rencontrer les associés <ArrowRight size={14}/>
                 </button>
            </div>

            {/* BENTO GRID LAYOUT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[500px]">
                {/* BLOC INFO */}
                <RevealWrapper className="lg:col-span-4 lg:row-span-2 p-10 bg-[#111] border border-white/5 flex flex-col justify-end relative overflow-hidden rounded-2xl">
                    <div className="relative z-10">
                        <Users size={32} className="text-[#EAB308] mb-6" />
                        <h3 className="text-2xl font-bold uppercase mb-4 leading-tight text-white">
                            Intelligence <br/>Collective.
                        </h3>
                        <p className="text-white/60 text-xs leading-relaxed">
                            Nous ne sommes pas des consultants. Nous sommes des praticiens. Anciens directeurs, ingénieurs financiers, juristes de haut vol.
                        </p>
                    </div>
                    {/* Décoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#EAB308] blur-[150px] opacity-10 pointer-events-none"></div>
                </RevealWrapper>

                {/* BLOC SLIDER */}
                <div className="lg:col-span-8 lg:row-span-2 bg-[#0A0A0A] border border-white/5 relative overflow-hidden flex flex-col rounded-2xl">
                    {/* Header Slider */}
                    <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#0A0A0A] z-10">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Profils Clés & Advisory Board</span>
                        <div className="flex gap-2 items-center">
                             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                             <span className="text-[9px] uppercase text-white/30">Connectés</span>
                        </div>
                    </div>

                    {/* Infinite Scroll Container */}
                    <div className="flex-1 relative overflow-hidden flex items-center group">
                        <div className="flex gap-4 absolute left-0 animate-scroll-x group-hover:[animation-play-state:paused] pl-4">
                            {[...teamMembers, ...teamMembers].map((member, index) => (
                                <div 
                                    key={index} 
                                    className="w-[240px] h-[340px] relative rounded-xl overflow-hidden border border-white/10 shrink-0 group/card transition-transform hover:scale-[1.02]"
                                >
                                    <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-4">
                                        <h4 className="text-sm font-bold text-white uppercase leading-none mb-1">{member.name}</h4>
                                        <span className="text-[10px] text-[#EAB308] font-medium uppercase tracking-wider block mb-2">{member.role}</span>
                                        <div className="h-px w-full bg-white/20 mb-2"></div>
                                        <p className="text-[9px] text-white/50">{member.impact}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 5 : L'HORIZON */}
        <section className="py-32 text-center max-w-5xl mx-auto border-t border-white/5 mt-12">
            <h2 className="text-4xl md:text-7xl font-bold font-display uppercase mb-8 leading-tight">
                L'ambition n'a pas de <br/> <span className="text-[#EAB308]">Plafond de Verre.</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
                Permettre aux organisations de monter en gamme dans leurs chaînes de valeur. Performance opérationnelle, innovation responsable, impact durable.
            </p>
            
            <button 
                onClick={() => onNavigate('contact')}
                className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#EAB308] transition-all duration-300 rounded-full"
            >
                <span className="relative z-10">Initier la Transformation</span>
                <Target className="relative z-10 group-hover:rotate-180 transition-transform duration-500" size={18} />
                <div className="absolute inset-0 border border-white group-hover:border-[#EAB308] scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"></div>
            </button>
        </section>

      </div>
    </div>
  );
};
export default VisionPage;