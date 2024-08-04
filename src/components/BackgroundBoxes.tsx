"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { TypewriterEffect } from "./ui/typewriter-effect";

interface IWord {
  text: string;
  className?: string;
}

interface IBackgroundBoxesProps {
  words: IWord[];
}

const BackgroundBoxes: React.FC<IBackgroundBoxesProps> = ({ words }) => {
  return (
    <div className="h-[28rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <TypewriterEffect words={words} />
    </div>
  );
};

export default BackgroundBoxes;
