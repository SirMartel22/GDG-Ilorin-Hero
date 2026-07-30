"use client";

import React from "react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md h-full bg-[#FFC700] border-l-2 border-black p-8 text-[#0D0D0D] flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Close Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-1 text-xl font-extrabold font-mono">
              <span>&#123;</span>DevFest Ilorin<span>&#125;</span>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border-2 border-black bg-black text-[#FFC700] flex items-center justify-center font-bold text-lg hover:scale-110 transition-transform"
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
                className="w-full text-left font-syne text-2xl md:text-3xl font-extrabold tracking-tight uppercase py-2 border-b-2 border-black/20 hover:border-black hover:translate-x-2 transition-all flex items-center justify-between group"
              >
                <span>{item.title}</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Menu Info */}
        <div className="pt-6 border-t-2 border-black/30">
          <div className="text-xs font-extrabold uppercase tracking-widest text-black/60 mb-2">
            EVENT LOCATION
          </div>
          <div className="font-bold text-sm">Ilorin Innovation Hub, Ahmadu Bello Way, Ilorin, Kwara State.</div>
          <div className="mt-4 text-xs font-semibold text-black/60">
            Hosted by GDG Ilorin & Tech Community.
          </div>
        </div>
      </div>
    </div>
  );
}
