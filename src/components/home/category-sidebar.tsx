"use client";

import React, { useState } from "react";
import { Camera, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { getAllcategories } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Category } from "@/lib/types";
import CategorySkeleton from "./skeleton/acategory-skeleton";

export default function CategorySidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const tImage = useTranslations("image");

  const {
    data: categories,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllcategories(),
    select: (data) => data.data,
  });

  if (isLoading) {
    return <CategorySkeleton />;
  }

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
        {categories?.map((category: Category, index: number) => (
          <div key={index}>
            <div className="flex flex-col">
              <div className="flex items-center text-base font-medium justify-between px-2 py-2 text-gray-800 hover:text-primary cursor-pointer">
                <Link href={`/articles?categoryId=${category.id}`}>
                  {category.titleBn}
                </Link>

                {category.subCategories.length > 0 && (
                  <ChevronRight
                    size={16}
                    className={`text-gray-400 transition-transform ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                    onClick={() => toggleCategory(index)}
                  />
                )}
              </div>

              {openIndex === index && category.subCategories.length > 0 && (
                <div className="pl-4 border-l-2 flex flex-col gap-1 text-sm text-gray-600">
                  {category.subCategories.map((sub) => (
                    <Link
                      href={`/articles?categoryId=${category.id}?subcategoryId=${sub.id}`}
                      key={sub.id}
                      className="py-1 text-base hover:text-primary cursor-pointer"
                    >
                      {sub.titleBn}
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
