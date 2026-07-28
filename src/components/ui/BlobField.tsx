"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlobFieldProps {
 className?: string;
 /** Number of floating orbs. */
 count?: number;
}

const colors = [
 "bg-brand-primary/30",
 "bg-brand-secondary/30",
 "bg-indigo-500/25",
 "bg-fuchsia-500/20",
];

/**
 * Decorative 3D blob field. Soft orbs that drift slowly to give any
 * section an ambient sense of depth. Purely decorative (aria-hidden).
 */
export function BlobField({ className, count = 3 }: BlobFieldProps) {
 return (
 <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
 {Array.from({ length: count }).map((_, i) => (
 <motion.div
 key={i}
 className={cn("absolute rounded-full ", colors[i % colors.length])}
 style={{
 width: `${280 + i * 60}px`,
 height: `${280 + i * 60}px`,
 top: `${[5, 40, 65][i % 3]}%`,
 left: `${[10, 70, 35][i % 3]}%`,
 }}
 animate={{
 x: [0, 30, -20, 0],
 y: [0, -25, 15, 0],
 scale: [1, 1.1, 0.95, 1],
 }}
 transition={{
 duration: 14 + i * 3,
 repeat: Infinity,
 ease: "easeInOut",
 }}
 />
 ))}
 </div>
 );
}
