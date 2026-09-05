interface LiveProjectButtonProps {
  label?: string;
  href: string;
  className?: string;
}

/**
 * Ghost / outline pill button used on project cards, links out to a repo.
 */
export default function LiveProjectButton({
  label = 'View Repo',
  href,
  className = '',
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base px-8 py-3 sm:px-10 sm:py-3.5 transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`}
    >
      {label}
    </a>
  );
}
