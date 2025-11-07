import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "stuffwhenIsleep - Authentic Peruvian Baby Clothes",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
