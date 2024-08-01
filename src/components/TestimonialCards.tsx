"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "🙏Om Namah Shivayai . A Soulful and Divine experience during and after offering Puja to Trayambeswar Prabhu . Divine blessings after Puja has removed all obstacles in my and my daughter’s life and with Blessings moving ahead successfully in life.🙏A miraculous change in life",
    name: "Nilima bhagabati",
    title: "house Wife",
  },
  {
    quote:
      "Shivling’s darshan, karna pooja karna achcha tha, every Hindu should come here and worship him with his devotion and worship near the temple in every place. Har Har Mahadev",
    name: "Rahul Sahu",
    title: "Business Owner",
  },
  {
    quote: "I did Tripindi Pooja,Guru ji was very detailed and explained every part of Pooja… Loved it",
    name: "Pratik raut",
    title: "Working Women",
  },
  {
    quote:
      "Guru Ji was very polite and courteous throughout the puja We highly recommend Pandit Shivesh Guru Ji to anyone looking for a Kaal Sarp Dosh Puja service.",
    name: "Lokesh",
    title: "Working Women",
  },
  {
    quote:
      "Experiencing the darshan of Shivling and performing pooja was truly wonderful. Every Hindu should visit and offer their devotion at this sacred temple. Worshiping here brings immense peace and blessings. Har Har Mahadev 🔱🕉🔱🕉",
    name: "Ankush",
    title: "Software Engineer",
  },
];

const MusicSchoolTestimonials = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Blessings from the Customers</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={musicSchoolTestimonials} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  );
};

export default MusicSchoolTestimonials;
