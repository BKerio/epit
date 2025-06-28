// src/components/TestimonialsSection.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, SearchCheckIcon, Star } from "lucide-react";
import { testimonials as rawTestimonialsData } from "@/data";

interface Testimonial {
  id: number | string;
  message: string;
  name: string;
  rating: number;
  title?: string;
}

const testimonialsData: Testimonial[] = rawTestimonialsData.map((t, i) => ({
  ...t,
  id: t.id ?? i,
}));

const renderStars = (count: number) => {
  const stars = [];
  const clamped = Math.max(0, Math.min(5, count));
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        key={i}
        className={`h-5 w-5 transition-colors ${
          i < clamped
            ? "text-yellow-400 fill-current"
            : "text-gray-300 dark:text-gray-600"
        }`}
        aria-hidden="true"
      />
    );
  }
  return stars;
};

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(0);

  if (!testimonialsData.length) return null;

  useEffect(() => {
    const timer = setInterval(() => {
      setDir(1);
      setCurrent((c) => (c + 1) % testimonialsData.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDir(-1);
    setCurrent((c) => (c === 0 ? testimonialsData.length - 1 : c - 1));
  };
  const handleNext = () => {
    setDir(1);
    setCurrent((c) => (c + 1) % testimonialsData.length);
  };
  const handleDot = (i: number) => {
    if (i === current) return;
    setDir(i > current ? 1 : -1);
    setCurrent(i);
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 100 : -100, scale: 0.98 }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (d: number) => ({
      opacity: 0,
      x: d < 0 ? 100 : -100,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    }),
  };

  const data = testimonialsData[current];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="flex items-center justify-center my-4">
            <div className="relative inline-flex items-center rounded-full px-2 py-1 border border-white/10 bg-black/50 shadow-md backdrop-blur-sm">
              <span className="absolute inset-0 rounded-full border border-white/5 blur-sm opacity-30 pointer-events-none" />
              <div className="relative inline-flex items-center bg-white text-black dark:bg-gray-800 dark:text-white font-semibold px-6 py-3 rounded-full text-lg shadow-inner border border-gray-200 dark:border-gray-700">
                <SearchCheckIcon className="h-6 w-6 mr-3 text-[#A87C1F]" />
                <span>What Our Clients Say</span>
              </div>
            </div>
          </h2>

        <div className="relative">
          <AnimatePresence initial={false} custom={dir} mode="wait">
            <motion.div
              key={data.id}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative backdrop-blur-md bg-white/60 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-3xl px-8 py-10 md:px-12 md:py-12 shadow-2xl transition-shadow duration-300"
            >
              <Quote className="absolute top-6 left-6 w-10 h-10 text-black dark:text-white opacity-10 dark:opacity-[0.08] -rotate-12" aria-hidden="true" />
              <Quote className="absolute bottom-6 right-6 w-10 h-10 text-black dark:text-white opacity-10 dark:opacity-[0.08] rotate-180" aria-hidden="true" />

              <p className="font-serif text-base md:text-lg italic leading-relaxed text-gray-800 dark:text-gray-300 mx-auto max-w-2xl">
                {data.message}
              </p>

              <h3 className="mt-8 text-xl font-bold text-gray-900 dark:text-white">
                {data.name}
              </h3>
              {data.title && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{data.title}</p>
              )}

              <div className="mt-4 flex justify-center space-x-1">
                {renderStars(data.rating)}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-700/90 rounded-full p-3 shadow-lg hover:scale-105 transition"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-700/90 rounded-full p-3 shadow-lg hover:scale-105 transition"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className={`w-3.5 h-3.5 rounded-full transition transform ${
                i === current
                  ? "bg-[#A87C1F] dark:bg-[#e7b549] scale-125"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
