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
      {/* D Icon - Responsive sizing with perfect aspect ratio */}
      {/* Using regular img tag for SVG to prevent Next.js optimization issues in production */}
      <div className="relative flex-shrink-0
        w-8 h-8 
        sm:w-9 sm:h-9 
        md:w-10 md:h-10 
        lg:w-12 lg:h-12 
        xl:w-14 xl:h-14
        2xl:w-16 2xl:h-16">
        <img
          src="/images/logos/blue-d-icon.svg"
          alt=""
          className="w-full h-full object-contain"
          loading="eager"
          decoding="async"
          aria-hidden="true"
          style={{ display: 'block' }}
        />
      </div>

      {/* Text Logo - Expert typography with perfect spacing */}
      <div className="flex items-baseline leading-none
        text-base 
        sm:text-lg 
        md:text-xl 
        lg:text-2xl 
        xl:text-3xl
        2xl:text-[34px]">
        {/* Drive - Gulf Blue */}
        <span className="font-display font-bold text-gulf-blue tracking-tight-exotiq whitespace-nowrap">
          Drive
        </span>
        
        {/* Space between words - responsive */}
        <span className="w-1 sm:w-1.5 md:w-2 lg:w-2.5" aria-hidden="true" />
        
        {/* Exotiq - White */}
        <span className="font-display font-bold text-pure-white tracking-tight-exotiq whitespace-nowrap">
          Exotiq
        </span>
      </div>
    </Link>
  );
}

