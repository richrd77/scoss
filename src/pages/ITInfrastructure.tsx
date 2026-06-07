import ServicePageLayout from "@/components/ServicePageLayout";
import { 
  Headphones, Cloud, Shield, Database, Server, Cpu, Wifi,
  TrendingUp, Clock, Lock, CheckCircle, Globe, Megaphone
} from "lucide-react";

const services = [
  { icon: Headphones, title: "Managed IT Services", description: "Complete IT management so you can focus on your core business operations." },
  { icon: Cloud, title: "Cloud Computing", description: "AWS, Azure, and Google Cloud solutions for scalable infrastructure." },
  { icon: Shield, title: "Network & Security", description: "Robust network architecture with enterprise-grade security measures." },
  { icon: Database, title: "Server & Storage Management", description: "Reliable server solutions and data storage with automated backups." },
  { icon: Server, title: "Enterprise IT Support", description: "24/7 technical support for your entire IT infrastructure." },
  { icon: Cpu, title: "Hardware & Software Procurement", description: "Source the best hardware and software at competitive prices." },
  { icon: Wifi, title: "IoT & Smart Infrastructure", description: "Connect and automate your business with IoT solutions." },
];

const benefits = [
  { icon: TrendingUp, text: "Improves operational efficiency" },
  { icon: Clock, text: "Reduces system downtime" },
  { icon: Lock, text: "Enhances security posture" },
  { icon: CheckCircle, text: "Scales with your growth" },
];

const relatedServices = [
  { icon: Globe, title: "Cloud Solutions", href: "/services/cloud-solutions" },
  { icon: Megaphone, title: "Cybersecurity Services", href: "/services/cybersecurity" },
];

const ITInfrastructure = () => (
  <ServicePageLayout
    metaTitle="IT Infrastructure Services in Tumkur | SCOSS Services"
    metaDescription="Scalable, secure IT infrastructure services. Managed IT, cloud computing, network security, and 24/7 support by SCOSS Services in Tumkur."
    badge="IT Infrastructure Services"
    headline="Robust IT Infrastructure Services in"
    highlightWord="Tumkur"
    subheadline="Scalable, secure, and efficient IT solutions to power your business growth and digital transformation."
    services={services}
    servicesTitle="IT Infrastructure"
    servicesHighlight="Solutions"
    benefitsTitle="Why IT Infrastructure"
    benefitsHighlight="Matters"
    benefitsDescription="A robust IT infrastructure is the backbone of modern business success. It ensures your operations run smoothly, securely, and efficiently."
    benefits={benefits}
    relatedServices={relatedServices}
  />
);

export default ITInfrastructure;
