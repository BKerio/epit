// src/pages/OrganizationalDevelopment.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  BookOpen,
  ArrowDownRight,
  Users,
  Target,
  Building2,
  BrainCircuit,
  Scale,
} from "lucide-react";

const orgDevServices = [
  {
    title: "Strategic Planning & Alignment",
    description:
      "Epitome Consulting guides organizations in crafting strategic roadmaps aligned with market realities and institutional missions.",
    icon: Target,
    color: "text-indigo-600",
  },
  {
    title: "Governance & Policy Development",
    description:
      "We help strengthen governance structures, board performance, and compliance through tailored policies and frameworks.",
    icon: Scale,
    color: "text-green-600",
  },
  {
    title: "Leadership Development & Coaching",
    description:
      "Epitome empowers leaders with coaching, assessments, and competency frameworks to drive culture and results.",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Change Management & Culture",
    description:
      "We support organizations to manage transformation, restructure effectively, and foster positive internal culture.",
    icon: BrainCircuit,
    color: "text-orange-600",
  },
  {
    title: "Stakeholder Engagement",
    description:
      "Epitome develops communication strategies and tools to build trust, participation, and visibility among key stakeholders.",
    icon: BookOpen,
    color: "text-red-600",
  },
  {
    title: "Organizational Diagnostics",
    description:
      "We conduct assessments to identify strengths, gaps, and priorities—helping clients optimize for performance and growth.",
    icon: ShieldCheck,
    color: "text-purple-600",
  },
];

const OrganizationalDevelopment: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderSectionBadge = (text: string) => (
    <div className="relative inline-flex items-center rounded-full p-1 border border-white/30 bg-white/10 shadow-lg backdrop-blur-md dark:border-gray-700/30 dark:bg-gray-700/10 dark:shadow-xl dark:backdrop-blur-md">
      <span className="absolute inset-0 rounded-full border border-white/20 blur-sm opacity-60 pointer-events-none animate-pulse-slow dark:border-gray-700/20" />
      <span className="relative inline-block bg-[#A87C1F] text-white font-bold px-6 py-2 rounded-full text-lg shadow-inner hover:from-orange-600 hover:to-red-700 transition-all duration-300">
        {text}
      </span>
    </div>
  );

  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 font-sans">
      <section className="pt-24 pb-16 bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto mt-10">
            <h1 className="flex items-center justify-center text-xl md:text-2xl lg:text-3xl font-bold mb-6 drop-shadow">
              {renderSectionBadge("Organizational Development")}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 drop-shadow-sm">
              Building Resilient, Future-Ready Institutions
            </p>
            <p className="mt-4 text-lg text-blue-200 drop-shadow-sm max-w-2xl mx-auto">
              Epitome Consulting empowers organizations to strengthen leadership, enhance governance, and build adaptive systems for sustainable performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
            {renderSectionBadge("Our Focus Areas")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                Align & Lead
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Strategy and leadership go hand-in-hand. We help align vision with execution.
              </p>
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <Target className="w-7 h-7 text-indigo-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Strategic Roadmaps:</strong> Define goals, KPIs, and growth pathways.</div>
                </li>
                <li className="flex items-start">
                  <Users className="w-7 h-7 text-blue-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Leadership Coaching:</strong> Strengthen people capabilities and accountability.</div>
                </li>
                <li className="flex items-start">
                  <Building2 className="w-7 h-7 text-gray-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Structural Reviews:</strong> Reshape teams, roles, and governance.</div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">
                Strengthen & Evolve
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Transformation demands tools, feedback, and a culture of continuous improvement.
              </p>
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <Scale className="w-7 h-7 text-green-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Governance Standards:</strong> Policy, board, and operational compliance.</div>
                </li>
                <li className="flex items-start">
                  <BookOpen className="w-7 h-7 text-red-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Culture & Values:</strong> Build a strong, inclusive, and accountable work culture.</div>
                </li>
                <li className="flex items-start">
                  <BrainCircuit className="w-7 h-7 text-orange-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Change Enablement:</strong> Navigate transitions with clarity and confidence.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900" id="orgdev-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
            {renderSectionBadge("Core Services by Epitome Consulting")}
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            Epitome Consulting supports institutions to develop resilient strategies, ethical leadership, and inclusive systems that scale impact and improve performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {orgDevServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-2xl"
              >
                <div className="flex items-center mb-6">
                  <service.icon
                    className={`w-12 h-12 ${service.color} flex-shrink-0`}
                    strokeWidth={1.5}
                  />
                  <h3 className="ml-5 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-500 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-6">
            Let’s Evolve Your Organization
          </h3>
          <p className="mb-10 text-xl text-blue-100 leading-relaxed">
            Reach out to Epitome Consulting to discover how we can partner in your organization’s growth and transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="group flex items-center rounded-full bg-[#A87C1F] px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-[#A87C1F] hover:shadow-lg"
            >
              <span className="mr-4 transform transition-transform duration-300 group-hover:translate-x-1">
                Talk To An Advisor
              </span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-white flex-shrink-0 transition-all duration-300 group-hover:rotate-45">
                <ArrowDownRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
              </span>
            </Link>

            <Link
              to="/solutions"
              className="group flex items-center rounded-full bg-[#A87C1F] px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-[#A87C1F] hover:shadow-lg"
            >
              <span className="mr-4 transform transition-transform duration-300 group-hover:translate-x-1">
                Explore Related Services
              </span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-white flex-shrink-0 transition-all duration-300 group-hover:rotate-45">
                <ArrowDownRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrganizationalDevelopment;
