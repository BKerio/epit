// src/pages/Projects.tsx
import React, { useEffect, useState, useRef } from "react"; // Import useState, useRef for Counter
import { motion } from "framer-motion";
// Import necessary icons, adding CheckCircle as it's used in getResultIcon
import { ArrowRight, BookOpenText, Puzzle, Settings, Trello, Award, ArrowDownRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/models/ui/button"; // Assuming this path is correct

// Import data and interfaces from the central index file
import { projectsList, successStories } from "@/data";

// --- Counter Component (Copied from Methodology page) ---
// This component counts up to a target number when it enters the viewport
const Counter = ({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null); // Explicit type for useRef

  useEffect(() => {
    // Check for server-side rendering where window/IntersectionObserver might not exist
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
        setCount(target); // Render target directly if no IntersectionObserver
        return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]); // Depend on ref

  useEffect(() => {
    if (!isVisible || target <= 0) return; // Only start if visible and target is positive

    // Handle the case where target is not a finite number (e.g., NaN)
    if (!Number.isFinite(target)) {
         setCount(0); // Or handle as an error
         return;
    }


    const startTime = performance.now();
    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      // Use the actual target for interpolation
      const currentCount = Math.floor(progress * target);

      // Ensure we don't exceed the target
      const finalCount = Math.min(currentCount, target);


      // Only update state if the count changed and is finite
       if (isFinite(finalCount)) {
         setCount(finalCount);
       }


      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target); // Ensure the final value is exactly the target
      }
    };

    const frameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(frameId);
  }, [target, duration, isVisible]); // Depend on target, duration, and visibility

   // Use target directly if it's 0 or not a finite number, or if SSR (checked in first effect)
   // Ensure we always return a valid finite number
   const displayCount = isFinite(count) && isVisible ? count : (isFinite(target) ? target : 0);


  return <span ref={ref}>{displayCount}{suffix}</span>;
};
// --- End Counter Component ---


// Helper function to pick icon based on result type (optional, could use one generic icon)
// Used in the tangible results section
const getResultIcon = (description: string) => {
  // Simple logic: use ArrowDownRight for reductions, ArrowUpRight for increases/improvements
  // Default to CheckCircle or Award
  if (description.toLowerCase().includes("reduced") || description.toLowerCase().includes("lower") || description.toLowerCase().includes("decrease")) {
    return <ArrowDownRight className="w-5 h-5 mr-2 flex-shrink-0 text-red-500 dark:text-red-400" />;
  }
   // Use ArrowRight rotated for an Up-Right look
   if (description.toLowerCase().includes("increased") || description.toLowerCase().includes("improved") || description.toLowerCase().includes("gain")) {
    return <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 text-green-600 dark:text-green-500 transform -rotate-45" />;
  }
  // Default or specific icons
   if (description.toLowerCase().includes("satisfaction")) {
       return <Award className="w-5 h-5 mr-2 flex-shrink-0 text-yellow-600 dark:text-yellow-500" />;
   }
  return <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 text-blue-600 dark:text-blue-400" />; // Generic success icon
};


const Projects: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-boldbold mb-6 leading-tight">
          Discover Our Impactful Projects
        </h1>
        <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
          Dive into our portfolio showcasing innovative IT solutions that drive success across diverse industries.
        </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Uses data from projectsList */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 bg-gradient-to-br from-transparent via-white/5 dark:via-gray-900/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              In-depth case studies of our most impactful work
            </p>
          </div>

          {projectsList.map((project, idx) => (
            // Outer container with border and animation
            <div key={project.id} className="relative mb-20 p-px rounded-xl border border-blue-300/30 dark:border-blue-700/30 bg-gradient-to-br from-white/10 dark:from-gray-900/10 via-transparent to-white/10 dark:to-gray-900/10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl shadow-2xl"
              >
                {/* Project Header */}
                <div className="mb-8">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Project Overview/Description */}
                <div className="space-y-6 text-gray-700 dark:text-gray-400 leading-relaxed border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
                   <div className="flex items-center mb-2">
                     <BookOpenText className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                     <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Overview:</h4>
                   </div>
                  <p>{project.description}</p>
                </div>

                {/* Split the content area */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                     {/* Left Column: Challenge & Solution */}
                     <div>
                         <div className="space-y-6 text-gray-700 dark:text-gray-400 leading-relaxed mb-8">
                              <div className="flex items-center mb-2">
                                 <Puzzle className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                                 <h4 className="text-xl font-semibold text-gray-900 dark:text-white">The Challenge:</h4>
                              </div>
                              {/* Use data from projectsList */}
                              <p>{project.challenge}</p>
                         </div>

                         <div className="space-y-6 text-gray-700 dark:text-gray-400 leading-relaxed">
                             <div className="flex items-center mb-2">
                                 <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                                 <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Our Approach & Solution:</h4>
                              </div>
                             {/* Use data from projectsList */}
                             <p>{project.solution}</p>
                         </div>
                     </div>

                     {/* Right Column: Technologies & Highlights & Results */}
                     <div>
                          {/* Technologies */}
                           <div className="mb-8">
                                <div className="flex items-center mb-2">
                                   <Trello className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                                   <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Key Technologies:</h4>
                                </div>
                               {/* Join the technologies array into a string */}
                                <p className="text-gray-700 dark:text-gray-400">
                                    {project.technologies.join(", ")}
                                </p>
                           </div>

                           {/* Project Highlights */}
                         <div className="mb-8">
                             <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                               Project Highlights:
                             </h4>
                             <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 marker:text-blue-600 dark:marker:text-blue-400">
                               {project.highlights?.map((h, i) => (
                                 <li key={i}>{h}</li>
                               ))}
                             </ul>
                         </div>

                          {/* Tangible Results - Using data from projectsList and Counter */}
                           <div>
                               <div className="flex items-center mb-3">
                                    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Tangible Results:</h4>
                               </div>
                                {/* Loop through results array and display each with icon and Counter */}
                                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                                    {project.results.map((result, i) => (
                                        <li key={i} className="flex items-start"> {/* Use items-start for alignment with multi-line text */}
                                            {/* Icon part */}
                                            {getResultIcon(result.description)}
                                            {/* Text part - Contains the Counter component */}
                                            <span>
                                                {/* Wrap Counter with the desired styling for the number */}
                                                <span className="font-bold text-gray-900 dark:text-white mr-1"> {/* Added margin-right for space */}
                                                    <Counter
                                                       target={result.value}
                                                       suffix={result.unit}
                                                       duration={1800} // Animation duration
                                                    />
                                                </span>
                                                {/* The rest of the description text */}
                                                {result.description}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                           </div>


                         {/* Action Button */}
                         <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                           {/* Note: project.path exists based on the data structure */}
                           <Button asChild>
                             <Link to={project.path}>
                               View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                             </Link>
                           </Button>
                         </div>
                     </div>
                 </div>
              </motion.div>

              {/* Separator between projects */}
              {idx < projectsList.length - 1 && (
                 <div className="relative flex justify-center items-center my-20 md:my-24 h-0.5 bg-gray-300 dark:bg-gray-700">
                    <div className="absolute z-10 p-1.5 bg-gray-50 dark:bg-gray-800 rounded-full"> {/* Added background for icon visibility */}
                       {/* This assumes animate-bounce-down is defined in your CSS */}
                       <ArrowRight className="h-7 w-7 text-blue-600 dark:text-blue-400 transform rotate-90 animate-bounce-down" />
                    </div>
                 </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* More Success Stories Section - Uses data from successStories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">More Success Stories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Quick insights into additional projects and their impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (story.id - 1) * 0.1 }} // Adjust delay based on id/index if needed
                viewport={{ once: true, amount: 0.3 }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-t-4 hover:border-blue-600 dark:hover:border-blue-400 flex flex-col"
              >
                 {/* No Image */}

                {/* Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {story.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                    {story.description}
                  </p>
                  {/* Button pushed to bottom */}
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    {story.path ? (
                      <Link
                        to={story.path}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group"
                      >
                        {story.linkText || "View Project"}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center text-gray-500 dark:text-gray-500 font-medium cursor-not-allowed">
                        Details Coming Soon <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* CTA Section */}
     <section className="py-20 bg-gray dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Work With Millenium Solutions?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Let's discuss how our team can help you achieve your technology goals and drive business growth.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                {/* Primary Button: Talk To Experts */}
              <Link
                to="/contact"
                className="group flex items-center justify-center rounded-full border border-red-500 bg-red-500 px-6 py-2 text-white transition-colors duration-300 hover:bg-red-600 hover:border-red-600"
              >
                <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">
                  Talk To Experts
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/50 transition-all duration-300 group-hover:border-white group-hover:rotate-45">
                  <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
                </span>
              </Link>

                {/* Secondary Button: Explore Solutions */}
                <Link
                  to="/solutions"
                  className="group flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-500 px-6 py-2 text-gray-800 dark:text-gray-300 transition-colors duration-300 hover:border-red-500 hover:text-red-500"
                >
                  <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">
                    Explore Solutions
                  </span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-400 dark:border-gray-500 transition-all duration-300 group-hover:border-red-500 group-hover:rotate-45">
                    <ArrowDownRight className="h-4 w-4 text-gray-600 dark:text-gray-400 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 group-hover:text-red-500" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;