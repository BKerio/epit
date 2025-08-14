import React, { useEffect } from "react";
import {
  BookOpenCheck,
  ClipboardList,
  FileBarChart,
  GraduationCap,
  Ruler,
} from "lucide-react";

const sections = [
  {
    title: "Project Governance Frameworks",
    icon: <BookOpenCheck className="w-8 h-8" />,
    description:
      "We collaborate with clients to develop robust governance frameworks that ensure accountability, manage risk, and align with your long-term strategic goals and industry best practices.",
  },
  {
    title: "Project Management Planning",
    icon: <ClipboardList className="w-8 h-8" />,
    description:
      "Our experts help transform your ambitious goals into realistic, actionable project plans. We introduce the structure, discipline, and clarity needed to guide project execution effectively.",
  },
  {
    title: "Development Planning",
    icon: <FileBarChart className="w-8 h-8" />,
    description:
      "We develop and review County Integrated Development Plans (CIDPs) and sector plans, creating strategic roadmaps for socio-economic development that align with national goals.",
  },
  {
    title: "Capacity Building",
    icon: <GraduationCap className="w-8 h-8" />,
    description:
      "Our training programs cover all aspects of project management—from initiation to closure. We equip your teams with modern tools and techniques to boost efficiency and reduce risks.",
  },
  {
    title: "Project Design & Feasibility",
    icon: <Ruler className="w-8 h-8" />,
    description:
      "We assist in conceptualizing and designing tailored projects. Our feasibility studies assess market conditions and risks, ensuring your projects are grounded in data and realistic expectations.",
  },
];

const ProjectManagement: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#A87C1F] to-[#8e6919] dark:from-[#A87C1F] dark:to-[#6c5116]">
        {/* Optional: subtle pattern for texture */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10 [mask-image:linear-gradient(to_bottom,white_100%,transparent)]"></div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Project Management
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Building capacity, structure, and strategy for sustainable and successful projects.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Introduction Text */}
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-[#A87C1F] dark:text-[#FCD36D]">
              Our Expertise
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              A Comprehensive Approach to Project Success
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-400">
              We provide end-to-end project management solutions designed to
              ensure your initiatives are delivered on time, within budget, and
              to the highest standards of quality.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out group"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#A87C1F]/10 dark:bg-[#FCD36D]/10 mb-6 group-hover:bg-[#A87C1F]/20 dark:group-hover:bg-[#FCD36D]/20 transition-colors">
                  <span className="text-[#A87C1F] dark:text-[#FCD36D]">
                    {section.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Ready to bring structure to your vision?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Let's discuss how our project management expertise can drive your success.
            </p>
            <div className="mt-8">
                <a
                    href="/contact"
                    className="inline-block bg-[#A87C1F] text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-[#8e6919] transition-all duration-300 transform hover:scale-105"
                >
                    Get in Touch
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;