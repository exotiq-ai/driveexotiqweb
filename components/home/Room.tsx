'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RoomProps {
  index: string;
  image?: { src: string; alt?: string };
  lit?: boolean;
  quiet?: boolean;
  align?: 'left' | 'right';
  children: React.ReactNode;
}

/**
 * Room — one pillar bay. Its copy fades up as the room reaches center and fades
 * out as it leaves, so ONLY the centered room reads at a time (the fixed
 * GarageStage backdrop bridges the transitions — never a black gap, never two
 * rooms stacked). Decorative plate carries a subtle parallax. Content is
 * server-rendered (crawlable). Reduced motion → a clean static block.
 */
export default function Room({
  index,
  image,
  lit = false,
  quiet = false,
  align = 'left',
  children,
}: RoomProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const plateY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const plateScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.02, 1.08]);
  // Copy is visible only while the room sits near center.
  const contentOpacity = useTransform(scrollYProgress, [0.06, 0.2, 0.8, 0.94], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [44, -44]);

  return (
    <div
      ref={ref}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden"
    >
      {image && (
        <motion.div
          aria-hidden="true"
          className={cn(
            'absolute top-1/2 -translate-y-1/2 will-change-transform',
            align === 'right' ? 'left-[2vw]' : 'right-[2vw]',
            lit ? 'h-[64vh] w-[58vw]' : 'h-[54vh] w-[48vw]'
          )}
          style={reduce ? undefined : { y: plateY, scale: plateScale, opacity: contentOpacity }}
        >
          <span className="absolute inset-0 overflow-hidden rounded-sm border border-line-2">
            <Image
              src={image.src}
              alt=""
              fill
              sizes="58vw"
              className="object-cover"
              style={{
                filter: lit
                  ? 'brightness(.82) contrast(1.08) saturate(.96)'
                  : 'brightness(.72) contrast(1.06) saturate(.88)',
              }}
            />
            <span
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(11,11,12,.5), transparent 28%, transparent 58%, rgba(11,11,12,.9)), radial-gradient(80% 60% at 50% 46%, transparent 42%, rgba(11,11,12,.55))',
              }}
            />
          </span>
        </motion.div>
      )}

      {quiet && (
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(11,11,12,.34), rgba(11,11,12,.56))' }}
        />
      )}
      {lit && (
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-[40vh] w-[70vw] -translate-x-1/2"
          style={{ background: 'radial-gradient(60% 100% at 50% 100%, rgba(108,189,230,.2), transparent 70%)' }}
        />
      )}

      <div className="relative z-[2] mx-auto w-full max-w-content px-6 md:px-8">
        <motion.div
          className={cn('max-w-[42rem]', align === 'right' && 'ml-auto text-right')}
          style={reduce ? undefined : { opacity: contentOpacity, y: contentY }}
        >
          <span
            className={cn(
              'idx mb-7 block text-[11px] tracking-[0.04em] text-ink-3',
              align === 'right' && 'text-right'
            )}
          >
            {index}
          </span>
          {children}
        </motion.div>
      </div>
    </div>
  );
}
