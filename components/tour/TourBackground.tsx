'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Roadbook from './Roadbook';
import Odometer from './Odometer';

/**
 * TourBackground — the fixed cinematic "windshield" the whole /tour page scrolls
 * over. Decorative (aria-hidden): a heavily-graded car plate that parallaxes and
 * cross-dissolves R8(dawn)→S8(dusk), plus the left roadbook rail and the odometer
 * HUD, all driven by global scroll progress. The real, crawlable copy lives in the
 * server-rendered <section>s above this on the z-axis — so text never overlaps the
 * imagery, and one beat reads per screen. Reduced motion → a calm static frame.
 */
export default function TourBackground() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const drive = useTransform(scrollYProgress, [0.04, 0.9], [0, 1], { clamp: true });

  const scale = useTransform(drive, [0, 1], [1.04, 1.16]);
  const r8Opacity = useTransform(drive, [0.46, 0.68], [1, 0]);
  const s8Opacity = useTransform(drive, [0.46, 0.68], [0, 1]);

  if (reduce) {
    return <div aria-hidden className="fixed inset-0 z-0 bg-canvas" />;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-canvas"
    >
      {/* graded windshield — dim so copy always reads over it */}
      <motion.div style={{ scale }} className="absolute inset-0 will-change-transform">
        <motion.div style={{ opacity: r8Opacity }} className="absolute inset-0">
          <Image
            src="/images/cars/R8-telluride.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_38%]"
            style={{ filter: 'brightness(.36) contrast(1.05) saturate(.82)' }}
          />
        </motion.div>
        <motion.div style={{ opacity: s8Opacity }} className="absolute inset-0">
          <Image
            src="/images/cars/Audi_S8_tortillaflats_adamkiss.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[center_44%]"
            style={{ filter: 'brightness(.42) contrast(1.05) saturate(.85)' }}
          />
        </motion.div>
      </motion.div>

      {/* legibility scrims — darken the reading side + edges, never glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/80 to-canvas/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-canvas/85 via-transparent to-canvas" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(120% 100% at 50% 45%, transparent 45%, rgba(11,11,12,.65))' }}
      />
      <div className="bg-grain absolute inset-0 opacity-[0.05]" style={{ mixBlendMode: 'overlay' }} />

      {/* left roadbook rail (desktop) */}
      <div className="absolute bottom-0 left-3 top-0 z-10 hidden lg:block">
        <Roadbook progress={drive} />
      </div>

      {/* odometer HUD — below the nav line */}
      <div className="absolute left-6 top-[88px] z-10 md:left-10">
        <Odometer progress={drive} />
      </div>
    </div>
  );
}
