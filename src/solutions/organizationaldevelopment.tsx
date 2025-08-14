import React, { useEffect } from "react";
import {
  Building2,
  BarChart3,
  Users,
  HeartHandshake,
  Handshake,
  Smile,
  BookMarked,
  Star,
  Briefcase,
} from "lucide-react";

const sections = [
  {
    title: "Strategic Planning",
    mainIcon: <BarChart3 className="w-8 h-8" />,
    intro: "We help define long-term goals and build strategic roadmaps aligned with your values, challenges, and market needs.",
    items: [],
  },
  {
    title: "Capacity Assessment",
    mainIcon: <Building2 className="w-8 h-8" />,
    intro: "Our team assesses systems, structures, and human capital using SMART KPIs to improve your institutional effectiveness.",
    items: [],
  },
  {
    title: "Business Model Development",
    mainIcon: <Briefcase className="w-8 h-8" />,
    intro: "We guide organizations in refining or developing innovative business models to ensure long-term sustainability.",
    items: [],
  },
  {
    title: "Change & Culture Transformation",
    mainIcon: <Users className="w-8 h-8" />,
    intro: "We support your organization through significant change by aligning systems and engaging staff to achieve transformation.",
    items: [],
  },
  {
    title: "Leadership & Governance",
    mainIcon: <Handshake className="w-8 h-8" />,
    intro: "Strengthening the core of your organization with robust governance frameworks and empowered leadership.",
    items: [
      { label: "Governance Framework Development", icon: <Building2 size={16} /> },
      { label: "Policy Development and Review", icon: <BookMarked size={16} /> },
      { label: "Leadership Development & Coaching", icon: <Users size={16} /> },
    ],
  },
  {
    title: "Wellness & Inclusion Programs",
    mainIcon: <HeartHandshake className="w-8 h-8" />,
    intro: "Fostering a supportive, inclusive, and healthy workplace where every employee can thrive.",
    items: [
      { label: "Gender Mainstreaming & GBV Response", icon: <HeartHandshake size={16} /> },
      { label: "Workplace Mental Health", icon: <Smile size={16} /> },
      { label: "Disability Inclusion Programs", icon: <Users size={16} /> },
    ],
  },
];


const OrganizationalDevelopment: React.FC = () => {
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
            Organizational Development
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Driving transformation through leadership, governance, inclusion, and strategy.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-[#A87C1F] dark:text-[#FCD36D]">
              Our Core Pillars
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Building Resilient & Effective Organizations
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-400">
              We empower organizations to thrive by strengthening their strategic foundations and fostering a culture of continuous improvement and inclusivity.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
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

                {section.items && section.items.length > 0 && (
                  <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="text-[#A87C1F] dark:text-[#FCD36D] flex-shrink-0">{item.icon}</div>
                        <h4 className="font-medium text-gray-700 dark:text-gray-300">{item.label}</h4>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Ready to Transform Your Organization?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Let's partner to unlock your team's full potential and build a thriving, future-ready organization.
            </p>
            <div className="mt-8">
                <a
                    href="/contact"
                    className="inline-block bg-[#A87C1F] text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-[#8e6919] transition-all duration-300 transform hover:scale-105"
                >
                    Start the Conversation
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalDevelopment;