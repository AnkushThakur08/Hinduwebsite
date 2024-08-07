import React from "react";
import BackgroundBoxes from "@/components/BackgroundBoxes";
import FAQSection from "@/components/FAQSection";
import FeaturedContent from "@/components/FeaturedContent";
import FeaturedGuruJi from "@/components/FeaturedGuruji";
import Footer from "@/components/Footer";
import GuruJiTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
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
      title: "Health and Longevity",
      description:
        "The primary goal is to seek divine protection from untimely death and ensure good health and long life. It is recommended for those suffering from severe illnesses or facing life-threatening situations",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Spiritual Upliftment",
      description: "The ritual helps devotees overcome fears, anxieties, and negative energies, promoting spiritual growth and strength.",
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
      title: "Family and Community",
      description:
        "It is often performed for the well-being of the entire family or community, invoking blessings for peace, prosperity, and harmony",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Mental and emotional well-being",
      description:
        "The mantra is believed to have a calming and soothing effect on the mind and can help reduce stress, anxiety, and depression",
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
