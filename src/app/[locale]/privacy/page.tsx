import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";

import { PrivacyPage } from "@/components/PrivacyPage";
import type { Locale } from "@/i18n/routing";
import { buildLocalizedMetadata } from "@/lib/seo";

type PageProps = Readonly<{
  params: Promise<{ locale: Locale }>;
}>;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: 'seo.privacy' });

  return buildLocalizedMetadata({
    locale,
    pathname: "/privacy",
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
  });
}

export default async function Privacy({ params }: PageProps) {
  setRequestLocale((await params).locale);
  return <PrivacyPage />;
}
