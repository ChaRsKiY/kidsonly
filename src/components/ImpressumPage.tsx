import { getTranslations } from "next-intl/server";
import { MotionDiv } from "./motion";

export async function ImpressumPage() {
  const t = await getTranslations('impressum');
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 mb-8">{t('title')}</h1>

          <div className="space-y-8 text-zinc-700 dark:text-zinc-300">
            <section>
              <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">{t('companyInfo')}</h2>
              <div className="space-y-3">
                <p><strong>{t('companyName')}</strong> Johanns Handels und Gastro GmbH</p>
                <p><strong>{t('address')}</strong><br />
                  Gewerbestrasse 4 Top 11<br />
                  7111 Parndorf<br />
                  Österreich
                </p>
                <p><strong>{t('phone')}</strong> +43 2166 20451</p>
                <p><strong>{t('email')}</strong> office@johanns.cc</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">{t('legalInfo')}</h2>
              <div className="space-y-3">
                <p><strong>{t('court')}</strong> Landesgericht Eisenstadt</p>
                <p><strong>{t('registerNumber')}</strong> FN436034</p>
                <p><strong>{t('ceo')}</strong> Philipp Kasparek</p>
                <p><strong>{t('uid')}</strong> ATU69757523</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">{t('dispute')}</h2>
              <div className="space-y-3">
                <p>
                  <strong>{t('odrPlatform')}</strong><br />
                  <a
                    href="https://ec.europa.eu/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    https://ec.europa.eu/odr
                  </a>
                </p>
                <p>
                  {t('disputeText')}
                </p>
              </div>
            </section>

            <section className="mt-8 pt-8 border-t border-zinc-300 dark:border-zinc-700">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {t('date')}
              </p>
            </section>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
