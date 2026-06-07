import ServicePageLayout from "@/components/ServicePageLayout";
import { 
  Search, Target, Share2, FileText, ShoppingBag, Mail, BarChart3,
  TrendingUp, Users, DollarSign, Award, Globe, Server
} from "lucide-react";

const services = [
  { icon: Search, title: "Search Engine Optimization (SEO)", description: "Rank higher on Google and drive organic traffic with our proven SEO strategies." },
  { icon: Target, title: "Pay-Per-Click (PPC) Advertising", description: "Targeted ad campaigns on Google, Facebook, and Instagram for immediate results." },
  { icon: Share2, title: "Social Media Marketing", description: "Build your brand presence across all major social platforms with engaging content." },
  { icon: FileText, title: "Content Marketing", description: "Compelling blogs, articles, and content that establishes you as an industry leader." },
  { icon: ShoppingBag, title: "E-commerce Marketing", description: "Specialized strategies for online stores to boost sales and customer loyalty." },
  { icon: Mail, title: "Email Marketing", description: "Automated email campaigns that nurture leads and drive conversions." },
  { icon: BarChart3, title: "Web Analytics & Reporting", description: "Data-driven insights and monthly reports to track your marketing ROI." },
];

const benefits = [
  { icon: TrendingUp, text: "Increase online visibility" },
  { icon: Users, text: "Generate quality leads" },
  { icon: DollarSign, text: "Maximize ROI on ad spend" },
  { icon: Award, text: "Build brand authority" },
];

const relatedServices = [
  { icon: Globe, title: "Website Design & Development", href: "/services/website-design-services-tumkur" },
  { icon: Server, title: "IT Infrastructure Services", href: "/services/it-infrastructure" },
];

const DigitalMarketing = () => (
  <ServicePageLayout
    metaTitle="Digital Marketing Services in Tumkur | SEO, PPC, Social Media | SCOSS Services"
    metaDescription="Drive growth with data-driven digital marketing. SEO, PPC, social media, and content marketing services by SCOSS Services in Tumkur."
    badge="Digital Marketing Services"
    headline="Professional Digital Marketing Services in"
    highlightWord="Tumkur"
    subheadline="Drive growth, increase revenue, and dominate your market with data-driven digital marketing strategies."
    services={services}
    servicesTitle="Digital Marketing"
    servicesHighlight="Solutions"
    benefitsTitle="Why Choose Our"
    benefitsHighlight="Marketing Services?"
    benefitsDescription="We develop data-driven strategies that increase visibility, attract qualified leads, and drive conversions."
    benefits={benefits}
    relatedServices={relatedServices}
  />
);

export default DigitalMarketing;
