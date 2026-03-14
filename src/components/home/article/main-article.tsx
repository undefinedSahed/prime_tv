import { Article } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { formatDistanceToNow } from "date-fns";
import { Timer } from "lucide-react";
import { bn } from "date-fns/locale";
import Link from "next/link";

export default function MainArticle({
  mainArticles,
}: {
  mainArticles: Article[];
}) {
  const firstArticle = mainArticles[0];

  return (
    <div className="grid lg:grid-cols-7 lg:gap-4 gap-2 items-stretch">
      {/* First Article */}
      <Link
        href={`/article/${firstArticle.slug}`}
        className="lg:col-span-5 col-span-7 bg-background p-3 rounded-lg lg:space-y-3"
      >
        <Image
          src={firstArticle.coverImage}
          alt={firstArticle.title}
          height={1000}
          width={1000}
          className="w-full aspect-5/3 object-cover rounded-lg"
        />
        <div className="flex items-center gap-1">
          <Timer className="text-primary" />
          <div className="text-primary">
            <h5 className="text-primary">
              {formatDistanceToNow(new Date(firstArticle.createdAt), {
                addSuffix: true,
                locale: navigator.language.startsWith("bn") ? bn : undefined,
              })}
            </h5>
          </div>
        </div>
        <h2 className="lg:text-xl font-semibold">{firstArticle.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: firstArticle.details }}
          className="line-clamp-2 text-sm font-normal text-muted-foreground"
        />
      </Link>

      {/* Rest of the articles */}
      <div className="lg:col-span-2 col-span-7">
        <div className="flex flex-col gap-4">
          {mainArticles.slice(1).map((article) => (
            <Link
              href={`/article/${article.slug}`}
              key={article.id}
              className="p-3 bg-background rounded-md lg:space-y-2"
            >
              <Image
                src={article.coverImage}
                alt={article.title}
                height={1000}
                width={1000}
                className="w-full aspect-5/3 rounded-md object-cover"
              />
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
              <h2 className="lg:text-base font-semibold">{article.title}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: article.details }}
                className="line-clamp-2 text-xs font-normal text-muted-foreground"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
