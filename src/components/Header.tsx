"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { locales as SUPPORTED_LOCALES } from "@/i18n/routing";
import { Link, usePathname } from "@/navigation";
import { Menu, X } from "lucide-react";

const localeList = SUPPORTED_LOCALES as readonly string[];

export function Header() {
  const t = useTranslations('header');
  const pathname = usePathname();
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { currentPage, normalizedPathname } = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    const first = segments[0];
    const isLocaleSegment = localeList.includes(first);
    const relevantSegments = isLocaleSegment ? segments.slice(1) : segments;
    const nextPath = `/${relevantSegments.join("/")}`.replace(/\/$/, "") || "/";

    return {
      currentPage: relevantSegments[0] ?? "home",
      normalizedPathname: nextPath,
    };
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="flex flex-col items-start">
              <Image
                src="/kids_only_logo.svg"
                alt="kids only"
                width={120}
                height={120}
              />
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink active={currentPage === "home"} href="/">
              {t('home')}
            </NavLink>
            <NavLink active={currentPage === "parndorf"} href="/parndorf">
              {t('parndorf')}
            </NavLink>
            <NavLink active={currentPage === "salzburg"} href="/salzburg">
              {t('salzburg')}
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            {localeList.map((code) => (
              <Link
                key={code}
                href={normalizedPathname as any}
                locale={code}
                className={`text-xs font-semibold tracking-wide px-2 py-1 rounded ${locale === code
                  ? "bg-primary text-primary-foreground"
                  : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
                  }`}
              >
                {code.toUpperCase()}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800 overflow-hidden"
          >
            <div className="container mx-auto p-6 flex flex-col gap-4">
              <Link
                href="/"
                className={`text-lg font-medium ${currentPage === "home"
                  ? "text-primary"
                  : "text-zinc-600 dark:text-zinc-400"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link
                href="/parndorf"
                className={`text-lg font-medium ${currentPage === "parndorf"
                  ? "text-primary"
                  : "text-zinc-600 dark:text-zinc-400"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('parndorf')}
              </Link>
              <Link
                href="/salzburg"
                className={`text-lg font-medium ${currentPage === "salzburg"
                  ? "text-primary"
                  : "text-zinc-600 dark:text-zinc-400"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('salzburg')}
              </Link>

              <div className="h-px bg-zinc-100 dark:bg-zinc-800 my-2" />

              <div className="flex items-center gap-4">
                <span className="text-sm text-zinc-500 dark:text-zinc-400">{t('language')}</span>
                <div className="flex gap-2">
                  {localeList.map((code) => (
                    <Link
                      key={`${code}-mobile`}
                      href={normalizedPathname as any}
                      locale={code}
                      className={`text-sm font-semibold px-3 py-1.5 rounded cursor-pointer ${locale === code
                        ? "bg-primary text-primary-foreground"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {code.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  active,
  href,
  children,
}: {
  active: boolean;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href as any} className="cursor-pointer">
      <motion.div
        className={`relative text-sm tracking-wide transition-colors ${active
          ? "text-zinc-900 dark:text-zinc-100"
          : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          }`}
        whileHover={{ y: -2 }}
      >
        {children}
        {active && (
          <motion.div
            layoutId="activeNav"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-primary to-secondary"
            initial={false}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </motion.div>
    </Link>
  );
}
