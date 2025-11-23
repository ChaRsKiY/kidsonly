import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "kids only - Kinderbekleidung zu Outlet-Preisen",
    template: "%s | kids only",
  },
  description: "kids only bietet qualitativ hochwertige Kinderbekleidung zu Outlet-Preisen. Besuchen Sie unsere Filialen in Parndorf und Salzburg für die besten Marken zu erschwinglichen Preisen.",
  keywords: [
    "Kinderbekleidung",
    "Kinderkleidung",
    "Outlet-Preise",
    "Parndorf",
    "Salzburg",
    "Kinderbekleidungsgeschäft",
    "Kinder Mode",
    "Markenkleidung",
    "Babykleidung",
    "Teenager Kleidung",
    "Outlet Store",
    "Kinderbekleidung Österreich",
    "günstige Kinderkleidung",
    "Fashion Outlet Parndorf",
    "Designer Outlet Salzburg",
  ],
  authors: [{ name: "kids only" }],
  creator: "kids only",
  publisher: "kids only",
  applicationName: "kids only",
  category: "Shopping",
  classification: "Kinderbekleidung, Outlet Store",
  metadataBase: new URL("https://kidsonly.at"),
  alternates: {
    canonical: "/",
    languages: {
      "de-AT": "https://kidsonly.at",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://kidsonly.at",
    siteName: "kids only",
    title: "kids only - Kinderbekleidung zu Outlet-Preisen",
    description: "kids only bietet qualitativ hochwertige Kinderbekleidung zu Outlet-Preisen. Besuchen Sie unsere Filialen in Parndorf und Salzburg für die besten Marken zu erschwinglichen Preisen.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "kids only Logo - Kinderbekleidung zu Outlet-Preisen",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "kids only - Kinderbekleidung zu Outlet-Preisen",
    description: "kids only bietet qualitativ hochwertige Kinderbekleidung zu Outlet-Preisen. Besuchen Sie unsere Filialen in Parndorf und Salzburg für die besten Marken zu erschwinglichen Preisen.",
    images: ["https://kidsonly.at/logo.png"],
    site: "@kidsonly_outlet",
    creator: "@kidsonly_outlet",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.svg",
        color: "#ffffff",
      },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  other: {
    "geo.region": "AT",
    "geo.placename": "Austria",
    "ICBM": "47.7923, 12.9890",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
