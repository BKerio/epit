// Home.tsx
import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
//import TestimonialsSection from "@/components/TestimonialsSection";
import CertificationsSection from "@/components/CertificationSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServicesSection from "@/components/ServicesSection";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <main> 
      <HeroSection />
      <WhyChooseUsSection />
      <CertificationsSection />
      <ServicesSection />
      <PartnersSection />
      {/* <TestimonialsSection /> */}
    </main>
  );
};

export default Home;
