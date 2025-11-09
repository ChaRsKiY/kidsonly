"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

export function ImageModal({ isOpen, onClose, src, alt }: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 max-w-7xl max-h-[90vh] w-full mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Image Container */}
        <div className="relative bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-2xl">
          <div className="relative max-h-[80vh] overflow-hidden">
            <ImageWithFallback
              src={src}
              alt={alt}
              className="w-full h-auto max-h-[80vh] object-contain"
              width={1200}
              height={800}
              priority
            />
          </div>
          
          {/* Image Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6">
            <p className="text-white text-lg font-medium">{alt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
