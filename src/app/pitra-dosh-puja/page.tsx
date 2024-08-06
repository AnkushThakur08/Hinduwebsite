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
      title: "Narayan Nagbali Puja",
      description:
        "This puja is performed to seek the blessings of Lord Narayan and Nag Devta. It is believed to remove the negative effects of pitra dosh caused by the killing of snakes or other reptiles",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Tri-Pindi Shradh Puja",
      description:
        "This puja is performed to offer food and water to the ancestors and seek their blessings. It is believed to help the ancestors attain a higher state of consciousness and free them from any negative karma.",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Kalsarpa Shanti Puja",
      description:
        "This puja is performed to reduce the negative effects of the Kalsarpa Dosha, which is believed to be caused by a specific planetary alignment at the time of a person’s birth.",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Pitru Paksha Puja",
      description:
        "This puja is performed during the Pitru Paksha period, which is a 16-day period of the Hindu lunar calendar dedicated to the ancestors. It is believed to help the ancestors attain moksha or liberation.",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Mahalaya Amavasya Puja",
      description:
        "This puja is performed on the new moon day of the Hindu month of Ashwin to honor the ancestors and seek their blessings.",
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
