export type CursorVariant = 'default' | 'button' | 'text';

export interface CursorContextType {
  cursorVariant: CursorVariant;
  setCursorVariant: (variant: CursorVariant) => void;
  hoverColor: string | null;
  setHoverColor: (color: string | null) => void;
  isHovering: boolean;
  setIsHovering: (isHovering: boolean) => void;
}