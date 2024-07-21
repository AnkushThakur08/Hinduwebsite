"use client";

import { useEffect, useState } from "react";
import panditData from "@/data/panditData.json";
import { PinContainer } from "@/components/ui/3d-pin";

interface IPandit {
  id: number;
  title: string;
  description: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedGuruJi = () => {
  const [featuredPandit, setFeaturedPandit] = useState<IPandit[]>([]);

  useEffect(() => {
    const featured = panditData.courses.filter((pandit: IPandit) => pandit.isFeatured);
    setFeaturedPandit(featured);
  }, []);

  return (
    <div className="py-12 bg-white">
      <div>
        <div className="text-center">
          <h2 className="text-base text-2xl md:text-4xl text-orange-500 font-semibold tracking-wide uppercase">Why Choose Guru ji</h2>
          <p className="mt-6 text-xl leading-8 tracking-tight text-black sm:text-lg">Perform the Rituals from the best</p>
        </div>
      </div>
      <div className="mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredPandit.map((pandit: IPandit) => (
            <div key={pandit.id} className="h-[25rem] flex items-center justify-center">
              <PinContainer title={pandit.title} href="">
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">{pandit.title}</h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">{pandit.description}</span>
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
