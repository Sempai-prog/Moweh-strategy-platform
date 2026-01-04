import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentPage: string;
  onNavigateHome: () => void;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, onNavigateHome, className = "" }) => {
  return (
    <nav className={`flex items-center text-[10px] font-bold uppercase tracking-widest text-white/40 ${className}`}>
      <button 
        onClick={onNavigateHome} 
        className="flex items-center gap-1.5 hover:text-[#EAB308] transition-colors group"
      >
        <Home size={12} className="group-hover:text-[#EAB308] transition-colors" />
        <span>Accueil</span>
      </button>
      
      <ChevronRight size={12} className="mx-2 text-white/20" />
      
      <span className="text-[#EAB308]">{currentPage}</span>
    </nav>
  );
};