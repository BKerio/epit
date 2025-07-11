import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";
import { heroSlides } from "@/data"; // Your slide data

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  type HeroSlide = {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    overrideLink2?: {
      text: string;
      to: string;
    };
  };

  const slides: HeroSlide[] = heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];
  const secondButtonText = currentSlideData.overrideLink2?.text || "Reach Us";
  const secondButtonPath = currentSlideData.overrideLink2?.to || "/contact";

  return (
    <section className="relative h-[100dvh] min-h-[600px] overflow-hidden bg-black">
      {/* Background Slides */}
      <div className="absolute inset-0 w-full h-full z-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover sm:object-cover object-center sm:object-top"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </motion.div>
        ))}
      </div>

      {/* Circular Slide Counter */}
      <div className="absolute top-6 right-6 sm:top-12 sm:right-8 z-20">
        <motion.div
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4"
          style={{ borderColor: "#A87C1F" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        >
          <div
            className="absolute top-1 left-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xs font-bold text-white"
            style={{ backgroundColor: "#A87C1F" }}
          >
            {currentSlide + 1}/{slides.length}
          </div>
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col justify-end items-start relative z-20 pb-20 sm:pb-24">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-full sm:max-w-4xl mt-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-xl">
            {currentSlideData.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 font-light drop-shadow-lg">
            {currentSlideData.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch rounded-xl border border-white/20 bg-white/10 px-4 sm:px-6 py-2 text-white backdrop-blur-md hover:border-white/40 transition-all duration-300">
              <Link
                to="/solutions"
                className="group flex items-center pr-4 py-1 transition-all duration-300"
              >
                <span className="mr-2 transition-transform group-hover:translate-x-1">
                  Our Expertise
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/30 transition-all group-hover:border-white group-hover:rotate-45">
                  <ArrowDownRight className="h-4 w-4 transition-transform group-hover:rotate-45 group-hover:scale-110" />
                </span>
              </Link>

              {/* Divider */}
              <div className="hidden sm:block w-px h-6 bg-white/20 mx-2 opacity-70" />

              {/* Reach Us Button */}
              <Link
                to={secondButtonPath}
                className="group flex items-center pt-2 sm:pt-0 pl-0 sm:pl-4 transition-all duration-300"
              >
                <span className="mr-2 transition-transform group-hover:translate-x-1">
                  {secondButtonText}
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/30 transition-all group-hover:border-white group-hover:rotate-45">
                  <ArrowDownRight className="h-4 w-4 transition-transform group-hover:rotate-45 group-hover:scale-110" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicator Bubbles */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
              currentSlide === index ? "bg-[#A87C1F] scale-125" : "bg-white/30"
            }`}
            animate={{ scale: currentSlide === index ? 1.25 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
