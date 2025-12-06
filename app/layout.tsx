import type { Metadata } from "next";
import "./globals.css";

// Note: In production, you can add Google Fonts or local font files
// For now, we're using system fonts for reliability

export const metadata: Metadata = {
  title: "Drive Exotiq | Where Precision Meets Passion",
  description: "The exotic car community built by enthusiasts, for enthusiasts. Vetted drivers. Curated experiences. Zero compromises.",
  keywords: ["exotic cars", "luxury car rental", "supercar rental", "Denver", "Scottsdale", "Miami", "car community"],
  authors: [{ name: "Drive Exotiq" }],
  openGraph: {
    title: "Drive Exotiq | Where Precision Meets Passion",
    description: "The exotic car community built by enthusiasts, for enthusiasts.",
    type: "website",
    locale: "en_US",
    siteName: "Drive Exotiq",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drive Exotiq | Where Precision Meets Passion",
    description: "The exotic car community built by enthusiasts, for enthusiasts.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
