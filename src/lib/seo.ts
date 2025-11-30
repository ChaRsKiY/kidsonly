import type { Metadata } from "next";

import { locales, type Locale } from "@/i18n/routing";

export const SITE_BASE_URL = "https://kidsonly.at";

const hreflangMap: Record<Locale, string> = {
  de: "de-AT",
  en: "en",
};

function normalizePath(pathname: string = "/") {
  if (pathname === "/") {
    return "";
  }

  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function buildLocalizedUrl(locale: Locale, pathname: string = "/") {
  const normalized = normalizePath(pathname);
  return `${SITE_BASE_URL}/${locale}${normalized}`;
}

export function buildLanguageAlternates(pathname: string = "/") {
  const normalized = normalizePath(pathname);

  const alternates = locales.reduce<Record<string, string>>((acc, locale) => {
    acc[hreflangMap[locale]] = `${SITE_BASE_URL}/${locale}${normalized}`;
    return acc;
  }, {});

  // Add x-default pointing to base locale (de)
  alternates["x-default"] = `${SITE_BASE_URL}/de${normalized}`;

  return alternates;
}

type LocalizedMetadataOptions = {
  locale: Locale;
  pathname?: string;
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: Metadata["openGraph"];
  twitter?: Metadata["twitter"];
};

export function buildLocalizedMetadata({
  locale,
  pathname = "/",
  title,
  description,
  keywords = [],
  openGraph,
  twitter,
}: LocalizedMetadataOptions): Metadata {
  const canonical = buildLocalizedUrl(locale, pathname);
  const languageAlternates = buildLanguageAlternates(pathname);

  // Build og:locale:alternate - other locales in Open Graph format
  const ogLocaleAlternates = locales
    .filter((l) => l !== locale)
    .map((l) => hreflangMap[l]?.replace("-", "_"));

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      url: canonical,
      title,
      description,
      type: "website",
      locale: hreflangMap[locale]?.replace("-", "_"), // Current locale
      alternateLocale: ogLocaleAlternates, // Other locales
      siteName: "kids only",
      images: [
        {
          url: `${SITE_BASE_URL}/logo.png`,
          width: 1200,
          height: 630,
          alt: "kids only",
        },
      ],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_BASE_URL}/logo.png`],
      ...twitter,
    },
  };
}

export function buildStructuredUrl(locale: Locale, pathname: string = "/") {
  return buildLocalizedUrl(locale, pathname);
}

/**
 * Helper for dynamic routes (e.g., /blog/[slug])
 * Generates metadata with proper canonical and hreflang alternates
 */
export function buildDynamicRouteMetadata({
  locale,
  pathname,
  title,
  description,
  keywords = [],
  openGraph,
  twitter,
}: LocalizedMetadataOptions): Metadata {
  return buildLocalizedMetadata({
    locale,
    pathname,
    title,
    description,
    keywords,
    openGraph,
    twitter,
  });
}

/**
 * Build metadata from translation keys
 * Usage: buildLocalizedMetadataFromTranslations(locale, pathname, t)
 * where t = useTranslations('seo.home') or getTranslations('seo.home')
 */
export function buildLocalizedMetadataFromTranslations(
  locale: Locale,
  pathname: string,
  t: {
    (key: 'title'): string;
    (key: 'description'): string;
    (key: 'ogTitle'): string;
    (key: 'ogDescription'): string;
  }
): Metadata {
  const title = t('title');
  const description = t('description');
  const ogTitle = t('ogTitle');
  const ogDescription = t('ogDescription');

  return buildLocalizedMetadata({
    locale,
    pathname,
    title,
    description,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
    },
  });
}

/**
 * Get Open Graph locale format from hreflang
 * Converts de-AT → de_AT, en → en_US
 */
export function getOgLocale(locale: Locale): string {
  const hreflang = hreflangMap[locale];
  if (hreflang === "en") {
    return "en_US";
  }
  return hreflang.replace("-", "_");
}

/**
 * Get all alternate locales in OG format
 */
export function getOgAlternateLocales(currentLocale: Locale): string[] {
  return locales
    .filter((l) => l !== currentLocale)
    .map((l) => getOgLocale(l));
}

/**
 * Build JSON-LD breadcrumb schema
 */
export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}

/**
 * Build enhanced Twitter card metadata
 */
export function buildTwitterMetadata(options: {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title: options.title,
    description: options.description,
    images: options.image ? [options.image] : [`${SITE_BASE_URL}/logo.png`],
    site: "@kidsonly_outlet",
    creator: "@kidsonly_outlet",
  };
}
