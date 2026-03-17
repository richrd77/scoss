import ServicePageLayout from "@/components/ServicePageLayout";
import { 
  Wifi, Server, Shield, Globe, Monitor, Settings, Database,
  Zap, TrendingUp, CheckCircle, Lock, Cloud, Megaphone
} from "lucide-react";

const services = [
  { icon: Globe, title: "Network Design & Architecture", description: "Custom network architecture designed for performance and scalability." },
  { icon: Server, title: "LAN/WAN Implementation", description: "Enterprise-grade local and wide area network setup and configuration." },
  { icon: Wifi, title: "Wireless Network Solutions", description: "Secure, high-performance Wi-Fi for offices, warehouses, and campuses." },
  { icon: Shield, title: "Network Security", description: "Firewalls, VPNs, and intrusion detection to protect your network." },
  { icon: Monitor, title: "Network Monitoring", description: "24/7 network performance monitoring with proactive issue resolution." },
  { icon: Settings, title: "Performance Optimization", description: "Tune your network for maximum throughput and minimum latency." },
  { icon: Database, title: "Disaster Recovery", description: "Backup solutions and disaster recovery planning for business continuity." },
];

const benefits = [
  { icon: Zap, text: "High-speed, low-latency networks" },
  { icon: TrendingUp, text: "99.9% uptime reliability" },
  { icon: Lock, text: "Enterprise-grade security" },
  { icon: CheckCircle, text: "Scalable for future growth" },
];

const relatedServices = [
  { icon: Cloud, title: "Cloud Solutions", href: "/services/cloud-solutions" },
  { icon: Megaphone, title: "IT Infrastructure Services", href: "/services/it-infrastructure" },
];

const NetworkSolutions = () => (
  <ServicePageLayout
    metaTitle="Network Solutions & Services in Tumkur | SCOSS Services"
    metaDescription="Reliable network infrastructure and management. LAN/WAN, wireless networks, security, and 24/7 monitoring by SCOSS Services in Tumkur."
    badge="Network Solutions"
    headline="Network Solutions in"
    highlightWord="Tumkur"
    subheadline="Build a robust and reliable network infrastructure that ensures seamless connectivity, optimal performance, and maximum uptime."
    services={services}
    servicesTitle="Network"
    servicesHighlight="Solutions"
    benefitsTitle="Why Choose Our"
    benefitsHighlight="Network Services?"
    benefitsDescription="We design, implement, and manage networks that keep your business connected and productive."
    benefits={benefits}
    relatedServices={relatedServices}
  />
);

export default NetworkSolutions;
