"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Image from "next/image";
import CallMeButton from "./Button";

interface IFeaturedContentProps {
  header_title: string;
  header_info: string;
  img_url: string;
  img_alt: string;
  description: string;
}

const FeaturedContent: React.FC<IFeaturedContentProps> = ({ header_title, header_info, img_url, img_alt, description }) => {
  const [client, setClient] = useState(false);
  const { t } = useTranslation("common");

  useEffect(() => {
    setClient(true);
  }, [client]);

  if (!client) {
    return null;
  }

  return (
    <div className="py-12 bg-white text-center">
      <Header title={t(header_title)} info={t(header_info)} />
      <div className="flex justify-between items-center gap-20 p-24">
        <div>
          <Image className="max-w-fit rounded-2xl" src={img_url} alt={img_alt} width={400} height={450} />
        </div>
        <div className="text-black">{t(description)}</div>
      </div>

      <CallMeButton />
    </div>
  );
};

export default FeaturedContent;
