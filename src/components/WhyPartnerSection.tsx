import { motion } from "framer-motion";
import { MapPin, Languages, Users, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { WarmBackground } from "./WarmBackground";

const partnerBenefits = [
  {
    icon: MapPin,
    title: "Based in Tumkur",
    description: "Understanding of local business environment"
  },
  {
    icon: Languages,
    title: "Bilingual Support Team",
    description: "24/7 technical support in Kannada and English"
  },
  {
    icon: Users,
    title: "Regular Client Visits",
    description: "Personal attention and on-site support"
  },
];

export const WhyPartnerSection = () => {
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
            <span className="mono text-primary text-sm uppercase tracking-widest mb-4 block font-semibold">
              // Your Trusted Partner
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground leading-tight">
              Why Partner with Us for{" "}
              <span className="text-primary">Your IT Needs?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Based in Tumkur, we are a team of dedicated IT professionals committed to 
              delivering high-quality services. Our mission is to help businesses thrive 
              in today's digital era with reliable and innovative IT solutions.
            </p>

            <a href="/contact">
              <Button 
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-6 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Button>
            </a>
          </motion.div>

          {/* Right Content - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06),0_8px_0_-4px_rgba(255,179,71,0.12)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1),0_8px_0_-4px_rgba(255,179,71,0.2)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-foreground">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
