import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";

import { HomePage } from "@/components/HomePage";
import type { Locale } from "@/i18n/routing";
import { buildLocalizedMetadata, buildLocalizedUrl } from "@/lib/seo";

type PageProps = Readonly<{
  params: { locale: Locale };
}>;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: 'seo.home' });

  return buildLocalizedMetadata({
    locale,
    pathname: "/",
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(', '),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
  });
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const canonicalUrl = buildLocalizedUrl(locale);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "kids only",
    "description": "kids only bietet qualitativ hochwertige Kinderbekleidung zu Outlet-Preisen in Parndorf und Salzburg.",
    "url": canonicalUrl,
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
    "url": canonicalUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${canonicalUrl}?q={search_term_string}`,
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
        "item": canonicalUrl,
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
