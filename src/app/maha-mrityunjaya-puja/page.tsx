import React from "react";
import BackgroundBoxes from "@/components/BackgroundBoxes";
import FAQSection from "@/components/FAQSection";
import FeaturedContent from "@/components/FeaturedContent";
import FeaturedGuruJi from "@/components/FeaturedGuruji";
import Footer from "@/components/Footer";
import GuruJiTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/OurServices";
import SubFeaturedContent from "@/components/SubFeaturedContent";

const MahaMrityunjayaPuja = () => {
  // Background Boxes
  const words = [
    {
      text: "Maha",
    },
    {
      text: "Mrityunjaya",
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
      text: "for",
    },
    {
      text: "Health",
      className: "text-orange-500 dark:text-orange-500",
    },
    {
      text: "&",
      className: "text-orange-500 dark:text-orange-500",
    },
    {
      text: "Longevity",
      className: "text-orange-500 dark:text-orange-500",
    },
  ];

  // FeaturedContent
  const header_title = "maha_mrityunjaya_puja";
  const header_info = "maha_mrityunjaya_info";
  const img_url = "/courses/maha-mrityunjaya-puja.webp";
  const img_alt = "maha_mrityunjaya_puja";
  const description = "maha_mrityunjaya_description";

  // SubFeaturedContent
  const sub_header_title = "maha_mrityunjaya_benefits";
  const featuredCard = [
    {
      title: "maha_mrityunjaya_title_1",
      description:"maha_mrityunjaya_description_1",
      slug: "",
      isFeatured: true,
    },
    {
      title: "maha_mrityunjaya_title_2",
      description: "maha_mrityunjaya_description_2",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Purification",
      description: "The puja purifies both the devotees and their surroundings, creating a sacred and harmonious space",
      slug: "",
      isFeatured: true,
    },
    {
      title: "maha_mrityunjaya_title_3",
      description: "maha_mrityunjaya_description_3",
      slug: "",
      isFeatured: true,
    },
    {
      title: "maha_mrityunjaya_title_4",
      description: "maha_mrityunjaya_description_4",
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

export default MahaMrityunjayaPuja;
