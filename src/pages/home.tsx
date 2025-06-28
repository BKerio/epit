// Home.tsx
import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServicesSection from "@/components/ServicesSection";

// Home component
// This component serves as the main page of the application
// It includes various sections like Hero, Why Choose Us, Services, Partners, and Testimonials
// It also ensures that the page scrolls to the top when it is mounted

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <main> 
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <PartnersSection />
      <TestimonialsSection />
    </main>
  );
};

export default Home;
