// src/components/WhyChooseUsSection.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, BarChart3, ClipboardList, Handshake } from "lucide-react";
import Image1 from "@/assets/Image-001.png";
import Image2 from "@/assets/image-002.png";
import Image3 from "@/assets/image-003.png";

// Define the structure for our interactive tabs
type Tab = {
  name: string;
  icon: React.ElementType;
  shortDesc: string;
  image: string;
  details: { title: string; desc: string }[];
};

const WhyChooseUsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Project Management");

  const tabs: Tab[] = [
    {
      name: "Project Management",
      icon: ClipboardList,
      shortDesc: "Structuring success from concept to completion.",
      image: Image1,
      details: [
        { title: "Governance Frameworks", desc: "Develop robust frameworks that align with best practices, drive accountability, and manage risk." },
        { title: "Strategic & Development Planning", desc: "Transform goals into actionable plans, including CIDPs, by aligning with national and county-level objectives." },
        { title: "Capacity Building", desc: "Equip your team with the methodologies and tools needed to manage complex projects effectively." },
        { title: "Project Design & Feasibility", desc: "Conceptualize tailored interventions grounded in solid data, assessing risks and resource requirements." },
      ],
    },
    {
      name: "MERL",
      icon: BarChart3,
      shortDesc: "Turning data into decisions and impact.",
      image: Image2,
      details: [
        { title: "Impact & Technical Reporting", desc: "Craft high-quality, data-driven reports for donors and stakeholders that clearly communicate project impact." },
        { title: "Frameworks, Plans & Systems", desc: "Design and digitize MERL frameworks, logical models, and Theories of Change for any project phase." },
        { title: "Capacity Building", desc: "Enhance your team’s skills in M&E fundamentals, adaptive learning, and impactful data visualization." },
        { title: "Process & Impact Evaluations", desc: "Conduct in-depth evaluations (baseline, mid-term, end-term) and data quality assessments for actionable insights." },
      ],
    },
    {
      name: "Organizational Development",
      icon: Building2,
      shortDesc: "Building resilient and adaptive institutions.",
      image: Image3,
      details: [
        { title: "Strategic Management", desc: "Guide strategic planning and implementation to align your organization’s vision with market demands." },
        { title: "Change & Culture Transformation", desc: "Manage transitions smoothly and foster a culture of collaboration, accountability, and adaptability." },
        { title: "Leadership & Governance", desc: "Design governance frameworks, develop leadership competencies, and build board capacity." },
        { title: "Wellness & Employee Engagement", desc: "Implement programs for gender mainstreaming, mental health, disability inclusion, and productivity." },
      ],
    },
  ];

  const activeTabData = tabs.find((t) => t.name === activeTab);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 font-garamond text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="flex items-center justify-center my-4">
            <div className="relative inline-flex items-center rounded-full px-2 py-1 border border-white/10 bg-black/50 shadow-md backdrop-blur-sm">
              <span className="absolute inset-0 rounded-full border border-white/5 blur-sm opacity-30 pointer-events-none" />
              <div className="relative inline-flex items-center bg-white text-black dark:bg-gray-800 dark:text-white font-semibold px-6 py-3 rounded-full text-lg shadow-inner border border-gray-200 dark:border-gray-700">
                <Handshake className="h-6 w-6 mr-3 text-[#A87C1F]" />
                <span>Why Epitome Consulting</span>
              </div>
            </div>
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            The Epitome Advantage
          </h2>
          <p className="mt-4 text-xl text-justify max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Epitome Consulting Solutions is a regional firm specializing in Project Management, MERL, and Organizational Development. We partner with institutions to design and deliver tailored, evidence-based solutions that enhance performance, foster sustainable growth, and support data-driven decision-making.
          </p>
        </div>

        {/* Interactive Disciplines Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {/* Left Column: Tab Selectors */}
          <div className="flex flex-col space-y-4">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.name;
              return (
                <motion.button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`p-6 text-left rounded-lg transition-all duration-300 w-full ${isActive ? 'bg-white dark:bg-gray-800 shadow-xl' : 'hover:bg-white/70 dark:hover:bg-gray-800/50'}`}
                  whileHover={{ scale: isActive ? 1 : 1.02 }}
                >
                  <div className="flex items-center">
                    <div className={`p-3 rounded-md transition-colors duration-300 ${isActive ? 'bg-amber-800 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
                      <tab.icon className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{tab.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{tab.shortDesc}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content Display */}
          <div className="lg:col-span-2 relative min-h-[450px]">
            <AnimatePresence mode="wait">
              {activeTabData && (
                <motion.div
                  key={activeTabData.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 flex flex-col lg:flex-row gap-8"
                >
                  <div className="lg:w-1/2 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 underline underline-offset-4">The Core Aspects</h3>
                    <ul className="space-y-3 flex-grow">
                      {activeTabData.details.map(detail => (
                        <li key={detail.title} className="text-justify">
                          <strong className="block text-amber-600 dark:text-amber-400">{detail.title}</strong>
                          <p className="text-gray-600 dark:text-gray-400">{detail.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-1/2 h-64 lg:h-full rounded-lg overflow-hidden">
                    <img src={activeTabData.image} alt={activeTabData.name} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
