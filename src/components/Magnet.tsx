import {
  useState,
  useRef,
  useEffect,
  type ReactNode,
  type CSSProperties,
} from 'react';

interface MagnetProps {
  children: ReactNode;
  /** Distance (px) from the element edges at which the magnet activates. */
  padding?: number;
  /** Higher = weaker pull (offset is divided by this factor). */
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  wrapperClassName?: string;
}

/**
 * Mouse-following magnetic hover effect. While the cursor is within `padding`
 * of the element's edges, the element translates toward the cursor (scaled down
 * by `strength`). It eases back to center once the cursor leaves the field.
 */
export default function Magnet({
  children,
  padding = 100,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
  wrapperClassName,
}: MagnetProps) {
  const magnetRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = magnetRef.current;
      if (!el) return;

      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        setPosition({
          x: (e.clientX - centerX) / strength,
          y: (e.clientY - centerY) / strength,
        });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength]);

  const style: CSSProperties = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: isActive ? activeTransition : inactiveTransition,
    willChange: 'transform',
  };

  return (
    <div ref={magnetRef} className={wrapperClassName}>
      <div className={className} style={style}>
        {children}
      </div>
    </div>
  );
}
