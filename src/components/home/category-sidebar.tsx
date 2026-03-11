"use client";

import React, { useState } from "react";
import { Camera, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const dummyCategoryData = [
  { id: 1, name: "দেশে প্রাইম" },
  {
    id: 2,
    name: "অর্থনীতি",
    subcategories: [
      { id: 201, name: "ব্যাংক" },
      { id: 202, name: "শেয়ারবাজার" },
      { id: 203, name: "বাজেট" },
    ],
  },

  { id: 3, name: "রাজনীতি" },

  {
    id: 4,
    name: "বিদেশে প্রাইম",
    subcategories: [
      { id: 401, name: "এশিয়া" },
      { id: 402, name: "ইউরোপ" },
      { id: 403, name: "আমেরিকা" },
    ],
  },

  { id: 5, name: "প্রাইম জনপদে" },

  { id: 6, name: "আইন ও আদালত" },

  {
    id: 7,
    name: "প্রাইম মাঠে",
    subcategories: [
      { id: 701, name: "ক্রিকেট" },
      { id: 702, name: "ফুটবল" },
      { id: 703, name: "অন্যান্য" },
    ],
  },

  { id: 8, name: "অপরাধ" },

  { id: 9, name: "আন্তর্জাতিক বাণিজ্য" },

  { id: 10, name: "বিশেষ প্রতিবেদন" },

  {
    id: 11,
    name: "পরিবেশ ও জলবায়ু",
    subcategories: [
      { id: 1101, name: "জলবায়ু পরিবর্তন" },
      { id: 1102, name: "বন্যা" },
      { id: 1103, name: "দূষণ" },
    ],
  },
];

export default function CategorySidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const tImage = useTranslations("image");

  return (
    <div className="w-full bg-background rounded-lg">
      <div className="p-5 flex flex-col gap-2">
        <Link href="/video">
          <div className="flex items-center gap-2 px-4 py-3 rounded-md bg-linear-to-r from-primary to-primary/70 text-primary-foreground font-semibold">
            <span>
              <Camera />
            </span>
            <span>{tImage("label")}</span>
          </div>
        </Link>
        {dummyCategoryData.map((category, index) => (
          <div key={index}>
            <div className="flex flex-col">
              <div className="flex items-center text-base font-medium justify-between px-2 py-2 text-gray-800 hover:text-primary cursor-pointer">
                <Link href={`/articles?categoryId=${category.id}`}>
                  {category.name}
                </Link>

                {category.subcategories && (
                  <ChevronRight
                    size={16}
                    className={`text-gray-400 transition-transform ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                    onClick={() => toggleCategory(index)}
                  />
                )}
              </div>

              {openIndex === index && category.subcategories && (
                <div className="pl-4 border-l-2 flex flex-col gap-1 text-sm text-gray-600">
                  {category.subcategories.map((sub) => (
                    <Link
                      href={`/articles?categoryId=${category.id}?subcategoryId=${sub.id}`}
                      key={sub.id}
                      className="py-1 text-base hover:text-primary cursor-pointer"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        <Link href={`/articles?type=image`}>
          <div className="flex items-center px-2.5 py-3 font-semibold hover:text-primary">
            <span>{tImage("lastLabel")}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
