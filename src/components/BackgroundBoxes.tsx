"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { TypewriterEffect } from "./ui/typewriter-effect";

const BackgroundBoxes = () => {
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
  return (
    <div className="h-[28rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <TypewriterEffect words={words} />
    </div>
  );
};

export default BackgroundBoxes;
