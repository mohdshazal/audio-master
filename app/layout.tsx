import "./globals.css";
import { ReactNode } from "react";
import Providers from "./provider";
import Script from "next/script";
export const metadata = {
  title: "Audio Master | Premium Audio Systems & Installation in Dubai",
  description:
    "Expert audio system and speaker installation services in Dubai, including home cinemas, sound system wiring, and premium audio setups.",
  keywords:
    "speaker installation in Dubai, audio system installation, audio speaker installation, sound systems installation, audio wiring, home theater setup, surround sound UAE, premium audio installation Dubai, home cinema setup, Outdoor speaker installation, Indoor speaker installation, premium speaker installation, high end speaker installation",
  openGraph: {
    title: "Professional Audio & Speaker Installation in Dubai | Audio Master",
    description:
      "Experience premium audio with Audio Master - specialists in high-end audio system installation and home cinema solutions.We provide expert speaker installation, sound system wiring, and home audio setups in Dubai. Elevate your listening experience with Audio Master.",
    type: "website",
    url: "https://audiomaster.ae",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800",
        width: 800,
        height: 600,
        alt: "Premium Audio Installation",
      },
    ],
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
  }
};
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://www.audiomaster.ae/favicon.ico" />
        <meta name="google-site-verification" content="tu2ijC6crivdWAKbXghfRyAnpL5zRT56h-ltwiXsB34" />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="bg-black text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
