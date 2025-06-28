import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {   ArrowDownRight,   Award,  Lightbulb,   UserCheck } from "lucide-react";

const About: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    {
      icon: <Lightbulb className="h-8 w-8 text-[#A87C1F] dark:text-[#A87C1F]" />,
      title: "Innovation",
      description: "We are committed to finding innovative solutions to complex challenges, pushing the boundaries of what is possible to drive meaningful change.",
    },
    {
      icon: <UserCheck className="h-8 w-8 text-[#A87C1F] dark:text-[#A87C1F]" />,
      title: "Client Focus",
      description: "Our clients are at the heart of everything we do, thus we take the time to understand their unique strengths and needs, and we tailor our services to be responsive.",
    },
    {
      icon: <Award className="h-8 w-8 text-[#A87C1F] dark:text-[#A87C1F]" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering high-quality solutions and services that meet the highest standards of professionalism and integrity.",
    },
    
  ];


  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-3xl font-semibold mb-6">
              About Epitome Consulting Solutions
            </h1>
            <p className="text-xl text-blue-100 dark:text-blue-200">
              A regional consulting firm delivering tailored, evidence-based solutions in Project Management, MERL, and Organizational Development.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true, amount: 0.3 }}
             className="max-w-5xl mx-auto p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-xl text-center"
           >
            <h2 className="flex items-center justify-center mb-12">
              <div className="relative inline-flex items-center rounded-full p-1 border border-white/30 bg-white/10 shadow-lg backdrop-blur-md">
                <span className="absolute inset-0 rounded-full border border-white/20 blur-sm opacity-60 pointer-events-none animate-pulse-slow" />
                <span className="relative inline-block bg-[#A87C1F] text-white font-bold px-6 py-2 rounded-full text-lg shadow-inner hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                  About Us
                </span>
              </div>
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-left">
              <p>
                Epitome Consulting Solutions is a regional consulting firm specializing in Project Management, Monitoring, Evaluation, Reporting, and Learning (MERL), and Organizational Development within the development sector. We partner with institutions to design and deliver tailored, evidence-based solutions that enhance performance, foster sustainable growth, and support data-driven decision-making.
              </p>
              <p>
                Guided by principles of innovation, inclusion, and collaboration, we leverage a range of proven methodologies—including systems thinking, participatory learning, rights-based approaches, and digital transformation—to deliver impactful and holistic capacity development programs.
              </p>
            </div>
           </motion.div>
        </div>
      </section>

      

       {/* Our Guiding Principles Section */}
       <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="flex items-center justify-center mb-12">
              <div className="relative inline-flex items-center rounded-full p-1 border border-white/30 bg-white/10 shadow-lg backdrop-blur-md">
                <span className="absolute inset-0 rounded-full border border-white/20 blur-sm opacity-60 pointer-events-none animate-pulse-slow" />
                <span className="relative inline-block bg-[#A87C1F] text-white font-bold px-6 py-2 rounded-full text-lg shadow-inner hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                  Our Guiding Principles
                </span>
              </div>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The core values that shape everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="flex items-center justify-center mb-12">
              <div className="relative inline-flex items-center rounded-full p-1 border border-white/30 bg-white/10 shadow-lg backdrop-blur-md">
                <span className="absolute inset-0 rounded-full border border-white/20 blur-sm opacity-60 pointer-events-none animate-pulse-slow" />
                <span className="relative inline-block bg-[#A87C1F] text-white font-bold px-6 py-2 rounded-full text-lg shadow-inner hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                  Our Mission & Vision
                </span>
              </div>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              What drives Epitome Consulting Solutions forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
              To deliver innovative, client-focused solutions in project management, MERL, and organizational development.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
              To be a global catalyst for transformative change by advancing organizational development, project management, and monitoring, evaluation reporting and learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Let's discuss how our team can help you achieve your goals and drive transformative change.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="group flex items-center justify-center rounded-full border border-[#A87C1F] bg-[#A87C1F] px-6 py-2 text-white transition-colors duration-300 hover:bg-[#A87C1F] hover:border-[#A87C1F] hover:text-white"
                >
                  <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">
                    Talk To Experts
                  </span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/50 transition-all duration-300 group-hover:border-white group-hover:rotate-45">
                    <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
                  </span>
                </Link>
                <Link
                  to="/solutions"
                  className="group flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-500 px-6 py-2 text-gray-800 dark:text-gray-300 transition-colors duration-300 hover:border-[#A87C1F] hover:text-[#A87C1F]"
                >
                  <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">
                    Explore Our Services
                  </span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-400 dark:border-gray-500 transition-all duration-300 group-hover:border-[#A87C1F] group-hover:rotate-45">
                    <ArrowDownRight className="h-4 w-4 text-gray-600 dark:text-gray-400 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 group-hover:text-[#A87C1F]" />
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

export default About;