"use client";

import React, { useState } from "react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#FCF4F4] rounded-3xl border-2 border-black p-6 md:p-8 text-[#0D0D0D] shadow-2xl overflow-hidden cursor-default"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-black bg-black text-[#FCF4F4] flex items-center justify-center font-bold text-lg hover:scale-110 transition-transform cursor-pointer"
        >
          ✕
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-black text-[#FCF4F4] font-mono text-xs font-bold rounded-full uppercase">
            NOVEMBER 2026
          </span>
          <span className="text-xs font-extrabold uppercase tracking-wider text-black/70">
            ILORIN INNOVATION HUB
          </span>
        </div>

        <h2 className="font-syne text-2xl md:text-3xl font-extrabold tracking-tight uppercase mb-4">
          Reserve Your Seat for DevFest 2026
        </h2>

        {submitted ? (
          <div className="p-8 text-center bg-black text-[#FCF4F4] rounded-2xl border-2 border-black animate-scaleUp">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-syne text-2xl font-bold uppercase mb-2">You&apos;re Registered!</h3>
            <p className="text-sm font-medium text-gray-300">
              We&apos;ve reserved your ticket for DevFest Ilorin 2026. Check your inbox for confirmation details!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Morgan"
                className="w-full px-4 py-3 rounded-xl border-2 border-black bg-white focus:outline-none focus:ring-4 focus:ring-black/20 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="alex@example.com"
                className="w-full px-4 py-3 rounded-xl border-2 border-black bg-white focus:outline-none focus:ring-4 focus:ring-black/20 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider mb-1">
                Primary Track
              </label>
              <select className="w-full px-4 py-3 rounded-xl border-2 border-black bg-white focus:outline-none focus:ring-4 focus:ring-black/20 font-medium">
                <option value="frontend">Frontend & Mobile Engineering</option>
                <option value="ai">AI & Data Science</option>
                <option value="backend">Backend & Cloud DevOps</option>
                <option value="design">UI/UX & Product Design</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl border-2 border-black bg-black text-[#FCF4F4] font-syne font-extrabold text-base uppercase tracking-wider hover:bg-[#1a1a1a] transition-all hover:scale-[1.02] shadow-lg cursor-pointer"
            >
              COMPLETE FREE REGISTRATION ↗
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
