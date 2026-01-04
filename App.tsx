import React, { useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CustomCursor } from './components/CustomCursor';
import { CursorProvider, useCursor } from './context/CursorContext';
import { BentoGrid } from './components/BentoGrid';
import { SectorExplorer } from './components/SectorExplorer';
import { Approche } from './components/Approche';
import { Governance } from './components/Governance';
import { Academy } from './components/Academy';
import { Vision } from './components/Vision';
import { ContactTerminal } from './components/ContactTerminal';
import { VoiceAgent } from './components/VoiceAgent';
import { ClientLogin } from './components/ClientLogin';
import ClientDashboard from './components/ClientDashboard';
import { Footer } from './components/Footer';
import PolesPage from './components/PolesPage';
import ApproachPage from './components/ApproachPage';
import VisionPage from './components/VisionPage';
import ContactPage from './components/ContactPage';

// Global spotlight effect - Responsive & Context Aware
const GlobalSpotlight = ({ defaultColor }: { defaultColor: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { hoverColor, isHovering } = useCursor();

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Couleur dynamique : Si hoverColor existe, on l'utilise, sinon defaultColor (contexte)
  const activeColor = hoverColor || defaultColor;
  
  // Opacité dynamique
  const opacity = isHovering ? 0.35 : 0.03;

  // Surface réduite pour un effet plus précis
  const darkGradient = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, ${activeColor}, transparent 40%)`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      animate={{ opacity: opacity }}
      style={{
        background: darkGradient,
      }}
    />
  );
};

type ViewType = 'home' | 'login' | 'dashboard' | 'poles' | 'approach' | 'vision' | 'contact';

const MainLayout = () => {
  const [view, setView] = useState<ViewType>('home');
  const [contactState, setContactState] = useState<{ isOpen: boolean; mode: 'general' | 'audit' }>({
    isOpen: false,
    mode: 'general',
  });

  // --- 1. ROUTER & SESSION MANAGER ---
  useEffect(() => {
    // Initial Load
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view') as ViewType;
    let session = null;
    
    try {
        session = localStorage.getItem('moweh_session');
    } catch (e) {
        console.warn("Local storage access restricted");
    }
    
    if (viewParam === 'dashboard' && !session) {
        setView('login');
    } else if (viewParam && ['home', 'login', 'dashboard', 'poles', 'approach', 'vision', 'contact'].includes(viewParam)) {
        setView(viewParam);
    }

    // Browser Back Button Handler
    const handlePopState = () => {
        const currentParams = new URLSearchParams(window.location.search);
        const currentView = (currentParams.get('view') as ViewType) || 'home';
        setView(currentView);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // URL Sync
  useEffect(() => {
    const syncUrl = () => {
        // Prevent pushState in environments where URL manipulation is restricted (blob:, file:, sandboxed iframes)
        const isRestrictedEnv = window.location.protocol === 'file:' || 
                               window.location.href.startsWith('blob:') || 
                               window.location.origin === 'null';
        
        if (isRestrictedEnv) return;

        try {
            const url = new URL(window.location.href);
            if (view === 'home') {
                url.searchParams.delete('view');
            } else {
                url.searchParams.set('view', view);
            }
            // Use history API safely
            window.history.pushState({}, '', url.toString());
        } catch (e) {
            // Silently fail if pushState is blocked to avoid console noise
            // Navigation will still work via React state
        }
    };

    syncUrl();
    
    // HARD SCROLL RESET : Essentiel pour éviter de charger une page en bas
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);


  // --- 2. ACTIONS ---
  const openContact = (mode: 'general' | 'audit' = 'general') => {
    setContactState({ isOpen: true, mode });
  };

  const closeContact = () => {
    setContactState(prev => ({ ...prev, isOpen: false }));
  };

  const handleNavigation = (target: string) => {
    setView(target as ViewType);
  };

  const handleLoginSuccess = () => {
      try {
        localStorage.setItem('moweh_session', 'active');
      } catch (e) {
        console.warn("Session storage failed");
      }
      setView('dashboard');
  };

  const handleLogout = () => {
      try {
        localStorage.removeItem('moweh_session');
      } catch (e) {
        console.warn("Session clear failed");
      }
      setView('home');
  };

  // --- 3. LAYOUT LOGIC (Ultra Think V2) ---
  // Navbar : Uniquement sur Home (les autres pages ont leur propre header contextuel)
  const showNavbar = view === 'home';
  
  // Footer : Sur Home et les pages de contenu (Pôles, Vision, Approche). 
  // Masqué sur les "Terminaux" (Login, Dashboard, Contact) pour l'immersion.
  const showFooter = ['home', 'poles', 'approach', 'vision'].includes(view);

  // Theme : Bleu pour Dashboard, Jaune pour le reste
  const themeColor = view === 'dashboard' ? '#3B82F6' : '#EAB308';

  const renderContent = () => {
    switch (view) {
      case 'dashboard':
        return <ClientDashboard onLogout={handleLogout} />;
      case 'login':
        return <ClientLogin onBack={() => setView('home')} onLoginSuccess={handleLoginSuccess} />;
      case 'poles':
        return <PolesPage onBack={() => setView('home')} />;
      case 'approach':
        return <ApproachPage onBack={() => setView('home')} />;
      case 'vision':
        return <VisionPage onBack={() => setView('home')} onNavigate={handleNavigation} />;
      case 'contact':
        return <ContactPage onBack={() => setView('home')} />;
      default:
        return (
          <main className="relative pt-0">
              <div onClick={() => openContact('general')}>
                 <Hero /> 
              </div>
              <Approche onContactClick={() => openContact('audit')} />
              <BentoGrid onContactClick={() => openContact('general')} />
              <SectorExplorer onContactClick={() => openContact('general')} />
              <Governance />
              <Academy />
              <Vision onContactClick={() => setView('contact')} />
          </main>
        );
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-[#E5E5E5] selection:bg-moweh-accent1 selection:text-black transition-colors duration-500">
        <CustomCursor defaultColor={themeColor} />
        
        <ContactTerminal 
            isOpen={contactState.isOpen} 
            onClose={closeContact} 
            mode={contactState.mode} 
        />
        
        {/* Voice Agent : Partout sauf Dashboard/Login */}
        {view !== 'dashboard' && view !== 'login' && <VoiceAgent />}

        <div className="fixed inset-0 z-0 bg-grid-pattern opacity-20 pointer-events-none mix-blend-normal" />
        <GlobalSpotlight defaultColor={themeColor} />
        
        {showNavbar && (
            <Navbar 
                onLoginClick={() => setView('login')}
                onContactClick={() => setView('contact')}
                onNavigate={handleNavigation}
                currentView={view}
            />
        )}

        {renderContent()}

        {showFooter && <Footer />}
    </div>
  );
}

const App = () => {
  return (
    <CursorProvider>
      <MainLayout />
    </CursorProvider>
  );
};

export default App;