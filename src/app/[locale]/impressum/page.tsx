import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";

import { ImpressumPage } from "@/components/ImpressumPage";
import type { Locale } from "@/i18n/routing";
import { buildLocalizedMetadata } from "@/lib/seo";

type PageProps = Readonly<{
  params: Promise<{ locale: Locale }>;
}>;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: 'seo.impressum' });

  return buildLocalizedMetadata({
    locale,
    pathname: "/impressum",
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
  });
}

export default async function Impressum({ params }: PageProps) {
  setRequestLocale((await params).locale);
  return <ImpressumPage />;
}
