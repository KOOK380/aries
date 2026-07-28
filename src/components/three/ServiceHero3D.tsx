"use client";

import { Scene3DCanvas } from "./Scene3DCanvas";
import { FloatingShape } from "./primitives";
import {
  SeoScene,
  GoogleAdsScene,
  SocialMediaScene,
  VideoScene,
  ContentScene,
  EmailScene,
  AnalyticsScene,
  WebsiteScene,
  WebDevScene,
  MobileAppScene,
  CyberSecurityScene,
  DataProtectionScene,
} from "./scenes";

/**
 * Maps each service id to its unique 3D hero scene. Each entry is one-of-a-kind
 * so no two service pages share the same centerpiece.
 */
const sceneRegistry: Record<string, React.ComponentType<{ colors: [string, string] }>> = {
  "seo-optimization": SeoScene,
  "google-ads": GoogleAdsScene,
  "social-media-marketing": SocialMediaScene,
  "video-marketing": VideoScene,
  "content-marketing": ContentScene,
  "email-marketing": EmailScene,
  "analytics-reporting": AnalyticsScene,
  "website-marketing": WebsiteScene,
  "web-development": WebDevScene,
  "mobile-app-development": MobileAppScene,
  "cyber-security": CyberSecurityScene,
  "data-protection": DataProtectionScene,
};

interface ServiceHero3DProps {
  slug: string;
  /** [primary, secondary] hex colors from the category theme. */
  colors: [string, string];
  className?: string;
}

/**
 * Renders the bespoke 3D hero scene for a given service. Falls back to a
 * neutral floating-shapes scene if the slug is unknown (shouldn't happen in
 * practice since the route is guarded by notFound()).
 */
export function ServiceHero3D({ slug, colors, className }: ServiceHero3DProps) {
  const Scene = sceneRegistry[slug] ?? NeutralScene;
  return (
    <div className={className}>
      <Scene3DCanvas cameraPosition={[0, 0, 6.5]}>
        <Scene colors={colors} />
      </Scene3DCanvas>
    </div>
  );
}

/** Neutral fallback - simple floating shapes. */
function NeutralScene({ colors }: { colors: [string, string] }) {
  return (
    <>
      <FloatingShape kind="icosahedron" color={colors[0]} scale={1.2} />
      <FloatingShape
        kind="icosahedron"
        position={[2, 1, 0]}
        color={colors[1]}
        scale={0.7}
        wireframe
      />
    </>
  );
}
