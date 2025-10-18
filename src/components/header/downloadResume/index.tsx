import React from "react";
import Button from "@/src/components/common/button";
import { useTranslations } from "next-intl";

export default function DownloadResume() {
  const headerT = useTranslations("HEADER");
  return (
    <Button
      text={headerT("NAV.download_cv")}
    />
  );
}
