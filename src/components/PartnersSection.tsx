import React, { useLayoutEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { PartnersList } from "@/data";
import { HelpingHand } from "lucide-react";

const PartnersSection: React.FC = () => {
  const itemWidth = 180;
  const gap = 20;
  const cardFullWidth = itemWidth + gap;

  const extendedPartners = PartnersList.concat(PartnersList);
  const totalOriginalWidth = PartnersList.length * cardFullWidth;

  const controls = useAnimation();
  const cycleDuration = 30; // seconds

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
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <h2 className="flex items-center justify-center my-4">
          <div className="relative inline-flex items-center rounded-full px-2 py-1 border border-white/10 bg-black/50 shadow-md backdrop-blur-sm">
            <span className="absolute inset-0 rounded-full border border-white/5 blur-sm opacity-30 pointer-events-none" />
            <div className="relative inline-flex items-center bg-white text-black dark:bg-gray-800 dark:text-white font-semibold px-6 py-3 rounded-full text-lg shadow-inner border border-gray-200 dark:border-gray-700">
              <HelpingHand className="h-6 w-6 mr-3 text-[#A87C1F]" />
              <span>Who we have worked with</span>
            </div>
          </div>
        </h2>

        <div
          className="relative overflow-hidden py-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ height: itemWidth + 60 }}
        >
          <motion.div
            className="flex items-center"
            style={{ width: `${totalOriginalWidth * 2}px`, gap: `${gap}px` }}
            animate={controls}
          >
            {extendedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                style={{ width: itemWidth, marginRight: gap, flexShrink: 0 }}
                className="flex flex-col items-center justify-between bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-full h-40 flex items-center justify-center overflow-hidden mb-3 relative">
                  <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain max-w-[105%] max-h-[105%] relative z-10"
                  loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="font-serif mt-20 text-center text-gray-700 dark:text-gray-300 italic text-lg"
        >
          <p className="max-w-2xl mx-auto border-t border-b border-gray-400 dark:border-gray-600 py-4 px-6 rounded-md">
            We collaborate with industry-leading partners to deliver{" "}
            <strong className="text-gray-900 dark:text-white">
              the best-in-class solutions
            </strong>{" "}
            for your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
