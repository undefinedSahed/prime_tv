import { imageArticle, videoArticles } from "@/lib/api";
import Link from "next/link";
import React from "react";
import VideoArticleCard from "./video-article-card";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import ImageGalleryCard from "./image-article-card";

export default function VideoAndImage({
  videoArticles,
  imageArticles,
}: {
  videoArticles: videoArticles[];
  imageArticles: imageArticle[];
}) {
  const tArticle = useTranslations("article");

  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Video part */}
        <div className="w-full">
          <div className="flex justify-between items-center border-l-4 border-primary pl-3 my-3">
            <h2 className="text-2xl font-bold text-gray-800">
              {tArticle("video")}
            </h2>
            <Link
              href="/pricing"
              className="flex items-center gap-1 text-primary cursor-pointer hover:underline"
            >
              <span className="text-sm font-medium">{tArticle("more")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 bg-background p-3 rounded-md">
            {videoArticles.map((video: videoArticles) => (
              <VideoArticleCard key={video.id} article={video} />
            ))}
          </div>
        </div>

        {/* Image Part */}
        <div className="w-full">
          <div className="flex justify-between items-center border-l-4 border-primary pl-3 my-3">
            <h2 className="text-2xl font-bold text-gray-800">
              {tArticle("image")}
            </h2>
            <Link
              href="/pricing"
              className="flex items-center gap-1 text-primary cursor-pointer hover:underline"
            >
              <span className="text-sm font-medium">{tArticle("more")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 bg-background p-3 rounded-md">
            {imageArticles.map((imageArticle: imageArticle) => (
              <ImageGalleryCard key={imageArticle.id} article={imageArticle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
