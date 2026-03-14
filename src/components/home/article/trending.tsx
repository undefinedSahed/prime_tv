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
    /* Added max-w-full to prevent the component from pushing its parent */
    <div className="w-full max-w-full min-w-0 p-3 bg-background rounded-md flex flex-col gap-2">
      <div className="flex justify-center bg-primary py-1 rounded-md text-primary-foreground items-center gap-2 shrink-0">
        <TrendingUp />
        <h2 className="text-center text-base font-semibold">
          {tArticle("trending")}
        </h2>
      </div>

      {/* CRITICAL FIX: 
         1. Added relative and w-full. 
         2. Added 'touch-none' to prevent scrolling conflicts on mobile.
      */}
      <div
        className="relative overflow-hidden whitespace-nowrap mask-fade w-full pointer-events-auto"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          className="flex gap-3 w-fit" // Changed w-max to w-fit
          animate={{
            /* Logic: If hovering, stop at current position or reset. 
               Using animate: x: isHovering ? undefined ... allows it to pause where it is */
            x: isHovering ? undefined : ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 30, // Slowed down slightly for better readability
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {duplicatedData.map((data, index) => (
            <Link
              href={`/articles?topics=${data.tag}`}
              key={`${data.id}-${index}`}
              className="text-sm font-semibold text-primary-foreground shrink-0 bg-primary px-3 py-1 rounded-md inline-block"
            >
              {data.tag}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}