import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion";
import { Link } from "@/navigation";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Seite nicht gefunden | kids only",
  description:
    "Die angeforderte Seite konnte nicht gefunden werden. Zurück zur Startseite von kids only.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl md:text-[12rem] font-bold text-zinc-200 dark:text-zinc-800 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl text-zinc-900 dark:text-zinc-100 mb-4">
            Seite nicht gefunden
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
            Die angeforderte Seite existiert leider nicht. Möglicherweise wurde
            sie verschoben oder gelöscht.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="w-5 h-5" />
                Zur Startseite
              </Link>
            </Button>
          </div>
        </MotionDiv>
      </div>
    </main>
  );
}

