import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowLeft, Loader2 } from 'lucide-react';
import { RevealWrapper } from './RevealWrapper';

interface ClientLoginProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

export const ClientLogin: React.FC<ClientLoginProps> = ({ onBack, onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call and success
    timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        onLoginSuccess();
    }, 1500);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10" />
        
        <button 
            onClick={onBack}
            className="absolute top-8 left-8 z-20 flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors"
        >
            <ArrowLeft className="h-4 w-4" />
            <span>Retour site public</span>
        </button>

        <RevealWrapper className="relative z-10 w-full max-w-md" radius={300}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 p-8 backdrop-blur-xl md:p-12 shadow-2xl">
                
                {/* Scanner Effect */}
                <motion.div 
                    className="absolute left-0 right-0 h-[2px] bg-moweh-accent1/50 shadow-[0_0_20px_rgba(212,175,55,0.5)] z-0 pointer-events-none"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-moweh-accent1">
                        <Lock className="h-8 w-8" />
                    </div>

                    <h2 className="font-display mb-2 text-2xl font-bold text-white uppercase tracking-wide">
                        Secure Vault
                    </h2>
                    <p className="mb-8 text-sm text-neutral-500">
                        Accès réservé aux clients mandatés. <br/>Authentification 2FA requise.
                    </p>

                    <form onSubmit={handleLogin} className="w-full space-y-4">
                        <div className="text-left">
                            <label className="text-[10px] font-bold uppercase text-neutral-500">Identifiant Client</label>
                            <input 
                                type="text" 
                                className="mt-1 w-full rounded bg-black/50 border border-white/10 px-4 py-3 text-white focus:border-moweh-accent1 focus:outline-none transition-colors"
                                placeholder="ID-XXXX"
                                defaultValue="MOWEH-CLIENT-01"
                            />
                        </div>
                        <div className="text-left">
                            <label className="text-[10px] font-bold uppercase text-neutral-500">Clé Privée</label>
                            <input 
                                type="password" 
                                className="mt-1 w-full rounded bg-black/50 border border-white/10 px-4 py-3 text-white focus:border-moweh-accent1 focus:outline-none transition-colors"
                                placeholder="••••••••••••••"
                                defaultValue="password"
                            />
                        </div>

                        <button 
                            type="submit"
                            disabled={loading}
                            className="mt-6 w-full rounded bg-white py-3 font-bold uppercase text-black hover:bg-moweh-accent1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Accéder au dossier"}
                        </button>
                    </form>

                    <div className="mt-8 flex items-center gap-2 text-[10px] text-neutral-600 uppercase tracking-wider">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        Système Opérationnel • Chiffrement AES-256
                    </div>
                </div>
            </div>
        </RevealWrapper>
    </div>
  );
};