"use client"

import { motion } from "framer-motion";

export function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 mb-8">Impressum</h1>
          
          <div className="space-y-8 text-zinc-700 dark:text-zinc-300">
            <section>
              <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">Firmeninformationen</h2>
              <div className="space-y-3">
                <p><strong>Firmenname:</strong> Johanns Handels und Gastro GmbH</p>
                <p><strong>Adresse:</strong><br />
                  Gewerbestrasse 4 Top 11<br />
                  7111 Parndorf<br />
                  Österreich
                </p>
                <p><strong>Telefon:</strong> +43 2166 20451</p>
                <p><strong>E-Mail:</strong> office@johanns.cc</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">Rechtliche Angaben</h2>
              <div className="space-y-3">
                <p><strong>Firmenbuchgericht:</strong> Landesgericht Eisenstadt</p>
                <p><strong>Firmenbuchnummer:</strong> FN436034</p>
                <p><strong>Geschäftsführer:</strong> Philipp Kasparek</p>
                <p><strong>UID Nummer:</strong> ATU69757523</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">Streitbeilegung</h2>
              <div className="space-y-3">
                <p>
                  <strong>Plattform der EU-Kommission zur Online-Streitbeilegung:</strong><br />
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
                  Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
                </p>
              </div>
            </section>

            <section className="mt-8 pt-8 border-t border-zinc-300 dark:border-zinc-700">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Stand: Oktober 2025
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
