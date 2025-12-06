import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'rounded-2xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97] touch-manipulation backdrop-blur-xl',
          {
            // Primary (Gulf Blue) - Glass effect with glow
            'bg-gradient-to-br from-gulf-blue to-gulf-blue/90 text-pure-white hover:shadow-2xl hover:shadow-gulf-blue/40 shadow-lg shadow-gulf-blue/30 hover:scale-[1.02] border border-gulf-blue/20':
              variant === 'primary',

            // Secondary (Performance Orange) - Glass effect
            'bg-gradient-to-br from-performance-orange to-performance-orange/90 text-pure-white hover:shadow-2xl hover:shadow-performance-orange/40 shadow-lg shadow-performance-orange/30 hover:scale-[1.02] border border-performance-orange/20':
              variant === 'secondary',

            // Outline - Glassmorphism style
            'border-2 border-white/20 text-pure-white bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-gulf-blue/50 hover:text-gulf-blue active:bg-white/5 hover:shadow-lg hover:shadow-gulf-blue/20':
              variant === 'outline',

            // Sizes - Optimized for touch with refined padding
            'px-6 py-3 text-[15px] min-h-[44px] tracking-wide': size === 'sm',
            'px-8 py-4 text-[17px] min-h-[52px] tracking-wide': size === 'md',
            'px-10 py-5 text-[19px] min-h-[56px] tracking-wide': size === 'lg',
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
