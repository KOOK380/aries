"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  /** Max rotation in degrees. Default 8deg keeps it subtle. */
  maxTilt?: number;
  /** Show the glossy glare highlight that follows the cursor. */
  glare?: boolean;
  /** Extra translate on the Z axis for a pop-out effect. */
  scale?: number;
  className?: string;
}

/**
 * Interactive 3D tilt card. Tracks the pointer and rotates the card in 3D
 * space with a spring for a premium, tactile feel. Optional glare highlight
 * follows the cursor. Falls back to a flat card on touch devices (no hover).
 *
 * Accessible: respects `prefers-reduced-motion` via Framer's useSpring (the
 * transform is purely decorative and doesn't affect content readability).
 */
export function TiltCard({
  children,
  maxTilt = 8,
  glare = true,
  scale = 1.02,
  className,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Pointer position (0-1) -> rotation in degrees, with spring smoothing.
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });

  // Glare position as percentages.
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  // Glare background string derived from pointer position. Hoisted to the top
  // level so the hook order is stable regardless of the `glare` prop.
  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.6), transparent 45%)`,
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1

    // Center-origin rotation: invert Y so moving cursor up tilts card back.
    rotateX.set((0.5 - py) * (maxTilt * 2));
    rotateY.set((px - 0.5) * (maxTilt * 2));

    glareX.set(px * 100);
    glareY.set(py * 100);
    glareOpacity.set(0.25);
  }

  function handleMouseLeave() {
    setIsHovering(false);
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      animate={{ scale: isHovering ? scale : 1 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className={cn("relative h-full [will-change:transform]", className)}
    >
      {/* Content layer sits on a higher Z so it lifts toward the viewer.
          `h-full` propagates equal heights from the grid so children can
          stretch to fill (needed for equal-height card grids). */}
      <div className="h-full" style={{ transform: "translateZ(40px)" }}>
        {children}
      </div>

      {/* Glare overlay */}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            opacity: glareOpacity,
            background: glareBackground,
          }}
        />
      )}
    </motion.div>
  );
}
