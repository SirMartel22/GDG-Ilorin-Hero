"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import DevFestLiquidLogo from "./components/DevFestLiquidLogo";
import RecapModal from "./components/RecapModal";
import RegisterModal from "./components/RegisterModal";
import SponsorModal from "./components/SponsorModal";
import MenuModal from "./components/MenuModal";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSponsorOpen, setIsSponsorOpen] = useState(false);
  const [isRecapOpen, setIsRecapOpen] = useState(false);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);

  return (
    <main className="min-h-screen w-full bg-[#FCF4F4] p-0 flex flex-col justify-center items-center font-sans overflow-x-hidden selection:bg-black selection:text-[#FCF4F4]">
      {/* Main Studio Hero Container */}
      <div className="relative w-full max-w-[1440px] min-h-screen bg-[#FCF4F4] p-3 sm:p-5 md:p-8 flex flex-col justify-between overflow-hidden transition-all">

        {/* TOP NAVBAR */}
        <Navbar
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenRecap={() => setIsRecapOpen(true)}
        />

        {/* HERO CENTER CONTENT */}
        <div className="relative my-auto py-1 sm:py-2 flex flex-col items-center justify-center text-center z-20">
          {/* HANDWRITTEN TEXT: "DevFest" */}
          <DevFestLiquidLogo className="z-20 my-0 sm:my-1" />

          {/* COMMUNITY TECH FESTIVAL TAGLINE */}
          <p className="max-w-md sm:max-w-xl text-xs sm:text-sm font-syne font-extrabold uppercase tracking-wider leading-relaxed text-[#0D0D0D] mt-4 mb-3 px-4 z-20">
            A COMMUNITY TECH FESTIVAL FOR BOLD DEVELOPERS, DESIGNERS AND DIGITAL INNOVATORS IN ILORIN.
          </p>

          {/* NOVEMBER 2026 HEADING */}
          <div className="z-20 mt-1 sm:mt-2">
            <h2 className="font-syne text-3xl sm:text-5xl md:text-4xl font-extrabold tracking-widest uppercase text-[#0D0D0D] flex flex-col items-center gap-0 leading-none">
              <span>NOVEMBER</span>
              <span>2026</span>
            </h2>
          </div>

          {/* HERO ACTION BUTTONS: Sponsor Us & Register */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 z-20">
            {/* Sponsor Us Pill Button */}
            <button
              onClick={() => setIsSponsorOpen(true)}
              className="flex items-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#4F46E5] to-[#8B5CF6] text-white font-syne font-extrabold text-base sm:text-lg shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Sponsor Us</span>
              <span className="w-8 h-8 rounded-full bg-white text-[#3B82F6] flex items-center justify-center font-bold text-sm shadow-inner">
                ↗
              </span>
            </button>

            {/* Register Pill Button */}
            <button
              onClick={() => setIsRegisterOpen(true)}
              className="flex items-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full bg-black text-white font-syne font-extrabold text-base sm:text-lg shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Register</span>
              <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm shadow-inner">
                ↗
              </span>
            </button>
          </div>
        </div>

        {/* BOTTOM CONTROLS & FOOTER RECAP */}
        <div className="relative z-20 flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-16 w-full">
          {/* Lanyard Pattern Line (replacing straight line) */}
          <div
            className="w-full h-6 sm:h-[29px] bg-repeat-x bg-center pointer-events-none"
            style={{
              backgroundImage: "url('/images/lanyard.svg')",
              backgroundSize: "auto 100%",
            }}
            aria-hidden="true"
          />

          <div className="flex flex-row items-center justify-between gap-2 w-full">
            {/* Bottom Left: Scroll Indicator CTA */}
            <button
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth"
                });
              }}
              className="flex flex-row items-center gap-1.5 cursor-pointer group hover:opacity-80 transition-opacity text-left bg-transparent p-0 border-b border-[#0D0D0D] sm:border-b-2 pb-0.5"
              aria-label="Scroll to explore next section"
            >
              <span className="text-[9px] sm:text-[11px] font-syne font-extrabold tracking-widest uppercase text-[#0D0D0D] whitespace-nowrap">
                SCROLL TO EXPLORE
              </span>
              <svg
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0D0D0D] animate-bounce group-hover:translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </button>

            {/* Bottom Right: Recap Link */}
            <button
              onClick={() => setIsRecapOpen(true)}
              className="flex flex-row items-center gap-1 text-[9px] sm:text-xs font-syne font-extrabold tracking-wider uppercase border-b border-[#0D0D0D] sm:border-b-2 pb-0.5 hover:translate-x-0.5 transition-transform group cursor-pointer whitespace-nowrap"
            >
              <span>VIEW 2025 RECAP</span>
              <span className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
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
