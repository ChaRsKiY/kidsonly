import { Metadata } from "next";
import { ImpressumPage } from "@/components/ImpressumPage";

export const metadata: Metadata = {
  title: "Impressum | kids only",
  description: "Impressum und rechtliche Informationen von kids only. Adressen, Kontaktdaten und Geschäftsinformationen unserer Filialen in Parndorf und Salzburg.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Impressum | kids only",
    description: "Impressum und rechtliche Informationen von kids only.",
    url: "https://kidsonly.at/impressum",
    type: "website",
  },
  alternates: {
    canonical: "https://kidsonly.at/impressum",
  },
};

export default function Impressum() {
  return <ImpressumPage />;
}
