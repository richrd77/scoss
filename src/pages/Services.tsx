import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WarmBackground } from "@/components/WarmBackground";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import service images
import webDevImg from "@/assets/services/web-dev.jpg";
import digitalMarketingImg from "@/assets/services/digital-marketing.jpg";
import softwareDevImg from "@/assets/services/software-dev.jpg";
import cloudImg from "@/assets/services/cloud.jpg";
import cybersecurityImg from "@/assets/services/cybersecurity.jpg";
import itConsultingImg from "@/assets/services/it-consulting.jpg";
import networkImg from "@/assets/services/network.jpg";
import supportImg from "@/assets/services/support.jpg";

const services = [
  {
    title: "Website Design and Development",
    description: "Modern, responsive websites crafted to elevate your digital presence and drive business growth.",
    features: ["Custom design", "Mobile optimization", "SEO-friendly development", "E-commerce solutions", "CMS integration"],
    image: webDevImg,
    href: "/services/web-development",
  },
  {
    title: "Digital Marketing Services",
    description: "Results-driven digital marketing strategies to boost your online presence and growth.",
    features: ["SEO optimization", "Social media marketing", "PPC campaigns", "Content marketing", "Email marketing"],
    image: digitalMarketingImg,
    href: "/services/digital-marketing",
  },
  {
    title: "Custom Software Development",
    description: "Custom software solutions tailored to your specific business needs and workflows.",
    features: ["Web applications", "Mobile apps", "Desktop software", "API development", "System integration"],
    image: softwareDevImg,
    href: "/services/custom-software-development",
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure services for modern businesses.",
    features: ["Cloud migration", "Infrastructure optimization", "Managed services", "Backup solutions", "Cost optimization"],
    image: cloudImg,
    href: "/services/cloud-solutions",
  },
  {
    title: "Cybersecurity Services",
    description: "Protect your business from cyber threats with our comprehensive security solutions.",
    features: ["Security audits", "Threat detection", "Data protection", "Compliance management", "Incident response"],
    image: cybersecurityImg,
    href: "/services/cybersecurity",
  },
  {
    title: "IT Consulting",
    description: "Expert IT consulting to align technology with your business goals.",
    features: ["IT strategy", "Digital transformation", "Technology assessment", "Vendor evaluation", "Project management"],
    image: itConsultingImg,
    href: "/services/it-consulting",
  },
  {
    title: "Network Solutions",
    description: "Robust network infrastructure design, implementation, and management.",
    features: ["Network design", "LAN/WAN setup", "Wireless networks", "Network security", "Performance monitoring"],
    image: networkImg,
    href: "/services/network-solutions",
  },
  {
    title: "Technical Support",
    description: "Reliable technical support to keep your systems running smoothly.",
    features: ["24/7 support", "Remote assistance", "On-site support", "System maintenance", "Troubleshooting"],
    image: supportImg,
    href: "/services/technical-support",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <SEOHead
        title="IT Services in Tumkur - SCOSS Services"
        description="Explore SCOSS Services' comprehensive IT solutions: web development, digital marketing, cloud solutions, cybersecurity, and more in Tumkur."
        schemaType="CollectionPage"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
      <WarmBackground />
      <Navbar />
      <main className="pt-32 pb-20 relative z-10">
        <div className="container px-4 md:px-6">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm uppercase tracking-widest mb-4 block font-semibold">
              EXPLORE OUR EXPERTISE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer reliable solutions to support your business growth and development. 
              From web development to cybersecurity, we've got you covered.
            </p>
          </motion.div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={service.href} className="w-full block">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center glass-card p-10 md:p-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Don't see exactly what you need? We specialize in creating custom solutions 
              tailored to your unique business requirements.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
