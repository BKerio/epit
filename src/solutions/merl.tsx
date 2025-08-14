import React, { useEffect } from "react";
import {
  FileText,
  LayoutDashboard,
  ClipboardCheck,
  TrendingUp,
  Users,
  Target,
  Award,
  CheckCircle,
  BarChart2,
} from "lucide-react";

const sections = [
  {
    title: "Impact & Technical Reporting",
    mainIcon: <FileText className="w-8 h-8" />,
    intro: "We craft data-driven narratives that showcase your impact, ensure compliance, and share critical insights with all stakeholders.",
    items: [
      { label: "Annual & Donor Reporting", icon: <Award size={16} /> },
      { label: "Technical Documentation", icon: <FileText size={16} /> },
      { label: "Lessons Learned & Best Practices", icon: <CheckCircle size={16} /> },
    ],
  },
  {
    title: "MERL Frameworks & Systems",
    mainIcon: <LayoutDashboard className="w-8 h-8" />,
    intro: "Our team designs and implements customized MERL tools that are seamlessly integrated across every phase of your project lifecycle.",
    items: [
      { label: "Grant Proposal Support", icon: <Target size={16} /> },
      { label: "Digital M&E Solutions", icon: <BarChart2 size={16} /> },
      { label: "Log Frames & Theories of Change", icon: <TrendingUp size={16} /> },
    ],
  },
  {
    title: "MERL Capacity Building",
    mainIcon: <Users className="w-8 h-8" />,
    intro: "We empower your team with the skills and knowledge needed to own and drive your MERL activities effectively and confidently.",
    items: [
      { label: "Tailored Training Modules", icon: <Users size={16} /> },
      { label: "Indicator Development Workshops", icon: <Target size={16} /> },
      { label: "Data Visualization & Communication", icon: <BarChart2 size={16} /> },
    ],
  },
  {
    title: "Evaluations & Performance Reviews",
    mainIcon: <ClipboardCheck className="w-8 h-8" />,
    intro: "We conduct comprehensive evaluations to assess effectiveness, identify learnings, and guide strategic decisions.",
    items: [
      { label: "Data Quality Assessments (DQA)", icon: <CheckCircle size={16} /> },
      { label: "Performance & Impact Evaluations", icon: <TrendingUp size={16} /> },
      { label: "Lifecycle Evaluations (Baseline, End-term)", icon: <ClipboardCheck size={16} /> },
    ],
  },
];


const MERL: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#A87C1F] to-[#8e6919] dark:from-[#A87C1F] dark:to-[#6c5116]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10 [mask-image:linear-gradient(to_bottom,white_100%,transparent)]"></div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Monitoring, Evaluation, & Learning
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Transforming data into decisions. We provide robust MERL solutions to measure your impact, drive learning, and guide strategy.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-[#A87C1F] dark:text-[#FCD36D]">
              Our MERL Services
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              A Cycle of Continuous Improvement
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-400">
              Our services are designed to support your organization at every stage, from initial planning and framework design to final evaluation and reporting.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:max-w-6xl lg:mx-auto">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col"
              >
                <div className="flex items-center gap-5 mb-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-[#A87C1F]/10 dark:bg-[#FCD36D]/10">
                    <span className="text-[#A87C1F] dark:text-[#FCD36D]">{section.mainIcon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{section.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">{section.intro}</p>

                <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="text-[#A87C1F] dark:text-[#FCD36D] flex-shrink-0">{item.icon}</div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">{item.label}</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Ready to Enhance Your Impact?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Let our MERL experts help you build robust systems, gather meaningful data, and tell your story of change.
            </p>
            <div className="mt-8">
                <a
                    href="/contact"
                    className="inline-block bg-[#A87C1F] text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-[#8e6919] transition-all duration-300 transform hover:scale-105"
                >
                    Contact Us for a Consultation
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MERL;