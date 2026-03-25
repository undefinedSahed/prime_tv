import { Article } from "@/lib/types";
import { Timer } from "lucide-react";

import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { formatRelativeTime } from "@/utils/date-formatter";

export default function SecondArticleCard({ article }: { article: Article }) {

  const currentLocale = useLocale();

  return (
    <Link href={`/news/${article.slug}`} className="group">
      <div className="grid md:grid-cols-5 items-center md:gap-3">
        <div className="md:col-span-2">
          <img 
            src={article.coverImage}
            alt={article.title}
            height={400}
            width={200}
            className="w-full aspect-auto object-cover rounded-md"
          />
        </div>
        <div className="md:col-span-3">
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-1">
              <Timer className="text-primary h-3 w-3" />
              <div className="text-primary">
                <h5 className="text-primary lg:text-sm text-xs">
                  {formatRelativeTime(article.createdAt, currentLocale)}
                </h5>
              </div>
            </div>
            <h5 className="text-xs lg:text-sm relative before:absolute before:top-1/2 before:-left-3 before:-translate-y-1/2 before:rounded-full before:h-2 before:w-2 before:bg-primary">{article.category.title}</h5>
          </div>
          <h3 className="lg:text-base text-xs font-semibold group-hover:underline">
            {article.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
