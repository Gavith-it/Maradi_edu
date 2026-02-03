import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const TILT_MAX = 6;

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [TILT_MAX, -TILT_MAX]);
  const rotateY = useTransform(x, [0, 1], [-TILT_MAX, TILT_MAX]);

  const springConfig = { damping: 25, stiffness: 300 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  if (prefersReducedMotion) {
    return <div className={cn("heritage-card", className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn("heritage-card", className)}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex flex-col"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
