import React from "react";
import BackgroundBoxes from "@/components/BackgroundBoxes";
import FAQSection from "@/components/FAQSection";
import FeaturedContent from "@/components/FeaturedContent";
import FeaturedGuruJi from "@/components/FeaturedGuruji";
import Footer from "@/components/Footer";
import GuruJiTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/OurServices";
import SubFeaturedContent from "@/components/SubFeaturedContent";

const NarayanNagbaliPuja = () => {
  // Background Boxes
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

  // FeaturedContent
  const header_title = "narayan_nagbali_puja";
  const header_info = "narayan_nagbali_info";
  const img_url = "/courses/narayan.webp";
  const img_alt = "naryan-nagbali";
  const description = "narayan_nagbali_description";

  // SubFeaturedContent
  const sub_header_title = "narayan_nagbali_benefits";
  const featuredCard = [
    {
      title: "narayan_nagbali_benefit_title_1",
      description:"narayan_nagbali_benefit_description_1",
      slug: "",
      isFeatured: true,
    },
    {
      title: "narayan_nagbali_benefit_title_2",
      description: "narayan_nagbali_benefit_description_2",
      slug: "",
      isFeatured: true,
    },
    {
      title: "narayan_nagbali_benefit_title_3",
      description:"narayan_nagbali_benefit_description_3",
      slug: "",
      isFeatured: true,
    },
    {
      title: "narayan_nagbali_benefit_title_4",
      description: "narayan_nagbali_benefit_description_4",
      slug: "",
      isFeatured: true,
    },
    {
      title: "narayan_nagbali_benefit_title_5",
      description: "narayan_nagbali_benefit_description_5",
      slug: "",
      isFeatured: true,
    },
  ];

  return (
    <div>
      <BackgroundBoxes words={words} />
      <FeaturedContent
        header_title={header_title}
        header_info={header_info}
        img_url={img_url}
        img_alt={img_alt}
        description={description}
      />
      <SubFeaturedContent sub_header_title={sub_header_title} featuredCard={featuredCard} />
      <FeaturedGuruJi />
      <WhyChooseUs />
      <FAQSection />
      <GuruJiTestimonials />
      <Footer />
    </div>
  );
};

export default NarayanNagbaliPuja;
