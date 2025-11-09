import { Metadata } from "next";
import { ImpressumPage } from "@/components/ImpressumPage";

export const metadata: Metadata = {
  title: "Impressum | Kids Only",
  description: "Impressum und rechtliche Informationen von Kids Only. Adressen, Kontaktdaten und Geschäftsinformationen unserer Filialen in Parndorf und Salzburg.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Impressum | Kids Only",
    description: "Impressum und rechtliche Informationen von Kids Only.",
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
