import { MotionDiv } from "./motion";
import { ImageWithFallback } from "./ImageWithFallback";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function HomePage() {
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
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ImageWithFallback
              src="/logo.png"
              alt="Kids Only Logo - Kinderbekleidung zu Outlet-Preisen"
              className="w-84 h-auto mx-auto mb-8 max-md:w-64"
              width={256}
              height={256}
              priority
            />
            <p className="text-xl mb-8 max-w-2xl mx-auto max-sm:text-base" itemProp="slogan">
               Markenkleidung zu Outlet-Preisen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="xl"
              >
                <Link href="/parndorf">
                  Parndorf besuchen <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
              >
                <Link href="/salzburg">
                  Salzburg besuchen <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-20">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 mb-6">Über uns</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            Kids Only bietet eine Shopping-Welt führender Kinderbekleidungshersteller von Lifestyle-Marken, vereint in einem Geschäft. 
            Der Fokus reicht von Babys über Kleinkinder bis hin zu Teenagern, für die separate Erlebniswelten geschaffen wurden. 
            Mit einer breiten Auswahl ist jede Preisklasse vertreten. Freundliches und qualifiziertes Fachpersonal steht immer für hochwertige Beratung zur Verfügung.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Wir bei Kids Only möchten, dass sich Ihre Kinder in ihrer Kleidung wohlfühlen und gleichzeitig gut aussehen. 
            Unser Sortiment besteht aus hochwertigen Marken zu Outlet-Preisen. Bei uns finden Sie Kleidung für jeden Anlass, 
            ob Taufe, Alltag oder Skiurlaub! Unsere Mission ist es, Ihnen und Ihren Kindern das bestmögliche Einkaufserlebnis zu bieten. Mode soll Spaß machen!
          </p>
        </MotionDiv>

        {/* Store Locations */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <StoreCard
            title="Parndorf"
            description="Unser Flagship-Store im renommierten Fashion Outlet Parndorf bietet eine umfangreiche Auswahl an Premium-Kinderbekleidung in einer geräumigen, modernen Umgebung."
            image="/parndorf/cover.jpg"
            location="Fashion Outlet Parndorf"
            href="/parndorf"
          />
          <StoreCard
            title="Salzburg"
            description="Unser Geschäft im Designer Outlet Salzburg verbindet den Charme der alten Welt mit zeitgenössischer Eleganz und schafft eine einzigartige Einkaufsatmosphäre."
            image="/salzburg/cover.JPG"
            location="Designer Outlet Salzburg"
            href="/salzburg"
          />
        </div>
      </section>

      {/* Featured Brands */}
      <section className="bg-zinc-100 dark:bg-zinc-900/50 py-20 transition-colors">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 mb-4" id="top-marken">Unsere Top-Marken</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Qualitätsmarken zu Outlet-Preisen - alles unter einem Dach
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {brands.map((brand, index) => (
              <MotionDiv
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -5, border: "1px solid hsl(var(--primary))" }}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 text-center transition-all"
              >
                <span className="text-zinc-700 dark:text-zinc-300 tracking-wide">{brand}</span>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-20">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-br from-primary to-secondary rounded-2xl p-12 md:p-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4" id="kollektionen">Unsere Kollektionen für Kinder</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto max-sm:text-base">
            Unsere Kollektionen sind sorgfältig ausgewählt, um sicherzustellen, dass wir Produkte anbieten, die höchsten Qualitätsstandards entsprechen. 
            Von süßen und bequemen Babykleidern bis hin zu trendigen Outfits für Teenager - bei uns finden Sie alles. 
            Unsere Kleidungsstücke sind nicht nur stilvoll, sondern auch funktional und langlebig, um den Bedürfnissen Ihres Kindes gerecht zu werden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="outline"
              size="xl"
              className="text-white"
            >
              <Link href="/parndorf">
                <MapPin className="mr-2 w-5 h-5" />
                Parndorf Filiale
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="text-white"
            >
              <Link href="/salzburg">
                <MapPin className="mr-2 w-5 h-5" />
                Salzburg Filiale
              </Link>
            </Button>
          </div>
        </MotionDiv>
      </section>
    </main>
  );
}

function StoreCard({ 
  title, 
  description, 
  image, 
  location, 
  href 
}: { 
  title: string; 
  description: string; 
  image: string; 
  location: string; 
  href: string;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group cursor-pointer"
    >
      <Link href={href}>
        <div className="relative h-80 rounded-xl overflow-hidden mb-4">
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/50 to-transparent z-10" />
          <ImageWithFallback
            src={image}
            alt={`${title} - ${location} - Kinderbekleidung zu Outlet-Preisen`}
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
          Mehr erfahren <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </MotionDiv>
  );
}
