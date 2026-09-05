import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import portrait from '../assets/portrait-placeholder.svg';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#focus-areas' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: 'mailto:monumhashmi1@gmail.com' },
];

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      {/* Heading + bottom bar pushed to the lower part of the viewport */}
      <div className="mt-auto">
        <div className="overflow-hidden">
          <FadeIn
            as="h1"
            delay={0.15}
            y={40}
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5"
          >
            Hi, i&rsquo;m monum
          </FadeIn>
        </div>

        <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
          <FadeIn
            as="p"
            delay={0.35}
            y={20}
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            an ai engineer &amp; researcher building llm systems, agents, and
            computer vision that hold up in the real world
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton label="Contact Me" />
          </FadeIn>
        </div>
      </div>

      {/* Magnetic hero portrait, centered over the heading */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={portrait}
              alt="Monum Hashmi"
              className="w-full h-auto select-none pointer-events-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
