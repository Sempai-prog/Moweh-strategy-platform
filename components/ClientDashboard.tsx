import React, { useState } from 'react';
import { 
  LayoutDashboard, CalendarDays, Files, Radio, Settings, LogOut, 
  Activity, Bell, Search, Download, CheckCircle2, Clock, AlertCircle, 
  FileText, ChevronRight, FolderOpen, ArrowRight, Shield, Zap, TrendingUp, Menu, X, TerminalSquare
} from 'lucide-react';
import { RevealWrapper } from './RevealWrapper';

interface ClientDashboardProps {
  onLogout: () => void;
}

type TabType = 'dashboard' | 'projects' | 'calendar' | 'docs' | 'support';

// --- SUB-COMPONENTS (Blue "Ops Center" Theme) ---

const ProjectsView = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-between items-end">
            <h2 className="text-2xl font-bold uppercase tracking-tight">Trajectoire <span className="text-blue-500">Opérationnelle</span></h2>
            <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                + Nouveau Ticket
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <RevealWrapper className="lg:col-span-2 p-8 bg-[#0A0A0A] border border-white/5 rounded-2xl relative overflow-hidden" themeColor="#3B82F6">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
                
                <h3 className="text-xs font-bold uppercase text-blue-400 mb-8 flex items-center gap-2 tracking-widest">
                    <Activity size={16} className="text-blue-500"/> Phase Active : Déploiement
                </h3>
                
                <div className="space-y-10 relative pl-4 before:absolute before:left-[23px] before:top-3 before:h-[85%] before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:to-white/5">
                    {[
                        { title: "Validation Architecture", date: "10 Oct", status: "completed" },
                        { title: "Déploiement Outils Pilotage", date: "En cours", status: "current" },
                        { title: "Formation Équipes", date: "À venir", status: "pending" },
                    ].map((step, i) => (
                        <div key={i} className="relative pl-12 group">
                            <div className={`absolute left-[16px] top-1 w-4 h-4 rounded-full border-2 z-10 transition-all duration-500 ${
                                step.status === 'completed' ? 'bg-blue-500 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 
                                step.status === 'current' ? 'bg-[#0A0A0A] border-blue-400 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.8)]' : 
                                'bg-[#0A0A0A] border-white/10 group-hover:border-white/30'
                            }`}></div>
                            <h4 className={`text-lg font-bold transition-colors ${step.status === 'pending' ? 'text-white/30' : 'text-white'}`}>{step.title}</h4>
                            <span className="text-[10px] text-blue-400 font-mono uppercase tracking-wider">{step.status === 'completed' ? 'Validé' : step.date}</span>
                        </div>
                    ))}
                </div>
            </RevealWrapper>

            <div className="space-y-6">
                <RevealWrapper className="p-8 bg-[#0F0F0F] border border-white/5 rounded-2xl text-center group" themeColor="#3B82F6">
                    <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500 border border-blue-500/20">
                        <CheckCircle2 size={32} />
                    </div>
                    <span className="block text-5xl font-display font-bold text-white mb-2 tracking-tighter">85%</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Objectifs Atteints</span>
                </RevealWrapper>
                
                <RevealWrapper className="p-8 bg-[#0F0F0F] border border-white/5 rounded-2xl text-center group" themeColor="#3B82F6">
                    <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center text-white/60 mb-6 group-hover:text-blue-500 transition-colors border border-white/10 group-hover:border-blue-500/30">
                        <Clock size={32} />
                    </div>
                    <span className="block text-5xl font-display font-bold text-white mb-2 tracking-tighter">J-12</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Prochain Jalon</span>
                </RevealWrapper>
            </div>
        </div>
    </div>
);

const CalendarView = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h2 className="text-2xl font-bold uppercase tracking-tight">Agenda <span className="text-blue-500">Stratégique</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
                { day: "12", month: "JAN", title: "Comité de Pilotage", type: "Réunion", active: true },
                { day: "24", month: "JAN", title: "Remise Audit Q1", type: "Livrable", active: false },
                { day: "05", month: "FÉV", title: "Point Financier", type: "Réunion", active: false },
            ].map((event, i) => (
                <RevealWrapper key={i} className={`p-8 bg-[#0A0A0A] border ${event.active ? 'border-blue-500/30' : 'border-white/5'} rounded-2xl flex items-center gap-6 group hover:border-blue-500/50 transition-colors`} themeColor="#3B82F6">
                    <div className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl ${event.active ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'bg-white/5 text-blue-400 border border-white/10'}`}>
                        <span className="text-xl font-bold">{event.day}</span>
                        <span className="text-[9px] font-bold uppercase">{event.month}</span>
                    </div>
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-1.5 block flex items-center gap-2">
                            {event.active && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"/>}
                            {event.type}
                        </span>
                        <h3 className="font-bold text-white text-lg leading-tight group-hover:text-blue-100 transition-colors">{event.title}</h3>
                    </div>
                </RevealWrapper>
            ))}
        </div>
    </div>
);

const DocsView = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold uppercase tracking-tight">Base <span className="text-blue-500">Documentaire</span></h2>
            <div className="flex gap-2">
                 <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"><Search size={18} /></button>
                 <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"><Settings size={18} /></button>
            </div>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2">
            {['Tout', 'Contrats', 'Rapports', 'Factures', 'Juridique'].map(cat => (
                <button key={cat} className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest border transition-all ${cat === 'Tout' ? 'bg-blue-600 border-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-white/5 bg-[#0A0A0A] text-white/40 hover:border-blue-500/50 hover:text-white'}`}>
                    {cat}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <RevealWrapper key={i} className="p-6 bg-[#0A0A0A] border border-white/5 rounded-2xl group hover:bg-[#111] relative flex flex-col justify-between h-[220px]" themeColor="#3B82F6">
                    <div>
                        <div className="mb-6 w-12 h-12 rounded-lg bg-blue-900/10 flex items-center justify-center text-blue-500 border border-blue-500/10 group-hover:border-blue-500/30 transition-colors">
                            <FileText size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-bold text-white text-sm mb-1 truncate pr-4">Rapport_Audit_Final_v{i+1}.pdf</h3>
                        <p className="text-white/30 text-[10px] uppercase tracking-wider">Mise à jour le 12 Jan</p>
                    </div>
                    
                    <button className="w-full py-3 bg-white/5 hover:bg-blue-600 hover:text-white text-blue-400 border border-white/5 hover:border-blue-500 rounded-xl text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 group/btn">
                        <Download size={14} className="group-hover/btn:animate-bounce" /> Télécharger
                    </button>
                </RevealWrapper>
            ))}
        </div>
    </div>
);

const SupportView = () => (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center space-y-6 mb-12">
            <div className="w-24 h-24 mx-auto bg-blue-600/10 rounded-full flex items-center justify-center text-blue-500 border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.1)] relative">
                <div className="absolute inset-0 rounded-full border border-blue-500 opacity-20 animate-ping"></div>
                <Radio size={40} />
            </div>
            <div>
                <h2 className="text-3xl font-bold uppercase tracking-tight text-white">Canal <span className="text-blue-500">Prioritaire</span></h2>
                <p className="text-white/50 max-w-lg mx-auto mt-4 text-sm leading-relaxed">
                    Utilisez ce terminal pour émettre un signal d'urgence ou une demande critique. 
                    Ce canal est monitoré 24/7 par votre Partner dédié.
                </p>
            </div>
        </div>

        <RevealWrapper className="p-10 bg-[#0F0F0F] border border-white/5 rounded-2xl shadow-2xl" themeColor="#3B82F6">
            <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-blue-400 tracking-widest ml-1">Priorité</label>
                        <select className="w-full bg-[#050505] border border-white/10 rounded-xl p-4 text-white text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors">
                            <option>Normale</option>
                            <option>Haute</option>
                            <option className="text-red-500 font-bold">CRITIQUE</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                         <label className="text-[10px] uppercase font-bold text-blue-400 tracking-widest ml-1">Sujet</label>
                        <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-xl p-4 text-white text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Ex: Blocage Opérationnel..." />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-blue-400 tracking-widest ml-1">Message Crypté</label>
                    <textarea rows={6} className="w-full bg-[#050505] border border-white/10 rounded-xl p-4 text-white text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors font-mono text-xs leading-relaxed" placeholder="// Saisissez votre requête détaillée..."></textarea>
                </div>
                <button type="button" className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-[0.2em] rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-3">
                    <Zap size={18} fill="currentColor" /> Émettre le Signal
                </button>
            </form>
        </RevealWrapper>
    </div>
);

// --- MAIN COMPONENT ---

const ClientDashboard: React.FC<ClientDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex font-sans selection:bg-blue-500 selection:text-white">
      
      {/* 0. MOBILE SIDEBAR OVERLAY */}
      {isMobileSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
      )}

      {/* 1. SIDEBAR (Ops Center Style) */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-[#080808] border-r border-white/5 flex flex-col justify-between transition-transform duration-300
        lg:static lg:translate-x-0
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div>
            {/* Logo Area */}
            <div className="h-24 flex items-center justify-between px-6 border-b border-white/5">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-[0_0_15px_rgba(37,99,235,0.4)]">M</div>
                    <div>
                        <span className="block font-bold tracking-widest uppercase text-sm text-white leading-none mb-1">Moweh</span>
                        <span className="block text-[9px] uppercase text-blue-500 tracking-[0.2em] font-bold">Ops Center</span>
                    </div>
                </div>
                <button 
                    onClick={() => setIsMobileSidebarOpen(false)}
                    className="lg:hidden text-white/50 hover:text-white"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Menu */}
            <nav className="mt-8 px-4 space-y-2">
                {[
                  { id: 'dashboard', icon: LayoutDashboard, label: 'Vue d\'ensemble' },
                  { id: 'projects', icon: Activity, label: 'Suivi de Mission' },
                  { id: 'calendar', icon: CalendarDays, label: 'Agenda Stratégique' },
                  { id: 'docs', icon: Files, label: 'Base Documentaire' },
                  { id: 'support', icon: Radio, label: 'Signal & Support' },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => { setActiveTab(item.id as TabType); setIsMobileSidebarOpen(false); }}
                        className={`w-full flex items-center p-4 rounded-xl transition-all group relative overflow-hidden ${
                            activeTab === item.id 
                            ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]' 
                            : 'text-white/40 hover:bg-white/5 hover:text-white'
                        }`}
                    >
                        {activeTab === item.id && (
                             <div className="absolute left-0 top-0 h-full w-1 bg-white/20"></div>
                        )}
                        
                        <div className="relative z-10 flex items-center w-full">
                            <item.icon size={20} className={activeTab === item.id ? 'text-white' : 'group-hover:text-blue-400 transition-colors'} />
                            <span className="ml-4 text-xs font-bold uppercase tracking-wider">{item.label}</span>
                            {activeTab === item.id && <ChevronRight size={14} className="ml-auto opacity-70"/>}
                        </div>
                    </button>
                ))}
            </nav>
        </div>

        {/* Footer Sidebar */}
        <div className="p-4 border-t border-white/5 space-y-2">
            <button onClick={onLogout} className="w-full flex items-center p-4 text-red-400 hover:bg-red-500/5 hover:text-red-300 rounded-xl transition-colors group border border-transparent hover:border-red-500/20">
                <LogOut size={20} className="group-hover:-translate-x-1 transition-transform"/>
                <span className="ml-4 text-xs font-bold uppercase tracking-wider">Déconnexion</span>
            </button>
        </div>
      </aside>

      {/* 2. CONTENU PRINCIPAL */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Ambient Blue Glow */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-blue-900/10 blur-[120px] pointer-events-none z-0"></div>

        {/* Header */}
        <header className="h-24 px-6 lg:px-10 border-b border-white/5 flex items-center justify-between bg-[#050505]/80 backdrop-blur-md sticky top-0 z-40">
            <div className="flex items-center gap-4 relative z-10">
                <button 
                    onClick={() => setIsMobileSidebarOpen(true)}
                    className="lg:hidden p-2 -ml-2 text-white/50 hover:text-white hover:bg-white/5 rounded-lg"
                >
                    <Menu size={24} />
                </button>
                
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        <p className="text-blue-400 text-[10px] uppercase tracking-widest font-bold">
                            {activeTab === 'dashboard' ? 'Système Central' : 
                            activeTab === 'support' ? 'Canal Chiffré' : 
                            'Module Actif'}
                        </p>
                    </div>
                    <h1 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white">
                        {activeTab === 'dashboard' && 'Tableau de Bord'}
                        {activeTab === 'projects' && 'Suivi de Mission'}
                        {activeTab === 'calendar' && 'Agenda Stratégique'}
                        {activeTab === 'docs' && 'Base Documentaire'}
                        {activeTab === 'support' && 'Signal Prioritaire'}
                    </h1>
                </div>
            </div>

            <div className="flex items-center gap-6 relative z-10">
                <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-[#0A0A0A] rounded-full border border-white/10 shadow-sm">
                    <div className="relative">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 relative z-10"></div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 absolute inset-0 animate-ping opacity-75"></div>
                    </div>
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Réseau Sécurisé</span>
                </div>
                <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full border border-blue-400/30 shadow-[0_0_15px_rgba(37,99,235,0.3)] ring-2 ring-black"></div>
            </div>
        </header>

        {/* Zone de Contenu Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-10 relative z-10 custom-scrollbar">
            
            {/* VUE : DASHBOARD (DEFAULT) */}
            {activeTab === 'dashboard' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-500">
                    {/* KPI Cards */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <RevealWrapper className="md:col-span-3 p-8 bg-gradient-to-r from-blue-900/10 to-[#0A0A0A] border border-blue-500/20 rounded-2xl relative overflow-hidden group" themeColor="#3B82F6">
                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Mission: Transformation Digitale</h3>
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase rounded-full">En Cours</span>
                                        <span className="px-3 py-1 bg-white/5 border border-white/5 text-white/40 text-[10px] font-bold uppercase rounded-full">Phase 2/4</span>
                                    </div>
                                </div>
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 border border-blue-500/20">
                                    <Activity size={24} />
                                </div>
                            </div>
                            <div className="relative z-10">
                                <div className="flex justify-between text-xs text-blue-200 mb-2 font-bold uppercase tracking-wider">
                                    <span>Progression Globale</span>
                                    <span className="text-blue-400">65%</span>
                                </div>
                                <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden border border-white/5">
                                    <div className="h-full bg-blue-600 w-[65%] shadow-[0_0_20px_rgba(37,99,235,0.6)] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                                    </div>
                                </div>
                            </div>
                        </RevealWrapper>
                        
                        {/* Mini Stats */}
                        <RevealWrapper className="p-6 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col justify-center items-center text-center group hover:border-blue-500/30 transition-all hover:-translate-y-1" themeColor="#3B82F6">
                            <span className="text-4xl font-display font-bold text-white mb-1 group-hover:text-blue-500 transition-colors">12</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Jours Restants</span>
                        </RevealWrapper>
                        <RevealWrapper className="p-6 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col justify-center items-center text-center group hover:border-blue-500/30 transition-all hover:-translate-y-1" themeColor="#3B82F6">
                            <span className="text-4xl font-display font-bold text-white mb-1 group-hover:text-blue-500 transition-colors">4/6</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Livrables Validés</span>
                        </RevealWrapper>
                        <RevealWrapper className="p-6 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col justify-center items-center text-center group hover:border-blue-500/30 transition-all hover:-translate-y-1" themeColor="#3B82F6">
                            <Shield size={32} className="text-emerald-500 mb-3" />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Statut : Sécurisé</span>
                        </RevealWrapper>
                    </div>

                    {/* Quick Calendar */}
                    <RevealWrapper className="lg:col-span-4 p-8 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col" themeColor="#3B82F6">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="font-bold uppercase text-xs flex items-center gap-2 text-white/60 tracking-widest">
                                <CalendarDays size={14} className="text-blue-500" /> Prochains Jalons
                            </h3>
                            <button className="text-[10px] uppercase font-bold text-blue-500 hover:text-white transition-colors">Voir Tout</button>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex gap-5 items-center p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 group hover:border-blue-500/30 transition-colors">
                                <div className="text-center bg-[#050505] border border-blue-500/20 text-blue-500 rounded-lg p-2.5 min-w-[55px]">
                                    <span className="block text-xl font-bold leading-none mb-1">12</span>
                                    <span className="block text-[9px] font-bold uppercase tracking-wider text-white/50">Jan</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Comité Stratégique</h4>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        <span className="text-[10px] text-white/40 uppercase font-bold">14:00 • Salle A</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-white/20 transition-colors opacity-60 hover:opacity-100">
                                <div className="text-center bg-[#050505] border border-white/10 text-white/60 rounded-lg p-2.5 min-w-[55px]">
                                    <span className="block text-xl font-bold leading-none mb-1">24</span>
                                    <span className="block text-[9px] font-bold uppercase tracking-wider text-white/30">Jan</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-1">Remise Audit</h4>
                                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-wide">Livrable Final</span>
                                </div>
                            </div>
                        </div>
                    </RevealWrapper>

                    {/* Activités */}
                    <RevealWrapper className="lg:col-span-8 p-8 bg-[#0A0A0A] border border-white/5 rounded-2xl" themeColor="#3B82F6">
                        <div className="flex items-center justify-between mb-8">
                             <h3 className="font-bold uppercase text-xs flex items-center gap-2 text-white/60 tracking-widest">
                                <TrendingUp size={14} className="text-blue-500" /> Flux d'Activité
                            </h3>
                            <div className="h-px flex-1 bg-white/5 mx-6"></div>
                        </div>
                       
                        <div className="space-y-2">
                            {[
                                { label: "Validation Document", desc: "Contrat Cadre validé par Juridique", time: "10:42", color: "emerald" },
                                { label: "Nouvelle Version", desc: "Rapport Audit v2.4 disponible", time: "Hier", color: "blue" },
                                { label: "Signalement", desc: "Ticket #402 ouvert (Critique)", time: "12 Jan", color: "red" },
                            ].map((act, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-[#0F0F0F] hover:bg-[#141414] rounded-xl border border-white/5 group transition-colors">
                                    <div className="flex items-center gap-5">
                                        <div className={`w-2 h-2 rounded-full bg-${act.color}-500 shadow-[0_0_10px_currentColor] opacity-80`}></div>
                                        <div>
                                            <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{act.label}</h4>
                                            <p className="text-xs text-white/40">{act.desc}</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-white/20 font-mono font-bold">{act.time}</span>
                                </div>
                            ))}
                        </div>
                    </RevealWrapper>

                    {/* Docs Rapides */}
                    <RevealWrapper className="lg:col-span-4 p-8 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col" themeColor="#3B82F6">
                         <h3 className="font-bold uppercase text-xs flex items-center gap-2 text-white/60 tracking-widest mb-8">
                            <FolderOpen size={14} className="text-blue-500" /> Fichiers Récents
                        </h3>
                        <div className="space-y-3 flex-1">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl cursor-pointer group transition-colors border border-transparent hover:border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg">
                                             <FileText size={16} />
                                        </div>
                                        <span className="text-xs font-bold text-white/70 group-hover:text-white transition-colors">Audit_Q4_Final.pdf</span>
                                    </div>
                                    <Download size={14} className="opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity" />
                                </div>
                            ))}
                        </div>
                         <button onClick={() => setActiveTab('docs')} className="mt-6 w-full py-4 bg-[#0F0F0F] border border-white/10 text-white/60 text-xs font-bold uppercase rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                            Accéder à la Base
                        </button>
                    </RevealWrapper>
                </div>
            )}

            {/* VUES SECONDAIRES */}
            {activeTab === 'projects' && <ProjectsView />}
            {activeTab === 'calendar' && <CalendarView />}
            {activeTab === 'docs' && <DocsView />}
            {activeTab === 'support' && <SupportView />}

        </div>
      </main>
    </div>
  );
};

export default ClientDashboard;