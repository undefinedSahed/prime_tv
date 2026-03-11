import { Article } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { formatDistanceToNow } from "date-fns";
import { Watch } from "lucide-react";
import { bn } from "date-fns/locale";

export default function MainArticle({
  mainArticles,
}: {
  mainArticles: Article[];
}) {
  const firstArticle = mainArticles[0];

  return (
    <div className="grid lg:grid-cols-7 gap-6">
      {/* First Article */}
      <div className="col-span-5 border bg-background p-3 rounded-lg lg:space-y-3">
        <Image
          src={firstArticle.coverImage}
          alt={firstArticle.title}
          height={1000}
          width={1000}
          className="w-full aspect-5/3 object-cover rounded-lg"
        />
        <div className="flex items-center gap-1">
          <Watch className="text-primary" />
          <div className="text-primary">
            <h5 className="text-primary">
              {formatDistanceToNow(new Date(firstArticle.createdAt), {
                addSuffix: true,
                locale: navigator.language.startsWith("bn") ? bn : undefined,
              })}
            </h5>
          </div>
        </div>
        <h2 className="lg:text-lg font-semibold">{firstArticle.title}</h2>
      </div>
      <div className="col-span-2 border"></div>
    </div>
  );
}
