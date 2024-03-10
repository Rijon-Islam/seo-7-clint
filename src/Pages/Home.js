import React from "react";
import Banner from "../components/Banner";

import ServicesSection from "../components/HomePage/ServicesSection";
import AboutSection from "../components/HomePage/AboutSection";
import CounterSection from "../components/HomePage/CounterSection";
import RecentProjects from "../components/HomePage/RecentProjects";
import BookingSection from "../components/HomePage/BookingSection";
import CallToAction from "../components/HomePage/CallToAction";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import FAQSection from "../components/HomePage/FAQSection";
import ContactUs from "./ContactUs";
import TeamMembers from "../components/HomePage/TeamMembers";
import PricingSection from "../components/HomePage/PricingSection";
import ExperienceSection from "../components/HomePage/ExperienceSection";







const Home = () => {
 
  return (
    <div>
      <Banner></Banner>
      
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <ExperienceSection></ExperienceSection>
      
      <FAQSection></FAQSection>
      <PricingSection></PricingSection>
      <TestimonialSection></TestimonialSection>
      <TeamMembers></TeamMembers>
      
      
      <CallToAction></CallToAction>

    
      






      




    </div>
  );
};

export default Home;
