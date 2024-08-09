"use client";
import { ImagesSlider } from "./ui/images-slider";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CallMeButton from "@/components/Button";

function HeroSection() {
  const { t } = useTranslation("common");
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
          {t("temple_name")}
        </motion.p>
        <p className="mt-4 font-normal text-base md:text-lg text-white max-w-lg lg:max-w-2xl px-12 lg:px-0">{t("temple_description")}.</p>
        <CallMeButton isNumberVisible={false} />
      </motion.div>
    </ImagesSlider>
  );
}

export default HeroSection;
