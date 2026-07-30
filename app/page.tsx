"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import DevFestLiquidLogo from "./components/DevFestLiquidLogo";
import PhotoBlobs from "./components/PhotoBlobs";
import RecapModal from "./components/RecapModal";
import RegisterModal from "./components/RegisterModal";
import SponsorModal from "./components/SponsorModal";
import MenuModal from "./components/MenuModal";

export default function Home() {
  const [showPhotoBlobs, setShowPhotoBlobs] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSponsorOpen, setIsSponsorOpen] = useState(false);
  const [isRecapOpen, setIsRecapOpen] = useState(false);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);

  const handleOpenGallery = (index: number) => {
    setGalleryInitialIndex(index);
    setIsRecapOpen(true);
  };

  return (
    <main className="min-h-screen w-full bg-[#0D0D0D] p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center font-sans overflow-x-hidden selection:bg-black selection:text-[#FFC700]">
      {/* Outer Studio Frame Container (Image 1 Style poster layout) */}
      <div className="relative w-full max-w-[1440px] min-h-[92vh] bg-[#FFC700] rounded-[24px] sm:rounded-[32px] border-[2px] border-black p-4 sm:p-6 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl transition-all">
        
        {/* TOP NAVBAR */}
        <Navbar
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* TOP LEFT METADATA & MODE SWITCHER */}
        <div className="flex flex-wrap items-start justify-between gap-4 z-20 mt-2 sm:mt-4">
          {/* Top Left Circle Badge (Image 1 Style: 01 CREATIVE STUDIO) */}
          <div className="flex flex-col items-start gap-1">
            <div className="w-9 h-9 rounded-full border-[1.5px] border-[#0D0D0D] flex items-center justify-center font-syne font-extrabold text-xs">
              26
            </div>
            <div className="text-[11px] font-extrabold tracking-wider uppercase text-[#0D0D0D]">
              DEVFEST ILORIN
            </div>
          </div>

          {/* Style Toggle Button (Switch between Image 1 Pure Style & Image 2 Blobs) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPhotoBlobs(!showPhotoBlobs)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border-[1.5px] border-[#0D0D0D] bg-white/40 hover:bg-white/80 transition-all text-[11px] font-extrabold tracking-wider text-[#0D0D0D]"
              title="Toggle Image 2 Photo Blobs overlay"
            >
              <span className={`w-2 h-2 rounded-full ${showPhotoBlobs ? "bg-emerald-600 animate-ping" : "bg-gray-400"}`} />
              <span>{showPhotoBlobs ? "PHOTO BLOBS: ON" : "PHOTO BLOBS: OFF"}</span>
            </button>
          </div>
        </div>

        {/* HERO CENTER CONTENT */}
        <div className="relative my-auto py-6 sm:py-10 flex flex-col items-center justify-center text-center z-20">
          {/* Floating Photo Blobs (from Image 2) */}
          <PhotoBlobs
            visible={showPhotoBlobs}
            onOpenGallery={handleOpenGallery}
          />

          {/* GIANT LIQUID TEXT: "DevFest" (Matching Marc liquid script text in Image 1) */}
          <DevFestLiquidLogo className="z-20 my-2 sm:my-4" />

          {/* SUB-HEADLINE TEXT (Brutalist Uppercase Typography with Brush Stroke Highlight) */}
          <div className="z-20 mt-2 max-w-3xl px-2">
            <h1 className="font-syne text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.1] text-[#0D0D0D] flex flex-col items-center">
              <span className="flex items-center gap-2">
                WE DON&apos;T JUST PREDICT THE FUTURE <span className="text-xl sm:text-3xl md:text-4xl font-normal">↑</span>
              </span>
              <span className="flex flex-wrap justify-center items-center gap-2 mt-1">
                <span className="text-xl sm:text-3xl md:text-4xl font-normal">↓</span>
                <span className="brush-highlight px-2 py-0.5">WE BUILD IT.</span>
              </span>
              <span className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-widest mt-2 opacity-90">
                NOVEMBER 2026
              </span>
            </h1>
          </div>
        </div>

        {/* BOTTOM CONTROLS & FOOTER RECAP (Image 1 Style) */}
        <div className="relative z-20 flex flex-wrap items-end justify-between gap-6 pt-6 border-t-[1.5px] border-[#0D0D0D]/20">
          {/* Bottom Left: Scroll Indicator */}
          <div className="flex flex-col items-start gap-2">
            <div className="w-8 h-8 rounded-full border-[1.5px] border-[#0D0D0D] flex items-center justify-center text-base font-bold animate-bounce">
              ↓
            </div>
            <span className="text-[10px] sm:text-xs font-extrabold tracking-widest uppercase text-[#0D0D0D]">
              SCROLL TO EXPLORE
            </span>
          </div>

          {/* Bottom Right: Description & Recap Link */}
          <div className="flex flex-col items-start sm:items-end text-left sm:text-right max-w-md gap-3">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wide leading-relaxed text-[#0D0D0D]">
              A COMMUNITY TECH FESTIVAL FOR BOLD DEVELOPERS, DESIGNERS AND DIGITAL INNOVATORS IN ILORIN.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsSponsorOpen(true)}
                className="text-xs font-extrabold tracking-wider uppercase border-b-2 border-transparent hover:border-[#0D0D0D] transition-all"
              >
                SPONSOR US ↗
              </button>
              <button
                onClick={() => setIsRecapOpen(true)}
                className="flex items-center gap-2 text-xs font-extrabold tracking-wider uppercase border-b-2 border-[#0D0D0D] pb-0.5 hover:translate-x-1 transition-transform group"
              >
                <span>VIEW 2025 RECAP</span>
                <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* MODALS & OVERLAYS */}
      <RecapModal
        isOpen={isRecapOpen}
        onClose={() => setIsRecapOpen(false)}
        initialIndex={galleryInitialIndex}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      <SponsorModal
        isOpen={isSponsorOpen}
        onClose={() => setIsSponsorOpen(false)}
      />

      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenSponsor={() => setIsSponsorOpen(true)}
        onOpenRecap={() => setIsRecapOpen(true)}
      />
    </main>
  );
}
