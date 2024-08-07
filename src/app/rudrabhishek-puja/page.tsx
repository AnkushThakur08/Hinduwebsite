import React from "react";
import BackgroundBoxes from "@/components/BackgroundBoxes";
import FAQSection from "@/components/FAQSection";
import FeaturedContent from "@/components/FeaturedContent";
import FeaturedGuruJi from "@/components/FeaturedGuruji";
import Footer from "@/components/Footer";
import GuruJiTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import SubFeaturedContent from "@/components/SubFeaturedContent";

const PitraDoshPuja = () => {
  // Background Boxes
  const words = [
    {
      text: "Rudra",
    },
    {
      text: "Abhishek",
    },
    {
      text: "Puja",
    },
    {
      text: ":",
    },
    {
      text: "Ritual",
    },
    {
      text: "worship",
      className: "text-orange-500 dark:text-orange-500",
    },
    {
      text: "of",
      className: "text-orange-500 dark:text-orange-500",
    },
    {
      text: "Lord",
      className: "text-orange-500 dark:text-orange-500",
    },
    {
      text: "Shiva",
      className: "text-orange-500 dark:text-orange-500",
    },
  ];

  // FeaturedContent
  const header_title = "rudra_abhishek_puja";
  const header_info = "rudra_abhishek_info";
  const img_url = "/courses/pitra-dosh-puja.webp";
  const img_alt = "rudra-abhishek-puja";
  const description = "rudra_abhishek_description";

  // SubFeaturedContent
  const sub_header_title = "rudra_abhishek_benefits";
  const featuredCard = [
    {
      title: "rudra_abhishek_benefit_title_1",
      description: "rudra_abhishek_benefit_description_1",
      slug: "",
      isFeatured: true,
    },
    {
      title: "rudra_abhishek_benefit_title_2",
      description: "rudra_abhishek_benefit_description_2",
      slug: "",
      isFeatured: true,
    },
    {
      title: "rudra_abhishek_benefit_title_3",
      description: "rudra_abhishek_benefit_description_3",
      slug: "",
      isFeatured: true,
    },
    {
      title: "rudra_abhishek_benefit_title_4",
      description: "rudra_abhishek_benefit_description_4",
      slug: "",
      isFeatured: true,
    },
    {
      title: "rudra_abhishek_benefit_title_5",
      description: "rudra_abhishek_benefit_description_5",
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

export default PitraDoshPuja;
