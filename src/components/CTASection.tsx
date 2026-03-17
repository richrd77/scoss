import { motion } from "framer-motion";
import { ArrowRight, Rocket, Star, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { WarmBackground } from "./WarmBackground";

export const CTASection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <WarmBackground />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-12 md:p-16 text-center relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.08)]">
            {/* Content */}
            <div className="relative">
              {/* Floating icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 left-1/4 text-primary/20"
              >
                <Star className="w-8 h-8" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-1/4 text-secondary/30"
              >
                <Rocket className="w-10 h-10" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground">
                Start Your <span className="text-primary">Digital Journey</span> Today
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Schedule a free consultation with our experts and discover how we can help you achieve your technology goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <Button 
                    size="lg" 
                    className="group bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg font-bold rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-foreground/20 hover:border-primary/40 hover:bg-primary/5 px-10 py-7 text-lg font-semibold rounded-full"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
