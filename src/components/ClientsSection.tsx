import { motion } from "framer-motion";
import { WarmBackground } from "./WarmBackground";

// Import client logos
import questAllianceLogo from "@/assets/clients/quest-alliance.png";
import agritechLogo from "@/assets/clients/agritech.jpg";
import anonLogo from "@/assets/clients/anon.jpg";
import codeeasyLogo from "@/assets/clients/codeeasy.png";
import goasLogo from "@/assets/clients/goas.webp";
import findreamsLogo from "@/assets/clients/findreams.png";
import slvDieselLogo from "@/assets/clients/slv-diesel.jpg";

const clients = [
  { name: "Quest Alliance", logo: questAllianceLogo },
  { name: "AgriTech", logo: agritechLogo },
  { name: "Anon", logo: anonLogo },
  { name: "CodeEasy", logo: codeeasyLogo },
  { name: "GOAS", logo: goasLogo },
  { name: "Findreams", logo: findreamsLogo },
  { name: "SLV Diesel", logo: slvDieselLogo },
];

// Double the array for seamless infinite scroll
const duplicatedClients = [...clients, ...clients];

export const ClientsSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <WarmBackground />

      <div className="container relative z-10 px-4 md:px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trusted by leading organizations across industries
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling marquee */}
      <div className="relative w-full overflow-hidden z-10">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div
          className="flex gap-12 items-center animate-marquee"
          style={{ width: 'max-content' }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-white/60 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 ${
                  client.name === "Findreams" || client.name === "SLV Diesel"
                    ? "h-24 md:h-32 max-w-[220px] md:max-w-[280px]"
                    : "h-16 md:h-20 max-w-[160px] md:max-w-[200px]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
