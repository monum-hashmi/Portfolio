import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import LiveProjectButton from '../components/LiveProjectButton';
import { placeholder } from '../assets/placeholders';

interface Project {
  number: string;
  name: string;
  category: string;
  repo: string;
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Groundline',
    category: 'Grounded Retrieval',
    repo: 'https://github.com/monum-hashmi/groundline',
    images: {
      col1Top: placeholder({ label: 'Groundline Review UI', sub: 'three-tier status — TEMP', from: '#241a2e' }),
      col1Bottom: placeholder({ label: 'Audit / Answers', sub: 'output view — TEMP', from: '#1a2430' }),
      col2: placeholder({ label: 'Grounding Pipeline', sub: 'architecture — TEMP', from: '#2e1a24', width: 420, height: 560 }),
    },
  },
  {
    number: '02',
    name: 'MSAFE-GC',
    category: 'Deepfake Forensics',
    repo: 'https://github.com/monum-hashmi/msafe-gc-deepfake-detection',
    images: {
      col1Top: placeholder({ label: 'Grad-CAM', sub: 'real vs fake — TEMP', from: '#1a2e28' }),
      col1Bottom: placeholder({ label: 'Accuracy / AUC', sub: 'results table — TEMP', from: '#2e2a1a' }),
      col2: placeholder({ label: 'Multi-Scale Fusion', sub: 'architecture — TEMP', from: '#241a2e', width: 420, height: 560 }),
    },
  },
  {
    number: '03',
    name: 'SecureIDS',
    category: 'LLM Security',
    repo: 'https://github.com/monum-hashmi/application-layer-intrusion-detection-system',
    images: {
      col1Top: placeholder({ label: 'Attack Dashboard', sub: 'real-time — TEMP', from: '#2e1a24' }),
      col1Bottom: placeholder({ label: 'Threat Breakdown', sub: 'by category — TEMP', from: '#1a2430' }),
      col2: placeholder({ label: 'System Architecture', sub: 'diagram — TEMP', from: '#1a2e28', width: 420, height: 560 }),
    },
  },
];

export default function ProjectsSection() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={container}
      id="projects"
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-20"
    >
      <h2
        className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-10 sm:mb-14 md:mb-16"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </h2>

      <div>
        {PROJECTS.map((project, i) => {
          const targetScale = 1 - (PROJECTS.length - 1 - i) * 0.03;
          const range: [number, number] = [i * (1 / PROJECTS.length), 1];
          return (
            <Card
              key={project.number}
              project={project}
              index={i}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

interface CardProps {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function Card({ project, index, progress, range, targetScale }: CardProps) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32">
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
      >
        {/* Top row: number + labels + repo button */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="hero-heading font-black leading-none flex-shrink-0"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#8A93A0] font-light uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <span
                className="text-[#D7E2EA] font-medium uppercase leading-none"
                style={{ fontSize: 'clamp(1.4rem, 3.5vw, 3rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton label="View Repo" href={project.repo} />
        </div>

        {/* Bottom row: two-column image grid */}
        <div className="flex gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6 md:mt-8">
          <div className="w-2/5 flex flex-col gap-3 sm:gap-4 md:gap-5">
            <img
              src={project.images.col1Top}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.images.col1Bottom}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="w-3/5">
            <img
              src={project.images.col2}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
