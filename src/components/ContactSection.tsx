import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Headphones, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { WarmBackground } from "./WarmBackground";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 91130 30506",
    sub: "+91 89714 17455",
    href: "tel:+919113030506",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "scossservices@gmail.com",
    sub: "Quick response within 24hrs",
    href: "mailto:scossservices@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Us",
    value: "+91 91130 30506",
    sub: "Message us on WhatsApp",
    href: "https://wa.me/919113030506?text=Hello%20SCOSS%20Services",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "SLN Krupa, Mahalakshmi Nagar",
    sub: "Batawadi, Tumkur - 572103",
    href: "/contact",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="relative min-h-screen flex items-center overflow-hidden">
      <WarmBackground />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-3 block font-bold">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-3 text-foreground">
            Let's Build Something <span className="text-primary">Amazing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to transform your business? Reach out and let's start your digital journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Left: Contact cards + CTA */}
          <div className="flex flex-col gap-4">
            {contactCards.map((card, index) => (
              <motion.a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8, scale: 1.01 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors"
                >
                  <card.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-foreground">{card.title}</h3>
                  <p className="text-foreground font-semibold text-sm truncate">{card.value}</p>
                  <p className="text-muted-foreground text-xs">{card.sub}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
              </motion.a>
            ))}

            {/* CTA Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl overflow-hidden flex-1 min-h-[130px]"
            >
              <div className="bg-gradient-to-r from-foreground via-foreground/95 to-foreground/90 p-6 h-full flex items-center gap-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary/10 -translate-y-1/2 translate-x-1/3 blur-2xl" />

                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0"
                >
                  <Headphones className="w-7 h-7 text-primary" />
                </motion.div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Start Your Digital Journey
                  </h3>
                  <p className="text-white/60 text-xs mb-3">
                    Book a free consultation today
                  </p>
                  <a href="/contact">
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all duration-300 rounded-lg"
                    >
                      Book Consultation
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-white/60 shadow-lg relative group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.5598!2d77.1267164!3d13.3254536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f1f67bd60167d69%3A0x50d617767a87848!2sSCOSS%20SERVICES!5e0!3m2!1sen!2sin!4v1708627200000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SCOSS Services Location - Tumkur"
            />
            {/* Map overlay label */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between border border-white/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">SCOSS Services, Tumkur</span>
              </div>
              <a
                href="https://maps.google.com/?q=SLN+Krupa+Mahalakshmi+Nagar+Tumkur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
