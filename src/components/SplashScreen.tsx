import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import scossLogo from "@/assets/scoss-logo.png";

const LETTERS = "SCOSS".split("");
const TAGLINE_WORDS = ["Elevating", "Business", "Through", "Technology"];

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"logo" | "name" | "tagline" | "exit">("logo");
  const doneRef = useRef(false);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    setPhase("exit");
    window.setTimeout(onComplete, 900);
  }, [onComplete]);

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("name"), 800);
    const t2 = window.setTimeout(() => setPhase("tagline"), 1600);
    const t3 = window.setTimeout(finish, 3500);
    return () => { window.clearTimeout(t1); window.clearTimeout(t2); window.clearTimeout(t3); };
  }, [finish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "exit" ? 0 : 1 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
      style={{ background: "radial-gradient(ellipse at 50% 40%, #1e1b4b 0%, #0f0f1a 60%, #050510 100%)" }}
    >
      {/* ── Ambient moving gradients ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] opacity-20"
          style={{
            background: "conic-gradient(from 0deg at 50% 50%, transparent 0%, hsl(0 100% 58% / 0.3) 25%, transparent 50%, hsl(33 100% 64% / 0.3) 75%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => {
          const size = 1.5 + (i % 4) * 1.2;
          const x = (i * 2.5) % 100;
          const y = (i * 7.3) % 100;
          const delay = (i * 0.12) % 4;
          const dur = 3 + (i % 4);
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${x}%`,
                top: `${y}%`,
                background: i % 3 === 0
                  ? "hsl(0 100% 65% / 0.6)"
                  : i % 3 === 1
                    ? "hsl(33 100% 64% / 0.5)"
                    : "hsl(260 60% 70% / 0.4)",
              }}
              animate={{ y: [0, -120, 0], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
              transition={{ duration: dur, repeat: Infinity, delay, ease: "easeInOut" }}
            />
          );
        })}
      </div>

      {/* ── Pulsing ring 1 ── */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.4, 1.1], opacity: [0, 0.5, 0.2] }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute h-56 w-56 rounded-full border-2 border-primary/40 md:h-72 md:w-72"
        style={{ boxShadow: "0 0 80px hsl(0 100% 58% / 0.25), inset 0 0 80px hsl(0 100% 58% / 0.08)" }}
      />

      {/* ── Pulsing ring 2 ── */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 0 }}
        animate={{ scale: [0, 1.8, 1.5], opacity: [0, 0.35, 0.1], rotate: 120 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
        className="absolute h-72 w-72 rounded-full border border-secondary/25 md:h-[26rem] md:w-[26rem]"
      />

      {/* ── Pulsing ring 3 ── */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 0 }}
        animate={{ scale: [0, 2, 1.7], opacity: [0, 0.2, 0.06], rotate: -60 }}
        transition={{ duration: 2.2, ease: "easeOut", delay: 0.5 }}
        className="absolute h-80 w-80 rounded-full border border-purple-400/15 md:h-[30rem] md:w-[30rem]"
      />

      {/* ── Orbiting dots ── */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute"
          style={{ width: 200 + i * 60, height: 200 + i * 60 }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8 + i * 4, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: 6 - i,
              height: 6 - i,
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              background: i === 0 ? "hsl(0 100% 65%)" : i === 1 ? "hsl(33 100% 64%)" : "hsl(260 60% 70%)",
              boxShadow: `0 0 12px ${i === 0 ? "hsl(0 100% 65% / 0.8)" : i === 1 ? "hsl(33 100% 64% / 0.8)" : "hsl(260 60% 70% / 0.8)"}`,
            }}
          />
        </motion.div>
      ))}

      {/* ── Logo ── */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotateY: -180 }}
        animate={{ scale: [0, 1.15, 1], opacity: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="relative z-10"
      >
        <motion.img
          src={scossLogo}
          alt="SCOSS Services"
          className="h-28 w-auto md:h-36"
          animate={{
            filter: [
              "drop-shadow(0 0 15px hsl(0 100% 58% / 0.4))",
              "drop-shadow(0 0 40px hsl(0 100% 58% / 0.7))",
              "drop-shadow(0 0 15px hsl(0 100% 58% / 0.4))",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* ── Company Name — letter-by-letter ── */}
      <div className="relative z-10 mt-5 flex gap-1 overflow-hidden md:gap-2">
        {LETTERS.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40, rotateX: -90 }}
            animate={{
              opacity: phase !== "logo" ? 1 : 0,
              y: phase !== "logo" ? 0 : 40,
              rotateX: phase !== "logo" ? 0 : -90,
            }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-black tracking-widest text-white md:text-6xl"
            style={{ textShadow: "0 0 30px hsl(0 100% 58% / 0.4), 0 0 60px hsl(0 100% 58% / 0.15)" }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* ── "Services" subtitle ── */}
      <motion.span
        initial={{ opacity: 0, letterSpacing: "0em" }}
        animate={{
          opacity: phase !== "logo" ? 1 : 0,
          letterSpacing: phase !== "logo" ? "0.35em" : "0em",
        }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        className="relative z-10 mt-1 text-sm font-medium uppercase text-white/60 md:text-base"
      >
        Services
      </motion.span>

      {/* ── Horizontal accent line ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: phase === "tagline" || phase === "exit" ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mt-5 h-px w-48 origin-center bg-gradient-to-r from-transparent via-secondary to-transparent md:w-64"
      />

      {/* ── Tagline — word-by-word ── */}
      <div className="relative z-10 mt-4 flex flex-wrap justify-center gap-2">
        {TAGLINE_WORDS.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{
              opacity: phase === "tagline" || phase === "exit" ? 1 : 0,
              y: phase === "tagline" || phase === "exit" ? 0 : 16,
              filter: phase === "tagline" || phase === "exit" ? "blur(0px)" : "blur(8px)",
            }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary md:text-base"
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* ── Loading bar with glow ── */}
      <div className="absolute bottom-14 left-1/2 h-1 w-52 -translate-x-1/2 overflow-hidden rounded-full bg-white/10 md:w-72">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(0 100% 58%), hsl(33 100% 64%), hsl(0 100% 58%))",
            boxShadow: "0 0 20px hsl(0 100% 58% / 0.6)",
          }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3.2, ease: "easeInOut" }}
        />
      </div>

      {/* ── Bottom text ── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "tagline" || phase === "exit" ? 0.4 : 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-7 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40 md:text-xs"
      >
        Leading IT Solutions • Tumkur, Karnataka
      </motion.p>
    </motion.div>
  );
};