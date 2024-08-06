import React from "react";
import BackgroundBoxes from "@/components/BackgroundBoxes";
import FAQSection from "@/components/FAQSection";
import FeaturedContent from "@/components/FeaturedContent";
import FeaturedGuruJi from "@/components/FeaturedGuruji";
import Footer from "@/components/Footer";
import GuruJiTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
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
      title: "Ancestral Peace",
      description:
        "Helps in providing peace and liberation to the souls of ancestors who died unnatural deaths, ensuring their blessings for the family.",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Removal of Doshas",
      description: "Mitigates the effects of Pitru Dosha and Naga Dosha, leading to a more harmonious and prosperous life",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Health and Well-being",
      description:
        "Alleviates health issues and other problems caused by the negative influences of ancestral curses and serpent-related doshas",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Spiritual Growth",
      description: "Enhances spiritual growth and fosters a sense of inner peace and fulfillment",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Overall Prosperity",
      description: "Brings overall prosperity, harmony, and happiness to the family by removing obstacles and negative energies",
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
