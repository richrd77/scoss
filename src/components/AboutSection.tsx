import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Rocket } from "lucide-react";
import companyBuilding from "@/assets/company-building.jpg";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation in an ever-evolving digital landscape."
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the leading technology partner for businesses worldwide, known for delivering exceptional software solutions and pioneering digital innovation."
  },
  {
    icon: Heart,
    title: "Values",
    description: "We believe in integrity, innovation, and excellence. Our commitment to quality and customer satisfaction drives everything we do."
  },
];

const stats = [
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Award, value: "200+", label: "Projects Delivered" },
  { icon: Rocket, value: "10+", label: "Years Experience" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Your Trusted IT Partner Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Trusted IT Partner in <span className="text-primary">Tumkur</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Tumkur, we are a team of dedicated IT professionals committed to 
              delivering high-quality services. Our mission is to help businesses thrive 
              in today's digital era with reliable and innovative IT solutions.
            </p>
          </div>

          {/* Right - Company Building Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img 
                src={companyBuilding} 
                alt="SCOSS Services Office - SLN Krupa, Tumkur"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/10 rounded-xl -z-10" />
          </motion.div>
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="mono text-primary text-sm uppercase tracking-widest mb-4 block">
            // About Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Who <span className="text-primary">We Are</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            SCOSS Services is a leading software and IT company dedicated to helping businesses 
            thrive in the digital age. With years of experience and a passionate team, 
            we deliver solutions that make a difference.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              className="group"
            >
              <div className="glass-card p-8 h-full text-center hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card p-10"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary glow-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
