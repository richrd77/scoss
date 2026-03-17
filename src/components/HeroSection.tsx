import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import hero1 from "@/assets/hero/hero-1.jpeg";
import hero2 from "@/assets/hero/hero-2.jpeg";
import hero3 from "@/assets/hero/hero-3.jpeg";
import hero4 from "@/assets/hero/hero-4.jpeg";
import hero5 from "@/assets/hero/hero-5.jpeg";
import hero6 from "@/assets/hero/hero-6.jpeg";

const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];

export const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imgTimer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(imgTimer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Slideshow Background */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`SCOSS Services ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: index === currentImage ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-secondary/10 blur-3xl"
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left max-w-4xl"
        >

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
          >
            <span className="block text-white drop-shadow-lg">Leading IT Services</span>
            <span
              className="block bg-gradient-to-r from-secondary via-yellow-400 to-secondary bg-clip-text text-transparent"
              style={{ textShadow: '0 0 60px rgba(234, 179, 8, 0.3)' }}
            >
              Company in Tumkur
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary" />
            <p className="text-xl md:text-2xl text-secondary font-semibold italic">
              "Digital Transformation Services"
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
          >
            Transform your business with comprehensive IT services, custom software development, and technology consulting.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg font-bold shadow-2xl shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Free IT Consultation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </a>
            <a href="#services">
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-white/30 bg-white/5 text-white hover:border-secondary hover:bg-secondary/10 px-10 py-7 text-lg font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2 text-secondary group-hover:scale-110 transition-transform" />
                <span>Explore Our Services</span>
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 right-8 hidden md:block z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-7 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2 backdrop-blur-sm"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-secondary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
