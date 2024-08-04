import BackgroundBoxes from "@/components/BackgroundBoxes";
import FAQSection from "@/components/FAQSection";
import FeaturedContent from "@/components/FeaturedContent";
import FeaturedGuruJi from "@/components/FeaturedGuruji";
import Footer from "@/components/Footer";
import GuruJiTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const KaalSarpPuja = () => {
  return (
    <div>
      <BackgroundBoxes />
      <FeaturedContent />
      <FeaturedGuruJi />
      <WhyChooseUs />
      <FAQSection />
      <GuruJiTestimonials />
      {/* <UpcomingWebinars /> */}
      <Footer />
    </div>
  );
};

export default KaalSarpPuja;
