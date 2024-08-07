"use client";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import { HoverEffect } from "./ui/card-hover-effect";
import { useEffect, useState } from "react";

interface Card {
  title: string;
  description: string;
  slug: string;
  isFeatured: boolean;
}

interface ISubFeaturedContentProps {
  sub_header_title: string;
  featuredCard: Card[];
}

const SubFeaturedContent: React.FC<ISubFeaturedContentProps> = ({ sub_header_title, featuredCard }) => {
  const { t } = useTranslation("common");
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, [client]);

  if (!client) {
    return null;
  }

  return (
    <div className="p-12 bg-white">
      <Header title={t(sub_header_title)} />
      <div className="max-w-[108rem] mx-auto px-4 sm:px-6">
        <div className="text-center"></div>

        <div className="mt-10">
          <HoverEffect
            items={featuredCard.map((card) => ({
              title: t(card.title),
              description: t(card.description),
              link: "/",
            }))}
          />
        </div>
      </div>
    </div>
  );
};

export default SubFeaturedContent;
