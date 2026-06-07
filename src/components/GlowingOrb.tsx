import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingOrbProps {
  className?: string;
  color?: "primary" | "secondary";
  delay?: number;
}

export const GlowingOrb = forwardRef<HTMLDivElement, GlowingOrbProps>(
  ({ className, color = "primary", delay = 0 }, ref) => {
    const colorClasses = {
      primary: "from-primary/30 via-primary/10 to-transparent",
      secondary: "from-secondary/30 via-secondary/10 to-transparent",
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 1.5 }}
        className={cn("absolute rounded-full blur-3xl", className)}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
          className={cn(
            "w-full h-full rounded-full bg-gradient-radial animate-morph",
            colorClasses[color]
          )}
        />
      </motion.div>
    );
  }
);

GlowingOrb.displayName = "GlowingOrb";
