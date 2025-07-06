import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Globe, Users, Layers, Star } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  organization: string;
  icon: React.ReactNode;
  description: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "National Industrial Training Authority (NITA)",
    organization: "Kenya",
    icon: <BadgeCheck className="text-blue-600 dark:text-blue-400 h-8 w-8" />,
    description:
      "Accredited by NITA under Kenya’s Ministry of Labour, ensuring our trainings meet national industrial standards for relevant, hands-on skills development.",
  },
  {
    id: 2,
    title: "Project Management Institute (PMI)",
    organization: "Global",
    icon: <Layers className="text-purple-600 dark:text-purple-400 h-8 w-8" />,
    description:
      "Our certified consultants adhere to globally recognized PMI frameworks, driving structured, efficient, and measurable project outcomes.",
  },
  {
    id: 3,
    title: "Institute of Human Resource Management (IHRM)",
    organization: "Kenya",
    icon: <Users className="text-emerald-600 dark:text-emerald-400 h-8 w-8" />,
    description:
      "As IHRM members, we promote ethical HR practices that drive innovative, aligned, and sustainable workforce strategies.",
  },
  {
    id: 4,
    title: "Continuing Professional Development (CPD)",
    organization: "Global",
    icon: <Globe className="text-orange-500 dark:text-orange-400 h-8 w-8" />,
    description:
      "Our CPD-certified programs ensure ongoing professional growth through accredited learning experiences, tailored to evolving industry needs.",
  },
];

const extras: string[] = [
  "Chartered Institute of Personnel and Development (CIPD)",
  "International Association for Six Sigma Certification (IASSC)",
  "Association for Talent Development (ATD)",
];

interface AnimationVariants {
  [key: string]: any;
}

const sectionVariants: AnimationVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants: AnimationVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.5 },
  }),
};

const extraItemVariants: AnimationVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 1.3 + index * 0.2, duration: 0.4 },
  }),
};

function Certifications() {
  return (
    <section
      className="bg-gray-50 dark:bg-gray-900 py-16 px-6 sm:px-12 lg:px-24"
      aria-labelledby="certifications-heading"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-12 lg:mb-16"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        id="certifications-heading"
      >
        Our Professional Certifications & Affiliations
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2 focus-within:ring-2 focus-within:ring-blue-500"
            whileHover={{ scale: 1.03 }}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.currentTarget.classList.add('focus-visible:ring-2', 'focus-visible:ring-blue-500');
              }
            }}
            onBlur={(e) => {
              e.currentTarget.classList.remove('focus-visible:ring-2', 'focus-visible:ring-blue-500');
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-white">{cert.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 sm:text-base">{cert.organization}</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-200 text-sm leading-relaxed sm:text-base">{cert.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center max-w-3xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          Additional Certifications & Affiliations
        </h3>
        <ul className="space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
          {extras.map((item, i) => (
            <motion.li
              key={i}
              className="flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-yellow-500 dark:focus-visible:ring-yellow-400 rounded-md px-2 py-1"
              variants={extraItemVariants}
              initial="hidden"
              animate="visible"
              custom={i}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.currentTarget.classList.add('focus-visible:ring-2', 'focus-visible:ring-yellow-500');
                }
              }}
              onBlur={(e) => {
                e.currentTarget.classList.remove('focus-visible:ring-2', 'focus-visible:ring-yellow-500');
              }}
            >
              <Star className="text-yellow-500 dark:text-yellow-400" size={18} />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export default Certifications;
