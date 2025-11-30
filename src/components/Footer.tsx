"use client";

import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import NextLink from "next/link";

import { Link } from "@/navigation";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="bg-background dark:bg-background mt-20 border-t border-border dark:border-border/20 transition-colors">
      <div className="container mx-auto px-6 py-12 max-md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center items-start max-md:place-items-start mb-12">
          <div>
            <h3 className="text-zinc-900 dark:text-zinc-100 mb-4">
              {t('parndorfTitle')}
            </h3>
            <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  {t('parndorfAddress')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+43 (0) 2166 20451</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>office@johanns.cc</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-zinc-900 dark:text-zinc-100 mb-4">
              {t('salzburgTitle')}
            </h3>
            <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  {t('salzburgAddress')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+43 664 1549660</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>salzburg@kidsonly.at</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-zinc-900 dark:text-zinc-100 mb-4">
              {t('followUs')}
            </h3>
            <div className="flex gap-4">
              <NextLink
                href="https://www.instagram.com/kidsonly_outlet"
                aria-label="Instagram"
              >
                <Button size="icon" variant="outline">
                  <Instagram className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                </Button>
              </NextLink>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-300 dark:border-zinc-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
            <p>{t('rights')}</p>
            <div className="flex gap-6">
              <Link
                href="/impressum"
                className="hover:text-primary transition-colors"
              >
                {t('impressum')}
              </Link>
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                {t('privacy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
