import ServicePageLayout from "@/components/ServicePageLayout";
import { 
  Cloud, Server, Shield, Database, Cpu, RefreshCcw, BarChart3,
  Zap, TrendingUp, Lock, DollarSign, Globe, Megaphone
} from "lucide-react";

const services = [
  { icon: Cloud, title: "Cloud Migration", description: "Seamless migration strategy and execution to AWS, Azure, or Google Cloud." },
  { icon: Server, title: "Cloud Infrastructure", description: "Scalable, resilient cloud infrastructure design and management." },
  { icon: Shield, title: "Cloud Security & Compliance", description: "Enterprise-grade security with regulatory compliance frameworks." },
  { icon: Database, title: "Hybrid & Multi-Cloud", description: "Flexible solutions combining on-premise and multiple cloud providers." },
  { icon: Cpu, title: "Serverless Architecture", description: "Modern serverless implementations for cost-efficient, auto-scaling apps." },
  { icon: RefreshCcw, title: "Cloud Cost Optimization", description: "Reduce cloud spending without compromising performance." },
  { icon: BarChart3, title: "24/7 Cloud Monitoring", description: "Continuous monitoring and management of your cloud infrastructure." },
];

const benefits = [
  { icon: Zap, text: "99.9% uptime guarantee" },
  { icon: TrendingUp, text: "Auto-scaling for peak performance" },
  { icon: Lock, text: "Enterprise-grade security" },
  { icon: DollarSign, text: "Pay-as-you-go pricing" },
];

const relatedServices = [
  { icon: Globe, title: "IT Infrastructure Services", href: "/services/it-infrastructure" },
  { icon: Megaphone, title: "Cybersecurity Services", href: "/services/cybersecurity" },
];

const CloudSolutions = () => (
  <ServicePageLayout
    metaTitle="Cloud Solutions & Services in Tumkur | SCOSS Services"
    metaDescription="Scalable cloud computing solutions - AWS, Azure, Google Cloud. Migration, optimization, and management services by SCOSS Services in Tumkur."
    badge="Cloud Solutions"
    headline="Cloud Computing Solutions in"
    highlightWord="Tumkur"
    subheadline="Embrace the power of cloud computing. We help businesses migrate, optimize, and leverage cloud technologies to reduce costs and improve scalability."
    services={services}
    servicesTitle="Cloud"
    servicesHighlight="Services"
    benefitsTitle="Why Choose Our"
    benefitsHighlight="Cloud Solutions?"
    benefitsDescription="Our certified cloud experts ensure smooth transitions and optimal performance for your cloud infrastructure."
    benefits={benefits}
    relatedServices={relatedServices}
  />
);

export default CloudSolutions;
