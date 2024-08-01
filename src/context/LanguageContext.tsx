"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import i18next from "../i18n";

interface LanguageContextProps {
  language: string;
  toggleLanguage: () => void;
}

interface ILanguageContextProps {
  children: React.ReactNode;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<ILanguageContextProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>("en");

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "hi" : "en";
    setLanguage(newLanguage);
    i18next.changeLanguage(newLanguage);
  };

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
