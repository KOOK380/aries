"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoIconProps {
  /** Size of the icon box. Default h-9 w-9. */
  boxSize?: string;
  className?: string;
}

/**
 * Premium animated brand mark. A stylized "A" (Aries) rendered as a custom SVG
 * mountain/peak shape with a layered gradient fill, glossy highlight, and
 * subtle 3D motion - far more distinctive than a generic icon.
 *
 * Motion layers (all subtle, keeps the mark legible):
 *  - whole badge gently floats + tilts in 3D
 *  - a light sheen sweeps across the face periodically
 *  - a soft glow halo pulses behind the badge
 */
export function LogoIcon({ boxSize = "h-9 w-9", className }: LogoIconProps) {
  return (
    <motion.span
      className={cn("relative inline-block", boxSize, className)}
      animate={{ y: [0, -3, 0], rotate: [0, -3, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d", perspective: 240 }}
    >
      {/* Pulsing glow halo */}
      <motion.span
        aria-hidden
        className="absolute -inset-1.5 rounded-[1.1rem] bg-brand-primary/40"
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.92, 1.06, 0.92] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Badge body with rotating gradient + sheen */}
      <span className="relative inline-flex h-full w-full items-center justify-center overflow-hidden rounded-[0.9rem] shadow-md ring-1 ring-white/30">
        {/* Rotating gradient background */}
        <motion.span
          aria-hidden
          className="absolute inset-[-60%]"
          style={{
            background:
              "conic-gradient(from 0deg, #7c3aed, #d946ef, #6366f1, #a855f7, #7c3aed)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />

        {/* Sweeping sheen highlight */}
        <motion.span
          aria-hidden
          className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg] bg-white/30"
          animate={{ x: ["-50%", "320%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
        />

        {/* Subtle depth overlay */}
        <span aria-hidden className="absolute inset-0 bg-gradient-to-br from-white/15 to-black/10" />

        {/* The stylized "A" mark - custom SVG mountain/peak */}
        <svg
          viewBox="0 0 32 32"
          className="relative h-[72%] w-[72%] drop-shadow-sm"
          fill="none"
          aria-hidden
        >
          {/* Main peak */}
          <path
            d="M16 5 L27 27 L21.5 27 L16 15 L10.5 27 L5 27 Z"
            fill="white"
          />
          {/* Inner accent cut for a crisp geometric look */}
          <path
            d="M16 11 L19.5 27 L16 27 Z"
            fill="rgba(124, 58, 237, 0.55)"
          />
        </svg>
      </span>
    </motion.span>
  );
}
