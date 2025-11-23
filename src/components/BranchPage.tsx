"use client";

import { useState } from "react";
import { MotionDiv } from "./motion";
import { ImageWithFallback } from "./ImageWithFallback";
import { ImageModal } from "./ImageModal";
import { MapPin, Phone, Mail, Clock, ZoomIn } from "lucide-react";
import { Card } from "./ui/card";
import { MapButton } from "./MapButton";

interface BranchPageProps {
  branch: {
    name: string;
    address: string;
    city: string;
    phone: string;
    email: string;
    mapLink: string;
    description: string;
    features: string[];
    brands: string[];
    images: {
      hero: string;
      interior: string;
      display: string;
      centerPlan: string;
    };
  };
  openingHours: {
    day: string;
    hours: string;
  }[];
}

export function BranchPage({ branch, openingHours }: BranchPageProps) {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors" itemScope itemType="https://schema.org/Store">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden" aria-label="Hero-Bereich">
        <div className="absolute inset-0 bg-linear-to-b from-white/30 via-white/50 to-white dark:from-zinc-950/30 dark:via-zinc-950/50 dark:to-zinc-950 z-10" />
        <ImageWithFallback
          src={branch.images.hero}
          alt={`${branch.name} - ${branch.address}, ${branch.city}`}
          className="object-cover"
          fill
          priority
        />
        
        <div className="relative z-20 container mx-auto px-6 pb-16">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4" itemScope itemType="https://schema.org/PostalAddress">
              <MapPin className="w-5 h-5" aria-hidden="true" />
              <span itemProp="addressLocality">{branch.city}</span>
            </div>
            <h1 className="text-5xl md:text-7xl mb-4 tracking-tight" itemProp="name">
              {branch.name}
            </h1>
            <p className="text-xl max-w-2xl" itemProp="description">
              {branch.description}
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Contact & Hours Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-full"
          >
            <Card className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-8 h-full flex flex-col justify-between" itemScope itemType="https://schema.org/PostalAddress">
              <div className="flex flex-col">
                <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-6">Kontaktinformationen</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-zinc-700 dark:text-zinc-300" itemProp="streetAddress">{branch.address}</p>
                      <p className="text-zinc-700 dark:text-zinc-300" itemProp="addressLocality">{branch.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                    <a href={`tel:${branch.phone}`} className="text-zinc-700 dark:text-zinc-300 hover:text-primary transition-colors" itemProp="telephone">
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                    <a href={`mailto:${branch.email}`} className="text-zinc-700 dark:text-zinc-300 hover:text-primary transition-colors" itemProp="email">
                      {branch.email}
                    </a>
                  </div>
                </div>
              </div>
              
              <MapButton mapLink={branch.mapLink} />
            </Card>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-full"
          >
            <Card className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-8 h-full" itemScope itemType="https://schema.org/OpeningHoursSpecification">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                <h2 className="text-2xl text-zinc-900 dark:text-zinc-100">Öffnungszeiten</h2>
              </div>
              <div className="space-y-3" itemScope itemType="https://schema.org/OpeningHoursSpecification">
                {Array.isArray(openingHours) && openingHours.length > 0 ? (
                  openingHours.map((item: { day: string; hours: string }, index: number) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-zinc-200 dark:border-zinc-800 last:border-0">
                      <span className="text-zinc-700 dark:text-zinc-300" itemProp="dayOfWeek">{item.day}</span>
                      <time className="text-zinc-600 dark:text-zinc-400" itemProp="opens" dateTime={item.hours.includes("Geschlossen") ? "" : item.hours}>
                        {item.hours}
                      </time>
                    </div>
                  ))
                ) : (
                  <div className="text-zinc-500 dark:text-zinc-400 text-center py-4">
                    Öffnungszeiten werden in Kürze verfügbar sein
                  </div>
                )}
              </div>
            </Card>
          </MotionDiv>
        </div>

        {/* Available Brands */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl text-zinc-900 dark:text-zinc-100 mb-6">Verfügbare Marken</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {branch.brands.map((brand, index) => (
              <MotionDiv
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 text-center hover:border-primary transition-all cursor-pointer"
              >
                <span className="text-zinc-700 dark:text-zinc-300">{brand}</span>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Gallery */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl text-zinc-900 dark:text-zinc-100 mb-6">Geschäftsgalerie</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-96 rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => openModal(branch.images.interior, "Geschäftsinnenraum")}
            >
              <ImageWithFallback
                src={branch.images.interior}
                alt={`${branch.name} - Geschäftsinnenraum mit Kinderbekleidung`}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                fill
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 to-transparent flex items-end justify-between p-6">
                <p className="text-zinc-100 text-xl">Innenraum</p>
                <ZoomIn className="w-6 h-6 text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-96 rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => openModal(branch.images.display, "Kleidungsausstellung")}
            >
              <ImageWithFallback
                src={branch.images.display}
                alt={`${branch.name} - Kleidungsausstellung und Dekorationen`}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                fill
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 to-transparent flex items-end justify-between p-6">
                <p className="text-zinc-100 text-xl">Dekorationen</p>
                <ZoomIn className="w-6 h-6 text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </MotionDiv>
          </div>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="relative rounded-xl overflow-hidden group mt-6 cursor-pointer"
            onClick={() => openModal(branch.images.centerPlan, "Zentrumsplan")}
          >
            <ImageWithFallback
              src={branch.images.centerPlan}
              alt={`${branch.name} - Zentrumsplan und Lage des Geschäfts`}
              className="object-cover group-hover:scale-105 transition-transform duration-500 w-full h-full"
              width={1000}
              height={1000}
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 to-transparent flex items-end justify-between p-6">
              <p className="text-zinc-100 text-xl">Zentrumsplan</p>
              <ZoomIn className="w-6 h-6 text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </MotionDiv>
        </MotionDiv>

        {/* Features */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl text-zinc-900 dark:text-zinc-100 mb-6">Geschäftsmerkmale</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {branch.features.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 hover:border-primary transition-colors cursor-pointer"
              >
                <p className="text-zinc-700 dark:text-zinc-300">{feature}</p>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </section>

      {/* Image Modal */}
      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onClose={closeModal}
          src={modalImage.src}
          alt={modalImage.alt}
        />
      )}
    </main>
  );
}
