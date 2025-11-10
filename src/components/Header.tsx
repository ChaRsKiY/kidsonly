"use client"

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
//import { useTheme } from "./ThemeContext";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  //const { theme, toggleTheme } = useTheme();

  const pathname = usePathname();
  const currentPage = pathname.split('/')[1] || 'home';
  
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
              <Image src="/kids_only_logo.svg" alt="Kids Only" width={120} height={120} />
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink 
              active={currentPage === 'home'} 
              href="/"
            >
              Startseite
            </NavLink>
            <NavLink 
              active={currentPage === 'parndorf'} 
              href="/parndorf"
            >
              Parndorf
            </NavLink>
            <NavLink 
              active={currentPage === 'salzburg'} 
              href="/salzburg"
            >
              Salzburg
            </NavLink>
            {/*
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            */}
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/parndorf"
              className={`text-sm px-2 py-1.5 rounded-lg transition-colors ${
                currentPage === 'parndorf'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              Parndorf
            </Link>
            <Link
              href="/salzburg"
              className={`text-sm px-2 py-1.5 rounded-lg transition-colors ${
                currentPage === 'salzburg'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              Salzburg
            </Link>
            {/*
            <motion.button
              onClick={toggleTheme}
              className="ml-1 p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>
            */}
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ 
  active, 
  href, 
  children 
}: { 
  active: boolean; 
  href: string; 
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <motion.div
        className={`relative text-sm tracking-wide transition-colors ${
          active ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
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
