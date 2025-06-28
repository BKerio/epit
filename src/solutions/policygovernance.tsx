// src/pages/PolicyGovernanceFundraising.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {  Users,  Landmark,  Target,  DollarSign,  FileText,  ShieldCheck,  ArrowDownRight } from "lucide-react";

const pgfServices = [
  {
    title: "Policy Development & Review",
    description:
      "Epitome Consulting supports institutions in drafting, reviewing, and aligning internal policies with global standards and national regulations.",
    icon: FileText,
    color: "text-indigo-600",
  },
  {
    title: "Governance Strengthening",
    description:
      "We facilitate board induction, governance audits, and design structures for accountability, transparency, and performance.",
    icon: Landmark,
    color: "text-green-600",
  },
  {
    title: "Strategic Planning",
    description:
      "Epitome works with organizations to develop clear mission-aligned strategies, implementation roadmaps, and measurable results frameworks.",
    icon: Target,
    color: "text-blue-600",
  },
  {
    title: "Fundraising Strategy & Proposal Development",
    description:
      "We design resource mobilization strategies, identify funding opportunities, and craft winning proposals for public and donor financing.",
    icon: DollarSign,
    color: "text-red-600",
  },
  {
    title: "Risk & Compliance Management",
    description:
      "Epitome integrates risk analysis into governance and policy structures, ensuring regulatory compliance and institutional integrity.",
    icon: ShieldCheck,
    color: "text-orange-600",
  },
  {
    title: "Organizational Capacity Building",
    description:
      "We strengthen institutional systems and human capital through board coaching, internal audits, and skills enhancement programs.",
    icon: Users,
    color: "text-purple-600",
  },
];

const PolicyGovernanceFundraising: React.FC = () => {
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
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto mt-10">
            <h1 className="flex items-center justify-center text-xl md:text-2xl lg:text-3xl font-bold mb-6 drop-shadow">
              {renderSectionBadge("Policy, Governance & Fundraising")}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 drop-shadow-sm">
              Strengthening Institutional Resilience & Resource Mobilization
            </p>
            <p className="mt-4 text-lg text-blue-200 drop-shadow-sm max-w-2xl mx-auto">
              Epitome Consulting helps institutions design robust policies, fortify governance structures, and mobilize sustainable resources for long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white dark:bg-gray-900" id="pgf-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
            {renderSectionBadge("Core Services")}
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            Epitome’s solutions are designed to help organizations enhance credibility, attract funding, and achieve operational excellence through sound policy and governance systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {pgfServices.map((service, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-blue-500 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-6">
            Let’s Shape Your Institutional Future
          </h3>
          <p className="mb-10 text-xl text-blue-100 leading-relaxed">
            Connect with Epitome Consulting to co-create high-impact policies, strengthen governance, and unlock new funding frontiers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="group flex items-center rounded-full bg-[#A87C1F] px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-red-600"
            >
              <span className="mr-4 transform transition-transform duration-300 group-hover:translate-x-1">
                Talk To A Governance Expert
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
                Explore Related Services
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

export default PolicyGovernanceFundraising;
