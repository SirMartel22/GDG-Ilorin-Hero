import React from "react";

interface DevFestLiquidLogoProps {
  className?: string;
}

export default function DevFestLiquidLogo({ className = "" }: DevFestLiquidLogoProps) {
  return (
    <div className={`relative w-full flex flex-col justify-center items-center select-none py-2 md:py-4 ${className}`}>
      {/* DevFest rendered in actual local font "BECOME ACTORS DEMO" from public/font/ */}
      <div className="relative inline-block max-w-full transform -rotate-[5deg] origin-center my-2 sm:my-4 transition-transform px-1">
        <h1 className="font-become-actors text-[66px] min-[390px]:text-[75px] sm:text-8xl md:text-[140px] lg:text-[170px] xl:text-[190px] font-normal text-[#0D0D0D] tracking-normal leading-none select-none block max-w-full">
          Devfest
        </h1>

        {/* Hand-painted Yellow Acrylic Brush Underline Stroke under "fest" */}
        <div className="absolute right-0 bottom-[-4px] sm:bottom-[-10px] md:bottom-[-16px] lg:bottom-[-20px] w-[55%] h-3.5 sm:h-5 md:h-7 bg-[#FFD700] rounded-full transform -rotate-1 opacity-95 pointer-events-none shadow-sm -z-10" />
      </div>

      <span className="sr-only">DevFest</span>
    </div>
  );
}
