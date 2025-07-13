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
    icon: <BookOpenCheck className="inline-block w-6 h-6 mr-2 text-[#A87C1F]" />,
    description:
      "Epitome Consulting Solutions collaborates with clients to develop robust governance frameworks aligned with industry standards and best practices. These frameworks ensure accountability, risk management, and compliance with organizational policies by integrating comprehensive planning that aligns with long-term strategic goals.",
  },
  {
    title: "Project Management Planning",
    icon: <ClipboardList className="inline-block w-6 h-6 mr-2 text-[#A87C1F]" />,
    description:
      "The firm helps transform client goals into realistic and actionable project plans. Their experts introduce structure, discipline, and clarity to guide project execution effectively.",
  },
  {
    title: "Development Planning",
    icon: <FileBarChart className="inline-block w-6 h-6 mr-2 text-[#A87C1F]" />,
    description:
      "Epitome develops and reviews County Integrated Development Plans (CIDPs) and sector plans. These serve as strategic roadmaps for counties’ socio-economic development. The approach combines evidence-based methodologies, market analysis, business modeling, and capacity assessment to ensure alignment with national goals and county-specific objectives.",
  },
  {
    title: "Project Management Capacity Building",
    icon: <GraduationCap className="inline-block w-6 h-6 mr-2 text-[#A87C1F]" />,
    description:
      "They offer training programs covering all aspects of project management—from initiation and planning to execution, monitoring, and closure. Teams are trained to use modern tools and techniques that boost efficiency and reduce risks.",
  },
  {
    title: "Project Design and Feasibility Studies",
    icon: <Ruler className="inline-block w-6 h-6 mr-2 text-[#A87C1F]" />,
    description:
      "Epitome assists in conceptualizing and designing tailored projects. Feasibility studies assess market conditions, potential risks, and required resources, ensuring that projects are grounded in data and realistic expectations for better decision-making.",
  },
];

const ProjectManagement: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition duration-300">
      {/* Header Section */}
      <div className="bg-[#A87C1F] text-white py-10 px-6 text-center shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Project Management</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Building capacity, structure, and strategy for sustainable projects.
        </p>
      </div>

      <div className="p-6 max-w-5xl mx-auto space-y-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-[#A87C1F] dark:border-gray-700 shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-[#A87C1F] dark:text-[#FCD36D] mb-2">
              {section.icon}
              {section.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectManagement;
