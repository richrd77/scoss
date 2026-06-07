import { motion } from "framer-motion";
import { ArrowRight, Server, Shield, Megaphone } from "lucide-react";
import { Button } from "./ui/button";
import { WarmBackground } from "./WarmBackground";

const features = [
  {
    icon: Server,
    title: "Comprehensive IT Solutions",
    description: "Tailored to Your Needs"
  },
  {
    icon: Shield,
    title: "Expertise in IT Infrastructure",
    description: "Cloud Solutions and Cybersecurity"
  },
  {
    icon: Megaphone,
    title: "Affordable and Scalable",
    description: "Digital Marketing Services"
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <WarmBackground />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Leading IT Services Company in Tumkur
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground leading-tight">
              Transform Your Business with{" "}
              <span className="text-primary">Digital Excellence</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Transform your business with our comprehensive IT services, custom software 
              development, and technology consulting. Get expert solutions tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="/contact">
                <Button 
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                >
                  Get a Free IT Consultation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 hover:border-primary/40 hover:bg-primary/5 rounded-full px-8 py-6 text-base font-medium"
              >
                Explore Our Services
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Why Choose <span className="text-primary">Us?</span>
            </h3>
            
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06),0_8px_0_-4px_rgba(255,179,71,0.12)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1),0_8px_0_-4px_rgba(255,179,71,0.2)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-foreground">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            <a href="/contact">
              <Button 
                variant="link" 
                className="text-primary mt-4 p-0 font-semibold"
              >
                Schedule a Free IT Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
