// src/pages/WellnessInclusion.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  BookOpen,
  ArrowDownRight,
  Accessibility,
  ShieldCheck,
  Smile,
  FileHeart,
} from "lucide-react";

const wellnessServices = [
  {
    title: "Gender Mainstreaming & GBV Response",
    description:
      "We design and implement workplace policies that promote gender equity, prevent gender-based violence, and foster inclusive environments.",
    icon: ShieldCheck,
    color: "text-red-600",
  },
  {
    title: "Mental Health & Wellness Programs",
    description:
      "Epitome integrates mental well-being into organizational culture through workshops, leadership training, and wellness audits.",
    icon: Smile,
    color: "text-blue-600",
  },
  {
    title: "Disability Inclusion & Accessibility",
    description:
      "We promote disability rights by conducting accessibility audits, designing inclusive policies, and training staff for inclusive practices.",
    icon: Accessibility,
    color: "text-indigo-600",
  },
  {
    title: "HIV/STI Integration in the Workplace",
    description:
      "Our programs provide biomedical and behavioral strategies that reduce stigma and promote holistic wellness at work.",
    icon: HeartPulse,
    color: "text-pink-600",
  },
  {
    title: "Inclusive Policy Development",
    description:
      "Epitome helps organizations craft policies that reflect equity, safeguard marginalized groups, and comply with legal standards.",
    icon: FileHeart,
    color: "text-orange-600",
  },
  {
    title: "Wellness Strategy & Planning",
    description:
      "We create comprehensive workplace wellness strategies that address physical, mental, and social dimensions of employee health.",
    icon: BookOpen,
    color: "text-green-600",
  },
];

const WellnessInclusion: React.FC = () => {
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
              {renderSectionBadge("Wellness & Inclusion Programs")}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 drop-shadow-sm">
              Building Equitable, Healthy & Inclusive Workspaces
            </p>
            <p className="mt-4 text-lg text-blue-200 drop-shadow-sm max-w-2xl mx-auto">
              Epitome Consulting partners with institutions to embed equity, wellness, and accessibility into the workplace fabric—enhancing employee well-being and organizational performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
            {renderSectionBadge("Focus Areas")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                Promote Equity
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We help institutions develop inclusive policies and structures that value diversity and advance social justice.
              </p>
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <ShieldCheck className="w-7 h-7 text-red-600 mr-4 mt-0.5" />
                  <div><strong>Gender & GBV Policy:</strong> Promote safety, dignity, and inclusion.</div>
                </li>
                <li className="flex items-start">
                  <Accessibility className="w-7 h-7 text-indigo-600 mr-4 mt-0.5" />
                  <div><strong>Disability Inclusion:</strong> Create environments that serve all employees.</div>
                </li>
                <li className="flex items-start">
                  <FileHeart className="w-7 h-7 text-orange-600 mr-4 mt-0.5" />
                  <div><strong>Inclusive Policy Design:</strong> Align with human rights and legal frameworks.</div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">
                Enhance Well-being
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We design integrated programs that support mental, physical, and social wellness in diverse workplaces.
              </p>
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <Smile className="w-7 h-7 text-blue-600 mr-4 mt-0.5" />
                  <div><strong>Mental Health:</strong> Normalize support systems and resilience-building.</div>
                </li>
                <li className="flex items-start">
                  <HeartPulse className="w-7 h-7 text-pink-600 mr-4 mt-0.5" />
                  <div><strong>HIV/STI Programs:</strong> Integrate care into workplace settings.</div>
                </li>
                <li className="flex items-start">
                  <BookOpen className="w-7 h-7 text-green-600 mr-4 mt-0.5" />
                  <div><strong>Wellness Planning:</strong> Embed holistic health strategies across functions.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900" id="wellness-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
            {renderSectionBadge("Our Wellness & Inclusion Services")}
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            Our services reflect Epitome Consulting’s commitment to fostering dignity, equality, and holistic wellness in the workplace.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {wellnessServices.map((service, index) => (
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
            Ready to Foster an Inclusive Culture?
          </h3>
          <p className="mb-10 text-xl text-blue-100 leading-relaxed">
            Partner with Epitome Consulting to design impactful wellness and inclusion programs that empower every member of your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="group flex items-center rounded-full bg-[#A87C1F] px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-red-600"
            >
              <span className="mr-4 transform transition-transform duration-300 group-hover:translate-x-1">
                Talk to Our Inclusion Team
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
                View Related Solutions
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

export default WellnessInclusion;
