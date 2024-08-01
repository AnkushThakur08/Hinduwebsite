"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const poojaListContent = [
  {
    title: "our_service_title_1",
    description: "our_service_description_1",
    src: "/courses/image-1.png",
  },
  {
    title: "our_service_title_2",
    description: "our_service_description_2.",
    src: "/courses/image-2.jpg",
  },
  {
    title: "our_service_title_3",
    description: "our_service_description_3",
    src: "/courses/image-3.jpg",
  },
  {
    title: "our_service_title_4",
    description: "our_service_description_4",
    src: "/courses/image-4.png",
  },
  {
    title: "our_service_title_5",
    description: "our_service_description_5",
    src: "/courses/image-5.jpg",
  },
  {
    title: "our_service_title_6",
    description: "our_service_description_6",
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
