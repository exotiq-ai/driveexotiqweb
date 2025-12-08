import type { Metadata } from "next";
import "./globals.css";

// Note: In production, you can add Google Fonts or local font files
// For now, we're using system fonts for reliability

export const metadata: Metadata = {
  title: "Drive Exotiq | Where Precision Meets Passion",
  description: "The exotic car community built by enthusiasts, for enthusiasts. Vetted drivers. Curated experiences. Zero compromises.",
  keywords: ["exotic cars", "luxury car rental", "supercar rental", "Denver", "Scottsdale", "Miami", "car community"],
  authors: [{ name: "Drive Exotiq" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  openGraph: {
    title: "Drive Exotiq | Where Precision Meets Passion",
    description: "The exotic car community built by enthusiasts, for enthusiasts. Vetted drivers. Curated experiences. Zero compromises.",
    url: "https://driveexotiq.com",
    siteName: "Drive Exotiq",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Drive Exotiq - Where Precision Meets Passion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drive Exotiq | Where Precision Meets Passion",
    description: "The exotic car community built by enthusiasts, for enthusiasts. Vetted drivers. Curated experiences. Zero compromises.",
    images: ["/og-image.png"],
    creator: "@driveexotiq",
    site: "@driveexotiq",
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
