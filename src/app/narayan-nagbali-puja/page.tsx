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
      text: "Narayan",
    },
    {
      text: "Nagabali",
    },
    {
      text: "Puja",
    },
    {
      text: ":",
    },
    {
      text: "Ancestral",
    },
    {
      text: "Peace",
      className: "text-orange-500 dark:text-orange-500",
    },
    {
      text: "&",
      className: "text-orange-500 dark:text-orange-500",
    },
    {
      text: "Prosperity",
      className: "text-orange-500 dark:text-orange-500",
    },
  ];

  const header_title = "narayan_nagbali_puja";
  const header_info = "narayan_nagbali_info";
  const img_url = "/courses/narayan.webp";
  const img_alt = "naryan-nagbali";
  const description = "narayan_nagbali_description";

  const sub_header_title = "narayan_nagbali_benefits";

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
      <Footer />
    </div>
  );
};

export default KaalSarpPuja;
