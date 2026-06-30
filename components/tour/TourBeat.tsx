'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * TourBeat — reveal-once fade-up for one city beat's (server-rendered) copy as it
 * scrolls into view over the fixed windshield. One beat per screen, so beats never
 * overlap. Reduced motion → static.
 */
export default function TourBeat({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { amount: 0.55, once: true });
  const on = reduce || inView;

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={reduce ? undefined : { opacity: on ? 1 : 0, y: on ? 0 : 30 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
