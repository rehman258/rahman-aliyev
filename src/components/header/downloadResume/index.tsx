import React from "react";
import Button from "@/src/components/common/button";
import { useTranslations } from "next-intl";

export default function DownloadResume() {
  const headerT = useTranslations("HEADER");
  const downloadLocalPDF = () => {
    const link = document.createElement("a");
    link.href = "/FRONTEND-DEVELOPER - RAHMAN-ALIYEV.pdf";
    link.download = "FRONTEND-DEVELOPER - RAHMAN-ALIYEV.pdf";
    link.click();
  };
  return (
    <Button
      text={headerT("NAV.download_cv")}
      onClick={downloadLocalPDF}
    />
  );
}
