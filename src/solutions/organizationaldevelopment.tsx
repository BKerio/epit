import React, { useEffect } from "react";
import {
  Building2,
  BarChart3,
  UserCog2,
  Users,
  HeartHandshake,
  Handshake,
  Smile,
} from "lucide-react";

const sections = [
  {
    title: "🔹 Strategic Planning and Implementation",
    icon: <BarChart3 className="inline-block w-6 h-6 mr-2 text-[#A87C1F]" />,
    content:
      "Epitome helps define long-term goals and build strategic roadmaps aligned with organizational values, challenges, and market needs. Execution plans break down goals into actionable initiatives with specific timelines and resource allocation.",
  },
  {
    title: "🔹 Organizational Capacity Assessment",
    icon: <Building2 className="inline-block w-6 h-6 mr-2 text-[#A87C1F]" />,
    content:
      "They assess systems, structures, human capital, and performance frameworks using SMART KPIs and KPAs to evaluate and improve institutional effectiveness.",
  },
  {
    title: "🔹 Business Model Development and Review",
    icon: <UserCog2 className="inline-block w-6 h-6 mr-2 text-[#A87C1F]" />,
    content:
      "Epitome guides organizations in refining or developing business models based on evolving markets and customer needs, ensuring sustainability and competitiveness.",
  },
  {
    title: "🔹 Change Management and Culture Transformation",
    icon: <Users className="inline-block w-6 h-6 mr-2 text-[#A87C1F]" />,
    content:
      "They support organizations through change—such as restructuring or digital shifts—by aligning systems and engaging staff to achieve transformation goals. Culture transformation ensures harmony between values, operations, and strategic goals.",
  },
];

const governanceItems = [
  { label: "Governance Framework Development", desc: "Designing constitutions, charters, and bylaws for sound decision-making and accountability." },
  { label: "Policy Development and Review", desc: "Ensuring organizational policies meet legal and ethical standards." },
  { label: "Fundraising Strategy", desc: "Creating donor-aligned proposals and branding to secure funding." },
  { label: "Leadership Development & Coaching", desc: "Competency frameworks, 360-degree feedback, and personalized coaching to build leadership." },
  { label: "Governance Capacity Building", desc: "Board training, onboarding, and succession planning." },
  { label: "Board Performance Monitoring", desc: "Scorecards and annual evaluations to improve governance." },
  { label: "Stakeholder Engagement", desc: "Strategies and tools for internal/external stakeholder communication and alignment." },
];

const wellnessItems = [
  { label: "Gender Mainstreaming & GBV Response", desc: "Integrating gender perspectives and building capacity to prevent/respond to gender-based violence." },
  { label: "HIV & STI Workplace Program", desc: "A holistic, integrated health approach aligned with behavioral, biomedical, and structural components." },
  { label: "Workplace Mental Health", desc: "Focusing on emotional and psychological well-being, including stress management and work-life balance." },
  { label: "Disability Inclusion", desc: "Providing training and assessment tools for mainstreaming disability in organizational settings." },
];

const engagementItems = [
  { label: "Team Building", desc: "Structured exercises to foster communication and collaboration." },
  { label: "Coaching & Mentorship", desc: "Creating internal and external support frameworks for professional growth." },
  { label: "Productivity Management", desc: "Identifying bottlenecks and applying continuous improvement strategies." },
  { label: "Personal Branding", desc: "Empowering individuals to manage their professional identity and career narrative." },
  { label: "Employee Engagement Assessments", desc: "Evaluating performance and organizational alignment from both technical and soft-skill perspectives." },
];

const OrganizationalDevelopment: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderList = (items: { label: string; desc: string }[]) => (
    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
      {items.map((item, idx) => (
        <li key={idx}>
          <strong className="text-gray-700 dark:text-gray-200">{item.label}:</strong> {item.desc}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition duration-300">
      {/* Header Section */}
      <div className="bg-[#A87C1F] text-white py-10 px-6 text-center shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Organizational Development</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Driving transformation through leadership, governance, inclusion, and strategy.
        </p>                           
      </div>

      <div className="p-6 max-w-5xl mx-auto space-y-10">
        {/* Core Sections */}
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 border border-[#A87C1F] dark:border-gray-700 shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-[#A87C1F] border-[#A87C1F] dark:text-[#FCD36D] mb-2">
              {section.icon}
              {section.title.replace("🔹 ", "")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{section.content}</p>
          </div>
        ))}

        {/* Leadership and Governance */}
        <div className="bg-white dark:bg-gray-800 border border-[#A87C1F] dark:border-gray-700 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-[#A87C1F] flex items-center gap-2 mb-2">
            <Handshake className="w-6 h-6" /> Leadership and Governance
          </h2>
          {renderList(governanceItems)}
        </div>

        {/* Wellness & Inclusion */}
        <div className="bg-white dark:bg-gray-800 border border-[#A87C1F] dark:border-gray-700 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-[#A87C1F] flex items-center gap-2 mb-2">
            <HeartHandshake className="w-6 h-6" /> Wellness & Inclusion Programs
          </h2>
          {renderList(wellnessItems)}
        </div>

        {/* Employee Engagement */}
        <div className="bg-white dark:bg-gray-800 border border-[#A87C1F] dark:border-gray-700 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-[#A87C1F] flex items-center gap-2 mb-2">
            <Smile className="w-6 h-6" /> Employee Engagement & Productivity
          </h2>
          {renderList(engagementItems)}
        </div>
      </div>
    </div>
  );
};

export default OrganizationalDevelopment;
