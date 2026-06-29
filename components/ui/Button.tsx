import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Brand v1 button. "Gold is the jewelry, blue is the engine."
 * - primary   = gold fill pill — the ONE gold moment per view
 * - secondary = gulf-blue ghost — the "engine on" CTA
 * - outline   = quiet obsidian ghost
 * - ghost     = text only
 * No glassmorphism, no gradient fills, no glow stacks — crisp and weighted.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-sans font-semibold tracking-wide',
          'transition-all duration-250 ease-cinematic touch-manipulation select-none',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gulf-500 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian-950',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
          {
            // Primary — the single gold moment per view
            'bg-gold-500 text-obsidian-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] hover:bg-gold-400 hover:-translate-y-px hover:shadow-elev-gold active:bg-gold-600 active:translate-y-0':
              variant === 'primary',
            // Secondary — the gulf "engine" ghost
            'border border-gulf-500 text-gulf-300 bg-transparent hover:bg-gulf-500/10 hover:border-gulf-400 hover:text-gulf-200':
              variant === 'secondary',
            // Outline — quiet obsidian ghost
            'border border-white/15 text-obsidian-100 bg-transparent hover:bg-white/[0.06] hover:border-white/30':
              variant === 'outline',
            // Ghost — text only
            'text-obsidian-200 hover:text-obsidian-50 hover:bg-white/[0.05]':
              variant === 'ghost',

            'px-6 py-3 text-[15px] min-h-[48px]': size === 'sm',
            'px-8 py-4 text-[16px] min-h-[52px]': size === 'md',
            'px-10 py-5 text-[18px] min-h-[56px]': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
