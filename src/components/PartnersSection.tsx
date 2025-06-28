import React, { useLayoutEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { partnersList } from "@/data";
import { HandHelping } from "lucide-react";

const PartnersSection: React.FC = () => {
  const itemWidth = 240;
  const gap = 24;
  const cardFullWidth = itemWidth + gap;

  // Reverse for rightward movement
  const extendedPartners = partnersList.concat(partnersList).slice().reverse();
  const totalOriginalWidth = partnersList.length * cardFullWidth;

  const controls = useAnimation();
  const cycleDuration = 70;

  const startAnimation = () => {
    controls.start({
      x: [-totalOriginalWidth, 0],
      transition: {
        duration: cycleDuration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  useLayoutEffect(() => {
    startAnimation();
  }, []);

  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () => startAnimation();

  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="flex items-center justify-center my-4">
            <div className="relative inline-flex items-center rounded-full px-2 py-1 border border-white/10 bg-black/50 shadow-md backdrop-blur-sm">
              <span className="absolute inset-0 rounded-full border border-white/5 blur-sm opacity-30 pointer-events-none" />
              <div className="relative inline-flex items-center bg-white text-black dark:bg-gray-800 dark:text-white font-semibold px-6 py-3 rounded-full text-lg shadow-inner border border-gray-200 dark:border-gray-700">
                <HandHelping className="h-6 w-6 mr-3 text-[#A87C1F]" />
                <span>Trusted by Leading Institutions</span>
              </div>
            </div>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We collaborate with visionary partners to drive innovation and create lasting impact across sectors.
          </p>
        </div>

        {/* Marquee Section */}
        <div
          className="relative overflow-hidden py-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ height: 160 }}
        >
          <motion.div
            className="flex items-center"
            style={{ width: `${totalOriginalWidth * 2}px`, gap: `${gap}px` }}
            animate={controls}
          >
            {extendedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                style={{ width: itemWidth, flexShrink: 0 }}
                className="bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/30 shadow-md hover:shadow-2xl rounded-2xl p-6 flex items-center justify-center text-center text-gray-900 dark:text-white font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                {partner.name}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="font-serif mt-20 text-center text-gray-700 dark:text-gray-300 italic text-lg"
        >
          <p className="max-w-2xl mx-auto border-t border-b border-gray-400 dark:border-gray-600 py-4 px-6 rounded-md">
            We proudly collaborate with <strong className="text-gray-900 dark:text-white">visionary partners</strong> who help us drive innovation and impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
