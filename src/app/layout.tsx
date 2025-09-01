import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { ReactNode } from "react";
import Providers from "../providers";
import "./styles/globals.css";
import "./styles/main.scss";
import { Sigmar_One } from "next/font/google";

const sigmar = Sigmar_One({
  subsets: ["latin"],
  weight: "400"
});

type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({ children }: Props) {
  const locale = await getLocale();

  return (
    <html
      className={sigmar.className}
      lang={locale}
    >
      <head>
        <title>{"next-intl example"}</title>
      </head>
      <body data-theme="light">
        <NextIntlClientProvider>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}