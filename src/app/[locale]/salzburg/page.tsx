import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";

import { BranchPage } from "@/components/BranchPage";
import type { Locale } from "@/i18n/routing";
import {
  SITE_BASE_URL,
  buildLocalizedMetadata,
  buildLocalizedUrl,
} from "@/lib/seo";

type PageProps = Readonly<{
  params: { locale: Locale };
}>;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: 'seo.salzburg' });

  return buildLocalizedMetadata({
    locale,
    pathname: "/salzburg",
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(', '),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [
        {
          url: `${SITE_BASE_URL}/salzburg/cover.png`,
          width: 1200,
          height: 630,
          alt: "kids only Salzburg",
        },
      ],
    },
    twitter: {
      images: [`${SITE_BASE_URL}/salzburg/cover.png`],
    },
  });
}



export default async function SalzburgPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'salzburg' });
  const tBranch = await getTranslations({ locale, namespace: 'branchPage' });

  const salzburgData = {
    name: t('title'),
    address: "Designer Outlet Salzburg",
    city: "5073 Himmelreich, Austria",
    phone: "+43 664 1549660",
    email: "salzburg@kidsonly.at",
    mapLink: "https://www.google.com/maps/place/Kasernenstra%C3%9Fe+1,+5073+Himmelreich/@47.7924914,12.9885677,19z/data=!4m6!3m5!1s0x47768fd83e44526f:0x9eb406a3cf96d836!8m2!3d47.7922849!4d12.9889551!16s%2Fg%2F11c3q386jx?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D",
    description: t('description'),
    features: t.raw('features') as string[],
    brands: [
      "Vingino",
      "Raized",
      "Danamade",
      "Happy Girl",
      "Color Kids",
      "iDo",
      "Sarabanda",
      "Minibanda",
      "Blue Seven",
      "Lego"
    ],
    images: {
      hero: "/salzburg/cover.png",
      interior: "/salzburg/img2.png",
      display: "/salzburg/img3.png",
      centerPlan: "/salzburg/kidsonly_plan_salzburg.png"
    }
  };

  const localizedUrl = buildLocalizedUrl(locale, "/salzburg");
  let openingHours: { day: string; hours: string }[] = [];

  try {
    //const response = await fetch(`https://kidsonly.vercel.app/api/salzburg/hours`);
    //const data = await response.json();

    //if (data.success && data.data && data.data.openingHours) {
    //  openingHours = data.data.openingHours;
    //} else {
    //  openingHours = [];
    //}
    openingHours = [
      { day: "Montag", hours: "09:00 - 19:00 Uhr" },
      { day: "Dienstag", hours: "09:00 - 19:00 Uhr" },
      { day: "Mittwoch", hours: "09:00 - 19:00 Uhr" },
      { day: "Donnerstag", hours: "09:00 - 19:00 Uhr" },
      { day: "Freitag", hours: "09:00 - 19:00 Uhr" },
      { day: "Samstag", hours: "09:00 - 18:00 Uhr" },
      { day: "Sonn- und Feiertage", hours: tBranch('closed') },
    ];
  } catch (error) {
    openingHours = [];
  }

  // Helper function to parse opening hours
  const parseOpeningHours = (hours: { day: string; hours: string }[]) => {
    const dayMap: { [key: string]: string[] } = {
      "Montag": ["Monday"],
      "Dienstag": ["Tuesday"],
      "Mittwoch": ["Wednesday"],
      "Donnerstag": ["Thursday"],
      "Freitag": ["Friday"],
      "Samstag": ["Saturday"],
      "Sonntag": ["Sunday"],
      "Sonn- und Feiertage": ["Sunday"],
    };

    const specifications: any[] = [];

    hours.forEach((item) => {
      if (item.hours.includes(tBranch('closed'))) {
        return; // Skip closed days
      }

      // Parse time range
      const timeMatch = item.hours.match(/(\d{1,2}):(\d{2})\s*[–\-]\s*(\d{1,2}):(\d{2})/);
      if (!timeMatch) return;

      const opens = `${timeMatch[1].padStart(2, "0")}:${timeMatch[2]}`;
      const closes = `${timeMatch[3].padStart(2, "0")}:${timeMatch[4]}`;

      // Handle day ranges
      if (item.day.includes(" – ")) {
        const [startDay, endDay] = item.day.split(" – ").map((d) => d.trim());
        const startDayName = dayMap[startDay]?.[0];
        const endDayName = dayMap[endDay]?.[0];

        if (startDayName && endDayName) {
          // Create range
          const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
          const startIndex = dayOrder.indexOf(startDayName);
          const endIndex = dayOrder.indexOf(endDayName);

          if (startIndex !== -1 && endIndex !== -1 && startIndex <= endIndex) {
            for (let i = startIndex; i <= endIndex; i++) {
              specifications.push({
                "@type": "OpeningHoursSpecification",
                dayOfWeek: dayOrder[i],
                opens,
                closes,
              });
            }
          }
        }
      } else {
        // Single day
        const dayName = dayMap[item.day]?.[0];
        if (dayName) {
          specifications.push({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: dayName,
            opens,
            closes,
          });
        }
      }
    });

    return specifications.length > 0 ? specifications : [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:30",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "18:00",
      },
    ];
  };

  const storeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "kids only Salzburg",
    "description": "kids only im Designer Outlet Salzburg bietet qualitativ hochwertige Kinderbekleidung zu Outlet-Preisen.",
    "url": localizedUrl,
    "image": `${SITE_BASE_URL}/salzburg/cover.png`,
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Designer Outlet Salzburg",
      "addressLocality": "Himmelreich",
      "postalCode": "5073",
      "addressCountry": "AT",
    },
    "telephone": "+43 664 1549660",
    "email": "salzburg@kidsonly.at",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.7923,
      "longitude": 12.9890,
    },
    "openingHoursSpecification": parseOpeningHours(openingHours),
    "brand": {
      "@type": "Brand",
      "name": "kids only",
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
        "item": buildLocalizedUrl(locale),
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Salzburg Filiale",
        "item": localizedUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BranchPage branch={salzburgData} openingHours={openingHours} />
    </>
  );
}
