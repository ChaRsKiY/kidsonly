import { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  title: "kids only - Kinderbekleidung zu Outlet-Preisen | Parndorf & Salzburg",
  description: "kids only bietet qualitativ hochwertige Kinderbekleidung zu Outlet-Preisen. Besuchen Sie unsere Filialen im Fashion Outlet Parndorf und Designer Outlet Salzburg. Große Auswahl an Markenkleidung für Babys, Kleinkinder und Teenager.",
  keywords: [
    "Kinderbekleidung",
    "Kinderkleidung",
    "Outlet-Preise",
    "Parndorf",
    "Salzburg",
    "Fashion Outlet Parndorf",
    "Designer Outlet Salzburg",
    "Kinderbekleidungsgeschäft",
    "Kinder Mode",
    "Markenkleidung",
    "Babykleidung",
    "Teenager Kleidung",
    "Outlet Store",
    "Kinderbekleidung Österreich",
    "günstige Kinderkleidung",
  ],
  openGraph: {
    title: "kids only - Kinderbekleidung zu Outlet-Preisen | Parndorf & Salzburg",
    description: "kids only bietet qualitativ hochwertige Kinderbekleidung zu Outlet-Preisen. Besuchen Sie unsere Filialen im Fashion Outlet Parndorf und Designer Outlet Salzburg.",
    url: "https://kidsonly.at",
    siteName: "kids only",
    locale: "de_AT",
    type: "website",
    images: [
      {
        url: "https://kidsonly.at/logo.png",
        width: 1200,
        height: 630,
        alt: "kids only - Kinderbekleidung zu Outlet-Preisen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "kids only - Kinderbekleidung zu Outlet-Preisen",
    description: "kids only bietet qualitativ hochwertige Kinderbekleidung zu Outlet-Preisen in Parndorf und Salzburg.",
    images: ["https://kidsonly.at/logo.png"],
  },
  alternates: {
    canonical: "https://kidsonly.at",
  },
};

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "kids only",
    "description": "kids only bietet qualitativ hochwertige Kinderbekleidung zu Outlet-Preisen in Parndorf und Salzburg.",
    "url": "https://kidsonly.at",
    "logo": "https://kidsonly.at/logo.png",
    "image": "https://kidsonly.at/logo.png",
    "priceRange": "€€",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Fashion Outlet Parndorf",
        "addressLocality": "Parndorf",
        "postalCode": "7111",
        "addressCountry": "AT",
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Designer Outlet Salzburg",
        "addressLocality": "Himmelreich",
        "postalCode": "5073",
        "addressCountry": "AT",
      },
    ],
    "telephone": ["+43 (0) 2166 20451", "+43 664 1549660"],
    "email": ["office@johanns.cc", "salzburg@kidsonly.at"],
    "sameAs": [
      "https://www.instagram.com/kidsonly_outlet",
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "150",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "kids only",
    "url": "https://kidsonly.at",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://kidsonly.at/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": "https://kidsonly.at",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HomePage />
    </>
  );
}
