"use client";

import React, { useState } from "react";
import { getGallery } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Loader2, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Gallery } from "@/lib/types";
import GalleryCard from "./gallery-card";

interface GalleryListProps {
  initialGallery: Gallery[];
  initialMeta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export default function GalleryList({
  initialGallery,
  initialMeta,
}: GalleryListProps) {
  const t = useTranslations("recent");

  const featuredGallery = initialGallery[0];
  const initialsGalleryImages = initialGallery.slice(1);

  const [gridGallery, setGridGallery] = useState<Gallery[]>(
    initialsGalleryImages,
  );
  const [page, setPage] = useState(initialMeta.page);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(
    initialMeta.page < initialMeta.totalPages,
  );

  const handleLoadMore = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const nextPage = page + 1;

    try {
      const response = await getGallery({
        page: nextPage,
        limit: initialMeta.limit,
      });
      const newVideos = response?.data || [];

      setGridGallery((prev) => [...prev, ...newVideos]);
      setPage(nextPage);
      setHasMore(nextPage < response.meta.totalPages);
    } catch (error) {
      console.error("Failed to load more videos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      {featuredGallery && (
        <div className="w-full bg-background p-3 rounded-xl">
          <GalleryCard showdescription gallery={featuredGallery} variant="featured" />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">

        {gridGallery.map((gallery) => (
          <GalleryCard key={gallery.id} gallery={gallery} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <Button
            onClick={handleLoadMore}
            disabled={loading}
            variant="outline"
            className="group px-8 rounded-full bg-[#fde190] hover:bg-[#fbd360] border-none text-gray-900 font-bold text-lg transition-all active:scale-95 shadow-md"
          >
            {loading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <ChevronDown className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
            )}
            {t("loadMore") || "আরও ভিডিও দেখুন"}
          </Button>
        </div>
      )}
    </div>
  );
}
