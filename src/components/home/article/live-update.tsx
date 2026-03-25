"use client";

import React from "react";

import { Play } from "lucide-react";

export default function LiveUpdate() {
  const updates = [
    "লেবাননে বাস্তুচ্যুত ৭ লাখ ৫০ হাজারের বেশি: জাতিসংঘ",
    "তেলের দামের উল্লম্ফন ঠেকাতে মজুত ব্যবহারের ইঙ্গিত যুক্তরাষ্ট্রের",
  ];

  return (
    <div className="border-2 border-red-500 rounded-2xl overflow-hidden bg-white p-1">
      {/* Top img Section */}
      <div className="relative w-full aspect-1/0.5 rounded-t-xl overflow-hidden">
        <img 
          src="https://placehold.co/300x150/png"
          alt="Live Update"
          className="object-cover"
        />

        {/* Top Right Label */}
        <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
          <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
          <span className="text-red-600 text-xs font-bold">সরাসরি আপডেট</span>
        </div>

        {/* Center Live Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-red-600/90 text-white flex items-center gap-2 px-4 py-1.5 rounded-full hover:bg-red-700 transition-colors">
            <div className="bg-white rounded-full p-1">
              <Play className="w-4 h-4 text-red-600 fill-current" />
            </div>
            <span className="font-bold tracking-wider text-sm">LIVE</span>
          </button>
        </div>
      </div>

      {/* Headline Section */}
      <div className="bg-[#F3E5AB] m-1 p-2 rounded-xl">
        <h2 className="text-sm font-extrabold text-gray-900 leading-tight">
          ইরানের সঙ্গে যুক্তরাষ্ট্র-ইসরাইলের সংঘাত
        </h2>
      </div>

      {/* Updates List / Timeline */}
      <div className="px-4 py-2 space-y-6 relative">
        {updates.map((text, index) => (
          <div key={index} className="flex gap-2 relative">
            {/* Timeline Circle and Line */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full border-4 border-yellow-500 bg-white z-10" />
              {index !== updates.length - 1 && (
                <div className="w-0.5 h-12 bg-gray-300 absolute top-4" />
              )}
            </div>

            {/* Update Text */}
            <p className="text-xs font-bold text-gray-800">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
