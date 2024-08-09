import React from "react";
import BackgroundBoxes from "@/components/BackgroundBoxes";
import FAQSection from "@/components/FAQSection";
import FeaturedContent from "@/components/FeaturedContent";
import FeaturedGuruJi from "@/components/FeaturedGuruji";
import Footer from "@/components/Footer";
import GuruJiTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/OurServices";
import SubFeaturedContent from "@/components/SubFeaturedContent";

const KaalSarpPuja = () => {
  // Background Boxes
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

  // FeaturedContent
  const header_title = "kaal_sarp_dosh";
  const header_info = "kaal_sarp_info";
  const img_url = "/courses/pandit.webp";
  const img_alt = "kaal-sarp-dosh";
  const description = "kaal_sarp_description";

  // SubFeaturedContent
  const sub_header_title = "kaal_sarp_effects";
  const featuredCard = [
    {
      title: "kaal_sarp_effect_title_1",
      description: "kaal_sarp_effect_description_1",
      slug: "",
      isFeatured: true,
    },
    {
      title: "kaal_sarp_effect_title_2",
      description: "kaal_sarp_effect_description_2",
      slug: "",
      isFeatured: true,
    },
    {
      title: "kaal_sarp_effect_title_3",
      description: "kaal_sarp_effect_description_3",
      slug: "",
      isFeatured: true,
    },
    {
      title: "kaal_sarp_effect_title_4",
      description: "kaal_sarp_effect_description_4",
      slug: "",
      isFeatured: true,
    },
    {
      title: "kaal_sarp_effect_title_5",
      description: "kaal_sarp_effect_description_5",
      slug: "",
      isFeatured: true,
    },
    {
      title: "kaal_sarp_effect_title_6",
      description: "kaal_sarp_effect_description_6",
      slug: "",
      isFeatured: true,
    },
    {
      title: "kaal_sarp_effect_title_7",
      description: "kaal_sarp_effect_description_7",
      slug: "",
      isFeatured: true,
    },
    {
      title: "kaal_sarp_effect_title_8",
      description: "kaal_sarp_effect_description_8",
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
      {/* <UpcomingWebinars /> */}
      <Footer />
    </div>
  );
};

export default KaalSarpPuja;
