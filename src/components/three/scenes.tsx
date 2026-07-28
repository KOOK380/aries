"use client";

/**
 * Bespoke 3D hero centerpieces - ONE unique scene per service. Each scene is
 * composed from the shared primitives (FloatingShape, ParticleField, OrbitRings)
 * plus custom meshes so no two pages share the same centerpiece.
 *
 * Each scene accepts a palette of hex colors so it adopts the category theme.
 */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { FloatingShape, ParticleField, OrbitRings } from "./primitives";

interface SceneProps {
  colors: [string, string]; // [primary, secondary] hex
}

/* ================================================================== */
/* MARKETING SCENES                                                    */
/* ================================================================== */

/** SEO - a "ranking ladder": stepped bars rising like growing rankings. */
export function SeoScene({ colors }: SceneProps) {
  return (
    <group>
      <group position={[-1.4, -1, 0]} rotation={[0.2, 0, 0]}>
        {[0, 1, 2, 3, 4].map((i) => (
          <RankBar key={i} index={i} color={i % 2 === 0 ? colors[0] : colors[1]} />
        ))}
      </group>
      <ParticleField count={60} color={colors[1]} spread={7} />
      <FloatingShape
        kind="octahedron"
        position={[1.8, 1.2, 0]}
        color={colors[0]}
        scale={0.6}
        wireframe
      />
    </group>
  );
}

function RankBar({ index, color }: { index: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  const baseHeight = 0.4 + index * 0.35;
  useFrame((state) => {
    if (!ref.current) return;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.2 + index * 0.5) * 0.12;
    ref.current.scale.y = pulse;
    ref.current.position.y = (baseHeight * pulse) / 2;
  });
  return (
    <mesh ref={ref} position={[index * 0.7, baseHeight / 2, 0]}>
      <boxGeometry args={[0.5, baseHeight, 0.5]} />
      <meshStandardMaterial
        color={color}
        metalness={0.5}
        roughness={0.25}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

/** Google Ads - a circular "ROAS gauge" with a sweeping needle. */
export function GoogleAdsScene({ colors }: SceneProps) {
  return (
    <group>
      <Gauge colors={colors} />
      <FloatingShape kind="sphere" position={[2, 1.4, -1]} color={colors[1]} scale={0.4} />
      <ParticleField count={50} color={colors[0]} spread={6} />
    </group>
  );
}

function Gauge({ colors }: SceneProps) {
  const needle = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!needle.current) return;
    // Sweep from -1.1 to +1.1 rad like a meter needle climbing.
    const t = state.clock.elapsedTime;
    needle.current.rotation.z = -1.1 + (Math.sin(t * 0.8) * 0.5 + 0.5) * 2.2;
  });
  return (
    <group rotation={[0.3, 0, 0]}>
      {/* Gauge ring */}
      <mesh>
        <torusGeometry args={[1.6, 0.12, 24, 64, Math.PI]} />
        <meshStandardMaterial color={colors[0]} metalness={0.6} roughness={0.2} />
      </mesh>
      {/* Needle */}
      <group ref={needle} position={[0, 0, 0.1]}>
        <mesh position={[0.8, 0, 0]}>
          <boxGeometry args={[1.4, 0.06, 0.06]} />
          <meshStandardMaterial color={colors[1]} emissive={colors[1]} emissiveIntensity={0.5} />
        </mesh>
      </group>
      {/* Hub */}
      <mesh>
        <cylinderGeometry args={[0.18, 0.18, 0.2, 24]} />
        <meshStandardMaterial color="#1f2937" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

/** Social Media - orbiting platform nodes (FB/IG/X as satellites). */
export function SocialMediaScene({ colors }: SceneProps) {
  return (
    <group>
      <FloatingShape kind="sphere" position={[0, 0, 0]} color={colors[0]} scale={1.2} />
      <OrbitRings color={colors[1]} satellites={6} radius={1.9} />
      <OrbitRings color={colors[0]} satellites={4} radius={2.6} />
      <ParticleField count={40} color={colors[1]} spread={7} />
    </group>
  );
}

/** Video Marketing - a stacked "play button" tower / film reel. */
export function VideoScene({ colors }: SceneProps) {
  return (
    <group>
      {[0, 1, 2].map((i) => (
        <FloatingShape
          key={i}
          kind="cone"
          position={[i * 0.9 - 0.9, Math.sin(i) * 0.6, -i * 0.4]}
          color={i % 2 === 0 ? colors[0] : colors[1]}
          scale={0.7 - i * 0.1}
          spin={[0.4, 0.6, 0.2]}
        />
      ))}
      <FilmReel colors={colors} />
      <ParticleField count={45} color={colors[1]} spread={6} />
    </group>
  );
}

function FilmReel({ colors }: SceneProps) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.z = state.clock.elapsedTime * 0.5;
  });
  return (
    <group ref={ref} position={[1.6, -1.3, 0]}>
      <mesh>
        <torusGeometry args={[0.7, 0.3, 16, 48]} />
        <meshStandardMaterial color={colors[0]} metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh>
        <circleGeometry args={[0.4, 32]} />
        <meshStandardMaterial color={colors[1]} />
      </mesh>
    </group>
  );
}

/** Content Marketing - a floating stack of documents/papers. */
export function ContentScene({ colors }: SceneProps) {
  return (
    <group>
      {[0, 1, 2, 3].map((i) => (
        <PaperStack key={i} index={i} color={i % 2 === 0 ? colors[0] : colors[1]} />
      ))}
      <ParticleField count={50} color={colors[0]} spread={6} />
    </group>
  );
}

function PaperStack({ index, color }: { index: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = 1.2 - index * 0.7 + Math.sin(t + index) * 0.1;
    ref.current.rotation.z = Math.sin(t * 0.3 + index) * 0.15;
  });
  return (
    <mesh ref={ref} position={[Math.sin(index) * 0.5, 0, 0]} rotation={[-0.3, index * 0.4, 0]}>
      <boxGeometry args={[1.3, 1.7, 0.06]} />
      <meshStandardMaterial color={color} metalness={0.2} roughness={0.5} />
    </mesh>
  );
}

/** Email Marketing - an envelope with "send lines" streaking out. */
export function EmailScene({ colors }: SceneProps) {
  return (
    <group>
      <Envelope colors={colors} />
      {[0, 1, 2, 3].map((i) => (
        <SendLine key={i} index={i} color={colors[i % 2]} />
      ))}
      <ParticleField count={45} color={colors[1]} spread={6} />
    </group>
  );
}

function Envelope({ colors }: SceneProps) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });
  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[1.8, 1.2, 0.1]} />
        <meshStandardMaterial color={colors[0]} metalness={0.3} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.3, 0.06]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[1.3, 1.3, 0.02]} />
        <meshStandardMaterial color={colors[1]} />
      </mesh>
    </group>
  );
}

function SendLine({ index, color }: { index: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = (state.clock.elapsedTime * 0.8 + index * 0.5) % 3;
    ref.current.position.x = 1.5 + t * 1.2;
    ref.current.position.y = 1.5 - index * 0.7;
    (ref.current.material as THREE.MeshStandardMaterial).opacity = Math.max(0, 1 - t / 3);
  });
  return (
    <mesh ref={ref} position={[1.5, 1.5, 0]}>
      <boxGeometry args={[1, 0.04, 0.04]} />
      <meshStandardMaterial color={color} transparent emissive={color} emissiveIntensity={0.6} />
    </mesh>
  );
}

/** Analytics & Reporting - a 3D bar chart with data streams. */
export function AnalyticsScene({ colors }: SceneProps) {
  return (
    <group position={[0, -0.5, 0]}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <DataBar key={i} index={i} color={i % 2 === 0 ? colors[0] : colors[1]} />
      ))}
      <ParticleField count={60} color={colors[0]} spread={7} />
    </group>
  );
}

function DataBar({ index, color }: { index: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  const target = useRef(0.5 + Math.random() * 2);
  useFrame((state) => {
    if (!ref.current) return;
    const phase = Math.floor(state.clock.elapsedTime / 1.5) + index;
    const seed = (Math.sin(phase * 1.3) * 0.5 + 0.5) * 2.2 + 0.4;
    target.current += (seed - target.current) * 0.05;
    ref.current.scale.y = target.current;
    ref.current.position.y = target.current / 2;
  });
  return (
    <mesh ref={ref} position={[-2.2 + index * 0.9, 0.5, 0]}>
      <boxGeometry args={[0.55, 1, 0.55]} />
      <meshStandardMaterial color={color} metalness={0.4} roughness={0.3} />
    </mesh>
  );
}

/** Website Marketing - a floating browser window + cursor. */
export function WebsiteScene({ colors }: SceneProps) {
  return (
    <group>
      <BrowserWindow colors={colors} />
      <CursorPulse colors={colors} />
      <ParticleField count={40} color={colors[1]} spread={6} />
    </group>
  );
}

function BrowserWindow({ colors }: SceneProps) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.25;
  });
  return (
    <group ref={ref} rotation={[0.1, -0.3, 0]}>
      <mesh>
        <boxGeometry args={[3, 2, 0.08]} />
        <meshStandardMaterial color={colors[0]} metalness={0.3} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.75, 0.05]}>
        <boxGeometry args={[3, 0.5, 0.02]} />
        <meshStandardMaterial color={colors[1]} />
      </mesh>
      {/* dots */}
      {[-1, -0.85, -0.7].map((x, i) => (
        <mesh key={i} position={[x, 0.75, 0.07]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#fff" />
        </mesh>
      ))}
    </group>
  );
}

function CursorPulse({ colors }: SceneProps) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.x = Math.sin(t * 0.6) * 1;
    ref.current.position.y = -0.3 + Math.cos(t * 0.8) * 0.4;
  });
  return (
    <mesh ref={ref} position={[0, -0.3, 0.1]}>
      <coneGeometry args={[0.12, 0.25, 4]} />
      <meshStandardMaterial color={colors[1]} emissive={colors[1]} emissiveIntensity={0.5} />
    </mesh>
  );
}

/* ================================================================== */
/* DEVELOPMENT SCENES                                                  */
/* ================================================================== */

/** Web Development - a floating browser + code window side by side. */
export function WebDevScene({ colors }: SceneProps) {
  return (
    <group>
      <BrowserWindow colors={colors} />
      <group position={[2, -1.4, 0.5]} rotation={[0.2, 0.4, 0]}>
        <CodeWindow colors={colors} />
      </group>
      <FloatingShape kind="knot" position={[-2, 1.5, -1]} color={colors[1]} scale={0.5} wireframe />
      <ParticleField count={55} color={colors[0]} spread={7} />
    </group>
  );
}

function CodeWindow({ colors }: SceneProps) {
  return (
    <group>
      <mesh>
        <boxGeometry args={[2, 1.5, 0.06]} />
        <meshStandardMaterial color="#0f172a" metalness={0.4} roughness={0.5} />
      </mesh>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[-0.6, 0.5 - i * 0.25, 0.04]}>
          <boxGeometry args={[0.8 + Math.random() * 0.6, 0.06, 0.01]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? colors[0] : colors[1]}
            emissive={i % 2 === 0 ? colors[0] : colors[1]}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

/** Mobile App - a rotating 3D phone device mockup. */
export function MobileAppScene({ colors }: SceneProps) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.4;
  });
  return (
    <group>
      <group ref={ref} rotation={[0.2, 0, 0]}>
        {/* Phone body */}
        <mesh>
          <boxGeometry args={[1.3, 2.6, 0.12]} />
          <meshStandardMaterial color="#1f2937" metalness={0.7} roughness={0.25} />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 0, 0.07]}>
          <boxGeometry args={[1.15, 2.4, 0.02]} />
          <meshStandardMaterial color={colors[0]} emissive={colors[0]} emissiveIntensity={0.2} />
        </mesh>
        {/* App UI blocks */}
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[0, 0.7 - i * 0.7, 0.09]}>
            <boxGeometry args={[0.9, 0.45, 0.01]} />
            <meshStandardMaterial color={colors[1]} />
          </mesh>
        ))}
      </group>
      <FloatingShape kind="sphere" position={[2, 1, -1]} color={colors[1]} scale={0.3} wireframe />
      <ParticleField count={50} color={colors[0]} spread={7} />
    </group>
  );
}

/* ================================================================== */
/* SECURITY SCENES                                                    */
/* ================================================================== */

/** Cyber Security - a rotating shield orb with orbiting lock rings. */
export function CyberSecurityScene({ colors }: SceneProps) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });
  return (
    <group>
      <group ref={ref}>
        <FloatingShape kind="icosahedron" position={[0, 0, 0]} color={colors[0]} scale={1.3} />
        <FloatingShape
          kind="icosahedron"
          position={[0, 0, 0]}
          color={colors[1]}
          scale={1.7}
          wireframe
          bob={0}
          spin={[0.1, 0.2, 0]}
        />
      </group>
      <OrbitRings color={colors[1]} satellites={8} radius={2.2} />
      <ParticleField count={70} color={colors[0]} spread={8} />
    </group>
  );
}

/** Data Protection - a 3D padlock with encryption particle streams. */
export function DataProtectionScene({ colors }: SceneProps) {
  return (
    <group>
      <Padlock colors={colors} />
      {/* Encryption streams - particles flowing up around the lock */}
      {[0, 1, 2, 3, 4].map((i) => (
        <Stream key={i} index={i} color={colors[i % 2]} />
      ))}
      <FloatingShape kind="octahedron" position={[2, 1.2, -0.5]} color={colors[1]} scale={0.4} wireframe />
    </group>
  );
}

function Padlock({ colors }: SceneProps) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.4;
  });
  return (
    <group ref={ref} position={[0, -0.3, 0]}>
      {/* Lock body */}
      <mesh>
        <boxGeometry args={[1.4, 1.2, 0.5]} />
        <meshStandardMaterial color={colors[0]} metalness={0.6} roughness={0.25} />
      </mesh>
      {/* Shackle */}
      <mesh position={[0, 0.95, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.4, 0.1, 16, 32, Math.PI]} />
        <meshStandardMaterial color={colors[1]} metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Keyhole */}
      <mesh position={[0, -0.1, 0.27]}>
        <circleGeometry args={[0.15, 24]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
    </group>
  );
}

function Stream({ index, color }: { index: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  const angle = (index / 5) * Math.PI * 2;
  useFrame((state) => {
    if (!ref.current) return;
    const t = (state.clock.elapsedTime * 1.5 + index * 0.6) % 4;
    ref.current.position.y = -2 + t * 1.2;
    ref.current.position.x = Math.cos(angle) * 1.8;
    ref.current.position.z = Math.sin(angle) * 1.8;
    const mat = ref.current.material as THREE.MeshStandardMaterial;
    mat.opacity = Math.max(0, 1 - t / 4);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.08, 12, 12]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.7} transparent />
    </mesh>
  );
}
