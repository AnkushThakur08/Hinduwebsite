import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import { useTranslation } from "react-i18next";

const CallMeButton = () => {
  const { t } = useTranslation("common");

  return (
    <div className="mt-12">
      <Link href="tel:+1234567890">
        <Button borderRadius="1.75rem" className="bg-white dark:bg-orange-500 text-black dark:text-white border-transparent">
          <Link href="tel:+1234567890" className="bg-white dark:bg-orange-500 text-black dark:text-white">
            {t("call_me_button")}
          </Link>
        </Button>
      </Link>
    </div>
  );
};

export default CallMeButton;
