import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, Send, Lock, Loader2, CheckCircle2 } from 'lucide-react';

interface ContactTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'general' | 'audit';
}

export const ContactTerminal: React.FC<ContactTerminalProps> = ({ isOpen, onClose, mode }) => {
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [logs, setLogs] = useState<string[]>([]);
  const timeoutsRef = useRef<number[]>([]);

  // Theme configuration based on mode
  const theme = mode === 'audit' ? {
    color: 'text-red-500',
    bg: 'bg-red-500',
    border: 'border-red-500',
    glow: 'shadow-[0_0_30px_rgba(239,68,68,0.2)]',
    title: 'Urgence / Crisis Management'
  } : {
    color: 'text-moweh-accent1',
    bg: 'bg-moweh-accent1',
    border: 'border-moweh-accent1',
    glow: 'shadow-[0_0_30px_rgba(234,179,8,0.2)]',
    title: 'Demande d\'Intervention'
  };

  // Cleanup timeouts on unmount or close
  useEffect(() => {
    if (!isOpen) {
        timeoutsRef.current.forEach(window.clearTimeout);
        timeoutsRef.current = [];
    }
    
    return () => {
        timeoutsRef.current.forEach(window.clearTimeout);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
        setStep('form');
        setLogs([]);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    
    // Simulate technical handshake
    const sequence = [
      "Initialising secure handshake...",
      "Generating RSA-4096 key pair...",
      "Encrypting payload...",
      "Connecting to secure server (TLS 1.3)...",
      "Payload delivered."
    ];

    sequence.forEach((log, index) => {
      const id = window.setTimeout(() => {
        setLogs(prev => [...prev, log]);
      }, index * 600);
      timeoutsRef.current.push(id);
    });

    const finalId = window.setTimeout(() => {
      setStep('success');
    }, sequence.length * 600 + 500);
    timeoutsRef.current.push(finalId);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`relative w-full max-w-lg overflow-hidden rounded-xl border ${theme.border} bg-[#0A0A0A] ${theme.glow}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4">
              <div className="flex items-center gap-3">
                {mode === 'audit' ? <ShieldAlert className="h-5 w-5 text-red-500" /> : <Lock className="h-5 w-5 text-moweh-accent1" />}
                <span className={`font-display font-bold uppercase tracking-wider ${theme.color}`}>
                  {theme.title}
                </span>
              </div>
              <button onClick={onClose} className="text-white/50 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              {step === 'form' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-neutral-500">
                        Secteur Concerné
                      </label>
                      <select className="w-full rounded-none border-b border-white/20 bg-transparent py-2 text-white outline-none focus:border-white focus:ring-0">
                        <option className="bg-neutral-900">Finance & Banque</option>
                        <option className="bg-neutral-900">Industrie & Défense</option>
                        <option className="bg-neutral-900">Secteur Public</option>
                        <option className="bg-neutral-900">Autre / Confidentiel</option>
                      </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-neutral-500">
                            Email Professionnel
                        </label>
                        <input 
                            type="email" 
                            required 
                            className="w-full rounded-none border-b border-white/20 bg-transparent py-2 text-white outline-none focus:border-white"
                            placeholder="dir@company.com"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-neutral-500">
                            Canal de réponse souhaité
                        </label>
                        <div className="flex gap-4">
                            {['Email Chiffré', 'Signal', 'Meeting Physique'].map((opt) => (
                                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="contact" className="accent-moweh-accent1" defaultChecked={opt === 'Email Chiffré'} />
                                    <span className="text-sm text-neutral-300">{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`group flex w-full items-center justify-center gap-2 rounded-lg ${theme.bg} py-4 font-bold uppercase tracking-widest text-black transition-transform hover:scale-[1.02]`}
                  >
                    <span>Initialiser la connexion</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}

              {step === 'processing' && (
                <div className="font-mono text-sm">
                  <div className="mb-6 flex justify-center">
                    <Loader2 className={`h-12 w-12 animate-spin ${theme.color}`} />
                  </div>
                  <div className="space-y-2 rounded-lg bg-black/50 p-4 border border-white/5">
                    {logs.map((log, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-green-500/80"
                      >
                        {`> ${log}`}
                      </motion.div>
                    ))}
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="h-4 w-2 bg-green-500"
                    />
                  </div>
                </div>
              )}

              {step === 'success' && (
                <div className="text-center py-8">
                    <motion.div 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }}
                        className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/5 ${theme.color}`}
                    >
                        <CheckCircle2 className="h-10 w-10" />
                    </motion.div>
                    <h3 className="mb-2 text-2xl font-bold text-white">Transmission Réussie</h3>
                    <p className="mb-6 text-neutral-400">Votre demande a été routée vers notre cellule d'analyse.</p>
                    
                    <div className="inline-block rounded border border-white/10 bg-white/5 px-6 py-3">
                        <span className="block text-[10px] uppercase text-neutral-500">Case ID</span>
                        <span className="font-mono text-xl font-bold text-white tracking-widest">
                            CASE-#{Math.floor(Math.random() * 9000) + 1000}X
                        </span>
                    </div>
                    
                    <button 
                        onClick={onClose}
                        className="mt-8 block w-full text-sm text-neutral-500 hover:text-white"
                    >
                        Fermer le terminal
                    </button>
                </div>
              )}
            </div>
            
            {/* Footer decoration */}
            <div className={`h-1 w-full ${theme.bg}`} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};