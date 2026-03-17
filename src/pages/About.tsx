import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Calendar, Lightbulb, GraduationCap, Briefcase } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WarmBackground } from "@/components/WarmBackground";
import { SEOHead } from "@/components/SEOHead";
import companyBuilding from "@/assets/company-building.jpg";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation in an ever-evolving digital landscape."
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the leading technology partner for businesses worldwide, known for delivering exceptional software solutions and pioneering digital innovation."
  },
  {
    icon: Heart,
    title: "Values",
    description: "We believe in integrity, innovation, and excellence. Our commitment to quality and customer satisfaction drives everything we do."
  },
];


const offerings = [
  {
    icon: GraduationCap,
    title: "Student Empowerment",
    description: "Building websites and apps while upskilling students and fostering innovation and entrepreneurship."
  },
  {
    icon: Briefcase,
    title: "Internships & Projects",
    description: "Hands-on experience through internships, project opportunities, and placement training."
  },
  {
    icon: Lightbulb,
    title: "Startup Support",
    description: "Promoting student-led startups by bridging the gap between education and industry."
  },
  {
    icon: Users,
    title: "Recruitment Assistance",
    description: "Connecting talented individuals with the right career opportunities through our network."
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <SEOHead
        title="About SCOSS Services - IT Solutions Company in Tumkur"
        description="Learn about SCOSS Services, a leading IT solutions provider in Tumkur, Karnataka. 10+ years of experience delivering innovative technology solutions."
        schemaType="AboutPage"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about" },
        ]}
      />
      <WarmBackground />
      <Navbar />
      
      <main className="pt-32 pb-20 relative z-10">
        <div className="container px-4 md:px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="mono text-primary text-sm uppercase tracking-widest mb-4 block">
              // About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Who <span className="text-primary">We Are</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              SCOSS Services is a leading software and IT company dedicated to helping businesses 
              thrive in the digital age. With years of experience and a passionate team, 
              we deliver solutions that make a difference.
            </p>
          </motion.div>

          {/* Our Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Our Story</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Founded in <span className="text-primary font-semibold">September 2024</span>, SCOSS SERVICES is dedicated to providing cutting-edge software solutions tailored specifically for startups, with a special focus on young minds and students.
                </p>
                <p className="leading-relaxed">
                  Our mission is to empower students by helping them build websites and apps, upskilling them in the process and fostering the spirit of innovation and entrepreneurship. We are committed to promoting student-led startups by offering software services that bridge the gap between education and industry.
                </p>
                <p className="leading-relaxed">
                  In addition to software development, SCOSS SERVICES offers a range of support services, including internships, project opportunities, and placement training to help students gain hands-on experience. We also provide recruitment assistance by partnering with companies to ensure a smooth transition from academia to the professional world.
                </p>
                <p className="leading-relaxed">
                  Our commitment extends to corporate social responsibility (CSR) activities, supporting communities while nurturing the next generation of tech talent.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
                  <img 
                    src={companyBuilding} 
                    alt="SCOSS Services Office - SLN Krupa, Tumkur"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/10 rounded-xl -z-10" />
              </div>
            </div>
          </motion.div>

          {/* What We Offer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offerings.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card p-6 text-center hover-lift"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission, Vision, Values */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                className="group"
              >
                <div className="glass-card p-8 h-full text-center hover-lift">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
