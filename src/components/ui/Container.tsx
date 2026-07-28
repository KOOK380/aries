import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

const sizeMap = {
  narrow: "max-w-4xl",
  default: "max-w-7xl",
  wide: "max-w-[88rem]",
} as const;

/**
 * Centered horizontal wrapper that enforces consistent gutters and a max
 * width across every page section.
 */
export function Container({ size = "default", className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizeMap[size], className)}
      {...props}
    />
  );
}
