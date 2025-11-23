import { Metadata } from "next";
import { PrivacyPage } from "@/components/PrivacyPage";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | kids only",
  description: "Datenschutzerklärung von kids only. Informationen zur Datenerhebung, Verarbeitung und Speicherung Ihrer persönlichen Daten beim Besuch unserer Website.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Datenschutzerklärung | kids only",
    description: "Datenschutzerklärung von kids only - Informationen zur Datenverarbeitung.",
    url: "https://kidsonly.at/privacy",
    type: "website",
  },
  alternates: {
    canonical: "https://kidsonly.at/privacy",
  },
};

export default function Privacy() {
  return <PrivacyPage />;
}
