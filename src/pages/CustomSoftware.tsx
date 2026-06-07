import ServicePageLayout from "@/components/ServicePageLayout";
import { 
  Code, Smartphone, Monitor, Database, RefreshCcw, TestTube, Settings, Headphones,
  Zap, Shield, TrendingUp, Users, Globe, Megaphone
} from "lucide-react";

const services = [
  { icon: Code, title: "Custom Web Applications", description: "Scalable web apps built with modern frameworks tailored to your business logic." },
  { icon: Smartphone, title: "Mobile App Development", description: "Native and cross-platform mobile apps for iOS and Android." },
  { icon: Monitor, title: "Desktop Applications", description: "Powerful desktop software for Windows, macOS, and Linux." },
  { icon: Database, title: "API Development & Integration", description: "RESTful and GraphQL APIs with third-party service integrations." },
  { icon: RefreshCcw, title: "Legacy System Modernization", description: "Upgrade outdated systems to modern, maintainable architectures." },
  { icon: TestTube, title: "Quality Assurance & Testing", description: "Comprehensive testing including unit, integration, and end-to-end tests." },
  { icon: Settings, title: "Database Design & Optimization", description: "Efficient database schemas with query optimization for peak performance." },
];

const benefits = [
  { icon: Zap, text: "Agile development methodology" },
  { icon: Shield, text: "Secure, production-ready code" },
  { icon: TrendingUp, text: "Scalable architecture for growth" },
  { icon: Users, text: "Dedicated project manager" },
  { icon: Headphones, text: "Ongoing maintenance & support" },
];

const relatedServices = [
  { icon: Globe, title: "Website Design & Development", href: "/services/website-design-services-tumkur" },
  { icon: Megaphone, title: "Digital Marketing & SEO", href: "/services/digital-marketing" },
];

const CustomSoftware = () => (
  <ServicePageLayout
    metaTitle="Custom Software Development in Tumkur | SCOSS Services"
    metaDescription="Get custom software solutions built for your business. Web apps, mobile apps, APIs, and more. Contact SCOSS Services in Tumkur for a free consultation."
    badge="Custom Software Development"
    headline="Custom Software Development in"
    highlightWord="Tumkur"
    subheadline="Get software that's built specifically for your business requirements. Scalable, secure, and efficient solutions that streamline your operations."
    services={services}
    servicesTitle="Software Development"
    servicesHighlight="Solutions"
    benefitsTitle="Why Choose Our"
    benefitsHighlight="Software Solutions?"
    benefitsDescription="We deliver high-quality, maintainable code using modern frameworks and agile methodologies."
    benefits={benefits}
    relatedServices={relatedServices}
  />
);

export default CustomSoftware;
