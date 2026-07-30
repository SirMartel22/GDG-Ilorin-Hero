"use client";

import React, { useState } from "react";
import Image from "next/image";

interface RecapModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export default function RecapModal({ isOpen, onClose, initialIndex = 0 }: RecapModalProps) {
  const [activeTab, setActiveTab] = useState<number>(initialIndex);

  if (!isOpen) return null;

  const photos = [
    {
      src: "/images/audience.png",
      title: "Vibrant Developer Community",
      desc: "Over 1,500 developers, designers, and tech enthusiasts gathered for interactive keynotes and workshops.",
    },
    {
      src: "/images/stage.png",
      title: "Ilorin Innovation Hub Mainstage",
      desc: "Keynotes on AI, Cloud Infrastructure, Mobile Development, and Design Systems.",
    },
    {
      src: "/images/speaker.png",
      title: "World-Class Tech Leaders",
      desc: "25+ industry experts shared insights, career advice, and live coding sessions.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#FFC700] rounded-3xl border-2 border-black p-6 md:p-8 text-[#0D0D0D] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-black bg-black text-[#FFC700] flex items-center justify-center font-bold text-lg hover:scale-110 transition-transform"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-black text-[#FFC700] font-mono text-xs font-bold rounded-full uppercase">
            Recap 2025
          </span>
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold tracking-tight uppercase">
            DevFest Ilorin Highlights
          </h2>
        </div>

        {/* Gallery Featured Image */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl border-2 border-black overflow-hidden mb-4 shadow-md bg-black">
          <Image
            src={photos[activeTab].src}
            alt={photos[activeTab].title}
            fill
            className="object-cover transition-all duration-500"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-white">
            <h3 className="font-syne text-xl md:text-2xl font-bold">{photos[activeTab].title}</h3>
            <p className="text-sm text-gray-200 mt-1 max-w-2xl">{photos[activeTab].desc}</p>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {photos.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`relative h-20 rounded-xl border-2 overflow-hidden transition-all ${
                activeTab === idx
                  ? "border-black ring-4 ring-black/20 scale-105"
                  : "border-black/30 opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={photo.src} alt={photo.title} fill className="object-cover" />
            </button>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl border-2 border-black bg-white/60">
          <div>
            <div className="font-syne text-2xl md:text-3xl font-extrabold">1,500+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-black/70">Attendees</div>
          </div>
          <div>
            <div className="font-syne text-2xl md:text-3xl font-extrabold">25+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-black/70">Speakers</div>
          </div>
          <div>
            <div className="font-syne text-2xl md:text-3xl font-extrabold">40+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-black/70">Sessions</div>
          </div>
          <div>
            <div className="font-syne text-2xl md:text-3xl font-extrabold">100%</div>
            <div className="text-xs font-bold uppercase tracking-wider text-black/70">Tech Vibe</div>
          </div>
        </div>
      </div>
    </div>
  );
}
