"use client";

import { useState } from "react";
import { MotionDiv } from "./motion";
import { ImageWithFallback } from "./ImageWithFallback";
import { ZoomIn } from "lucide-react";
import { ImageModal } from "./ImageModal";
import { useTranslations } from "next-intl";

const GalleryClientBlock = ({ branch }: any) => {
    const t = useTranslations('branchPage');
    const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

    const openModal = (src: string, alt: string) => {
        setModalImage({ src, alt });
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <>
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl text-zinc-900 dark:text-zinc-100 mb-6">{t('gallery')}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <MotionDiv
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        className="relative h-96 rounded-xl overflow-hidden group cursor-pointer"
                        onClick={() => openModal(branch.images.interior, t('interior'))}
                    >
                        <ImageWithFallback
                            src={branch.images.interior}
                            alt={`${branch.name} - Geschäftsinnenraum mit Kinderbekleidung`}
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            fill
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 to-transparent flex items-end justify-between p-6">
                            <p className="text-zinc-100 text-xl">{t('interior')}</p>
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
                        onClick={() => openModal(branch.images.display, t('decorations'))}
                    >
                        <ImageWithFallback
                            src={branch.images.display}
                            alt={`${branch.name} - Kleidungsausstellung und Dekorationen`}
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            fill
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 to-transparent flex items-end justify-between p-6">
                            <p className="text-zinc-100 text-xl">{t('decorations')}</p>
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
                    onClick={() => openModal(branch.images.centerPlan, t('centerPlan'))}
                >
                    <ImageWithFallback
                        src={branch.images.centerPlan}
                        alt={`${branch.name} - Zentrumsplan und Lage des Geschäfts`}
                        className="object-cover group-hover:scale-105 transition-transform duration-500 w-full h-full"
                        width={1000}
                        height={1000}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 to-transparent flex items-end justify-between p-6">
                        <p className="text-zinc-100 text-xl">{t('centerPlan')}</p>
                        <ZoomIn className="w-6 h-6 text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </MotionDiv>
            </MotionDiv>
            {modalImage && (
                <ImageModal
                    isOpen={!!modalImage}
                    onClose={closeModal}
                    src={modalImage.src}
                    alt={modalImage.alt}
                />
            )}
        </>
    );
};

export default GalleryClientBlock;