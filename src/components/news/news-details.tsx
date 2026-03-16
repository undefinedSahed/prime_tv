import { Article } from "@/lib/types";
import Image from "next/image";
import React from "react";
import SocialShare from "../shared/social-share";

export default function NewsDetails({ article }: { article: Article }) {
  return (
    <div className="w-full">
      {/* print header - Added flex and items-center for vertical alignment */}
      <div className="hidden print:flex print-header items-center justify-between border-b-2 border-red-600 pb-2 mb-3">
        <div className="flex items-center">
          <Image
            width={200}
            height={200}
            src="/images/logo.png"
            alt="Prime Tv"
            className="w-16 h-16 object-contain"
          />
        </div>
        {/* Added flex-col and justify-center to align text perfectly with logo center */}
        <div className="text-right text-xs text-gray-500 flex flex-col justify-center">
          <p>Published: {new Date(article.date).toLocaleDateString("bn-BD")}</p>
          <p>Category: {article.category.titleBn}</p>
        </div>
      </div>

      <div id="article-content" className="px-4 py-8 bg-background rounded-md">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-6">
          {article.title}
        </h1>

        <div className="flex flex-col gap-2 border-b border-gray-100 pb-4 mb-6">
          <div className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
            <span className="font-semibold text-primary">
              {article.author.nameBn}
            </span>
            <span>|</span>
            <span>{article.category.titleBn}</span>
          </div>
          <div className="text-gray-500 text-sm">
            Published:{" "}
            {new Date(article.date).toLocaleDateString("bn-BD", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            ,{" "}
            {new Date(article.date).toLocaleTimeString("bn-BD", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>

        {/* Removed print:h-75 and used relative container with aspect ratio for better print support */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 print:max-h-87.5">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="text-sm text-gray-500 mb-6">
          {article.category.titleBn} | {article.author.nameBn}
        </p>

        <div className="print:hidden">
          <SocialShare title={article.title} />
        </div>

        <article
          className="prose article-body text-lg prose-lg max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.details }}
        />
      </div>
    </div>
  );
}
