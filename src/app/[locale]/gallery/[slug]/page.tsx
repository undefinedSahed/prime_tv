import ImageCard from "@/components/gallery/related-image";
import SocialShare from "@/components/shared/social-share";
import { getRelatedImages, getSingleImage, imageArticle } from "@/lib/api";
import { formatRelativeTime } from "@/utils/date-formatter";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

export default async function GalleryDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const param = await params;
  const decodedSlug = decodeURIComponent(param.slug);

  const gallery = await getSingleImage(decodedSlug);
  const currentLocale = await getLocale();

  const relatedImages = await getRelatedImages(gallery?.id as number);

  const t = await getTranslations("gallery");

  return (
    <div className="grid grid-cols-3 lg:gap-6 gap-3 items-start">
      <div className="lg:space-y-3 space-y-2 lg:col-span-2 col-span-3">
        <h2 className="text-base md:text-xl lg:text-2xl">{gallery?.title}</h2>
        <p>
          Published:{" "}
          {formatRelativeTime(gallery?.createdAt as string, currentLocale)}
        </p>
        <SocialShare title={gallery?.title as string} />
        <div className="p-3 bg-background rounded-md space-y-3 lg:space-y-6">
          {gallery?.images.map(
            (
              image: { id: number; url: string; caption: string },
              index: number,
            ) => (
              <div key={index} className="space-y-2">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="rounded-md"
                />
                <h3 className="text-sm md:text-base lg:text-lg">
                  {image.caption}
                </h3>
              </div>
            ),
          )}
        </div>
      </div>

      {/* Related Gallery Part */}
      <div className="lg:col-span-1 col-span-3 bg-background rounded-md p-3 no-print">
        <div className="flex items-center gap-3 border-l-4 border-primary pl-3 m-4">
          <h2 className="text-xl font-bold text-gray-900">{t("more")}</h2>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {relatedImages?.map((image: imageArticle) => (
            <ImageCard key={image.id} item={image} />
          ))}
        </div>
      </div>
    </div>
  );
}
