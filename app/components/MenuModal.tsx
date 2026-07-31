"use client";

import React from "react";
import Image from "next/image";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
  onOpenSponsor: () => void;
  onOpenRecap: () => void;
}

export default function MenuModal({
  isOpen,
  onClose,
  onOpenRegister,
  onOpenSponsor,
  onOpenRecap,
}: MenuModalProps) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-md animate-fadeIn cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md h-full bg-[#FCF4F4] border-l-2 border-black p-8 text-[#0D0D0D] flex flex-col justify-between overflow-y-auto cursor-default"
      >
        <div>
          {/* Close Header with Normal Logo */}
          <div className="flex items-center justify-between mb-8">
            <a href="#" onClick={onClose} className="flex items-center hover:opacity-80 transition-opacity">
              <Image
                src="/logo.svg"
                alt="DevFest Ilorin"
                width={140}
                height={40}
                className="h-7 md:h-8 w-auto object-contain"
                priority
              />
            </a>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border-2 border-black bg-black text-[#FCF4F4] flex items-center justify-center font-bold text-lg hover:scale-110 transition-transform cursor-pointer"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4 mb-8">
            {[
              { title: "REGISTER 2026", action: () => { onClose(); onOpenRegister(); } },
              { title: "VIEW 2025 RECAP", action: () => { onClose(); onOpenRecap(); } },
              { title: "SPONSOR US", action: () => { onClose(); onOpenSponsor(); } },
              { title: "SPEAKERS & TALKS", action: onClose },
              { title: "LOCATION & VENUE", action: onClose },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={item.action}
                className="w-full text-left font-syne text-2xl md:text-3xl font-extrabold tracking-tight uppercase py-2 border-b-2 border-black/20 hover:border-black hover:translate-x-2 transition-all flex items-center justify-between group cursor-pointer"
              >
                <span>{item.title}</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Menu Info */}
        <div className="pt-6 border-t-2 border-black/30">
          <div className="text-xs font-extrabold uppercase tracking-widest text-black/60 mb-2 font-syne">
            EVENT LOCATION
          </div>
          <div className="font-bold text-sm font-syne">Ilorin Innovation Hub, Ahmadu Bello Way, Ilorin, Kwara State.</div>
          <div className="mt-4 text-xs font-semibold text-black/60">
            Hosted by GDG Ilorin & Tech Community.
          </div>
        </div>
      </div>
    </div>
  );
}
