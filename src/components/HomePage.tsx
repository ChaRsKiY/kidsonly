import { MotionDiv } from "./motion";
import { ImageWithFallback } from "./ImageWithFallback";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { SubscriptionForm } from "@/components/SubscriptionForm";
import { Link } from "@/navigation";

import { getTranslations } from "next-intl/server";

export async function HomePage() {
  const t = await getTranslations('home');

  const brands = [
    "Reima",
    "Vingino",
    "Raized",
    "Danamade",
    "Happy Girl",
    "Color Kids",
    "iDo",
    "Sarabanda"
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center overflow-hidden z-10 relative" aria-label="Hero-Bereich">
        <ImageWithFallback
          src="/hero_bg.png"
          alt={t('hero.altBackground')}
          className="object-cover opacity-30"
          fill
          priority
        />
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ImageWithFallback
              src="/kids_only_logo.svg"
              alt={t('hero.altLogo')}
              className="w-96 h-auto mx-auto mb-8 max-md:w-64"
              width={512}
              height={512}
              priority
            />
            <p className="text-xl mb-8 max-w-2xl mx-auto max-sm:text-base text-muted-foreground dark:text-zinc-100" itemProp="slogan">
              {t('hero.slogan')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/parndorf">
                <Button
                  size="xl"
                >
                  {t('hero.visitParndorf')} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/salzburg">
                <Button
                  size="xl"
                >
                  {t('hero.visitSalzburg')} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-20 max-md:py-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 mb-6 text-center">{t('about.title')}</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            {t('about.p1')}
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t('about.p2')}
          </p>
        </MotionDiv>

        {/* Store Locations */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-20 max-md:mb-10"
        >
          <StoreCard
            title={t('storeCards.parndorfTitle')}
            description={t('storeCards.parndorfDesc')}
            image="/parndorf/cover.png"
            location="Fashion Outlet Parndorf"
            href="/parndorf"
            altSuffix={t('storeCards.altSuffix')}
            learnMoreText={t('storeCards.learnMore')}
          />
          <StoreCard
            title={t('storeCards.salzburgTitle')}
            description={t('storeCards.salzburgDesc')}
            image="/salzburg/cover.png"
            location="Designer Outlet Salzburg"
            href="/salzburg"
            altSuffix={t('storeCards.altSuffix')}
            learnMoreText={t('storeCards.learnMore')}
          />
        </MotionDiv>
      </section>

      {/* Featured Brands */}
      <section className="bg-zinc-100 dark:bg-zinc-900/50 py-20 transition-colors max-md:py-10">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 mb-4" id="top-marken">{t('brands.title')}</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {t('brands.subtitle')}
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {brands.map((brand, index) => (
              <MotionDiv
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hover:translate-y-[-5px] hover:border-primary bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 text-center transition-all"
              >
                <span className="text-zinc-700 dark:text-zinc-300 tracking-wide">{brand}</span>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-20 max-md:py-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-linear-to-br from-primary to-secondary rounded-2xl p-8 md:p-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4" id="kollektionen">{t('cta.title')}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto max-sm:text-base">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/parndorf">
              <Button
                variant="outline"
                size="xl"
                className="text-white flex gap-2 items-center"
              >

                <MapPin className="mr-2 w-5 h-5" />
                {t('cta.parndorfBtn')}
              </Button>
            </Link>
            <Link href="/salzburg">
              <Button
                variant="outline"
                size="xl"
                className="text-white flex gap-2 items-center"
              >

                <MapPin className="mr-2 w-5 h-5" />
                {t('cta.salzburgBtn')}
              </Button>
            </Link>
          </div>
        </MotionDiv>
      </section>

      {/* Subscription Form Section */}
      <section className="py-20 max-md:py-10 bg-zinc-50 dark:bg-zinc-900/50" id="newsletter">
        <div className="container px-6 mx-auto">
          <SubscriptionForm />
        </div>
      </section>
    </main>
  );
}

function StoreCard({
  title,
  description,
  image,
  location,
  href,
  altSuffix,
  learnMoreText
}: {
  title: string;
  description: string;
  image: string;
  location: string;
  href: string;
  altSuffix: string;
  learnMoreText: string;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="group cursor-pointer"
    >
      <Link href={href as any}>
        <div className="relative h-80 rounded-xl overflow-hidden mb-4">
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
          <ImageWithFallback
            src={image}
            alt={`${title} - ${location} - ${altSuffix}`}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            fill
          />
          <div className="absolute bottom-6 left-6 z-20">
            <div className="flex items-center gap-2 text-primary mb-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
        </div>
        <h3 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">{description}</p>
        <Button
          variant="link"
          className="p-0"
        >
          {learnMoreText} <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </MotionDiv>
  );
}
