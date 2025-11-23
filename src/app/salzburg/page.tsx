import { Metadata } from "next";
import { BranchPage } from "@/components/BranchPage";

export const metadata: Metadata = {
  title: "kids only Salzburg - Designer Outlet Salzburg | Kinderbekleidung zu Outlet-Preisen",
  description: "Besuchen Sie kids only im Designer Outlet Salzburg. Qualitativ hochwertige Kinderbekleidung zu Outlet-Preisen. Markenkleidung für Babys, Kleinkinder und Teenager. Öffnungszeiten, Adresse und Kontaktinformationen.",
  keywords: [
    "kids only Salzburg",
    "Designer Outlet Salzburg",
    "Kinderbekleidung Salzburg",
    "Outlet Salzburg",
    "Kinderkleidung Salzburg",
    "Markenkleidung Salzburg",
    "Babykleidung Salzburg",
    "Outlet Store Salzburg",
    "Kinderbekleidung Salzburg Umgebung",
    "günstige Kinderkleidung Salzburg",
  ],
  openGraph: {
    title: "kids only Salzburg - Designer Outlet Salzburg",
    description: "kids only im Designer Outlet Salzburg bietet qualitativ hochwertige Kinderbekleidung zu Outlet-Preisen. Große Auswahl an Markenkleidung für alle Altersgruppen.",
    url: "https://kidsonly.at/salzburg",
    siteName: "kids only",
    locale: "de_AT",
    type: "website",
    images: [
      {
        url: "https://kidsonly.at/salzburg/cover.JPG",
        width: 1200,
        height: 630,
        alt: "kids only Salzburg - Designer Outlet Salzburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "kids only Salzburg - Designer Outlet Salzburg",
    description: "kids only im Designer Outlet Salzburg - Kinderbekleidung zu Outlet-Preisen.",
    images: ["https://kidsonly.at/salzburg/cover.JPG"],
  },
  alternates: {
    canonical: "https://kidsonly.at/salzburg",
  },
};

const salzburgData = {
  name: "kids only Salzburg",
  address: "Designer Outlet Salzburg",
  city: "5073 Himmelreich, Austria",
  phone: "+43 664 1549660",
  email: "salzburg@kidsonly.at",
  mapLink: "https://www.google.com/maps/place/Kasernenstra%C3%9Fe+1,+5073+Himmelreich/@47.7924914,12.9885677,19z/data=!4m6!3m5!1s0x47768fd83e44526f:0x9eb406a3cf96d836!8m2!3d47.7922849!4d12.9889551!16s%2Fg%2F11c3q386jx?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D",
  description: "Unser Geschäft im Designer Outlet Salzburg bietet qualitativ hochwertige Kinderbekleidung zu Outlet-Preisen. Finden Sie Kleidung für jeden Anlass in einer angenehmen Lifestyle-Atmosphäre - von Taufen über Alltagskleidung bis hin zu Skiurlauben.",
  features: [
    "Designer Outlet Lage",
    "Qualitätsmarken zu Outlet-Preisen",
    "Freundliches Fachpersonal",
    "Kleidung für jeden Anlass",
    "Kollektionen von Baby bis Teenager",
    "Angenehme Einkaufsatmosphäre"
  ],
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

export default async function SalzburgPage() {
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
      { day: "Samstag", hours: "09:00 - 19:00 Uhr" },
      { day: "Sonn- und Feiertage", hours: "Geschlossen" },
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
      if (item.hours.includes("Geschlossen")) {
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
    "url": "https://kidsonly.at/salzburg",
    "image": "https://kidsonly.at/salzburg/cover.JPG",
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
        "item": "https://kidsonly.at",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Salzburg Filiale",
        "item": "https://kidsonly.at/salzburg",
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
