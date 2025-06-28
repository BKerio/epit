// src/pages/MERL.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  BookOpen,
  ArrowDownRight,
  Users,
  ClipboardList,
  FileBarChart2,
  BarChart3
} from "lucide-react";

const merlServices = [
  {
    title: "MERL Frameworks & Tools",
    description:
      "Epitome Consulting develops tailored logframes, theories of change, and indicator matrices to support evidence-based programming.",
    icon: ClipboardList,
    color: "text-indigo-600",
  },
  {
    title: "Proposal & Grant Support",
    description:
      "We assist organizations with developing MERL strategies that strengthen fundraising efforts and donor alignment.",
    icon: ShieldCheck,
    color: "text-green-600",
  },
  {
    title: "Data Collection & Analysis",
    description:
      "Epitome conducts rigorous baseline, mid-term, and endline assessments, including DQA and real-time monitoring.",
    icon: FileBarChart2,
    color: "text-blue-600",
  },
  {
    title: "Impact & Technical Reporting",
    description:
      "We deliver high-quality reports, learning briefs, and donor updates grounded in robust data analysis.",
    icon: BookOpen,
    color: "text-red-600",
  },
  {
    title: "Capacity Strengthening",
    description:
      "Epitome Consulting builds internal MERL capacity through SMART indicator design, data visualization, and adaptive learning practices.",
    icon: Users,
    color: "text-orange-600",
  },
  {
    title: "Learning & Adaptive Management",
    description:
      "We embed learning loops into programs to improve decision-making, scale innovations, and enhance outcomes.",
    icon: BarChart3,
    color: "text-purple-600",
  },
];

const MERL: React.FC = () => {
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
              {renderSectionBadge("Monitoring, Evaluation, Research & Learning (MERL)")}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 drop-shadow-sm">
              Turning Insights Into Action
            </p>
            <p className="mt-4 text-lg text-blue-200 drop-shadow-sm max-w-2xl mx-auto">
              Epitome Consulting helps organizations harness data and learning to enhance effectiveness, accountability, and innovation in programming.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
            {renderSectionBadge("MERL Focus Areas")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                Design & Measure
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We build the frameworks and systems that help clients measure results and make informed decisions.
              </p>
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <ClipboardList className="w-7 h-7 text-indigo-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Framework Development:</strong> Create logframes, ToCs, and M&E plans.</div>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="w-7 h-7 text-green-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Donor Readiness:</strong> Align MERL strategies to funding requirements.</div>
                </li>
                <li className="flex items-start">
                  <FileBarChart2 className="w-7 h-7 text-blue-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Data Insights:</strong> Collect, analyze, and visualize real-time results.</div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">
                Learn & Adapt
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our learning-oriented approach strengthens outcomes and promotes continual program improvement.
              </p>
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <BookOpen className="w-7 h-7 text-red-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Impact Reporting:</strong> Deliver timely, data-backed reporting to stakeholders.</div>
                </li>
                <li className="flex items-start">
                  <Users className="w-7 h-7 text-orange-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>MERL Training:</strong> Build staff capacity in data and learning practices.</div>
                </li>
                <li className="flex items-start">
                  <BarChart3 className="w-7 h-7 text-purple-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Adaptive Management:</strong> Use evidence to guide program pivots and scale success.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900" id="merl-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
            {renderSectionBadge("Core MERL Services")}
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            Epitome Consulting partners with institutions and donors to create evidence-driven systems that support strategic learning, program design, and adaptive implementation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {merlServices.map((service, index) => (
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
            Ready to Strengthen Your MERL System?
          </h3>
          <p className="mb-10 text-xl text-blue-100 leading-relaxed">
            Let’s collaborate on building data-driven, learning-focused systems that amplify impact and inform better decisions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="group flex items-center rounded-full bg-[#A87C1F] px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-red-600"
            >
              <span className="mr-4 transform transition-transform duration-300 group-hover:translate-x-1">
                Talk To A MERL Specialist
              </span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-white flex-shrink-0 transition-all duration-300 group-hover:rotate-45">
                <ArrowDownRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
              </span>
            </Link>

            <Link
              to="/solutions"
              className="group flex items-center rounded-full bg-[#A87C1F] px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-red-600"
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

export default MERL;
