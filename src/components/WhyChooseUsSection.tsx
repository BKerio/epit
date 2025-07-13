import { motion } from "framer-motion";
import {
  GlobeIcon,
  BarChart3Icon,
  HandshakeIcon,
  Layers3Icon,
  UsersIcon,
} from "lucide-react";

const values = [
  {
    icon: <GlobeIcon className="w-8 h-8 text-[#A87C1F]" />,
    title: "Unwavering Pan-African Insight",
    description:
      "We craft strategies grounded in cultural relevance, empowering Africa’s growth through contextual intelligence.",
  },
  {
    icon: <BarChart3Icon className="w-8 h-8 text-[#A87C1F]" />,
    title: "Data-Driven, Forward-Thinking Solutions",
    description:
      "Using evidence and innovation, we turn complex challenges into sustainable opportunities.",
  },
  {
    icon: <HandshakeIcon className="w-8 h-8 text-[#A87C1F]" />,
    title: "Dedicated Partnership, Tailored Impact",
    description:
      "Your goals are our mission. We immerse into your ecosystem to co-create meaningful, long-term value.",
  },
  {
    icon: <Layers3Icon className="w-8 h-8 text-[#A87C1F]" />,
    title: "Integrated Strategies for Sustainable Futures",
    description:
      "We design holistic systems that foster resilience, innovation, and shared prosperity.",
  },
  {
    icon: <UsersIcon className="w-8 h-8 text-[#A87C1F]" />,
    title: "Fostering Growth Through Unity",
    description:
      "We champion inclusion and collaboration—amplifying collective strengths for broader impact.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">

        {/* Custom Glass Header */}
        <h2 className="flex items-center justify-center my-4">
          <div className="relative inline-flex items-center rounded-full px-2 py-1 border border-white/10 bg-black/50 shadow-md backdrop-blur-sm">
            <span className="absolute inset-0 rounded-full border border-white/5 blur-sm opacity-30 pointer-events-none" />
            <div className="relative inline-flex items-center bg-white text-black dark:bg-gray-800 dark:text-white font-semibold px-6 py-3 rounded-full text-lg shadow-inner border border-gray-200 dark:border-gray-700">
              <HandshakeIcon className="h-6 w-6 mr-3 text-[#A87C1F]" />
              <span>Why Choose Epitome Consulting</span>
            </div>
          </div>
        </h2>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4"
        >
          Navigating Complexity, Cultivating Enduring Success
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-12"
        >
          In the pursuit of progress, we offer clarity and strategic direction.
          Partnering with Epitome means committing to transformation, resilience,
          and African excellence.
        </motion.p>

        {/* Value Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
            Let’s build something remarkable together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
