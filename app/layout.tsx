import "./globals.css";
import { ReactNode } from "react";
import Providers from "./provider";

export const metadata = {
  title: "Audio Master | Premium Audio Systems & Installation",
  description: "Audio Master provides premium audio system installation, home cinema setups, and professional sound solutions.",
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
