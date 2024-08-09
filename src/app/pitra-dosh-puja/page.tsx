import React from "react";
import BackgroundBoxes from "@/components/BackgroundBoxes";
import FAQSection from "@/components/FAQSection";
import FeaturedContent from "@/components/FeaturedContent";
import FeaturedGuruJi from "@/components/FeaturedGuruji";
import Footer from "@/components/Footer";
import GuruJiTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/OurServices";
import SubFeaturedContent from "@/components/SubFeaturedContent";

const PitraDoshPuja = () => {
  // Background Boxes
  const words = [
    {
      text: "Pitra",
    },
    {
      text: "Dosh",
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
      text: "Curse",
      className: "text-orange-500 dark:text-orange-500",
    },
    {
      text: "Alleviation ",
      className: "text-orange-500 dark:text-orange-500",
    },
    {
      text: "Ritual",
      className: "text-orange-500 dark:text-orange-500",
    },
  ];

  // FeaturedContent
  const header_title = "pitra_dosh_puja";
  const header_info = "pitra_dosh_info";
  const img_url = "/courses/pitra-dosh-puja.webp";
  const img_alt = "pitra-dosh-puja";
  const description = "pitra_dosh_description";

  // SubFeaturedContent
  const sub_header_title = "pitra_dosh_types";
  const featuredCard = [
    {
      title: "pitra_dosh_type_1_title",
      description: "pitra_dosh_type_1_description",
      slug: "",
      isFeatured: true,
    },
    {
      title: "pitra_dosh_type_2_title",
      description: "pitra_dosh_type_2_description",
      slug: "",
      isFeatured: true,
    },
    {
      title: "pitra_dosh_type_3_title",
      description: "pitra_dosh_type_3_description",
      slug: "",
      isFeatured: true,
    },
    {
      title: "pitra_dosh_type_4_title",
      description: "pitra_dosh_type_4_description",
      slug: "",
      isFeatured: true,
    },
    {
      title: "pitra_dosh_type_5_title",
      description: "pitra_dosh_type_5_description",
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
