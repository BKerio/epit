// src/components/ServicesSection.tsx
import React from "react";
import { ArrowUpRight, Settings2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data";

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="flex items-center justify-center my-4">
            <div className="relative inline-flex items-center rounded-full px-2 py-1 border border-white/10 bg-black/50 shadow-md backdrop-blur-sm">
              <span className="absolute inset-0 rounded-full border border-white/5 blur-sm opacity-30 pointer-events-none" />
              <div className="relative inline-flex items-center bg-white text-black dark:bg-gray-800 dark:text-white font-semibold px-6 py-3 rounded-full text-lg shadow-inner border border-gray-200 dark:border-gray-700">
                <Settings2Icon className="h-6 w-6 mr-3 text-[#A87C1F]" />
                <span>Our Areas of Expertise</span>
              </div>
            </div>
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Solutions That Drive Sustainable Impact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore a curated suite of services designed to strengthen institutions, deliver value, and catalyze transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 flex flex-col shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Icon and Title */}
                <div className="flex items-center mb-4">
                  {Icon && (
                    <div className="p-3 rounded-full text-[#A87C1F]">
                      <Icon className="w-9 h-9" />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                  {service.description}
                </p>

                {/* CTA Link */}
                <div className="mt-6">
                  <Link
                         to={service.path}
                         className="group inline-flex items-center px-6 py-3 bg-[#A87C1F] text-white font-semibold rounded-full shadow-md hover:bg-[#57441a] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#A87C1F] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                       >
                         View Details
                         <span
                           className="ml-3 inline-flex items-center justify-center w-6 h-6 rounded-full border border-white transition-transform duration-300 ease-in-out group-hover:rotate-45 group-hover:animate-bounce"                   
                         >
                           <ArrowUpRight className="w-4 h-4" />
                         </span>
                </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link
             to="/solutions"
             className="group inline-flex items-center px-6 py-3 bg-[#A87C1F] text-white font-semibold rounded-full shadow-md hover:bg-[#57441a] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#A87C1F] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
           >
             Explore All Services
             <span
               className="ml-3 inline-flex items-center justify-center w-6 h-6 rounded-full border border-white transition-transform duration-300 ease-in-out group-hover:rotate-45 group-hover:animate-bounce"                   
             >
               <ArrowUpRight className="w-4 h-4" />
             </span>
           </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
