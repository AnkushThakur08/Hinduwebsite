"use client";
import React, { useEffect, useState } from "react";
import AccordionList from "./AccordianList";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import CallMeButton from "@/components/Button";

const FAQSection = () => {
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
      <Header title="frequent_asked_question_title" info="frequent_asked_question_description" />
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

        <CallMeButton />
      </div>
    </div>
  );
};

export default FAQSection;
