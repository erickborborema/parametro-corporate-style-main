"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const ripples = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        containerClassName
      )}
    >
      <div className="absolute inset-0">
        {ripples.map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 flex items-center justify-center"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: [0, 0.15, 0],
                scale: [0.8, 2.5],
                transition: {
                  duration: 4,
                  delay: i * 0.8,
                  repeat: Infinity,
                  ease: "easeOut",
                },
              },
            }}
          >
            <div
              className="w-1/2 h-1/2 rounded-full border-2 border-accent/30"
              style={{
                boxShadow: "0 0 40px hsl(37 87% 59% / 0.2)",
              }}
            />
          </motion.div>
        ))}
      </div>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
