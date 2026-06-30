import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import SmoothScroll from "@/components/providers/SmoothScroll";

// Drive Exotiq type system (self-hosted, no build-time network fetch):
// Bricolage Grotesque (display) · Schibsted Grotesk (UI/body) · Spectral (serif voice).
const display = localFont({
  src: "./fonts/bricolage-variable.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "400 800",
});
const sans = localFont({
  src: "./fonts/schibsted-variable.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "400 700",
});
const serif = localFont({
  src: [
    { path: "./fonts/spectral-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/spectral-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/spectral-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/spectral-500-italic.woff2", weight: "500", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
});

const SITE_URL = "https://driveexotiq.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Drive Exotiq — Exotic Cars That Actually Get Driven",
    template: "%s | Drive Exotiq",
  },
  description:
    "The community around exotic cars that get driven — invite-only monthly drives, a coast-to-coast tour, and the front door to the exotiq.rent marketplace. The keys are out of the glovebox.",
  keywords: [
    "exotic cars",
    "supercar community",
    "Cars and Coffee",
    "exotic car rental",
    "exotic car tour",
    "Denver",
    "Dallas",
    "Austin",
    "Houston",
    "Atlanta",
    "Miami",
    "exotiq.rent",
  ],
  authors: [{ name: "Drive Exotiq" }],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  openGraph: {
    title: "Drive Exotiq — Exotic Cars That Actually Get Driven",
    description:
      "Invite-only monthly drives, a Denver-to-Miami exotic tour, and the front door to the exotiq.rent marketplace. The keys are out of the glovebox.",
    url: SITE_URL,
    siteName: "Drive Exotiq",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Drive Exotiq — Exotic Cars That Actually Get Driven",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drive Exotiq — Exotic Cars That Actually Get Driven",
    description:
      "Invite-only drives, a coast-to-coast exotic tour, and the front door to the exotiq.rent marketplace.",
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
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${serif.variable}`}
    >
      <body className="font-sans bg-canvas text-ink antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
