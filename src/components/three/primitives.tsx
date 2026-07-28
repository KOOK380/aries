"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/* FloatingShape - a mesh that gently bobs + rotates. Parametric via   */
/* the geometry prop so each scene can reuse it with a different form. */
/* ------------------------------------------------------------------ */
type ShapeKind = "icosahedron" | "torus" | "knot" | "box" | "sphere" | "cone" | "octahedron";

interface FloatingShapeProps {
  kind?: ShapeKind;
  position?: [number, number, number];
  color?: string;
  scale?: number;
  /** Rotation speed on each axis. */
  spin?: [number, number, number];
  /** Bob amplitude. */
  bob?: number;
  wireframe?: boolean;
  metalness?: number;
  roughness?: number;
}

export function FloatingShape({
  kind = "icosahedron",
  position = [0, 0, 0],
  color = "#8b5cf6",
  scale = 1,
  spin = [0.2, 0.3, 0],
  bob = 0.25,
  wireframe = false,
  metalness = 0.3,
  roughness = 0.35,
}: FloatingShapeProps) {
  const ref = useRef<THREE.Mesh>(null);
  const start = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    const m = ref.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    m.rotation.x = t * spin[0];
    m.rotation.y = t * spin[1];
    m.rotation.z = t * spin[2];
    m.position.y = position[1] + Math.sin(t * 0.8 + start) * bob;
  });

  const geom = useMemo(() => {
    switch (kind) {
      case "torus":
        return <torusGeometry args={[0.7, 0.28, 16, 64]} />;
      case "knot":
        return <torusKnotGeometry args={[0.6, 0.22, 100, 16]} />;
      case "box":
        return <boxGeometry args={[1, 1, 1]} />;
      case "sphere":
        return <sphereGeometry args={[0.8, 32, 32]} />;
      case "cone":
        return <coneGeometry args={[0.8, 1.4, 32]} />;
      case "octahedron":
        return <octahedronGeometry args={[0.9, 0]} />;
      default:
        return <icosahedronGeometry args={[0.9, 0]} />;
    }
  }, [kind]);

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {geom}
      <meshStandardMaterial
        color={color}
        wireframe={wireframe}
        metalness={metalness}
        roughness={roughness}
        flatShading={kind === "icosahedron" || kind === "octahedron"}
      />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/* ParticleField - drifting points. Pure decorative depth.             */
/* ------------------------------------------------------------------ */
interface ParticleFieldProps {
  count?: number;
  color?: string;
  size?: number;
  spread?: number;
}

export function ParticleField({
  count = 80,
  color = "#a78bfa",
  size = 0.04,
  spread = 8,
}: ParticleFieldProps) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 1] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }
    return arr;
  }, [count, spread]);

  useFrame((state) => {
    const p = ref.current;
    if (!p) return;
    p.rotation.y = state.clock.elapsedTime * 0.05;
    p.rotation.x = state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={size} sizeAttenuation transparent opacity={0.8} />
    </points>
  );
}

/* ------------------------------------------------------------------ */
/* OrbitRings - concentric rings rotating on different axes, with      */
/* small satellite spheres. Great for "orbiting platforms".            */
/* ------------------------------------------------------------------ */
interface OrbitRingsProps {
  color?: string;
  satellites?: number;
  radius?: number;
}

export function OrbitRings({ color = "#8b5cf6", satellites = 6, radius = 1.8 }: OrbitRingsProps) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) group.current.rotation.z = state.clock.elapsedTime * 0.15;
  });

  return (
    <group ref={group}>
      {[0, 1, 2].map((ring) => (
        <Ring key={ring} radius={radius + ring * 0.4} color={color} tilt={ring * 0.6} />
      ))}
      {Array.from({ length: satellites }).map((_, i) => {
        const angle = (i / satellites) * Math.PI * 2;
        const r = radius + (i % 3) * 0.4;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * r, Math.sin(angle) * r, (i % 2 === 0 ? 1 : -1) * 0.3]}
          >
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} />
          </mesh>
        );
      })}
    </group>
  );
}

function Ring({ radius, color, tilt }: { radius: number; color: string; tilt: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.PI / 2 + tilt;
    ref.current.rotation.z = state.clock.elapsedTime * 0.2;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.015, 16, 80]} />
      <meshStandardMaterial color={color} transparent opacity={0.5} />
    </mesh>
  );
}
