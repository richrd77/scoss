import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WarmBackground } from "@/components/WarmBackground";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Code, Users, Award, Clock, MapPin, Phone, Briefcase, Rocket, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const internshipPrograms = [
  {
    icon: Code,
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, React, and modern web technologies through hands-on projects.",
    duration: "3 Months",
  },
  {
    icon: Briefcase,
    title: "Digital Marketing",
    description: "Master SEO, social media marketing, Google Ads, and content strategy with real campaigns.",
    duration: "2 Months",
  },
  {
    icon: Rocket,
    title: "Software Development",
    description: "Build real-world applications using modern frameworks, databases, and deployment tools.",
    duration: "3 Months",
  },
  {
    icon: BookOpen,
    title: "UI/UX Design",
    description: "Learn user-centered design, wireframing, prototyping, and usability testing.",
    duration: "2 Months",
  },
  {
    icon: GraduationCap,
    title: "Data Science & AI",
    description: "Explore data analysis, machine learning, and AI fundamentals with Python.",
    duration: "3 Months",
  },
  {
    icon: Users,
    title: "IT Infrastructure & Networking",
    description: "Gain practical experience in network setup, server management, and cloud deployment.",
    duration: "2 Months",
  },
];

const benefits = [
  { icon: Award, text: "Industry-recognized certificate on completion" },
  { icon: Clock, text: "Flexible timing for students" },
  { icon: Users, text: "Mentorship from industry experts" },
  { icon: Rocket, text: "Real project experience" },
];

const Internship = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Internship Programs | SCOSS Services Tumkur"
        description="Join SCOSS Services internship programs in Tumkur. Gain hands-on experience in web development, digital marketing, software development, and more."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Internship", href: "/internship" },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <WarmBackground />
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 uppercase tracking-widest">
              Internship Programs
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground">
              Launch Your Career with{" "}
              <span className="text-primary">SCOSS</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Gain real-world experience, build your portfolio, and kickstart your tech career with our industry-focused internship programs in Tumkur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 shadow-lg shadow-primary/25">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="relative py-20 overflow-hidden">
        <WarmBackground />
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm uppercase tracking-widest mb-4 block font-bold">
              Our Programs
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-foreground">
              Internship <span className="text-primary">Tracks</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06),0_8px_16px_-6px_rgba(255,163,71,0.12)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.1),0_12px_24px_-8px_rgba(255,163,71,0.2)] transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-[0_4px_16px_-2px_hsl(var(--primary)/0.4)] group-hover:scale-110 transition-transform duration-300">
                    <program.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{program.title}</h3>
                  <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                    {program.duration}
                  </span>
                  <p className="text-muted-foreground">{program.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Intern With Us */}
      <section className="relative py-20 overflow-hidden">
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-sm uppercase tracking-widest mb-4 block font-bold">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
                Why Intern at <span className="text-primary">SCOSS?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We provide a structured, mentor-driven internship experience that bridges the gap between academics and industry.
              </p>
              <div className="space-y-4">
                {benefits.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_-2px_hsl(var(--primary)/0.35)]">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-semibold text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.08)] p-8 md:p-10"
            >
              <h3 className="text-2xl font-black mb-2 text-foreground">
                Ready to <span className="text-primary">Apply?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Get in touch to learn more about our internship programs and enrollment.
              </p>
              <div className="space-y-4 mb-6">
                <a href="tel:+919113030506" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="font-semibold text-foreground">9113030506 / 8971417455</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Visit Us</p>
                    <p className="font-semibold text-foreground text-sm">SLN Krupa, Mahalakshmi Nagar, Tumkur</p>
                  </div>
                </div>
              </div>
              <Link to="/contact">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full shadow-lg shadow-primary/25">
                  Apply for Internship
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Internship;
