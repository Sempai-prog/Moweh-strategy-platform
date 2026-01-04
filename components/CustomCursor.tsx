import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, Variants } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

interface CustomCursorProps {
  defaultColor?: string;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ defaultColor = '#EAB308' }) => {
  const { cursorVariant, setCursorVariant, hoverColor } = useCursor();
  
  // 1. Physique / Vélocité
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // SAFETY CHECK: Ensure target exists and has the closest method (avoids crash on document/window hover)
      const target = e.target as HTMLElement;
      if (!target || typeof target.closest !== 'function') {
        setCursorVariant('default');
        return;
      }

      // Détection des éléments interactifs
      const isLink = target.closest('a');
      const isButton = target.closest('button');
      const isInput = target.closest('input') || target.closest('textarea') || target.closest('select');
      const isClickable = target.closest('.cursor-pointer') || target.closest('[role="button"]') || target.closest('.clickable');
      
      // Détection de texte
      const isTextTag = target.matches('p, span, h1, h2, h3, h4, h5, h6, li, td, th, caption, label, blockquote');
      const selection = window.getSelection();
      // Only treat as text if not clickable
      if (isLink || isButton || isClickable) {
        setCursorVariant('button');
      } else if (isInput || (isTextTag && !isClickable)) {
        setCursorVariant('text');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY, setCursorVariant]);

  // Couleur dynamique : Priorité au survol, sinon couleur par défaut (Dashboard vs Site)
  const currentColor = hoverColor || defaultColor;

  // 2. Variants avec couleur dynamique
  const ringVariants: Variants = {
    default: {
      height: 24,
      width: 24,
      borderColor: currentColor,
      backgroundColor: 'transparent',
      borderWidth: 1,
      opacity: 0.6,
      borderRadius: '100%',
    },
    button: {
      height: 48,
      width: 48,
      borderColor: currentColor,
      backgroundColor: 'transparent',
      borderWidth: 1.5,
      opacity: 1,
      borderRadius: '100%',
    },
    text: {
      height: 24,
      width: 4,
      borderColor: currentColor,
      backgroundColor: currentColor,
      borderWidth: 0,
      opacity: 0.8,
      borderRadius: 4, // Forme de barre verticale
    }
  };

  const dotVariants: Variants = {
    default: { scale: 1, opacity: 1, backgroundColor: '#ffffff' },
    button: { scale: 0, opacity: 0 }, // Le point disparaît sur les boutons
    text: { scale: 0, opacity: 0 }    // Le point disparaît sur le texte (remplacé par la barre)
  };

  return (
    <>
      {/* L'Anneau (Ring) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: '-50%',
          y: '-50%',
        }}
        variants={ringVariants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      
      {/* Le Point Central (Dot) */}
      <motion.div 
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-1 w-1 rounded-full bg-white"
        style={{
            x: mouseX, 
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%'
        }}
        variants={dotVariants}
        animate={cursorVariant}
      />
    </>
  );
};