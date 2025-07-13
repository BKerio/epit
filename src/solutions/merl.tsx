import React, { useEffect } from "react";
import {
  FileText,
  LayoutDashboard,
  BarChart2,
  ClipboardCheck,
} from "lucide-react";

const PRIMARY_COLOR = "#A87C1F";

const sections = [
  {
    title: "Impact and Technical Reporting",
    icon: <FileText size={20} color={PRIMARY_COLOR} />,
    intro: "Epitome crafts data-driven reports for various stakeholders:",
    items: [
      {
        label: "Organizational Annual Reporting",
        detail:
          "Highlights achievements, challenges, and growth in line with mission.",
      },
      {
        label: "Donor Reporting",
        detail:
          "Tailored reports to meet compliance and accountability standards.",
      },
      {
        label: "Technical Documentation",
        detail:
          "Includes technical briefs, lessons learned, and best practices.",
      },
    ],
  },
  {
    title: "MERL Frameworks, Plans, and Systems",
    icon: <LayoutDashboard size={20} color={PRIMARY_COLOR} />,
    intro: "They provide customized MERL tools integrated across all project phases:",
    items: [
      {
        label: "Grant Proposal Support",
        detail: "MERL components aligned with donor requirements.",
      },
      {
        label: "Implementation Planning",
        detail: "Robust annual work plans and activity schedules.",
      },
      {
        label: "Digital Solutions",
        detail: "Use of real-time data collection and reporting tools.",
      },
      {
        label: "Log Frames & Theories of Change",
        detail: "Clear mapping of objectives and outcomes.",
      },
    ],
  },
  {
    title: "MERL Capacity Building",
    icon: <BarChart2 size={20} color={PRIMARY_COLOR} />,
    intro: "Their capacity-building services enhance internal skills through:",
    items: [
      {
        label: "Tailored Training Modules",
        detail: "on M&E, tools, and trends.",
      },
      {
        label: "Best Practices",
        detail: "in adaptive learning and real-time feedback.",
      },
      {
        label: "Indicator Development Workshops",
        detail: "for SMART indicators.",
      },
      {
        label: "Data Visualization Training",
        detail: "for effective communication.",
      },
    ],
  },
  {
    title: "Process, Performance, and Impact Evaluations",
    icon: <ClipboardCheck size={20} color={PRIMARY_COLOR} />,
    intro: "They offer comprehensive evaluations, including:",
    items: [
      {
        label: "Data Quality Assessments (DQA)",
        detail: "To ensure data integrity.",
      },
      {
        label: "Policy & Feasibility Analysis",
        detail: "For strategic planning.",
      },
      {
        label: "Case Studies & Outcome Mapping",
        detail: "To link program impact to stakeholder contributions.",
      },
      {
        label: "Performance Reviews & KPIs",
        detail: "For identifying improvement areas.",
      },
      {
        label: "Baseline, Mid-term, and End-term Evaluations",
        detail: "For full program lifecycle analysis.",
      },
    ],
  },
];

const MERL: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div className="bg-[#A87C1F] text-white py-10 px-6 text-center shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Monitoring, Evaluation, Research & Learning(MERL)</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Driving transformation through leadership, governance, inclusion, and strategy.
        </p>                           
      </div>
    

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-[#A87C1F] dark:border-gray-700 rounded-xl shadow-md p-6 space-y-4 transition hover:shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <div>{section.icon}</div>
              <h2 className="text-xl md:text-2xl font-semibold text-[#A87C1F]">
                {section.title}
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{section.intro}</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              {section.items.map((item, i) => (
                <li key={i}>
                  <strong>{item.label}:</strong> {item.detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
};

export default MERL;
