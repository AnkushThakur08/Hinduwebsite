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
      title: "Spiritual Upliftment",
      description:
        "The puja helps in purifying the mind and soul, removing negative energies, and fostering spiritual growth. It instills a sense of peace, calm, and inner strength",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Health and Well-being",
      description:
        "The mantras and rituals are said to have healing properties, promoting good health and overall well-being. Many devotees perform this puja for loved ones suffering from chronic diseases or severe health conditions.",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Prosperity and Success",
      description:
        "Performing the Rudra Abhishek Puja is believed to bring prosperity, success, and overall well-being to the devotees and their families",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Removal of Obstacles",
      description:
        "The puja is considered highly effective in removing obstacles and negative influences, ensuring a smooth and successful journey in life",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Family and Community Benefits",
      description:
        "Performing the puja for the entire family promotes unity, peace, and harmony among family members.When performed collectively, the puja can bring positive effects to the community, fostering collective well-being and prosperity",
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
