import webDevImg from "@/assets/services/web-dev.jpg";
import digitalMarketingImg from "@/assets/services/digital-marketing.jpg";
import softwareDevImg from "@/assets/services/software-dev.jpg";
import cloudImg from "@/assets/services/cloud.jpg";
import cybersecurityImg from "@/assets/services/cybersecurity.jpg";
import itConsultingImg from "@/assets/services/it-consulting.jpg";
import networkImg from "@/assets/services/network.jpg";
import supportImg from "@/assets/services/support.jpg";

export interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  introduction: string;
  features: string[];
  cta: string;
  image: string;
  link: string;
}

export const servicesData: ServiceData[] = [
  {
    title: "Website Design and Development",
    subtitle: "Solutions",
    description: "Modern, responsive websites crafted to elevate your digital presence",
    introduction: "Transform your online presence with our professional website design and development services. We create stunning, user-friendly websites that not only look great but also drive results. Our team combines creative design with cutting-edge technology to deliver websites that engage visitors and convert them into customers.",
    features: [
      "Custom responsive web design tailored to your brand",
      "Mobile-first development for all devices",
      "SEO-optimized structure for better search rankings",
      "E-commerce solutions with secure payment integration",
      "Content Management System (CMS) integration",
      "Website maintenance and support packages",
      "Fast loading speeds and performance optimization",
      "SSL security and regular backups"
    ],
    cta: "Start Your Project",
    image: webDevImg,
    link: "/services/website-design-services-tumkur",
  },
  {
    title: "Digital Marketing Services",
    subtitle: "Solutions",
    description: "Results-driven digital marketing strategies to boost your online presence and growth",
    introduction: "Accelerate your business growth with our comprehensive digital marketing services. We develop data-driven strategies that increase your online visibility, attract qualified leads, and drive conversions. From SEO to social media marketing, we've got all your digital marketing needs covered.",
    features: [
      "Search Engine Optimization (SEO) for top rankings",
      "Social Media Marketing across all platforms",
      "Pay-Per-Click (PPC) advertising campaigns",
      "Content marketing and blog management",
      "Email marketing automation",
      "Brand reputation management",
      "Analytics and performance tracking",
      "Conversion rate optimization"
    ],
    cta: "Grow Your Business",
    image: digitalMarketingImg,
    link: "/services/digital-marketing",
  },
  {
    title: "Custom Software Development",
    subtitle: "Solutions",
    description: "Custom software solutions tailored to your business needs",
    introduction: "Get software that's built specifically for your business requirements. Our custom software development services deliver scalable, secure, and efficient solutions that streamline your operations and give you a competitive edge. We work closely with you from concept to deployment.",
    features: [
      "Custom web application development",
      "Mobile app development (iOS & Android)",
      "Desktop application development",
      "API development and integration",
      "Legacy system modernization",
      "Database design and optimization",
      "Quality assurance and testing",
      "Ongoing maintenance and support"
    ],
    cta: "Learn More",
    image: softwareDevImg,
    link: "/services/custom-software-development",
  },
  {
    title: "Cloud Solutions",
    subtitle: "Solutions",
    description: "Secure and scalable cloud infrastructure services",
    introduction: "Embrace the power of cloud computing with our comprehensive cloud solutions. We help businesses migrate to the cloud, optimize their infrastructure, and leverage cloud technologies to reduce costs while improving scalability and performance. Our certified experts ensure a smooth transition.",
    features: [
      "Cloud migration strategy and execution",
      "AWS, Azure, and Google Cloud services",
      "Cloud infrastructure optimization",
      "Hybrid and multi-cloud solutions",
      "Cloud security and compliance",
      "Serverless architecture implementation",
      "Cloud cost optimization",
      "24/7 cloud monitoring and management"
    ],
    cta: "Explore Cloud Services",
    image: cloudImg,
    link: "/services/cloud-solutions",
  },
  {
    title: "Cybersecurity Services",
    subtitle: "Solutions",
    description: "Comprehensive security solutions for your digital assets",
    introduction: "Protect your business from cyber threats with our enterprise-grade cybersecurity services. We provide comprehensive security assessments, implement robust protection measures, and offer continuous monitoring to keep your data and systems safe from evolving threats.",
    features: [
      "Security assessment and vulnerability testing",
      "Penetration testing and ethical hacking",
      "Firewall and network security setup",
      "Data encryption and protection",
      "Security awareness training",
      "Incident response planning",
      "Compliance management (GDPR, ISO 27001)",
      "24/7 threat monitoring and response"
    ],
    cta: "View Security Solutions",
    image: cybersecurityImg,
    link: "/services/cybersecurity",
  },
  {
    title: "IT Consulting",
    subtitle: "Solutions",
    description: "Strategic technology consulting for business growth",
    introduction: "Make informed technology decisions with our expert IT consulting services. We help businesses develop IT strategies aligned with their goals, implement best practices, and leverage technology to drive innovation and efficiency across the organization.",
    features: [
      "IT strategy development and roadmap",
      "Digital transformation consulting",
      "Technology assessment and audit",
      "IT infrastructure planning",
      "Vendor evaluation and selection",
      "Project management and implementation",
      "IT governance and policy development",
      "Cost optimization and budget planning"
    ],
    cta: "Get Expert Advice",
    image: itConsultingImg,
    link: "/services/it-consulting",
  },
  {
    title: "Network Solutions",
    subtitle: "Solutions",
    description: "Reliable network infrastructure and management",
    introduction: "Build a robust and reliable network infrastructure with our comprehensive network solutions. We design, implement, and manage networks that ensure seamless connectivity, optimal performance, and maximum uptime for your business operations.",
    features: [
      "Network design and architecture",
      "LAN/WAN implementation",
      "Wireless network solutions",
      "Network security implementation",
      "VPN setup and configuration",
      "Network monitoring and management",
      "Performance optimization",
      "Disaster recovery and backup solutions"
    ],
    cta: "Discover Networks",
    image: networkImg,
    link: "/services/network-solutions",
  },
  {
    title: "Technical Support",
    subtitle: "Solutions",
    description: "24/7 technical support and maintenance services",
    introduction: "Keep your systems running smoothly with our round-the-clock technical support services. Our experienced team provides quick resolutions to technical issues, proactive maintenance, and continuous monitoring to minimize downtime and maximize productivity.",
    features: [
      "24/7 helpdesk support",
      "Remote and on-site assistance",
      "Hardware troubleshooting and repair",
      "Software installation and updates",
      "System performance monitoring",
      "Preventive maintenance",
      "IT asset management",
      "End-user training and support"
    ],
    cta: "View Support Plans",
    image: supportImg,
    link: "/services/technical-support",
  },
];
