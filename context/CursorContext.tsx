import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CursorVariant, CursorContextType } from '../types';

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');
  const [hoverColor, setHoverColor] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <CursorContext.Provider value={{ 
        cursorVariant, 
        setCursorVariant,
        hoverColor,
        setHoverColor,
        isHovering,
        setIsHovering
    }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};