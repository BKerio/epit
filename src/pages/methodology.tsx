import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  BookOpenCheck,
  Handshake,
  BrainCircuit,
  Gavel,
  Brain,
  Cpu,
  FolderKanban, // Project Management
  ClipboardCheck, // MERL
  Building2, // Organization Development
  CheckCircle, // Org Development
} from "lucide-react";

// The Counter component remains unchanged - it's a great utility!
const Counter = ({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: 0.5 } 
      );
      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, []); 
  
    useEffect(() => {
      if (!isVisible || target <= 0) return;
  
      const startTime = performance.now();
      const updateCount = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentCount = Math.floor(progress * target);
  
        setCount(isFinite(currentCount) ? currentCount : target); 
  
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(target); 
        }
      };
  
      requestAnimationFrame(updateCount);
  
      return () => cancelAnimationFrame(updateCount as any); 
    }, [target, duration, isVisible]);
  
    const displayCount = isFinite(count) ? count : 0;
  
    return <span ref={ref}>{displayCount}{suffix}</span>;
};

// Foundational Approaches (from your document)
const approaches = [
    {
      icon: BookOpenCheck,
      title: "Evidence-Informed",
      description: "Utilizing up-to-date, research-backed methodologies to enhance service quality.",
    },
    {
      icon: Handshake,
      title: "Participatory Learning",
      description: "Immersive, workshop-based approaches that value participant perspectives.",
    },
    {
      icon: BrainCircuit,
      title: "Systems Thinking",
      description: "Co-designing holistic solutions by understanding underlying systemic issues.",
    },
    {
      icon: Gavel,
      title: "Rights-Based Approach",
      description: "Placing human rights principles at the forefront to guide our work.",
    },
    {
      icon: Brain,
      title: "Behavioural Sciences",
      description: "Integrating psychology and sociology to understand human behaviours.",
    },
    {
      icon: Cpu,
      title: "Digital & AI Integration",
      description: "Leveraging technology to amplify impact and enable data-informed decisions.",
    },
];

// Core Services Data Structure
const servicesData = {
  pm: {
    title: "Project Management",
    icon: FolderKanban,
    items: [
      "Project Governance Frameworks",
      "Project Management Planning",
      "Development Planning (CIDPs)",
      "Project Management Capacity Building",
      "Project Design and Feasibility Studies",
    ],
  },
  merl: {
    title: "MERL Services",
    icon: ClipboardCheck,
    items: [
      "Impact and Technical Reporting",
      "MERL Frameworks, Plans, and Systems",
      "MERL Capacity Building",
      "Process, Performance, and Impact Evaluations",
      "Data Quality Assessments (DQA)",
    ],
  },
  od: {
    title: "Organization Development",
    icon: Building2,
    items: [
      "Strategic Planning and Implementation",
      "Organization Capacity Assessment",
      "Business Model Development",
      "Change Management & Culture",
      "Leadership and Governance",
      "Wellness Programs (Gender, HIV, Mental Health)",
    ],
  },
};

type ServiceKey = keyof typeof servicesData;

const Methodology: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ServiceKey>("pm");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Our Approach & Methodology
            </h1>
            <p className="text-xl text-gray-300">
              We combine proven methodologies with specialized services to deliver impactful and holistic solutions for the development sector.
            </p>
          </div>
        </div>
      </section>

      {/* Proven Impactful Approaches Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="flex items-center justify-center mb-12">
              <div className="relative inline-flex items-center rounded-full p-1 border border-white/30 bg-white/10 shadow-lg backdrop-blur-md">
                <span className="absolute inset-0 rounded-full border border-white/20 blur-sm opacity-60 pointer-events-none animate-pulse-slow" />
                <span className="relative inline-block bg-[#A87C1F] text-white font-bold px-6 py-2 rounded-full text-lg shadow-inner hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                  Our Foundational Approach
                </span>
              </div>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our work is guided by a set of core, impactful methodologies that ensure quality, relevance, and sustainability in everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <approach.icon className="h-6 w-6 text-[#A87C1F] dark:text-[#A87C1F]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{approach.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{approach.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section with Tabs */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Core Service Pillars</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore our specialized services designed to enhance performance and foster sustainable growth.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center border-b border-gray-300 dark:border-gray-600 mb-8">
              {(Object.keys(servicesData) as ServiceKey[]).map((key) => {
                const service = servicesData[key];
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex-1 py-4 px-2 text-lg font-semibold flex items-center justify-center gap-3 transition-colors duration-300 ${
                      isActive
                        ? "text-[#A87C1F] border-b-2 border-[#A87C1F] dark:text-[#A87C1F] dark:border-[#A87C1F] bg-white dark:bg-gray-700"
                        : "text-gray-500 dark:text-gray-400 hover:text-[#A87C1F] hover:border-b-2 hover:border-[#A87C1F] dark:hover:text-[#A87C1F] dark:hover:border-[#A87C1F]"
                    }`}
                  >
                    <service.icon className="h-6 w-6" />
                    {service.title}
                  </button>
                );
              })}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {servicesData[activeTab].items.map((item, index) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm"
                  >
                    <CheckCircle className="h-5 w-5 text-[#A87C1F] mr-4 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Stats Section - Adapted for Consulting Impact */}
      <section className="py-20 bg-gradient-to-r from-gray-700 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <div className="text-5xl font-semibold mb-2 text-pink-400"><Counter target={98} suffix="%" duration={1500} /></div>
              <div className="text-xl text-gray-300">Client Satisfaction</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <div className="text-5xl font-semibold mb-2 text-teal-400"><Counter target={150} suffix="+" duration={1500} /></div>
              <div className="text-xl text-gray-300">Successful Projects</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
              <div className="text-5xl font-semibold mb-2 text-purple-400"><Counter target={85} suffix="%" duration={1500} /></div>
              <div className="text-xl text-gray-300">Repeat Engagements</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Drive Transformative Change?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Let's partner to enhance your organization's performance and achieve your strategic goals.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link to="/contact" className="group flex items-center justify-center rounded-full border border-[#A87C1F] bg-[#A87C1F] px-6 py-2 text-white transition-colors duration-300 hover:bg-[#A87C1F] hover:border-[#A87C1F] hover:text-white">
                  <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">Talk To Our Experts</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/50 transition-all duration-300 group-hover:border-white group-hover:rotate-45">
                    <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
                  </span>
                </Link>
                <Link to="/about" className="group flex items-center justify-center rounded-full border border-[#A87C1F] bg-[#A87C1F] px-6 py-2 text-white transition-colors duration-300 hover:bg-[#A87C1F] hover:border-[#A87C1F] hover:text-white">
                  <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">Learn More About Us</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-400 dark:border-gray-500 transition-all duration-300 group-hover:border-white group-hover:rotate-45">
                    <ArrowDownRight className="h-4 w-4 text-gray-600 dark:text-gray-400 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 group-hover:text-white" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Methodology;