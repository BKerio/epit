// src/pages/ProjectManagement.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {  ShieldCheck, BookOpen,  ArrowDownRight,  Users, Target, ClipboardList, FileBarChart2 } from "lucide-react";

const projectManagementServices = [
  {
    title: "Strategic Planning & Execution",
    description: "Epitome Consulting aligns institutional goals with actionable strategies and detailed execution plans to ensure measurable success.",
    icon: Target,
    color: "text-indigo-600",
  },
  {
    title: "Project Governance & Risk Management",
    description: "Epitome Consulting establishes effective oversight structures, ensures accountability, and proactively manages project risks.",
    icon: ShieldCheck,
    color: "text-green-600",
  },
  {
    title: "Capacity Building for Project Teams",
    description: "We empower staff through Epitome-led training, tools, and methodologies for effective project delivery.",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "CIDPs & Development Planning",
    description: "Epitome Consulting facilitates integrated planning processes for counties and institutions including CIDPs and sectoral strategies.",
    icon: ClipboardList,
    color: "text-orange-600",
  },
  {
    title: "Project Feasibility & Design",
    description: "We conduct data-driven feasibility studies and design concepts that guide funding and implementation decisions for clients.",
    icon: FileBarChart2,
    color: "text-purple-600",
  },
  {
    title: "Monitoring & Reporting",
    description: "Epitome Consulting tracks progress, outcomes, and deliverables using robust reporting and evaluation frameworks.",
    icon: BookOpen,
    color: "text-red-600",
  },
];

const ProjectManagement: React.FC = () => {
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
              {renderSectionBadge("Project Management by Epitome Consulting")}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 drop-shadow-sm">
              Driving Strategic Implementation Across Complex Projects
            </p>
            <p className="mt-4 text-lg text-blue-200 drop-shadow-sm max-w-2xl mx-auto">
              At Epitome Consulting, we provide end-to-end support in designing, executing, and evaluating projects—ensuring efficiency, accountability, and impact for institutions and government agencies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
            {renderSectionBadge("Project Delivery Pillars")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                Plan & Prepare
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Strategic alignment, clear objectives, and stakeholder ownership are the foundation of successful projects.
              </p>
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <Target className="w-7 h-7 text-indigo-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Goal Alignment:</strong> Set measurable outcomes tied to institutional strategy.</div>
                </li>
                <li className="flex items-start">
                  <ClipboardList className="w-7 h-7 text-orange-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Integrated Planning:</strong> Develop CIDPs and action plans with stakeholders.</div>
                </li>
                <li className="flex items-start">
                  <FileBarChart2 className="w-7 h-7 text-purple-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Feasibility Focused:</strong> Base projects on data and financial viability.</div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">
                Execute & Evaluate
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Project delivery requires leadership, governance, risk management, and timely evaluations.
              </p>
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <ShieldCheck className="w-7 h-7 text-green-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Governance Assurance:</strong> Ensure transparency and board oversight.</div>
                </li>
                <li className="flex items-start">
                  <Users className="w-7 h-7 text-blue-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Team Enablement:</strong> Build project capacity through tools and training.</div>
                </li>
                <li className="flex items-start">
                  <BookOpen className="w-7 h-7 text-red-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Evaluation & Reporting:</strong> Track progress, impact, and lessons learned.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900" id="project-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
            {renderSectionBadge("Core Services by Epitome Consulting")}
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            Epitome Consulting delivers these project management services to help institutions implement strategies, manage complexity, and achieve measurable success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectManagementServices.map((service, index) => (
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
            Ready to Transform Your Projects?
          </h3>
          <p className="mb-10 text-xl text-blue-100 leading-relaxed">
            Let’s discuss how Epitome Consulting’s project management solutions can help you deliver results with confidence and clarity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="group flex items-center rounded-full bg-[#A87C1F] px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-[#A87C1F] hover:shadow-lg"
            >
              <span className="mr-4 transform transition-transform duration-300 group-hover:translate-x-1">
                Talk To A Project Advisor
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
                Explore Related Solutions
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

export default ProjectManagement;
