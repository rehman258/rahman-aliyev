import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Rahman Aliyev - Frontend Developer",
  description: `Frontend developer with 5+ years building scalable web applications.
  Specialized in React, Next.js, TypeScript.`,
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Baku", "Azerbaijan", "Deutschland"],
  authors: [{ name: "Rahman Aliyev" }],
  creator: "Rahman Aliyev",
  publisher: "Rahman Aliyev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rhmn.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "az-AZ": "/az",
      "de-DE": "/de",
    },
  },
  openGraph: {
    title: "Rahman Aliyev - Frontend Developer",
    description: "Frontend developer with 5+ years experience in React, Next.js, TypeScript",
    url: "https://rhmn.dev",
    siteName: "Rahman Aliyev Portfolio",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Rahman Aliyev - Frontend Developer",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Rahman Aliyev - Frontend Developer",
  //   description: "Building modern web applications with React & Next.js",
  //   creator: "@rahman_dev",
  //   images: ["/twitter-image.png"],
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  //   other: {
  //     rel: "apple-touch-icon-precomposed",
  //     url: "/apple-touch-icon-precomposed.png",
  //   },
  // },
  // manifest: "/manifest.json",
  // verification: {
  //   google: "google-verification-code",
  //   yandex: "yandex-verification-code",
  //   yahoo: "yahoo-verification-code",
  // },
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