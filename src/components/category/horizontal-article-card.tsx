import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/types";

interface HorizontalArticleCardProps {
  article: Article;
}

export default function HorizontalArticleCard({ article }: HorizontalArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block w-full border-b border-gray-100 py-3 last:border-0"
    >
      <div className="flex flex-col md:flex-row gap-5 lg:gap-8 items-start">

        {/* Image Container */}
        <div className="relative w-full md:w-[280px] lg:w-[320px] aspect-video md:aspect-16/10 shrink-0 overflow-hidden rounded-lg">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <span className="text-orange-700 text-sm font-bold">
            ১৫ মিনিট আগে
          </span>

          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h2>

          <div
            dangerouslySetInnerHTML={{ __html: article.details }}
            className="line-clamp-3 lg:text-lg text-sm font-normal text-muted-foreground"
          />
        </div>
      </div>
    </Link>
  );
}