"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Image from "next/image";
import UpcomingWebinars from "./UpcomingWebinars";

const FeaturedContent = () => {
  const [client, setClient] = useState(false);
  const { t } = useTranslation("common");

  useEffect(() => {
    setClient(true);
  }, [client]);

  if (!client) {
    return null;
  }

  return (
    <div className="py-12 bg-white">
      <Header title="featured_content_title" info="featured_content_info" />

      <div className="flex justify-between items-center gap-20 p-24">
        <div>
          <Image className="max-w-fit rounded-2xl" src={"/courses/pandit.webp"} alt="kaal-sarp-dosh" width={400} height={450} />
        </div>
        <div className="text-black">{t("featured_content_description")}</div>
      </div>

      <Header title="sub_feature_contain_title" />

      <UpcomingWebinars />
    </div>
  );
};

export default FeaturedContent;
