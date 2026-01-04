import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, X, MoreHorizontal } from 'lucide-react';

export const VoiceAgent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-72 rounded-2xl border border-white/10 bg-neutral-900/90 p-4 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-moweh-accent1">
                Moweh Assistant
              </span>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4 text-white/50 hover:text-white" />
              </button>
            </div>
            
            <div className="flex h-24 items-center justify-center gap-1 rounded-xl bg-black/50 border border-white/5">
                {/* Sound Wave Animation */}
                {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                        key={i}
                        className="w-1 bg-moweh-accent1 rounded-full"
                        animate={{ height: [10, 25 + Math.random() * 20, 10] }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 0.5 + Math.random() * 0.5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
            <p className="mt-3 text-center text-sm text-neutral-400">
                Listening... (Demo Mode)
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/10 shadow-lg transition-colors ${
            isOpen ? 'bg-moweh-accent1 text-black' : 'bg-neutral-900 text-white hover:bg-neutral-800'
        }`}
      >
        {isOpen ? <Mic className="h-6 w-6" /> : <MoreHorizontal className="h-6 w-6" />}
      </motion.button>
    </div>
  );
};