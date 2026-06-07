import { motion } from "framer-motion";
import { Factory, GraduationCap, HeartPulse, ShoppingBag, Briefcase, Building2 } from "lucide-react";
import { WarmBackground } from "./WarmBackground";

const industries = [
  { icon: Factory, name: "Manufacturing Units" },
  { icon: GraduationCap, name: "Educational Institutions" },
  { icon: HeartPulse, name: "Healthcare Facilities" },
  { icon: ShoppingBag, name: "Retail Businesses" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: Building2, name: "Small & Medium Enterprises" },
];

export const IndustriesSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <WarmBackground />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="mono text-primary text-sm uppercase tracking-widest mb-4 block font-semibold">
            // Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Serving Industries Across <span className="text-primary">Tumakuru</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.04 }}
              className="relative flex flex-col items-center pt-8 pb-6 px-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/70 cursor-pointer group"
              style={{
                boxShadow: `
                  0 8px 32px -8px rgba(0,0,0,0.08),
                  0 4px 0 0 rgba(255,179,71,0.35),
                  0 6px 0 0 rgba(255,107,53,0.15)
                `,
              }}
            >
              {/* Red icon container */}
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-5 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-300">
                <industry.icon className="w-8 h-8 text-primary-foreground" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-bold text-center text-foreground group-hover:text-primary transition-colors leading-tight">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
