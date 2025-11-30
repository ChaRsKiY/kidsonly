import { defineRouting } from "next-intl/routing";

export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  localePrefix: "always",
  defaultLocale: "de",
  locales,
  pathnames: {
    "/": "/",
    "/parndorf": "/parndorf",
    "/salzburg": "/salzburg",
    "/impressum": "/impressum",
    "/privacy": "/privacy"
  },
});

