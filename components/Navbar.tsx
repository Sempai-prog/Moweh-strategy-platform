import React, { useState } from 'react';
import { RevealWrapper } from './RevealWrapper';
import { Menu, User, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onLoginClick: () => void;
  onContactClick: () => void;
  onNavigate: (view: string) => void;
  currentView: string;
}

// Inline StaggeredText since it's small and avoids dependency loop
const NavStaggeredText = ({ text, isActive }: { text: string, isActive: boolean }) => (
  <div className="relative overflow-hidden flex flex-col">
    <motion.span 
        variants={{
            rest: { y: 0 },
            hover: { y: "-100%" }
        }}
        transition={{ duration: 0.4, ease: "circOut" }}
        className="block"
    >
        {text}
    </motion.span>
    <motion.span 
        variants={{
            rest: { y: "100%" },
            hover: { y: 0 }
        }}
        transition={{ duration: 0.4, ease: "circOut" }}
        className="absolute inset-0 block text-[#EAB308]"
    >
        {text}
    </motion.span>
  </div>
);

export const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onContactClick, onNavigate, currentView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Nos Pôles', href: '#poles', id: 'poles' },
    { name: 'Approche', href: '#approche', id: 'approche' },
    { name: 'Vision', href: '#vision', id: 'vision' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    
    if (id === 'poles' || id === 'nos-poles') { onNavigate('poles'); setIsMobileMenuOpen(false); return; }
    if (id === 'approche') { onNavigate('approach'); setIsMobileMenuOpen(false); return; }
    if (id === 'vision') { onNavigate('vision'); setIsMobileMenuOpen(false); return; }
    if (id === 'contact') { onNavigate('contact'); setIsMobileMenuOpen(false); return; }

    onNavigate('home');
    setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/5 bg-[#050505]/80 px-6 py-4 backdrop-blur-xl md:px-12 transition-all duration-500">
      
      {/* Brand / Logo */}
      <RevealWrapper className="p-2 rounded-lg" radius={100}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 group">
          <div className="grid grid-cols-2 gap-0.5 rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out">
            <div className="h-2 w-2 bg-moweh-accent1" />
            <div className="h-2 w-2 bg-moweh-accent2" />
            <div className="h-2 w-2 bg-sector-digital" />
            <div className="h-2 w-2 bg-moweh-accent4" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-white leading-none">
              MOWEH
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-moweh-accent1 leading-none mt-0.5">
              Strategy
            </span>
          </div>
        </a>
      </RevealWrapper>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-1 lg:flex">
        <div className="flex items-center gap-1 mr-8 bg-white/5 rounded-full px-2 py-1 border border-white/5">
            {navLinks.map((link) => {
                let isActive = false;
                if (link.id === 'poles' && currentView === 'poles') isActive = true;
                if (link.id === 'approche' && currentView === 'approach') isActive = true;
                if (link.id === 'vision' && currentView === 'vision') isActive = true;
                if (link.id === 'contact' && currentView === 'contact') isActive = true;
                
                return (
                    <RevealWrapper key={link.name} className="rounded-full" themeColor={isActive ? '#EAB308' : undefined}>
                        <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.id)}
                        className={`block px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                            isActive ? 'text-white bg-white/5' : 'text-neutral-400 hover:text-white'
                        }`}
                        >
                            <NavStaggeredText text={link.name} isActive={isActive} />
                        </a>
                    </RevealWrapper>
                );
            })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 border-l border-white/10 pl-8">
            {/* Client Area */}
            <RevealWrapper className="border border-white/10 rounded-sm overflow-hidden">
                <button 
                  onClick={onLoginClick}
                  className="flex items-center gap-2 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-all hover:bg-moweh-accent1 hover:text-black group"
                >
                <User className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                <span>Espace Client</span>
                </button>
            </RevealWrapper>
        </div>
      </div>

      {/* Mobile Menu Trigger */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/5">
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505] pt-24 px-6 md:hidden">
            <div className="flex flex-col gap-6">
                {navLinks.map((link) => {
                    let isActive = false;
                    if (link.id === 'poles' && currentView === 'poles') isActive = true;
                    if (link.id === 'approche' && currentView === 'approach') isActive = true;
                    if (link.id === 'vision' && currentView === 'vision') isActive = true;
                    if (link.id === 'contact' && currentView === 'contact') isActive = true;

                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.id)}
                            className={`text-2xl font-display font-bold uppercase ${
                                isActive ? 'text-[#EAB308]' : 'text-white'
                            }`}
                        >
                            {link.name}
                        </a>
                    );
                })}
                <div className="h-px bg-white/10 my-4" />
                <button onClick={() => { onLoginClick(); setIsMobileMenuOpen(false); }} className="flex items-center gap-2 text-moweh-accent1 uppercase font-bold tracking-widest text-sm">
                    <User className="h-4 w-4" /> Espace Client
                </button>
            </div>
        </div>
    )}
    </>
  );
};