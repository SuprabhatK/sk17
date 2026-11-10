import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./sections.css";
import "./dial.css";
import "./insights.css";
import "./mobile.css";
import "./carousel.css";
import "./about.css";
import "./social.css";
import "./bubble.css";
import Script from "next/script";
import BubbleHover from "@/components/BubbleHover";

/** Google tag ID (public, not a secret). Shown in Google Analytics > Data streams > Configure tag settings. */
const GOOGLE_TAG_ID = "GTM-MCF43G6V";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suprabhat Karmakar | AEM EDS & Full-Stack Developer",
  description:
    "Portfolio of Suprabhat Karmakar: Senior Frontend & Full-Stack Developer specialising in AEM Edge Delivery Services, React, Next.js and e-commerce.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body>
        {children}
        <BubbleHover />
        <Script src={`https://www.googletagmanager.com/gtm.js?id=${GOOGLE_TAG_ID}`} strategy="afterInteractive" />
        <Script id="google-tag" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());`}</Script>
      </body>
    </html>
  );
}
