// src/pages/EmployeeEngagement.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  ArrowDownRight,
  CheckCircle,
  Smile,
  Star,
  UserCheck,
  Workflow,
} from "lucide-react";

const engagementServices = [
  {
    title: "Team Building & Organizational Cohesion",
    description:
      "Epitome Consulting facilitates customized team-building activities that strengthen collaboration, trust, and cohesion across departments.",
    icon: Users,
    color: "text-indigo-600",
  },
  {
    title: "Coaching & Mentorship Systems",
    description:
      "We design and implement structured internal and external coaching and mentoring programs that nurture talent and leadership potential.",
    icon: UserCheck,
    color: "text-blue-600",
  },
  {
    title: "Workflow Optimization & Productivity",
    description:
      "Our consultants assess work processes, identify bottlenecks, and implement performance-enhancing strategies across teams.",
    icon: Workflow,
    color: "text-green-600",
  },
  {
    title: "Employee Assessment & Feedback",
    description:
      "Epitome introduces feedback tools and satisfaction surveys to capture employee insights and foster a culture of continuous improvement.",
    icon: CheckCircle,
    color: "text-yellow-600",
  },
  {
    title: "Personal Branding & Development",
    description:
      "We empower professionals to clarify their value, communicate effectively, and lead with authenticity through personal branding support.",
    icon: Star,
    color: "text-orange-600",
  },
  {
    title: "Workplace Well-Being & Culture",
    description:
      "We help shape healthy work cultures with emotional intelligence training, wellness integration, and recognition programs.",
    icon: Smile,
    color: "text-red-600",
  },
];

const EmployeeEngagement: React.FC = () => {
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
              {renderSectionBadge("Employee Engagement & Productivity")}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 drop-shadow-sm">
              Creating High-Performance, People-Centered Workplaces
            </p>
            <p className="mt-4 text-lg text-blue-200 drop-shadow-sm max-w-2xl mx-auto">
              Epitome Consulting partners with institutions to enhance staff motivation, collaboration, and output through holistic engagement strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
            {renderSectionBadge("Engagement Pillars")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                Connect & Empower
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We foster strong interpersonal connections and empower staff through tools, clarity, and shared purpose.
              </p>
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <Users className="w-7 h-7 text-indigo-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Team Building:</strong> Enhance communication, trust, and cohesion across departments.</div>
                </li>
                <li className="flex items-start">
                  <UserCheck className="w-7 h-7 text-blue-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Mentorship Systems:</strong> Foster growth and leadership through structured guidance.</div>
                </li>
                <li className="flex items-start">
                  <Workflow className="w-7 h-7 text-green-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Optimized Processes:</strong> Improve efficiency and eliminate bottlenecks in workflows.</div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">
                Recognize & Grow
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Positive cultures thrive on recognition, feedback, and opportunities for self-leadership.
              </p>
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-7 h-7 text-yellow-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Employee Feedback:</strong> Establish systems for ongoing communication and improvement.</div>
                </li>
                <li className="flex items-start">
                  <Star className="w-7 h-7 text-orange-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Branding Support:</strong> Help staff lead with confidence and clarity of purpose.</div>
                </li>
                <li className="flex items-start">
                  <Smile className="w-7 h-7 text-red-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div><strong>Wellness & Culture:</strong> Design recognition, well-being, and emotional intelligence programs.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900" id="employee-engagement-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
            {renderSectionBadge("Employee Engagement Services")}
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            Epitome Consulting helps clients unlock the full potential of their teams through people-centric strategies and productivity solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {engagementServices.map((service, index) => (
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
            Ready to Energize Your Team?
          </h3>
          <p className="mb-10 text-xl text-blue-100 leading-relaxed">
            Let’s work together to improve workplace satisfaction, boost performance, and shape a thriving team culture.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="group flex items-center rounded-full bg-[#A87C1F] px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-red-600"
            >
              <span className="mr-4 transform transition-transform duration-300 group-hover:translate-x-1">
                Talk To An Engagement Advisor
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
                Explore More Services
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

export default EmployeeEngagement;