"use client";

import { TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Trending() {
  const tArticle = useTranslations("article");
  const [isHovering, setIsHovering] = React.useState(false);

  const trendingData = [
    { id: 1, tag: "জামায়াত" },
    { id: 2, tag: "ফ্যামিলি কার্ড" },
    { id: 3, tag: "ইরান" },
    { id: 4, tag: "যুক্তরাষ্ট্র" },
    { id: 5, tag: "বাংলাদেশ রাজনীতি" },
    { id: 6, tag: "মধ্যপ্রাচ্য সংকট" },
    { id: 7, tag: "ঢাকা" },
    { id: 8, tag: "নির্বাচন" },
    { id: 9, tag: "অর্থনীতি" },
    { id: 10, tag: "জ্বালানি সংকট" },
    { id: 11, tag: "বিশ্ব রাজনীতি" },
    { id: 12, tag: "ছাত্র আন্দোলন" },
  ];

  const duplicatedData = [...trendingData, ...trendingData];

  return (
    <div className="p-3 bg-background rounded-md flex flex-col gap-2">
      <div className="flex justify-center bg-primary py-1 rounded-md text-primary-foreground items-center gap-2">
        <TrendingUp />
        <h2 className="text-center text-base font-semibold">
          {tArticle("trending")}
        </h2>
      </div>

      <div
        className="overflow-hidden whitespace-nowrap mask-fade"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          className="flex gap-3 w-max"
          animate={{
            x: isHovering ? "0%" : ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: isHovering ? 0 : Infinity,
          }}
          style={{ display: "flex" }}
        >
          {duplicatedData.map((data, index) => (
            <Link
              href={`/articles?topics=${data.tag}`}
              key={`${data.id}-${index}`}
              className="text-sm font-semibold text-primary-foreground shrink-0 bg-primary p-1 rounded-md"
            >
              {data.tag}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
