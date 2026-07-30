"use client";

import React from "react";
import Image from "next/image";

interface PhotoBlobsProps {
  visible: boolean;
  onOpenGallery?: (imageIndex: number) => void;
}

export default function PhotoBlobs({ visible, onOpenGallery }: PhotoBlobsProps) {
  if (!visible) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* 1. Top Left Organic Blob Photo (Speaker & Audience) */}
      <div 
        className="absolute top-16 left-2 md:left-6 w-36 h-36 md:w-56 md:h-56 pointer-events-auto transition-transform duration-500 hover:scale-110 cursor-pointer animate-float-slow"
        onClick={() => onOpenGallery && onOpenGallery(0)}
      >
        {/* Green floating accent bubble from Image 2 */}
        <div className="absolute -top-3 -right-2 w-8 h-8 md:w-12 md:h-12 bg-emerald-500 rounded-full shadow-lg z-20 animate-bounce" />
        <div className="w-full h-full blob-shape-1 overflow-hidden shadow-2xl border-4 border-black/10">
          <Image
            src="/images/audience.png"
            alt="DevFest Audience"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* 2. Top Right Organic Blob Photo (Venue & Hall) */}
      <div 
        className="absolute top-16 right-2 md:right-8 w-36 h-36 md:w-60 md:h-60 pointer-events-auto transition-transform duration-500 hover:scale-110 cursor-pointer animate-float-reverse"
        onClick={() => onOpenGallery && onOpenGallery(1)}
      >
        {/* Red starburst badge from Image 2 */}
        <div className="absolute -top-4 -left-3 w-9 h-9 md:w-12 md:h-12 bg-rose-500 rounded-full flex items-center justify-center text-white font-extrabold text-[10px] md:text-xs shadow-md z-20 rotate-12">
          NOV 26
        </div>
        <div className="w-full h-full blob-shape-2 overflow-hidden shadow-2xl border-4 border-black/10">
          <Image
            src="/images/stage.png"
            alt="DevFest Stage"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* 3. Bottom Left Organic Blob Photo (Presenter) */}
      <div 
        className="absolute bottom-20 left-4 md:left-10 w-36 h-36 md:w-56 md:h-56 pointer-events-auto transition-transform duration-500 hover:scale-110 cursor-pointer animate-float-reverse"
        onClick={() => onOpenGallery && onOpenGallery(2)}
      >
        {/* Yellow floating accent badge from Image 2 */}
        <div className="absolute -top-3 -right-1 w-8 h-8 md:w-10 md:h-10 bg-amber-400 rounded-2xl rotate-45 shadow-md z-20" />
        <div className="w-full h-full blob-shape-3 overflow-hidden shadow-2xl border-4 border-black/10">
          <Image
            src="/images/speaker.png"
            alt="DevFest Speaker"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* 4. Bottom Right Organic Blob Photo (Stage Display) */}
      <div 
        className="absolute bottom-24 right-4 md:right-12 w-36 h-36 md:w-56 md:h-56 pointer-events-auto transition-transform duration-500 hover:scale-110 cursor-pointer animate-float-slow"
        onClick={() => onOpenGallery && onOpenGallery(1)}
      >
        {/* Blue floating accent blob from Image 2 */}
        <div className="absolute -top-3 -left-2 w-8 h-8 md:w-11 md:h-11 bg-blue-500 rounded-full shadow-lg z-20" />
        <div className="w-full h-full blob-shape-1 overflow-hidden shadow-2xl border-4 border-black/10">
          <Image
            src="/images/stage.png"
            alt="DevFest Stage Screen"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
