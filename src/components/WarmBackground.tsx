import { motion } from "framer-motion";

/**
 * Premium corporate tech background with smooth waves, orange gradients,
 * glowing highlights, and subtle decorative elements for clean scrolling experience
 */
export const WarmBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 1. Base Layer - subtle gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)`,
        }}
      />
      
      {/* Radial glow accent */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,140,0,0.05) 0%, transparent 70%)`,
        }}
      />

      {/* 2. Top Smooth Wave */}
      <svg
        className="absolute top-0 left-0 w-full h-auto"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        style={{ minHeight: "200px" }}
      >
        <defs>
          <linearGradient id="topWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 122, 47, 0.15)" />
            <stop offset="50%" stopColor="rgba(255, 140, 0, 0.1)" />
            <stop offset="100%" stopColor="rgba(255, 209, 102, 0.08)" />
          </linearGradient>
          <filter id="topWaveBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>
        {/* Smooth wave path - Top */}
        <path
          d="M 0,80 Q 150,40 300,60 T 600,50 T 900,70 T 1200,60 L 1200,0 L 0,0 Z"
          fill="url(#topWaveGrad)"
          filter="url(#topWaveBlur)"
        />
        {/* Secondary wave - subtle */}
        <path
          d="M 0,120 Q 150,90 300,110 T 600,100 T 900,120 T 1200,110 L 1200,50 Q 150,40 300,60 T 600,50 T 900,70 T 1200,60 Z"
          fill="rgba(255, 140, 0, 0.04)"
          filter="url(#topWaveBlur)"
        />
      </svg>

      {/* 3. Bottom Smooth Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-auto"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        style={{ minHeight: "200px" }}
      >
        <defs>
          <linearGradient id="bottomWaveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 122, 47, 0.12)" />
            <stop offset="50%" stopColor="rgba(255, 140, 0, 0.08)" />
            <stop offset="100%" stopColor="rgba(255, 209, 102, 0.05)" />
          </linearGradient>
          <filter id="bottomWaveBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>
        {/* Smooth wave path - Bottom */}
        <path
          d="M 0,220 Q 150,260 300,240 T 600,250 T 900,230 T 1200,240 L 1200,300 L 0,300 Z"
          fill="url(#bottomWaveGrad)"
          filter="url(#bottomWaveBlur)"
        />
        {/* Secondary wave - subtle */}
        <path
          d="M 0,180 Q 150,220 300,200 T 600,210 T 900,190 T 1200,200 L 1200,240 Q 150,260 300,240 T 600,250 T 900,230 T 1200,240 Z"
          fill="rgba(255, 140, 0, 0.03)"
          filter="url(#bottomWaveBlur)"
        />
      </svg>

      {/* 4. Subtle accent circles for visual interest */}
      <div
        className="absolute top-[20%] left-[10%] w-48 h-48 rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, rgba(255,140,0,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[15%] right-[8%] w-64 h-64 rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, rgba(255,122,47,0.25) 0%, transparent 70%)",
        }}
      />

      {/* 5. Animated subtle glow accents */}
      {[
        { x: "15%", y: "25%", delay: 0 },
        { x: "75%", y: "35%", delay: 1.5 },
        { x: "45%", y: "70%", delay: 2.5 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: p.x,
            top: p.y,
            background: "radial-gradient(circle, #ffd166, #ff7a2f)",
            boxShadow: "0 0 12px 3px rgba(255,140,0,0.2)",
          }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};
