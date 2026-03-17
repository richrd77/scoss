import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import { WarmBackground } from "./WarmBackground";

export const ServicesSection = () => {
  return (
    <section id="services" className="relative min-h-screen flex items-center overflow-hidden">
      <WarmBackground />
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block font-bold">
            EXPLORE OUR EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Services Designed for Your Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer reliable solutions to support your business growth and development
          </p>
        </motion.div>

        {/* 4×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                to={service.link}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 block"
                style={{ aspectRatio: "3/4" }}
              >
                {/* Background image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/50" />

                {/* Accent line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 + 0.3 }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-3">{service.subtitle}</p>

                  {/* Description - shown on hover */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500 ease-out">
                    <p className="text-white/80 text-xs leading-relaxed mb-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-secondary text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
