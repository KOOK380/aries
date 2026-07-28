"use client";

import { Suspense, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";

interface Scene3DCanvasProps {
  children: ReactNode;
  /** Camera position. Default pulls back to frame the hero centerpiece. */
  cameraPosition?: [number, number, number];
  /** Background transparency. Default transparent so the page gradient shows. */
  className?: string;
}

/**
 * Shared R3F <Canvas> wrapper used by every service-page 3D scene. Sets up
 * consistent lighting, performance scaling, and a transparent background so
 * the scene blends with the hero gradient.
 *
 * Full 3D everywhere per the design decision (no 2D fallback) - we keep it
 * performant with AdaptiveDpr / AdaptiveEvents which throttle pixel ratio and
 * raycasting when the scene is busy or off-screen.
 */
export function Scene3DCanvas({
  children,
  cameraPosition = [0, 0, 6],
  className,
}: Scene3DCanvasProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: cameraPosition, fov: 45 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        {/* Lighting rig: ambient + key + fill for soft 3D shading */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.1} />
        <directionalLight position={[-6, -4, -4]} intensity={0.35} color="#a78bfa" />
        <Suspense fallback={null}>{children}</Suspense>
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
      </Canvas>
    </div>
  );
}
