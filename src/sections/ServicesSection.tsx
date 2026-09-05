import FadeIn from '../components/FadeIn';

interface FocusArea {
  number: string;
  name: string;
  description: string;
}

const FOCUS_AREAS: FocusArea[] = [
  {
    number: '01',
    name: 'LLM & Agent Systems',
    description:
      'Multi-agent orchestration, RAG pipelines, and production automation workflows built with LangGraph, FastAPI, and ChromaDB for real client platforms.',
  },
  {
    number: '02',
    name: 'Computer Vision & Forensics ML',
    description:
      'Deepfake detection, violence detection, and surveillance systems — with an emphasis on compression robustness and explainability (Grad-CAM, interpretable-by-design models).',
  },
  {
    number: '03',
    name: 'Research & Publications',
    description:
      'Peer-reviewed and in-progress research spanning deepfake forensics, EEG-ECG affective computing, and AI governance — with a focus on honest, validity-aware evaluation over inflated claims.',
  },
  {
    number: '04',
    name: 'Security & Applied ML',
    description:
      'BERT-based intrusion detection for LLM-powered SaaS platforms, covering prompt injection, cross-tenant data leakage, and OWASP LLM Top 10 risks.',
  },
  {
    number: '05',
    name: 'AI Automation for Business',
    description:
      'End-to-end client automation — WhatsApp/Instagram bots, n8n pipelines, and web tooling — delivered as a freelance AI/ML engineer.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="focus-areas"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Focus Areas
      </h2>

      <div className="max-w-5xl mx-auto">
        {FOCUS_AREAS.map((area, i) => (
          <FadeIn
            key={area.number}
            delay={i * 0.1}
            y={30}
            className="flex items-start gap-5 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
            style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }}
          >
            <span
              className="text-[#0C0C0C] font-black leading-none flex-shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {area.number}
            </span>
            <div className="flex flex-col gap-3 md:gap-4 pt-1 md:pt-2">
              <h3
                className="text-[#0C0C0C] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {area.name}
              </h3>
              <p
                className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
              >
                {area.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
