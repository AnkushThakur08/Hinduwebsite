"use client";
import { useEffect, useState } from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const poojaListContent = [
  {
    title: "our_service_title_1",
    description: "our_service_description_1",
    src: "/courses/image-1.png",
  },
  {
    title: "our_service_title_2",
    description: "our_service_description_2",
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
  {
    title: "our_service_title_7",
    description: "our_service_description_7",
    src: "/courses/mangal-dosh.jpeg",
  },
];

function OurServices() {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) {
    return null;
  }
  return (
    <div>
      <StickyScroll content={poojaListContent} />
    </div>
  );
}

export default OurServices;
