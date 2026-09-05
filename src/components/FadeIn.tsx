import { motion } from 'framer-motion';
import type { ReactNode, ElementType, CSSProperties } from 'react';

interface FadeInProps {
  children: ReactNode;
  /** Delay before the animation starts (seconds). */
  delay?: number;
  /** Animation duration (seconds). */
  duration?: number;
  /** Initial x offset (px). */
  x?: number;
  /** Initial y offset (px). */
  y?: number;
  /** The element type to render. Defaults to a div. */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

/**
 * Framer Motion wrapper that fades + slides its children into view once, the
 * first time they enter the viewport. Uses motion.create() so any element type
 * (section, h1, p, li, ...) can be animated.
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  style,
}: FadeInProps) {
  const MotionTag = motion.create(as as ElementType);

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  );
}
