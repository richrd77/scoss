import { motion } from "framer-motion";
import { WarmBackground } from "./WarmBackground";

const techStack = [
  { name: "React", abbr: "⚛️" },
  { name: "TypeScript", abbr: "TS" },
  { name: "Node.js", abbr: "N" },
  { name: "Python", abbr: "🐍" },
  { name: "AWS", abbr: "☁️" },
  { name: "Docker", abbr: "🐳" },
  { name: "Kubernetes", abbr: "K8" },
];

export const TechShowcase = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <WarmBackground />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <span className="mono text-primary text-sm uppercase tracking-widest font-semibold">
              // Tech Stack
            </span>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Powered by <span className="text-primary">Modern Tech</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-5 md:gap-6"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 + 0.3, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="w-28 h-32 md:w-32 md:h-36 flex flex-col items-center justify-center rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06),0_8px_0_-4px_rgba(255,179,71,0.12)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1),0_8px_0_-4px_rgba(255,179,71,0.2)] transition-all duration-300 cursor-pointer group"
            >
              <span className="text-3xl md:text-4xl mb-3">{tech.abbr}</span>
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
