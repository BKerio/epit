// src/components/Solutions.tsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data";

const Solutions: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
        <h2 className="flex items-center justify-center my-4">
          <div className="relative inline-flex items-center rounded-full px-2 py-1 border border-white/20 bg-black/50 shadow-md backdrop-blur-sm">
            <span className="absolute inset-0 rounded-full border border-white/10 blur-sm opacity-40 pointer-events-none" />
            <span className="relative inline-block bg-white text-red-700 font-semibold px-8 py-3 rounded-full text-lg shadow-inner">
          Our Solutions
            </span>
          </div>
        </h2>
        <p className="font-serif text-xl text-blue-100 mt-2">
          From concept to launch, we power your vision with smart, scalable technological solutions.
        </p>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div key={service.title}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                {/* Text Column */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`order-1 ${index % 2 !== 0 ? 'md:order-2' : ''}`}
                >
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {service.subtitle}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {service.title}
                  </h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-400">
                    <p>{service.description}</p>
                    {service.highlights && (
                      <>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                          Key Features:
                        </h3>
                        <ul className="space-y-4">
                          {service.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                          ))}
                        </ul>
                      </>
                    )}
                    <div className="mt-8">
                    <Link
                         to={service.path}
                         className="group inline-flex items-center px-6 py-3 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                       >
                         Learn More
                         <span
                           className="ml-3 inline-flex items-center justify-center w-6 h-6 rounded-full border border-white transition-transform duration-300 ease-in-out group-hover:rotate-45 group-hover:animate-bounce"                   
                         >
                           <ArrowUpRight className="w-4 h-4" />
                         </span>
                       </Link>
                    </div>
                  </div>
                </motion.div>

                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`order-2 ${index % 2 !== 0 ? 'md:order-1' : ''}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl shadow-2xl border-4 border-white dark:border-gray-800"
                  />
                </motion.div>
              </div>

              {index < services.length - 1 && (
                <div className="border-t border-gray-200 dark:border-gray-800 my-20 mx-auto w-4/5" />
              )}
            </div>
          ))}
        </div>
      </section>

       {/* CTA Section */}
     <section className="py-20 bg-white dark:bg-gray-900">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
           <div className="text-center max-w-3xl mx-auto">
             <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
               Ready to Work With Millenium Solutions?
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
    </>
  );
};

export default Solutions;