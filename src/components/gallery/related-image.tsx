import React from "react";
import Image from "next/image";
import { imageArticle } from "@/lib/api";
import { formatRelativeTime } from "@/utils/date-formatter";
import { useLocale } from "next-intl";

interface IProps {
  item: imageArticle;
}

export default function ImageCard({ item }: IProps) {
  const displayImage = item.images?.[0]?.url;

  const currentLocale = useLocale();

  return (
    <div className="group cursor-pointer overflow-hidden rounded-2xl bg-[#F8F9FA] p-3 transition-all hover:shadow-md">
      {/* Image Container */}
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl">
        <Image
          src={displayImage}
          alt={item.images?.[0]?.caption || item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="mt-3 space-y-1 px-1">
        <p className="text-sm font-medium text-[#B37B2F]">
          {formatRelativeTime(item.createdAt, currentLocale)}
        </p>
        <h3 className="line-clamp-2 text-xs md:text-base font-semibold text-[#1A1A1A] transition-colors group-hover:text-blue-600">
          {item.title}
        </h3>
      </div>
    </div>
  );
}
