import ServicePageLayout from "@/components/ServicePageLayout";
import { 
  Headphones, Monitor, Settings, Download, BarChart3, Shield, Users,
  Zap, Clock, CheckCircle, TrendingUp, Globe, Megaphone
} from "lucide-react";

const services = [
  { icon: Headphones, title: "24/7 Helpdesk Support", description: "Round-the-clock technical support via phone, email, and remote access." },
  { icon: Monitor, title: "Remote & On-Site Assistance", description: "Flexible support options - remote troubleshooting or on-site visits." },
  { icon: Settings, title: "Hardware Troubleshooting", description: "Diagnosis and repair of computers, printers, servers, and peripherals." },
  { icon: Download, title: "Software Installation & Updates", description: "Software deployment, updates, patch management, and license tracking." },
  { icon: BarChart3, title: "System Performance Monitoring", description: "Proactive monitoring to identify and resolve issues before they impact you." },
  { icon: Shield, title: "Preventive Maintenance", description: "Scheduled maintenance to keep your systems running at peak performance." },
  { icon: Users, title: "End-User Training", description: "Training sessions to help your team get the most from your IT systems." },
];

const benefits = [
  { icon: Clock, text: "Fast response times" },
  { icon: Zap, text: "Proactive issue prevention" },
  { icon: CheckCircle, text: "Experienced certified technicians" },
  { icon: TrendingUp, text: "Minimize downtime & costs" },
];

const relatedServices = [
  { icon: Globe, title: "IT Infrastructure Services", href: "/services/it-infrastructure" },
  { icon: Megaphone, title: "Network Solutions", href: "/services/network-solutions" },
];

const TechnicalSupport = () => (
  <ServicePageLayout
    metaTitle="Technical Support Services in Tumkur | SCOSS Services"
    metaDescription="24/7 technical support and IT maintenance services. Remote and on-site assistance for businesses in Tumkur by SCOSS Services."
    badge="Technical Support"
    headline="Technical Support Services in"
    highlightWord="Tumkur"
    subheadline="Keep your systems running smoothly with our round-the-clock technical support, proactive maintenance, and continuous monitoring."
    services={services}
    servicesTitle="Support"
    servicesHighlight="Services"
    benefitsTitle="Why Choose Our"
    benefitsHighlight="Support Plans?"
    benefitsDescription="Our experienced team provides quick resolutions, proactive maintenance, and continuous monitoring to minimize downtime."
    benefits={benefits}
    relatedServices={relatedServices}
  />
);

export default TechnicalSupport;
