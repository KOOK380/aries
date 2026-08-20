"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoImageProps {
  className?: string;
}

/**
 * Responsive brand logo image that swaps between dark and light variants
 * based on the active theme. Falls back gracefully until the theme is resolved
 * on the client (avoids hydration mismatch).
 *
 * Place your files at:
 *   public/logos/logo-dark.svg   (for dark mode)
 *   public/logos/logo-light.svg  (for light mode)
 */
export function LogoImage({ className }: LogoImageProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const src = mounted && resolvedTheme === "dark"
    ? "/logos/logo-dark.svg"
    : "/logos/logo-light.svg";

  return (
    <img
      src={src}
      alt="Aries Tech"
      className={cn("h-8 w-auto", className)}
      loading="eager"
    />
  );
}
