"use client";

import React from "react";
import Image from "next/image";

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenRecap: () => void;
  activeSection?: string;
}

export default function Navbar({ onOpenMenu, onOpenRecap, activeSection = "about" }: NavbarProps) {
  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "SPEAKERS", href: "#speakers" },
    { label: "SCHEDULE", href: "#schedule" },
    { label: "SPONSORS", href: "#sponsors" },
    { label: "LOCATION", href: "#location" },
  ];

  return (
    <header className="w-full flex items-center justify-between gap-3 text-sm font-syne font-extrabold tracking-wider uppercase z-30 pt-2 pb-2">
      {/* Left Logo */}
      <div className="flex items-center">
        <a
          href="#"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.svg"
            alt="DevFest Ilorin"
            width={140}
            height={40}
            className="h-7 md:h-9 w-auto object-contain"
            priority
          />
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

      {/* Right Capsule - Menu */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenMenu}
          className="flex items-center gap-2 px-4 py-2 md:py-2.5 rounded-full border-[1.5px] border-[#0D0D0D] bg-transparent hover:bg-[#0D0D0D] hover:text-[#FCF4F4] transition-all duration-200 text-xs font-extrabold tracking-wider"
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
