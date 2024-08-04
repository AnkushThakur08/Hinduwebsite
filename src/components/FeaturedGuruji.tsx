"use client";
import { useEffect, useState } from "react";
import panditData from "@/data/panditData.json";
import { PinContainer } from "@/components/ui/3d-pin";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
interface IPandit {
  id: number;
  title: string;
  description: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedGuruJi = () => {
  const [client, setClient] = useState(false);
  const { t } = useTranslation("common");
  const [featuredPandit, setFeaturedPandit] = useState<IPandit[]>([]);

  useEffect(() => {
    const featured = panditData.courses.filter((pandit: IPandit) => pandit.isFeatured);
    setFeaturedPandit(featured);
  }, []);
  useEffect(() => {
    setClient(true);
  }, [client]);

  if (!client) {
    return null;
  }

  return (
    <div className="py-12 bg-white">
      <Header title="featured_section_title" info="featured_section_description" />
      <div className="mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredPandit.map((pandit: IPandit) => (
            <div key={pandit.id} className="h-[25rem] flex items-center justify-center">
              <PinContainer title={t(pandit.title)} href="">
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                  <h2 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">{t(pandit.title)}</h2>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">{t(pandit.description)}</span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedGuruJi;
