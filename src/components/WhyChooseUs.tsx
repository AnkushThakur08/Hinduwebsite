"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const poojaListContent = [
  {
    title: "Kaal Sarp Dosh Puja",
    description:
      "Hindu ritual to alleviate negative effects of Kaalsarp dosh; involves prayers, offerings, mantras; performed by priest; seeks divine blessings.",
    src: "/courses/image-1.png",
  },
  {
    title: "Mahamrutunjay Jaap Puja",
    description:
      "Mahamrutunjay Jaap Puja is a Hindu ritual that is performed to seek the blessings of Lord Shiva and to ward off illness and death.",
    src: "/courses/image-2.jpg",
  },
  {
    title: "Pitra Shanti Puja",
    description: "Pitra Shanti Puja is a Hindu ritual that is performed to appease the ancestors or pitras and seek their blessings.",
    src: "/courses/image-3.jpg",
  },
  {
    title: "Rudra Abhishek",
    description:
      "Rudra Abhishek is a Hindu ritual that is performed to worship Lord Shiva. The puja is mainly performed to get rid of negative energies and obstacles in life and to attain peace and prosperity.",
    src: "/courses/image-4.png",
  },
  {
    title: "Narayan Nagbali Puja",
    description:
      "Narayan Nagbali Puja is a Hindu ritual that is performed to get rid of various problems related to health, wealth, and relationships.",
    src: "/courses/image-5.jpg",
  },
  {
    title: "Pitru Dosh",
    description:
      "Manes are known as Pitra in Hindi. Pitra are those people who died unnatural death and did not get salvation. Due to this, people perform remedies for the pacification of Pitra Dosha.",
    src: "/courses/image-3.jpg",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={poojaListContent} />
    </div>
  );
}

export default WhyChooseUs;
