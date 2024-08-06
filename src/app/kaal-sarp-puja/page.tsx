import React from "react";
import BackgroundBoxes from "@/components/BackgroundBoxes";
import FAQSection from "@/components/FAQSection";
import FeaturedContent from "@/components/FeaturedContent";
import FeaturedGuruJi from "@/components/FeaturedGuruji";
import Footer from "@/components/Footer";
import GuruJiTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
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
  const header_title = "featured_content_title";
  const header_info = "featured_content_info";
  const img_url = "/courses/pandit.webp";
  const img_alt = "kaal-sarp-dosh";
  const description = "featured_content_description";

  // SubFeaturedContent
  const sub_header_title = "sub_feature_contain_title";
  const featuredCard = [
    {
      title: "Health problems",
      description: "People with Kaal Sarp Yoga may suffer from various health issues like headaches, stomach problems, and heart diseases.",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Financial issues",
      description: "Financial instability and struggles are common effects of Kaal Sarp Yoga",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Relationship troubles",
      description: "Kaal Sarp Yoga can cause relationship problems like misunderstandings, breakups, and divorce",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Delayed marriage",
      description: "People with Kaal Sarp Yoga may experience delays in marriage or problems in finding a suitable partner",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Career obstacles",
      description: "This yoga can cause obstacles in career growth, job stability, and professional success",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Mental stress",
      description: "People with Kaal Sarp Yoga may experience anxiety, depression, and other mental health issues",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Spiritual hindrances",
      description: "This yoga can cause hindrances in spiritual growth and progress",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Sudden and unexpected events",
      description: "People with Kaal Sarp Yoga may experience sudden and unexpected events like accidents, thefts, and losses",
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
