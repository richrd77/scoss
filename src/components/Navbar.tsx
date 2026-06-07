import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, Globe, Megaphone, Server, Code2, Cloud, ShieldCheck, BrainCircuit, Network, Wrench, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import scossLogo from "@/assets/scoss-logo.png";

const serviceItems = [
  { name: "Website Design & Development", href: "/services/website-design-services-tumkur", icon: Globe, desc: "Modern, responsive websites that convert", color: "from-blue-500 to-cyan-400" },
  { name: "Digital Marketing", href: "/services/digital-marketing", icon: Megaphone, desc: "SEO, social media & PPC campaigns", color: "from-pink-500 to-rose-400" },
  { name: "IT Infrastructure", href: "/services/it-infrastructure", icon: Server, desc: "Robust infrastructure solutions", color: "from-emerald-500 to-green-400" },
  { name: "Custom Software", href: "/services/custom-software-development", icon: Code2, desc: "Tailored software for your needs", color: "from-violet-500 to-purple-400" },
  { name: "Cloud Solutions", href: "/services/cloud-solutions", icon: Cloud, desc: "Scalable cloud infrastructure", color: "from-sky-500 to-blue-400" },
  { name: "Cybersecurity", href: "/services/cybersecurity", icon: ShieldCheck, desc: "Protect your digital assets", color: "from-red-500 to-orange-400" },
  { name: "IT Consulting", href: "/services/it-consulting", icon: BrainCircuit, desc: "Strategic technology guidance", color: "from-amber-500 to-yellow-400" },
  { name: "Network Solutions", href: "/services/network-solutions", icon: Network, desc: "Reliable networking services", color: "from-teal-500 to-emerald-400" },
  { name: "Technical Support", href: "/services/technical-support", icon: Wrench, desc: "24/7 expert IT support", color: "from-indigo-500 to-blue-400" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Gallery", href: "/gallery" },
  { name: "Internship", href: "/internship" },
  { name: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", icon: "f", href: "#" },
  { name: "LinkedIn", icon: "in", href: "#" },
  { name: "Instagram", icon: "ig", href: "#" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Top bar */}
      <div className="dark-navbar">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="hidden md:flex items-center gap-2 text-white/90">
              <span className="font-medium">SCOSS Services</span>
              <span className="text-white/50">•</span>
              <span className="text-secondary italic">"Elevating Business through Technology"</span>
            </div>
            <div className="flex items-center gap-3 ml-auto">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="w-7 h-7 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors" aria-label={social.name}>
                  <span className="text-xs font-bold text-white">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={cn("transition-all duration-300 bg-background border-b", isScrolled ? "shadow-lg border-border" : "border-transparent")}>
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a href="/" className="flex items-center gap-3 group" whileHover={{ scale: 1.02 }}>
              <img src={scossLogo} alt="SCOSS Services Logo" className="h-20 w-auto object-contain" />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setShowMegaMenu(true)}
                  onMouseLeave={() => link.hasDropdown && setShowMegaMenu(false)}
                >
                  <a href={link.href} className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2">
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", showMegaMenu && "rotate-180")} />
                    )}
                  </a>

                  {/* ── Mega Menu ── */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {showMegaMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.97 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="absolute top-full -left-40 mt-2 w-[680px] rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl z-50 overflow-hidden"
                        >
                          {/* Header */}
                          <div className="px-6 pt-5 pb-3 border-b border-border/60">
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Our Services</p>
                          </div>

                          {/* Services grid */}
                          <div className="grid grid-cols-3 gap-1 p-3">
                            {serviceItems.map((service, i) => {
                              const Icon = service.icon;
                              return (
                                <motion.a
                                  key={service.name}
                                  href={service.href}
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.03, duration: 0.25 }}
                                  onMouseEnter={() => setHoveredService(i)}
                                  onMouseLeave={() => setHoveredService(null)}
                                  className="group relative flex items-start gap-3 rounded-xl p-3 transition-all duration-300 hover:bg-muted/80"
                                >
                                  {/* Icon container with gradient */}
                                  <div className={cn(
                                    "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br transition-all duration-300",
                                    service.color,
                                    hoveredService === i ? "shadow-lg scale-110" : "opacity-80"
                                  )}>
                                    <Icon className="h-5 w-5 text-white" />
                                    {/* Glow effect on hover */}
                                    {hoveredService === i && (
                                      <motion.div
                                        layoutId="serviceGlow"
                                        className={cn("absolute inset-0 rounded-lg bg-gradient-to-br blur-md -z-10", service.color)}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.5 }}
                                        transition={{ duration: 0.2 }}
                                      />
                                    )}
                                  </div>

                                  <div className="min-w-0">
                                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                                      {service.name}
                                    </p>
                                    <p className="mt-0.5 text-xs text-muted-foreground leading-snug line-clamp-2">
                                      {service.desc}
                                    </p>
                                  </div>

                                  {/* Arrow on hover */}
                                  <motion.div
                                    initial={{ opacity: 0, x: -4 }}
                                    animate={{ opacity: hoveredService === i ? 1 : 0, x: hoveredService === i ? 0 : -4 }}
                                    className="absolute right-2 top-1/2 -translate-y-1/2"
                                  >
                                    <ArrowRight className="h-3.5 w-3.5 text-primary" />
                                  </motion.div>
                                </motion.a>
                              );
                            })}
                          </div>

                          {/* Footer CTA */}
                          <div className="border-t border-border/60 px-6 py-3 bg-muted/30">
                            <a href="/services" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                              View All Services
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Contact info + CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="tel:+919113030506" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm">
                  <div className="text-primary font-semibold">Call Us</div>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">9113030506</div>
                </div>
              </a>
              <a href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6">Get Quote</Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div initial={false} animate={{ height: isMobileMenuOpen ? "auto" : 0, opacity: isMobileMenuOpen ? 1 : 0 }} className="lg:hidden overflow-hidden">
            <div className="py-4 space-y-2 border-t border-border">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a href={link.href} className="block text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-4 rounded-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                  </a>
                  {link.hasDropdown && (
                    <div className="pl-4 space-y-1">
                      {serviceItems.map((item) => (
                        <a key={item.name} href={item.href} className="flex items-center gap-3 text-muted-foreground hover:text-primary py-2 px-4 text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                          <item.icon className="h-4 w-4 text-primary/70" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border space-y-3 px-4">
                <a href="tel:+919113030506" className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground">9113030506</span>
                </a>
                <a href="/contact" className="block">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Get Quote</Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
};
