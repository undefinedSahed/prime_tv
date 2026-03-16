"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BazarPricing() {
  const tArticle = useTranslations("article");
  const [index, setIndex] = useState(0);

  const pricingDummyData = [
    {
      id: 1,
      title: "পেঁয়াজ",
      tag: "(দেশি)",
      price: "২০০",
      unit: "টাকা/কেজি",
      img: "https://placehold.co/100x100/png",
    },
    {
      id: 2,
      title: "আলু",
      tag: "(দেশি)",
      price: "৬০",
      unit: "টাকা/কেজি",
      img: "https://placehold.co/100x100/png",
    },
    {
      id: 3,
      title: "রসুন",
      tag: "(চায়না)",
      price: "২২০",
      unit: "টাকা/কেজি",
      img: "https://placehold.co/100x100/png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % pricingDummyData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [pricingDummyData.length]);

  const currentItem = pricingDummyData[index];

  return (
    <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 lg:space-y-3">
      {/* Header */}
      <div className="flex justify-between items-center border-l-4 border-primary pl-3">
        <h2 className="text-xl font-bold text-gray-800">
          {tArticle("bazarPricing")}
        </h2>
        <Link href="/pricing" className="flex items-center gap-1 text-primary cursor-pointer hover:underline">
          <span className="text-sm font-medium">{tArticle("more")}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Carousel Area */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            {/* Image Section */}
            <div className="relative w-24 aspect-square rounded-xl shrink-0 overflow-hidden">
              <Image priority
                src={currentItem.img}
                alt={currentItem.title}
                fill
                className="object-cover rounded-xl p-2"
              />
            </div>

            {/* Info Section */}
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold text-gray-700">
                {currentItem.title}{" "}
                <span className="text-sm font-normal text-gray-500">
                  {currentItem.tag}
                </span>
              </h3>
              <p className="text-base font-bold text-gray-900">
                {currentItem.price}{" "}
                <span className="text-base font-normal text-gray-600">
                  ({currentItem.unit})
                </span>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
