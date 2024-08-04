import React from "react";
import { useTranslation } from "react-i18next";

interface IHeaderProps {
  title: string;
  info?: string;
}

const Header: React.FC<IHeaderProps> = ({ title, info }) => {
  const { t } = useTranslation("common");
  return (
    <div className="text-center">
      <h2 className="text-base text-2xl md:text-4xl text-orange-500 font-semibold tracking-wide uppercase">{t(title)}</h2>
      {info && <p className="mt-6 text-xl leading-8 tracking-tight text-black sm:text-lg">{t(info)}</p>}
    </div>
  );
};

export default Header;
