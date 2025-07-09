import React from "react";
import { BadgeCheck } from "lucide-react";

// Importing logos
import NitaLogo from "@/assets/nita.png";
import PmiLogo from "@/assets/pmi.png";
import IhrmLogo from "@/assets/ihrm.png";
import CpdLogo from "@/assets/cpd.png";

const certifications = [
  {
    title: "National Industrial Training Authority (NITA) – Kenya",
    description:
      "Accredited by NITA, Epitome ensures that our training programs meet Kenya’s national standards, equipping clients with industry-relevant skills and impactful learning experiences.",
    logo: NitaLogo,
  },
  {
    title: "Project Management Institute (PMI)",
    description:
      "Our consultants are certified members of PMI, aligning our project delivery frameworks with globally recognized methodologies for efficient, effective, and measurable outcomes.",
    logo: PmiLogo,
  },
  {
    title: "Institute of Human Resource Management (IHRM) – Kenya",
    description:
      "As members of IHRM, we adhere to ethical HR practices and deliver innovative workforce solutions aligned with statutory and organizational growth objectives.",
    logo: IhrmLogo,
  },
  {
    title: "Continuing Professional Development (CPD) Certification Service",
    description:
      "Our affiliation with CPD ensures all our training and learning initiatives meet global standards for continuous professional development, driving lifelong learning and excellence.",
    logo: CpdLogo,
  },
  {
    title: "Additional Certifications & Affiliations",
    description:
      "• Chartered Institute of Personnel and Development (CIPD)\n• International Association for Six Sigma Certification (IASSC)\n• Association for Talent Development (ATD)",
    logo: null,
  },
];

const CertificationsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 font-garamond text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="flex items-center justify-center my-4">
            <div className="relative inline-flex items-center rounded-full px-2 py-1 border border-white/10 bg-black/50 shadow-md backdrop-blur-sm">
              <span className="absolute inset-0 rounded-full border border-white/5 blur-sm opacity-30 pointer-events-none" />
              <div className="relative inline-flex items-center bg-white text-black dark:bg-gray-800 dark:text-white font-semibold px-6 py-3 rounded-full text-lg shadow-inner border border-gray-200 dark:border-gray-700">
                <BadgeCheck className="h-6 w-6 mr-3 text-[#554115]" />
                <span>Our Certifications</span>
              </div>
            </div>
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Professional Certifications & Affiliations
          </h2>
          <p className="mt-4 text-xl text-justify max-w-4xl mx-auto text-gray-600 dark:text-gray-400">
            At Epitome Consulting Solutions, we proudly hold a range of professional certifications and affiliations with globally and nationally recognized institutions. These credentials validate our commitment to excellence, accountability, and the delivery of world-class consulting services.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700
              ${!cert.logo ? "md:col-span-2 flex flex-col items-center text-center" : "flex flex-col"}`}
            >
              {/* Logo */}
              {cert.logo && (
                <div className="mb-6 flex justify-center w-full">
                  <div className="w-36 h-36 flex items-center justify-center rounded-full bg-white shadow-inner border border-gray-300 dark:border-gray-700">
                    <img
                      src={cert.logo}
                      alt={`${cert.title} Logo`}
                      className="w-28 h-28 object-contain rounded-full"
                    />
                  </div>
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2">
                {cert.title}
              </h3>

              {/* Description */}
              <p
                className={`whitespace-pre-line text-gray-600 dark:text-gray-300 ${
                  !cert.logo ? "text-center" : "text-justify"
                }`}
              >
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
