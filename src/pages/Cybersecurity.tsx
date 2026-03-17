import ServicePageLayout from "@/components/ServicePageLayout";
import { 
  Shield, Search, Lock, Eye, Users, FileCheck, AlertTriangle,
  Zap, TrendingUp, CheckCircle, Clock, Globe, Server
} from "lucide-react";

const services = [
  { icon: Search, title: "Vulnerability Assessment", description: "Comprehensive security assessments to identify and fix vulnerabilities." },
  { icon: Shield, title: "Penetration Testing", description: "Ethical hacking to test your defenses against real-world attacks." },
  { icon: Lock, title: "Firewall & Network Security", description: "Enterprise firewall setup, configuration, and ongoing management." },
  { icon: Eye, title: "Threat Monitoring (24/7)", description: "Round-the-clock monitoring and rapid incident response." },
  { icon: Users, title: "Security Awareness Training", description: "Employee training programs to prevent social engineering attacks." },
  { icon: FileCheck, title: "Compliance Management", description: "GDPR, ISO 27001, and industry-specific compliance frameworks." },
  { icon: AlertTriangle, title: "Incident Response Planning", description: "Structured response plans to minimize damage from security breaches." },
];

const benefits = [
  { icon: Shield, text: "Multi-layered defense strategy" },
  { icon: Clock, text: "24/7 real-time monitoring" },
  { icon: CheckCircle, text: "Industry compliance certified" },
  { icon: TrendingUp, text: "Proactive threat intelligence" },
  { icon: Zap, text: "Rapid incident response" },
];

const relatedServices = [
  { icon: Globe, title: "Cloud Solutions", href: "/services/cloud-solutions" },
  { icon: Server, title: "IT Infrastructure Services", href: "/services/it-infrastructure" },
];

const Cybersecurity = () => (
  <ServicePageLayout
    metaTitle="Cybersecurity Services in Tumkur | SCOSS Services"
    metaDescription="Protect your business with enterprise-grade cybersecurity services. Vulnerability assessments, penetration testing, and 24/7 monitoring by SCOSS Services."
    badge="Cybersecurity Services"
    headline="Cybersecurity Services in"
    highlightWord="Tumkur"
    subheadline="Protect your business from cyber threats with comprehensive security assessments, robust protection, and continuous monitoring."
    services={services}
    servicesTitle="Cybersecurity"
    servicesHighlight="Solutions"
    benefitsTitle="Why Trust Our"
    benefitsHighlight="Security Expertise?"
    benefitsDescription="We provide enterprise-grade protection with proactive threat detection and rapid incident response capabilities."
    benefits={benefits}
    relatedServices={relatedServices}
  />
);

export default Cybersecurity;
