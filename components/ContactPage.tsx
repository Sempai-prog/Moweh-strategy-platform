import React, { useEffect } from 'react';
import { ArrowLeft, Mail, MapPin, Phone, ArrowUpRight, Globe, Radio, Signal, Wifi } from 'lucide-react';
import { RevealWrapper } from './RevealWrapper';
import { Breadcrumbs } from './Breadcrumbs';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Signal transmis. Notre cellule vous contactera sous 2 heures.");
    // In a real app, this would send data to backend.
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#EAB308] selection:text-black animate-in fade-in duration-500 pb-12">
      
      {/* HEADER SIMPLE */}
      <div className="sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between pointer-events-none">
        <button onClick={onBack} className="pointer-events-auto group flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-[#EAB308] transition-colors bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <ArrowLeft size={16} /> <span className="opacity-60 group-hover:opacity-100">Fermer</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* NOUVEAU HERO : SIGNAL & ENGAGEMENT */}
        <section className="relative py-20 md:py-32 mb-12 border-b border-white/5 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EAB308] blur-[200px] opacity-10 pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
                <div className="mb-6">
                    <Breadcrumbs currentPage="Contact" onNavigateHome={onBack} />
                </div>
                
                <div className="flex items-center gap-3 mb-8">
                    <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EAB308] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EAB308]"></span>
                    </span>
                    <span className="text-[#EAB308] text-xs font-bold uppercase tracking-[0.3em]">Canal Sécurisé</span>
                </div>

                <h1 className="text-7xl md:text-9xl font-bold font-display uppercase leading-[0.85] tracking-tighter text-white mb-8">
                    Prêt à <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Transformer ?</span>
                </h1>
                
                <div className="max-w-xl border-l-2 border-[#EAB308] pl-6 mt-12">
                    <p className="text-xl text-white/70 leading-relaxed">
                        Chaque action crée de la valeur. Si vous êtes prêt à passer de la théorie à l'exécution stratégique, le signal est ouvert.
                    </p>
                </div>
            </div>

            {/* Signal Bars Visual */}
            <div className="absolute bottom-0 right-0 hidden md:flex gap-1 items-end h-32 opacity-20">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="w-4 bg-[#EAB308]" style={{ height: `${(i + 1) * 10}%` }}></div>
                ))}
            </div>
        </section>

        {/* SECTION SPLIT : CONTACT & FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pb-24">
            
            {/* COLONNE GAUCHE : INFOS DE CONTACT */}
            <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Coordonnées Directes</h3>

                <RevealWrapper className="p-8 border border-white/10 bg-[#0A0A0A] flex items-center justify-between gap-6 group hover:border-[#EAB308] transition-all duration-300 rounded-2xl">
                    <div className="flex items-center gap-6">
                        <div className="p-4 bg-white/5 text-white group-hover:text-[#EAB308] group-hover:bg-[#EAB308]/10 rounded-full transition-colors">
                            <Mail size={24}/>
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Email Officiel</span>
                            <a href="mailto:contact@mowehagency.com" className="text-lg md:text-xl font-bold hover:text-[#EAB308] transition-colors">contact@mowehagency.com</a>
                        </div>
                    </div>
                    <ArrowUpRight className="text-white/20 group-hover:text-[#EAB308] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </RevealWrapper>

                <RevealWrapper className="p-8 border border-white/10 bg-[#0A0A0A] flex items-center justify-between gap-6 group hover:border-[#EAB308] transition-all duration-300 rounded-2xl">
                    <div className="flex items-center gap-6">
                        <div className="p-4 bg-white/5 text-white group-hover:text-[#EAB308] group-hover:bg-[#EAB308]/10 rounded-full transition-colors">
                            <Phone size={24}/>
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Ligne Directe</span>
                            <a href="tel:+237693987233" className="text-lg md:text-xl font-bold hover:text-[#EAB308] transition-colors">+237 693 98 72 33</a>
                        </div>
                    </div>
                    <ArrowUpRight className="text-white/20 group-hover:text-[#EAB308] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </RevealWrapper>

                <RevealWrapper className="p-8 border border-white/10 bg-[#0A0A0A] flex items-center justify-between gap-6 group hover:border-[#EAB308] transition-all duration-300 rounded-2xl">
                    <div className="flex items-center gap-6">
                        <div className="p-4 bg-white/5 text-white group-hover:text-[#EAB308] group-hover:bg-[#EAB308]/10 rounded-full transition-colors">
                            <Globe size={24}/>
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Bureau Digital</span>
                            <a href="https://www.mowehagency.com" target="_blank" className="text-lg md:text-xl font-bold hover:text-[#EAB308] transition-colors">
                                www.mowehagency.com
                            </a>
                        </div>
                    </div>
                    <ArrowUpRight className="text-white/20 group-hover:text-[#EAB308] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </RevealWrapper>
            </div>

            {/* COLONNE DROITE : LE TERMINAL (FORM) */}
            <div className="lg:sticky lg:top-24">
                 <div className="bg-[#111] border border-white/10 p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-colors">
                    {/* Decorative Top Bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#EAB308] via-transparent to-transparent"></div>
                    
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-2xl font-bold uppercase">Initialiser la demande</h3>
                        <div className="flex gap-2">
                             <div className="w-2 h-2 rounded-full bg-red-500"></div>
                             <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                             <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold text-white/50">Identité</label>
                                <input required type="text" placeholder="Nom Complet" className="w-full bg-black/50 border border-white/10 p-4 text-white text-sm outline-none focus:border-[#EAB308] transition-colors placeholder:text-white/20 rounded-lg"/>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold text-white/50">Organisation</label>
                                <input required type="text" placeholder="Société" className="w-full bg-black/50 border border-white/10 p-4 text-white text-sm outline-none focus:border-[#EAB308] transition-colors placeholder:text-white/20 rounded-lg"/>
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold text-white/50">Point de contact</label>
                            <input required type="email" placeholder="Email Professionnel" className="w-full bg-black/50 border border-white/10 p-4 text-white text-sm outline-none focus:border-[#EAB308] transition-colors placeholder:text-white/20 rounded-lg"/>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold text-white/50">Nature de la requête</label>
                            <select className="w-full bg-black/50 border border-white/10 p-4 text-white text-sm outline-none focus:border-[#EAB308] transition-colors appearance-none rounded-lg">
                                <option>Sujet : Audit Stratégique</option>
                                <option>Sujet : Conformité & ISO</option>
                                <option>Sujet : Partenariat Industriel</option>
                                <option>Sujet : Gestion de Crise</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold text-white/50">Transmission</label>
                            <textarea required rows={4} placeholder="Message crypté..." className="w-full bg-black/50 border border-white/10 p-4 text-white text-sm outline-none focus:border-[#EAB308] transition-colors placeholder:text-white/20 rounded-lg"></textarea>
                        </div>
                        
                        <button type="submit" className="w-full py-5 bg-[#EAB308] hover:bg-white text-black font-bold uppercase tracking-[0.2em] transition-all mt-4 flex justify-between px-8 group/btn rounded-lg">
                            <span>Envoyer le Signal</span>
                            <Signal className="group-hover/btn:animate-pulse" />
                        </button>
                    </form>
                 </div>
            </div>

        </div>

      </div>
      {/* Footer supprimé ici car géré globalement */}
    </div>
  );
};
export default ContactPage;