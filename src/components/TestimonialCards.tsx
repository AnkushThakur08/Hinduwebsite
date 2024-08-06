"use client";
import { useState, useEffect } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { useTranslation } from "react-i18next";

const gurujiTestimonials = [
  {
    quote: "testimonial_quote_1",
    name: "testimonial_name_1",
    title: "testimonial_title_1",
  },
  {
    quote: "testimonial_quote_2",
    name: "testimonial_name_2",
    title: "testimonial_title_2",
  },
  {
    quote: "testimonial_quote_3",
    name: "testimonial_name_3",
    title: "testimonial_title_3",
  },
  {
    quote: "testimonial_quote_4",
    name: "testimonial_name_4",
    title: "testimonial_title_4",
  },
  {
    quote: "testimonial_quote_5",
    name: "testimonial_name_5",
    title: "testimonial_title_5",
  },
];

const GuruJiTestimonials = () => {
  const [client, setClient] = useState(false);
  const { t } = useTranslation("common");

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) {
    return null;
  }
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-white mb-8 z-10">{t("testimonial_title")}</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={gurujiTestimonials} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  );
};

export default GuruJiTestimonials;
