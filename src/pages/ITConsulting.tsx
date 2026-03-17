import ServicePageLayout from "@/components/ServicePageLayout";
import { 
  Lightbulb, BarChart3, Settings, FileText, Users, Target, Cpu,
  Zap, TrendingUp, CheckCircle, Shield, Globe, Megaphone
} from "lucide-react";

const services = [
  { icon: Lightbulb, title: "IT Strategy Development", description: "Develop technology roadmaps aligned with your business objectives." },
  { icon: BarChart3, title: "Digital Transformation", description: "Guide your organization through end-to-end digital transformation." },
  { icon: Settings, title: "Technology Assessment", description: "Comprehensive audit of your current IT infrastructure and systems." },
  { icon: FileText, title: "IT Governance & Policy", description: "Develop IT governance frameworks and security policies." },
  { icon: Users, title: "Vendor Evaluation", description: "Expert guidance on selecting the right technology vendors and solutions." },
  { icon: Target, title: "Project Management", description: "End-to-end IT project management from planning to deployment." },
  { icon: Cpu, title: "Cost Optimization", description: "IT budget planning and cost optimization strategies." },
];

const benefits = [
  { icon: Zap, text: "Expert technology guidance" },
  { icon: TrendingUp, text: "Align IT with business goals" },
  { icon: CheckCircle, text: "Proven methodologies" },
  { icon: Shield, text: "Risk assessment & mitigation" },
];

const relatedServices = [
  { icon: Globe, title: "Cloud Solutions", href: "/services/cloud-solutions" },
  { icon: Megaphone, title: "Custom Software Development", href: "/services/custom-software-development" },
];

const ITConsulting = () => (
  <ServicePageLayout
    metaTitle="IT Consulting Services in Tumkur | SCOSS Services"
    metaDescription="Strategic IT consulting for business growth. Technology assessment, digital transformation, and IT strategy development by SCOSS Services in Tumkur."
    badge="IT Consulting"
    headline="IT Consulting Services in"
    highlightWord="Tumkur"
    subheadline="Make informed technology decisions with expert IT consulting. We develop strategies aligned with your goals to drive innovation and efficiency."
    services={services}
    servicesTitle="Consulting"
    servicesHighlight="Services"
    benefitsTitle="Why Choose Our"
    benefitsHighlight="IT Consulting?"
    benefitsDescription="We help businesses develop IT strategies that drive innovation, reduce costs, and create competitive advantages."
    benefits={benefits}
    relatedServices={relatedServices}
  />
);

export default ITConsulting;
