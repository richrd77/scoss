import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WarmBackground } from "@/components/WarmBackground";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BenefitItem {
  icon: LucideIcon;
  text: string;
}

interface RelatedService {
  icon: LucideIcon;
  title: string;
  href: string;
}

interface ServicePageLayoutProps {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  headline: string;
  highlightWord: string;
  subheadline: string;
  services: ServiceItem[];
  servicesTitle: string;
  servicesHighlight: string;
  benefitsTitle: string;
  benefitsHighlight: string;
  benefitsDescription: string;
  benefits: BenefitItem[];
  relatedServices: RelatedService[];
}

const ServicePageLayout = ({
  metaTitle,
  metaDescription,
  badge,
  headline,
  highlightWord,
  subheadline,
  services,
  servicesTitle,
  servicesHighlight,
  benefitsTitle,
  benefitsHighlight,
  benefitsDescription,
  benefits,
  relatedServices,
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        schemaType="Service"
        serviceName={badge}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: badge, href: "" },
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
              {badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground">
              {headline}{" "}
              <span className="text-primary">{highlightWord}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 shadow-lg shadow-primary/25">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-2 border-border hover:border-primary/40 hover:bg-primary/5 rounded-full font-semibold px-8">
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              {servicesTitle} <span className="text-primary">{servicesHighlight}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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

      {/* Why Choose Us */}
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
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
                {benefitsTitle} <span className="text-primary">{benefitsHighlight}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {benefitsDescription}
              </p>
              <div className="space-y-4">
                {benefits.map((item, index) => (
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
              <Link to="/contact">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full shadow-lg shadow-primary/25">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="relative py-16 overflow-hidden">
        <WarmBackground />
        <div className="container relative z-10 px-4 md:px-6">
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
          <div className="flex flex-wrap justify-center gap-6">
            {relatedServices.map((rs, index) => (
              <motion.div
                key={rs.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={rs.href}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_-8px_rgba(255,163,71,0.2)] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-[0_4px_12px_-2px_hsl(var(--primary)/0.35)]">
                    <rs.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{rs.title}</span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-10"
          >
            <Link to="/">
              <Button variant="outline" size="lg" className="border-2 border-border hover:border-primary/40 hover:bg-primary/5 rounded-full font-semibold px-8">
                Explore All IT Solutions
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

export default ServicePageLayout;
