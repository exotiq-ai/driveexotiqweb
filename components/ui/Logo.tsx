import Link from 'next/link';

interface LogoProps {
  className?: string;
  href?: string;
}

export default function Logo({ className = '', href = '/' }: LogoProps) {
  return (
    <Link 
      href={href} 
      className={`flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 relative z-50 group transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="Drive Exotiq - Home"
    >
      {/* Full Logo - Using drive-exotiq-logo.svg temporarily until clean D icon is provided */}
      <img
        src="/images/logos/drive-exotiq-logo.svg"
        alt="Drive Exotiq"
        className="h-8 sm:h-9 md:h-10 lg:h-12 xl:h-14 2xl:h-16 w-auto object-contain"
        loading="eager"
        decoding="async"
        style={{ display: 'block' }}
      />
    </Link>
  );
}

