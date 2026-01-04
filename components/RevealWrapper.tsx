import React from 'react';
import { useCursor } from '../context/CursorContext';
import { motion } from 'framer-motion';

interface RevealWrapperProps {
  children: React.ReactNode;
  themeColor?: string; // Ex: #EAB308
  className?: string;
  onClick?: () => void;
  active?: boolean;
  radius?: number;
}

export const RevealWrapper: React.FC<RevealWrapperProps> = ({ 
  children, 
  themeColor = '#EAB308', 
  className = "", 
  onClick,
  active = false,
  radius
}) => {
  const { setHoverColor, setIsHovering } = useCursor();

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={() => {
        setHoverColor(themeColor);
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setHoverColor(null);
        setIsHovering(false);
      }}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      animate={active ? "hover" : "rest"}
      variants={{
        rest: { scale: 1, y: 0 },
        hover: { scale: 1.01, y: -4 },
        tap: { scale: 0.98 }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
      className={`relative group isolate
        bg-[#0A0A0A] 
        ${onClick ? 'cursor-pointer' : ''}
        ${className}`}
      
      style={{ 
        '--reveal-color': themeColor,
        borderColor: active ? themeColor : 'rgba(255,255,255,0.05)' 
      } as React.CSSProperties}
    >
      {/* 1. Base Border (Static) */}
      <div 
        className="absolute inset-0 border border-white/5 pointer-events-none z-10 transition-colors duration-500"
        style={{ borderRadius: 'inherit' }}
      />

      {/* 2. Active Glow Border (Animated Physics) */}
      <motion.div 
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 }
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 border border-[var(--reveal-color)] pointer-events-none z-10 opacity-0" 
        style={{ borderRadius: 'inherit' }}
      />
      
      {/* 3. Subtle Inner Glow Gradient */}
      <motion.div
         variants={{
            rest: { opacity: 0 },
            hover: { opacity: 0.1 }
         }}
         transition={{ duration: 0.4 }}
         className="absolute inset-0 bg-gradient-to-tr from-[var(--reveal-color)] via-transparent to-transparent z-0 pointer-events-none"
         style={{ borderRadius: 'inherit' }}
      />

      {/* Contenu */}
      <div className="relative z-0 h-full">
        {children}
      </div>
    </motion.div>
  );
};