"use client";

import React from "react";

interface SponsorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SponsorModal({ isOpen, onClose }: SponsorModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FFC700] rounded-3xl border-2 border-black p-6 md:p-8 text-[#0D0D0D] shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-black bg-black text-[#FFC700] flex items-center justify-center font-bold text-lg hover:scale-110 transition-transform"
        >
          ✕
        </button>

        <span className="px-3 py-1 bg-black text-[#FFC700] font-mono text-xs font-bold rounded-full uppercase">
          PARTNERSHIPS & SPONSORSHIPS
        </span>

        <h2 className="font-syne text-2xl md:text-3xl font-extrabold tracking-tight uppercase mt-3 mb-2">
          Sponsor DevFest Ilorin 2026
        </h2>
        <p className="text-sm font-semibold text-black/80 mb-6">
          Connect your brand with 1,500+ top developer talents, tech founders, and innovators in Kwara State & West Africa.
        </p>

        <div className="space-y-3 mb-6">
          <div className="p-4 rounded-xl border-2 border-black bg-white">
            <div className="font-bold text-base">Keynote & Mainstage Sponsor</div>
            <div className="text-xs text-gray-600">Exclusive booth positioning, branding across main hall & livestreaming.</div>
          </div>
          <div className="p-4 rounded-xl border-2 border-black bg-white">
            <div className="font-bold text-base">Workshop & Hackathon Partner</div>
            <div className="text-xs text-gray-600">Host branded tech workshops and mentor top talent.</div>
          </div>
        </div>

        <a
          href="mailto:sponsor@devfestilorin.com"
          className="block text-center w-full py-4 rounded-xl border-2 border-black bg-black text-[#FFC700] font-syne font-extrabold text-base uppercase tracking-wider hover:bg-[#1a1a1a] transition-all hover:scale-[1.02] shadow-lg"
        >
          GET SPONSORSHIP DECK (PDF) ↗
        </a>
      </div>
    </div>
  );
}
