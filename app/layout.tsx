import "./globals.css";
import { ReactNode } from "react";
import Providers from "./provider";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
