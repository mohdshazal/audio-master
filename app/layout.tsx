import "./globals.css";
import { ReactNode } from "react";
import Providers from "./provider";
import Script from "next/script";
export const metadata = {
  title: "Audio Master | Premium Audio Systems & Installation",
  description:
    "Audio Master provides premium audio system installation, home cinema setups, and professional sound solutions.",
  keywords:
    "audio systems, speaker installation, home cinema, sound systems, premium audio, surround sound, Audio Master",
  openGraph: {
    title: "Audio Master | Premium Audio Systems & Installation",
    description:
      "Experience premium audio with Audio Master - specialists in high-end audio system installation and home cinema solutions.",
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
console.log('test');

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
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
