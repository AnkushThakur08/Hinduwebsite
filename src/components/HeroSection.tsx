"use client";
import Link from "next/link";
import { ImagesSlider } from "./ui/images-slider";
import { motion } from "framer-motion";
import { Button } from "./ui/moving-border";

function HeroSection() {
  const images = ["/courses/temple-2.jpg", "/courses/temple-4.jpg", "/courses/img-3.jpg"];

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Trimbakeshwar Temple
        </motion.p>
        <p className="mt-4 font-normal text-base md:text-lg text-whites max-w-lg ">
          Trimbakeshwar Temple is a famous Hindu temple located in the town of Trimbak in Maharashtra, India. It is dedicated to Lord Shiva
          and is considered one of the twelve Jyotirlingas, which are believed to be the most sacred abodes of Lord Shiva. The temple is
          situated near the Brahmagiri mountain, from where the Godavari River originates.
        </p>
        <div className="mt-12">
          <Link href="tel:+1234567890">
            <Button borderRadius="1.75rem" className="bg-white dark:bg-orange-500 text-black dark:text-white border-transparent">
              <Link href="tel:+1234567890" className="bg-white dark:bg-orange-500 text-black dark:text-white">
                Call Me
              </Link>
            </Button>
          </Link>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}

export default HeroSection;
