import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { ReactNode } from "react";
import Providers from "../providers";
import "./styles/globals.css";
import "./styles/main.scss";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({ children }: Props) {
  const locale = await getLocale();

  return (
    <html
      className={inter.className}
      lang={locale}
    >
      <head>
        <title>{"Rahman Aliyev"}</title>
      </head>
      <body data-theme="light">
        <NextIntlClientProvider>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}