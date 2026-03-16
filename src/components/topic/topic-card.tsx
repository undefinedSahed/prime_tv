import { Article } from "@/lib/types";
import { formatRelativeTime } from "@/utils/date-formatter";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsCardProps {
  article: Article;
}

export default async function TopicCard({ article }: NewsCardProps) {
  const currentLocale = await getLocale();
  return (
    <Link href={`/news/${article.slug}`} className="group cursor-pointer">
      <div className="relative aspect-16/10 overflow-hidden rounded-2xl mb-3">
        <Image 
          src={article.coverImage}
          alt={article.title}
          priority
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#F6A623] rounded-tl-2xl flex items-center justify-center">
          <div className="text-white font-bold text-lg drop-shadow-sm">প্র</div>
        </div>
      </div>

      <div className="space-y-1 px-1">
        <p className="text-[#A37B2E] text-sm md:text-base font-medium">
          {formatRelativeTime(article.createdAt, currentLocale)}
        </p>

        <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-red-600 transition-colors">
          {article.title}
        </h3>

        <div
          dangerouslySetInnerHTML={{ __html: article.details }}
          className="line-clamp-2 text-sm font-normal text-muted-foreground"
        />
      </div>
    </Link>
  );
}
