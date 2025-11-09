import { Metadata } from "next";
import { BranchPage } from "@/components/BranchPage";

export const metadata: Metadata = {
  title: "Kids Only Parndorf - Fashion Outlet Parndorf | Kinderbekleidung zu Outlet-Preisen",
  description: "Besuchen Sie Kids Only im Fashion Outlet Parndorf. Große Auswahl an qualitativ hochwertiger Kinderbekleidung zu Outlet-Preisen. Markenkleidung für Babys, Kleinkinder und Teenager. Öffnungszeiten, Adresse und Kontaktinformationen.",
  keywords: [
    "Kids Only Parndorf",
    "Fashion Outlet Parndorf",
    "Kinderbekleidung Parndorf",
    "Outlet Parndorf",
    "Kinderkleidung Parndorf",
    "Markenkleidung Parndorf",
    "Babykleidung Parndorf",
    "Outlet Store Parndorf",
    "Kinderbekleidung Burgenland",
    "günstige Kinderkleidung Parndorf",
  ],
  openGraph: {
    title: "Kids Only Parndorf - Fashion Outlet Parndorf",
    description: "Kids Only im Fashion Outlet Parndorf bietet qualitativ hochwertige Kinderbekleidung zu Outlet-Preisen. Große Auswahl an Markenkleidung für alle Altersgruppen.",
    url: "https://kidsonly.at/parndorf",
    siteName: "Kids Only",
    locale: "de_AT",
    type: "website",
    images: [
      {
        url: "https://kidsonly.at/parndorf/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Kids Only Parndorf - Fashion Outlet Parndorf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Only Parndorf - Fashion Outlet Parndorf",
    description: "Kids Only im Fashion Outlet Parndorf - Kinderbekleidung zu Outlet-Preisen.",
    images: ["https://kidsonly.at/parndorf/cover.jpg"],
  },
  alternates: {
    canonical: "https://kidsonly.at/parndorf",
  },
};

const parndorfData = {
  name: "Kids Only Parndorf",
  address: "Fashion Outlet Parndorf",
  city: "7111 Parndorf, Austria",
  phone: "+43 (0) 2166 20451",
  email: "office@johanns.cc",
  mapLink: "https://maps.app.goo.gl/9V7PmazqSBiD16Vn8",
  description: "Unser Flagship-Store im Fashion Outlet Parndorf bietet eine große Auswahl an qualitativ hochwertiger Markenkleidung zu Outlet-Preisen. Erleben Sie Einkaufen in einer angenehmen Lifestyle-Atmosphäre mit freundlichem und qualifiziertem Fachpersonal.",
  features: [
    "Große Auswahl - Jede Preisklasse",
    "Kollektionen von Baby bis Teenager",
    "Qualifiziertes Fachpersonal",
    "Alle Marken unter einem Dach",
    "Outlet-Preise",
    "Angenehme Lifestyle-Atmosphäre"
  ],
  brands: [
    "Reima",
    "Vingino",
    "Raized",
    "Danamade",
    "Happy Girl",
    "Color Kids",
    "iDo",
    "Sarabanda",
    "Minibanda",
    "Blue Seven"
  ],
  images: {
    hero: "/parndorf/cover.jpeg",
    interior: "/parndorf/img1.JPG",
    display: "/parndorf/img2.JPG",
    centerPlan: "/parndorf/kidsonly_plan_parndorf.png"
  }
};

export default async function ParndorfPage() {
  let openingHours = [];

  try {
    const response = await fetch(`http://localhost:3000/api/parndorf/hours`);
    const data = await response.json();

    if (data.success && data.data && data.data.openingHours) {
      openingHours = data.data.openingHours;
    } else {
      openingHours = [];
    }
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
    "name": "Kids Only Parndorf",
    "description": "Kids Only im Fashion Outlet Parndorf bietet qualitativ hochwertige Kinderbekleidung zu Outlet-Preisen.",
    "url": "https://kidsonly.at/parndorf",
    "image": "https://kidsonly.at/parndorf/cover.jpg",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fashion Outlet Parndorf",
      "addressLocality": "Parndorf",
      "postalCode": "7111",
      "addressCountry": "AT",
    },
    "telephone": "+43 (0) 2166 20451",
    "email": "office@johanns.cc",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.9983,
      "longitude": 16.8606,
    },
    "openingHoursSpecification": parseOpeningHours(openingHours),
    "brand": {
      "@type": "Brand",
      "name": "Kids Only",
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
        "name": "Parndorf Filiale",
        "item": "https://kidsonly.at/parndorf",
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
      <BranchPage branch={parndorfData} openingHours={openingHours} />
    </>
  );
}
