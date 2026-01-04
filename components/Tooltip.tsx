import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative flex flex-col items-center justify-center w-full"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: -8, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-full mb-1 w-56 p-4 bg-[#E5E5E5] text-black text-[10px] font-bold uppercase tracking-wide leading-relaxed rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-50 pointer-events-none text-center border border-white"
          >
            {content}
            {/* Arrow down */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#E5E5E5]"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};