import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/types";
import { Timer } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { bn } from "date-fns/locale";

interface HorizontalArticleCardProps {
  article: Article;
}

export default function HorizontalArticleCard({ article }: HorizontalArticleCardProps) {
  return (
    <Link
      href={`/news/${article.slug}`}
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
          <div className="flex items-center gap-1">
            <Timer className="text-primary h-3 w-3" />
            <div className="text-primary">
              <h5 className="text-primary text-xs">
                {formatDistanceToNow(new Date(article.createdAt), {
                  addSuffix: true,
                  locale: navigator.language.startsWith("bn")
                    ? bn
                    : undefined,
                })}
              </h5>
            </div>
          </div>

          <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors line-clamp-2">
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