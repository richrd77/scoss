import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WarmBackground } from "@/components/WarmBackground";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { 
  Globe, Smartphone, ShoppingCart, RefreshCcw, Wrench, 
  CheckCircle, ArrowRight, Palette, Zap, Search, Lock,
  Phone, Mail, MapPin, Megaphone, TabletSmartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useState } from "react";

const webServices = [
  {
    icon: Palette,
    title: "Custom Website Design",
    description: "Unique, brand-focused website designs tailored to your identity and business goals."
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Website Development",
    description: "Seamless online shopping experiences with secure payments and inventory management."
  },
  {
    icon: Globe,
    title: "CMS-Based Websites",
    description: "Easy-to-manage sites using WordPress, Joomla, and other popular CMS platforms."
  },
  {
    icon: RefreshCcw,
    title: "Website Redesign & Revamp",
    description: "Modernize your existing website for better UX, performance, and conversion rates."
  },
  {
    icon: Smartphone,
    title: "Mobile-Responsive Design",
    description: "Websites that look and function perfectly across all devices and screen sizes."
  },
  {
    icon: Search,
    title: "SEO-Optimized Websites",
    description: "Built with search engine optimization in mind from the ground up for maximum visibility."
  },
  {
    icon: Lock,
    title: "Secure & Fast Hosting",
    description: "Reliable hosting solutions with SSL, backups, and performance optimization."
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Ongoing support, updates, and maintenance to keep your website running at peak performance."
  },
];

const benefits = [
  { icon: Zap, text: "Lightning-fast load speeds" },
  { icon: TabletSmartphone, text: "100% mobile responsive" },
  { icon: Search, text: "SEO-optimized structure" },
  { icon: CheckCircle, text: "Industry-best practices" },
];

const whyChooseUs = [
  { icon: Zap, text: "Lightning-fast loading speeds under 2 seconds" },
  { icon: TabletSmartphone, text: "100% mobile responsive on all devices" },
  { icon: Search, text: "SEO-optimized for higher search rankings" },
  { icon: Lock, text: "SSL secured with regular backups" },
  { icon: CheckCircle, text: "Clean, maintainable code architecture" },
];

const relatedServices = [
  { icon: Megaphone, title: "Digital Marketing", href: "/services/digital-marketing" },
  { icon: Globe, title: "Cloud Solutions", href: "/services/cloud-solutions" },
];

const WebDevelopment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    details: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = formData.phone.trim();
    if (!formData.name.trim() || !phone) return;
    const message = `Hi, I'm ${formData.name.trim()}. ${formData.company ? `Company: ${formData.company}. ` : ""}${formData.details ? `Project: ${formData.details}. ` : ""}${formData.budget ? `Budget: ${formData.budget}. ` : ""}Please contact me at ${phone}.`;
    window.open(`https://wa.me/919113030506?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Website Design Services in Tumkur | SCOSS Services"
        description="Looking for expert website design services in Tumkur? We specialize in custom websites, e-commerce, and responsive solutions. Get a free consultation today."
        schemaType="Service"
        serviceName="Website Design & Development"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Website Design", href: "/services/website-design-services-tumkur" },
        ]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <WarmBackground />
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 uppercase tracking-widest">
              Website Design & Development
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground">
              Professional Website Design Services in{" "}
              <span className="text-primary">Tumkur</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Transform your business with professional web solutions. From simple business websites 
              to complex e-commerce platforms, we help you establish a powerful online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#consultation-form">
                <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 shadow-lg shadow-primary/25">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-2 border-border hover:border-primary/40 hover:bg-primary/5 rounded-full font-semibold px-8">
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Web Services */}
      <section className="relative py-20 overflow-hidden">
        <WarmBackground />
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm uppercase tracking-widest mb-4 block font-bold">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-foreground">
              Our Web <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06),0_8px_16px_-6px_rgba(255,163,71,0.12)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.1),0_12px_24px_-8px_rgba(255,163,71,0.2)] transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-[0_4px_16px_-2px_hsl(var(--primary)/0.4)] group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Websites */}
      <section className="relative py-20 overflow-hidden">
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-sm uppercase tracking-widest mb-4 block font-bold">
                Why Us
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
                Your Trusted Website Designer in <span className="text-primary">Tumkur</span>
              </h2>
              <h3 className="text-xl font-semibold text-muted-foreground mb-8">
                What Sets Our Websites Apart?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                We build websites that not only look stunning but also perform exceptionally 
                well in terms of speed, SEO, and user experience.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_-2px_hsl(var(--primary)/0.35)]">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-semibold text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.08)] p-8 md:p-10"
            >
              <h3 className="text-2xl font-black mb-2 text-foreground">
                Quick <span className="text-primary">Contact</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Reach out for a free consultation and quote.
              </p>
              <div className="space-y-4 mb-6">
                <a href="tel:+919113030506" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="font-semibold text-foreground">9113030506 / 8971417455</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Visit Us</p>
                    <p className="font-semibold text-foreground text-sm">SLN Krupa, Mahalakshmi Nagar, Tumkur</p>
                  </div>
                </div>
              </div>
              <a href="#consultation-form">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full shadow-lg shadow-primary/25">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA + Contact Form Section */}
      <section id="consultation-form" className="relative py-20 overflow-hidden">
        <WarmBackground />
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm uppercase tracking-widest mb-4 block font-bold">
              Start Your Project
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-foreground">
              Ready to Start Your <span className="text-primary">Web Project?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take the first step toward a powerful online presence. Contact us today for a free consultation and quote.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.08)] p-8 md:p-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-semibold text-foreground">Name *</Label>
                  <Input
                    id="name"
                    required
                    maxLength={100}
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                    className="rounded-xl border-border bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-semibold text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    maxLength={255}
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                    className="rounded-xl border-border bg-background"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-semibold text-foreground">Phone *</Label>
                  <Input
                    id="phone"
                    required
                    maxLength={15}
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                    className="rounded-xl border-border bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="font-semibold text-foreground">Company</Label>
                  <Input
                    id="company"
                    maxLength={100}
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData(p => ({ ...p, company: e.target.value }))}
                    className="rounded-xl border-border bg-background"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="details" className="font-semibold text-foreground">Project Details</Label>
                <Textarea
                  id="details"
                  maxLength={1000}
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData(p => ({ ...p, details: e.target.value }))}
                  className="rounded-xl border-border bg-background resize-none"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget" className="font-semibold text-foreground">Budget Range</Label>
                <Input
                  id="budget"
                  maxLength={50}
                  placeholder="e.g. ₹10,000 - ₹50,000"
                  value={formData.budget}
                  onChange={(e) => setFormData(p => ({ ...p, budget: e.target.value }))}
                  className="rounded-xl border-border bg-background"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full shadow-lg shadow-primary/25 text-lg py-6">
                Send via WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-primary text-sm uppercase tracking-widest mb-3 block font-bold">
              Explore More
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-foreground">
              Related <span className="text-primary">Services</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            {relatedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={service.href}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_-2px_hsl(var(--primary)/0.35)] group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</span>
                  <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-8"
          >
            <Link to="/">
              <Button variant="outline" className="border-2 border-border hover:border-primary/40 hover:bg-primary/5 rounded-full font-semibold px-8">
                Explore Our IT Solutions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
