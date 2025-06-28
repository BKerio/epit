import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Database, CloudLightning, Users, ArrowLeft, ArrowDownRight, ChevronDownCircleIcon } from "lucide-react";

const heroIllustration = "https://img.freepik.com/free-photo/modern-data-center-providing-cloud-services-enabling-businesses-access-computing-resources-storage-demand-internet-server-room-infrastructure-3d-render-animation_482257-65963.jpg?t=st=1746692093~exp=1746695693~hmac=ac9e278e20f4a920c47a2abd440d65e9107334b35adb78c1c81f0098d05e7e46&w=996";

const Counter = ({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  useEffect(() => {
    if (!isVisible || target <= 0) { setCount(0); return; }
    const start = performance.now();
    const step = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return <span ref={ref}>{isFinite(count) ? count : 0}{suffix}</span>;
};

// Animation Variants
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } } };
const slideUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const metricsVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } } };
const metricItemVariants = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } };

const InfraCaseStudy: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const outcomeMetrics = [
    { id: 1, icon: Cpu, numericalValue: 92, suffix: "%", label: "Downtime Reduction", description: "≈92% less annual downtime" },
    { id: 2, icon: Database, numericalValue: 87, suffix: "%", label: "Latency Improvement", description: "≥87% faster storage latency" },
    { id: 3, icon: CloudLightning, numericalValue: 90, suffix: "%", label: "Provision Speed", description: "≈90% faster VM provisioning" },
    { id: 4, icon: Users, numericalValue: 66, suffix: "%", label: "Staff Efficiency", description: "66% fewer staff-hours managing infra" },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="pt-16 pb-20 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen">
      
      {/* Back Navigation with Dropdown */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.3 }} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div ref={menuRef} className="relative inline-block text-left" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
          <button className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 font-medium">
            <ArrowLeft className="mr-2 w-4 h-4" /> View More Case Studies <ChevronDownCircleIcon className="ml-1 w-4 h-4" />
          </button>
          {showMenu && (
            <div className="absolute mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
              <ul className="py-1">
                <li><Link to="/casestudy1" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Hardware & Software Infrastructure For KPA & KRC</Link></li>
                <li><Link to="/casestudy2" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Cyber Security & Data Loss Prevention for SRC</Link></li>
                <li><Link to="/casestudy3" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Business Intelligence & Automation for KFA and Vilcom Networks</Link></li>
              </ul>
            </div>
          )}
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="pt-0 md:pt-8 pb-16 bg-gradient-to-br from-gray-900 to-indigo-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
            <div className="text-center md:text-left">
              <motion.div variants={slideUp} className="inline-flex items-center p-4 rounded-full bg-blue-500/30 mb-6">
                <Cpu className="h-10 w-10 text-blue-200" />
              </motion.div>
              <motion.h1 variants={slideUp} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-semibold mb-4">
                Case Study: Kenya Ports Authority & Kenya Railways Cooperation, We Improve their IT Infrastructure to be more reliable and efficient.
              </motion.h1>
              <motion.p variants={slideUp} transition={{ delay: 0.2 }} className="text-lg md:text-xl max-w-md mx-auto md:mx-0">
                Modernizing data centers with HPE Synergy, Nimble Storage, Aruba Networking, and hybrid cloud DR.
              </motion.p>
            </div>
            <div>
              <motion.img src={heroIllustration} alt="Modern data center racks" variants={slideUp} transition={{ delay: 0.4 }} className="rounded-xl shadow-2xl object-cover w-full h-64 md:h-80 lg:h-96" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, amount: 0.2 }} className="space-y-12 md:space-y-16 pt-12">

          {/* Challenge */}
          <motion.section variants={itemVariants} className="p-8 rounded-lg bg-gray-100 dark:bg-gray-800 border-l-4 border-yellow-500 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-500/20 text-yellow-700 mr-3">1</span>
              The Challenge
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-lg leading-relaxed">
              <li>Aging servers causing frequent unplanned downtime and high maintenance costs.</li>
              <li>Disparate SANs complicating data sharing and backup processes.</li>
              <li>Legacy network gear unable to handle growing IoT and telemetry traffic.</li>
              <li>No robust DR site, risking days of data loss on outage.</li>
            </ul>
          </motion.section>

          {/* Solution */}
          <motion.section variants={itemVariants} className="p-8 rounded-lg bg-gray-100 dark:bg-gray-800 border-l-4 border-blue-500 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
              <span className="w-8 h-8 flex items-center justify-center.rounded-full bg-blue-500/20 text-blue-700 mr-3">2</span>
              Our Solution
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-lg leading-relaxed">
              <li>Deployed HPE Synergy for composable compute and automated hardware lifecycle management.</li>
              <li>Consolidated storage on HPE Nimble AF-Series with instant snapshots and DR replication.</li>
              <li>Built Aruba CX spine-leaf fabric and ClearPass segmentation for IoT and corporate networks.</li>
              <li>Implemented hybrid cloud with VMware Cloud Foundation and HPE Recovery Manager Central for DR.</li>
            </ul>
          </motion.section>
        </motion.div>

        {/* Outcome Title */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true, amount: 0.3 }} className="mt-20 mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Measurable Results</h2>
          <p className="text-lg max-w-3xl mx-auto mt-2">Key performance improvements after modernization.</p>
        </motion.div>

        {/* Metrics */}
        <motion.div initial="hidden" whileInView="visible" variants={metricsVariants} viewport={{ once: true, amount: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {outcomeMetrics.map(metric => (
            <motion.div key={metric.id} variants={metricItemVariants} className="p-6 rounded-lg bg-blue-100 dark:bg-gray-800 border shadow flex items-start space-x-4 hover:-translate-y-1 transition-transform">
              <div className="flex-shrink-0 mt-1 p-3 rounded-full bg-blue-200 dark:bg-blue-700 text-blue-700 shadow-inner">
                <metric.icon className="h-7 w-7" />
              </div>
              <div>
                <p className="text-4xl font-extrabold mb-1"><Counter target={metric.numericalValue} suffix={metric.suffix} duration={1500} /></p>
                <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
                <p className="text-gray-700 dark:text-gray-300">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Narrative Outcome */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.3 }} className="mb-16 p-8 rounded-lg bg-gray-100 dark:bg-gray-800 border-l-4 border-green-500 shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-700 mr-3">3</span>
            The Outcome
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg leading-relaxed">
            <li>Achieved “five-9s” availability for port and rail control systems, drastically reducing unplanned outages.</li>
            <li>Provisioned new VMs in under 15 minutes via HPE OneView—accelerating pilot deployments.</li>
            <li>Scaled infrastructure dynamically to support IoT growth without forklift upgrades.</li>
            <li>Enabled automated DR failover with RPO  15 minutes and RTO 2 hours.</li>
          </ul>
        </motion.section>

        {/* CTA Section */}
         <section className="py-20 bg-white dark:bg-gray-900">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
               <div className="text-center max-w-3xl mx-auto">
                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                   Ready to Work With Us?
                 </h2>
                 <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                   Let's discuss how our team can help you achieve your technology goals and drive business growth.
                 </p>
                 <div className="flex flex-col md:flex-row justify-center gap-4">
                   {/* Primary Button: Talk To Experts */}
                 <Link
                   to="/contact"
                   className="group flex items-center justify-center rounded-full border border-red-500 bg-red-500 px-6 py-2 text-white transition-colors duration-300 hover:bg-red-600 hover:border-red-600"
                 >
                   <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">
                     Talk To Experts
                   </span>
                   <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/50 transition-all duration-300 group-hover:border-white group-hover:rotate-45">
                     <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
                   </span>
                 </Link>
        
                   {/* Secondary Button: Explore Solutions */}
                   <Link
                     to="/solutions"
                     className="group flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-500 px-6 py-2 text-gray-800 dark:text-gray-300 transition-colors duration-300 hover:border-red-500 hover:text-red-500"
                   >
                     <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">
                       Explore Solutions
                     </span>
                     <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-400 dark:border-gray-500 transition-all duration-300 group-hover:border-red-500 group-hover:rotate-45">
                       <ArrowDownRight className="h-4 w-4 text-gray-600 dark:text-gray-400 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 group-hover:text-red-500" />
                     </span>
                   </Link>
                 </div>
               </div>
             </div>
           </div>
         </section>
      </div>
    </motion.div>
  );
};

export default InfraCaseStudy;
