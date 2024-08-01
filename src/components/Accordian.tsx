"use client";
import React, { useEffect, useState } from "react";
import AccordionList from "./AccordianList";
import { useTranslation } from "react-i18next";

const Accordian = () => {
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
      <div className="text-center">
        <h2 className="text-base text-2xl md:text-4xl text-orange-500 font-semibold tracking-wide uppercase">
          {t("frequent_asked_question_title")}
        </h2>
        <p className="mt-6 text-xl leading-8 tracking-tight text-black sm:text-lg">{t("frequent_asked_question_description")}</p>
      </div>

      <div className="flex flex-col items-center">
        <AccordionList title={t("faq_1")}>
          <p>{t("faq_1_answer")}</p>
        </AccordionList>

        <AccordionList title={t("faq_2")}>
          <p>{t("faq_2_answer")}</p>
        </AccordionList>

        <AccordionList title={t("faq_3")}>
          <p>{t("faq_3_answer")}</p>
        </AccordionList>

        <AccordionList title={t("faq_4")}>
          <p>{t("faq_4_answer")}</p>
        </AccordionList>

        <AccordionList title={t("faq_5")}>
          <p>{t("faq_5_answer")}</p>
        </AccordionList>

        <AccordionList title={t("faq_6")}>
          <p>{t("faq_6_answer")}</p>
        </AccordionList>

        <AccordionList title={t("faq_7")}>
          <p>{t("faq_7_answer")}</p>
        </AccordionList>

        <AccordionList title={t("faq_8")}>
          <p>{t("faq_8_answer")}</p>
        </AccordionList>
      </div>
    </div>
  );
};

export default Accordian;
