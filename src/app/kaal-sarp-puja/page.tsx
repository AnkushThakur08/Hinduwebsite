import BackgroundBoxes from "@/components/BackgroundBoxes";
import FAQSection from "@/components/FAQSection";
import FeaturedContent from "@/components/FeaturedContent";
import FeaturedGuruJi from "@/components/FeaturedGuruji";
import Footer from "@/components/Footer";
import GuruJiTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const KaalSarpPuja = () => {
  const words = [
    {
      text: "Kaal",
    },
    {
      text: "Sarp",
    },
    {
      text: "Dosh",
    },
    {
      text: ":",
    },
    {
      text: "Astrological",
    },
    {
      text: "Curse",
      className: "text-orange-500 dark:text-orange-500",
    },
    {
      text: "Effect",
      className: "text-orange-500 dark:text-orange-500",
    },
  ];

  const header_title = "featured_content_title";
  const header_info = "featured_content_info";
  const img_url = "/courses/pandit.webp";
  const img_alt = "kaal-sarp-dosh";
  const description = "featured_content_description";

  const sub_header_title = "sub_feature_contain_title";
  return (
    <div>
      <BackgroundBoxes words={words} />
      <FeaturedContent
        header_title={header_title}
        header_info={header_info}
        img_url={img_url}
        img_alt={img_alt}
        description={description}
        sub_header_title={sub_header_title}
      />
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
