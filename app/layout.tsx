import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
});

export const metadata: Metadata = {
  title: "Cloud Nine Baby - Authentic Peruvian Baby Clothes",
  description: "Handcrafted Peruvian baby clothes made with love. Premium alpaca wool sweaters, blankets, and traditional designs for your little ones.",
  keywords: ["peruvian baby clothes", "alpaca baby clothes", "handmade baby clothes", "traditional peruvian textiles", "baby sweaters"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${greatVibes.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
