"use client";

import React from "react";

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenRegister: () => void;
  activeSection?: string;
}

export default function Navbar({ onOpenMenu, onOpenRegister, activeSection = "about" }: NavbarProps) {
  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "SPEAKERS", href: "#speakers" },
    { label: "SCHEDULE", href: "#schedule" },
    { label: "SPONSORS", href: "#sponsors" },
    { label: "LOCATION", href: "#location" },
  ];

  return (
    <header className="w-full flex items-center justify-between gap-3 text-sm font-bold tracking-wider uppercase z-30 pt-2 pb-4">
      {/* Left Pill - Logo Capsule */}
      <div className="flex items-center">
        <a 
          href="#"
          className="flex items-center gap-1.5 px-4 md:px-5 py-2 md:py-2.5 rounded-full border-[1.5px] border-[#0D0D0D] bg-transparent hover:bg-[#0D0D0D] hover:text-[#FFC700] transition-all duration-200 group"
        >
          <span className="text-base md:text-lg font-black tracking-tighter flex items-center">
            <span className="text-amber-600 group-hover:text-[#FFC700] font-mono mr-0.5">&#123;</span>
            DevFest
            <span className="text-amber-600 group-hover:text-[#FFC700] font-mono ml-0.5">&#125;</span>
          </span>
          <span className="text-[10px] md:text-xs font-semibold px-1.5 py-0.5 rounded border border-[#0D0D0D]/40 group-hover:border-[#FFC700]/40 group-hover:text-[#FFC700]">
            Ilorin
          </span>
        </a>
      </div>

      {/* Middle Pill - Navigation Capsule (Hidden on small mobile, visible on md+) */}
      <nav className="hidden lg:flex items-center gap-1 border-[1.5px] border-[#0D0D0D] rounded-full px-4 py-1.5 bg-transparent backdrop-blur-sm">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#0D0D0D] hover:bg-[#0D0D0D]/10 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Right Capsule - Register & Menu */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenRegister}
          className="hidden sm:flex items-center gap-1.5 px-4 py-2 md:py-2.5 rounded-full border-[1.5px] border-[#0D0D0D] bg-[#0D0D0D] text-[#FFC700] hover:bg-black hover:scale-105 transition-all text-xs font-extrabold tracking-wider"
        >
          <span>REGISTER 2026</span>
          <span className="text-sm">↗</span>
        </button>

        <button
          onClick={onOpenMenu}
          className="flex items-center gap-2 px-4 py-2 md:py-2.5 rounded-full border-[1.5px] border-[#0D0D0D] bg-transparent hover:bg-[#0D0D0D] hover:text-[#FFC700] transition-all duration-200 text-xs font-extrabold tracking-wider"
          aria-label="Open Menu"
        >
          <span>MENU</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
