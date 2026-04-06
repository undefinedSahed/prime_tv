"use client";

import React from "react";

import { Play } from "lucide-react";

export default function LiveUpdate() {
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

      {/* <div className="bg-[#F3E5AB] m-1 p-2 rounded-xl">
        <h2 className="text-sm font-extrabold text-gray-900 leading-tight">
          ইরানের সঙ্গে যুক্তরাষ্ট্র-ইসরাইলের সংঘাত
        </h2>
      </div>

      <div className="px-4 py-2 space-y-6 relative">
        {updates.map((text, index) => (
          <div key={index} className="flex gap-2 relative">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full border-4 border-yellow-500 bg-white z-10" />
              {index !== updates.length - 1 && (
                <div className="w-0.5 h-12 bg-gray-300 absolute top-4" />
              )}
            </div>

            <p className="text-xs font-bold text-gray-800">
              {text}
            </p>
          </div>
        ))}
      </div> */}

      {/* Upcoming Feature Section */}
      <div className="relative min-h-45 flex flex-col">
        <div className="bg-gray-100 m-1 p-2 rounded-xl border border-dashed border-gray-300">
          <h2 className="text-sm font-extrabold text-gray-400 leading-tight flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-300 rounded-full" />
            পরবর্তী ফিচার আসছে...
          </h2>
        </div>

        <div className="px-4 py-4 space-y-6 relative grow overflow-hidden">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="flex gap-2 relative opacity-20 grayscale"
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full border-4 border-gray-300 bg-white z-10" />
                {index === 0 && (
                  <div className="w-0.5 h-12 bg-gray-200 absolute top-4" />
                )}
              </div>
              <div className="h-3 bg-gray-200 rounded w-full mt-1" />
            </div>
          ))}

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 backdrop-blur-[2px] z-20">
            <div className="bg-white shadow-xl border border-gray-100 px-4 py-2 rounded-lg text-center">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">
                Coming Soon
              </p>
              <p className="text-xs font-bold text-gray-800">
                বিশদ বিশ্লেষণ এবং টাইমলাইন
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
