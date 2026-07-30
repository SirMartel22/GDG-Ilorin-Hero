"use client";

import React, { useState } from "react";

interface DevFestLiquidLogoProps {
  className?: string;
}

export default function DevFestLiquidLogo({ className = "" }: DevFestLiquidLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative w-full flex justify-center items-center select-none py-2 md:py-6 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* SVG Liquid Filter Definition */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Main Liquid DevFest Graphic */}
      <div 
        className={`w-full max-w-[1100px] transition-transform duration-500 ease-out ${
          isHovered ? "scale-[1.02]" : "scale-100"
        }`}
      >
        <svg
          viewBox="0 0 1200 480"
          className="w-full h-auto drop-shadow-sm filter transition-all duration-300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Custom Hand-Drawn High-Fidelity Liquid Script Path for "DevFest" */}
          {/* Letter D */}
          <path
            d="M 120 90 
               C 120 90, 80 140, 75 220 
               C 70 300, 95 380, 130 400 
               C 155 415, 200 410, 240 360 
               C 285 305, 290 220, 260 150 
               C 230 80, 150 70, 120 90 Z 
               M 145 160 
               C 165 140, 200 150, 215 190 
               C 230 230, 225 290, 195 330 
               C 170 365, 145 350, 135 310 
               C 125 270, 130 180, 145 160 Z"
            fill="#0D0D0D"
          />

          {/* D connection loop to e */}
          <path
            d="M 240 340 
               C 270 380, 310 395, 335 340 
               C 360 280, 310 240, 280 270 
               C 255 295, 270 360, 320 370
               C 365 380, 385 325, 395 285"
            stroke="#0D0D0D"
            strokeWidth="52"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter e */}
          <path
            d="M 330 280
               C 330 240, 380 230, 390 270
               C 400 310, 325 365, 395 365
               C 425 365, 450 335, 465 290"
            stroke="#0D0D0D"
            strokeWidth="48"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter v */}
          <path
            d="M 455 275
               C 475 335, 495 385, 520 380
               C 545 375, 565 305, 575 270
               C 580 255, 595 250, 605 275"
            stroke="#0D0D0D"
            strokeWidth="50"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter F - Bold Liquid Capital F with Fluid Top Loop */}
          <path
            d="M 645 110
               C 605 100, 580 135, 605 185
               C 630 235, 665 175, 715 165
               C 745 160, 755 185, 730 220
               L 655 380
               C 645 400, 625 435, 600 445"
            stroke="#0D0D0D"
            strokeWidth="54"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* F Crossbar */}
          <path
            d="M 610 265 C 655 255, 725 260, 755 270"
            stroke="#0D0D0D"
            strokeWidth="48"
            strokeLinecap="round"
          />

          {/* Letter e (second) */}
          <path
            d="M 755 315
               C 755 275, 800 265, 815 300
               C 830 335, 765 375, 825 370
               C 850 365, 870 335, 885 290"
            stroke="#0D0D0D"
            strokeWidth="48"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter s */}
          <path
            d="M 885 300
               C 915 260, 965 270, 945 310
               C 925 350, 885 330, 930 375
               C 955 400, 980 360, 995 320"
            stroke="#0D0D0D"
            strokeWidth="48"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter t */}
          <path
            d="M 1010 220 L 985 370 C 980 395, 1005 405, 1045 380"
            stroke="#0D0D0D"
            strokeWidth="50"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* t crossbar */}
          <path
            d="M 960 280 L 1055 275"
            stroke="#0D0D0D"
            strokeWidth="46"
            strokeLinecap="round"
          />

          {/* Organic liquid drops & splashes around letter D & F (matching Marc style in Image 1) */}
          <circle cx="85" cy="115" r="14" fill="#0D0D0D" className="animate-pulse" />
          <circle cx="70" cy="150" r="9" fill="#0D0D0D" />
          <circle cx="1060" cy="200" r="12" fill="#0D0D0D" />
          <path
            d="M 590 420 C 585 450, 615 455, 605 425 Z"
            fill="#0D0D0D"
          />
        </svg>
      </div>

      {/* Styled text overlay for extra clarity and browser accessibility */}
      <span className="sr-only">DevFest</span>
    </div>
  );
}
