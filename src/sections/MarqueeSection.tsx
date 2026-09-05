import { useEffect, useRef, useState } from 'react';
import { marqueePlaceholders } from '../assets/placeholders';

/**
 * Two rows of image tiles that slide horizontally as the page scrolls. Row 1
 * drifts right, row 2 drifts left. The offset is derived from how far the
 * section sits inside the viewport, so movement tracks scroll position.
 *
 * NOTE: tiles are temporary generated placeholders (see assets/placeholders.ts).
 * Swap `marqueePlaceholders` for real screenshot imports when available.
 */
export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const row1 = marqueePlaceholders.slice(0, 11);
  const row2 = marqueePlaceholders.slice(11);
  // Triple each row so the strip stays populated as it translates.
  const row1Tiles = [...row1, ...row1, ...row1];
  const row2Tiles = [...row2, ...row2, ...row2];

  const row1Transform = `translateX(${offset - 200}px)`;
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: row1Transform, willChange: 'transform' }}
        >
          {row1Tiles.map((src, i) => (
            <Tile key={`r1-${i}`} src={src} index={i} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: row2Transform, willChange: 'transform' }}
        >
          {row2Tiles.map((src, i) => (
            <Tile key={`r2-${i}`} src={src} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({ src, index }: { src: string; index: number }) {
  return (
    <img
      src={src}
      alt={`Project preview ${index + 1}`}
      loading="lazy"
      className="rounded-2xl object-cover flex-shrink-0"
      style={{ width: 420, height: 270 }}
    />
  );
}
