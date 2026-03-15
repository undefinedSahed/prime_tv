import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, Timer } from "lucide-react";
import { VideoArticle } from "@/lib/api";
import { useLocale } from "next-intl";
import { formatRelativeTime } from "@/utils/date-formatter";

interface VideoCardProps {
  video: VideoArticle;
  variant?: "default" | "small" | "featured";
}

const getYouTubeID = (url: string) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export default function VideoCard({
  video,
  variant = "default",
}: VideoCardProps) {
  const videoId = getYouTubeID(video.youtubeUrl);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const isFeatured = variant === "featured";

  const currentLocale = useLocale();

  return (
    <Link href={`/video/${video.slug}`} className="group block w-full">
      <div
        className={`flex flex-col ${isFeatured ? "gap-4" : variant === "small" ? "gap-2" : "gap-3"}`}
      >
        <div
          className={`relative aspect-video w-full overflow-hidden rounded-2xl shadow-sm border border-gray-100 ${isFeatured ? "ring-1 ring-gray-100 shadow-md" : ""}`}
        >
          <Image
            src={thumbnail}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={
              isFeatured
                ? "(max-width: 1024px) 100vw, 800px"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            }
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`flex items-center justify-center rounded-full bg-white/90 shadow-xl transition-all duration-300 group-hover:bg-white group-hover:scale-110 ${variant === "small" ? "h-10 w-10" : isFeatured ? "h-16 w-16" : "h-12 w-12"}`}
            >
              <Play
                className={`fill-primary text-primary ${variant === "small" ? "h-5 w-5 ml-0.5" : isFeatured ? "h-8 w-8 ml-1.5" : "h-6 w-6 ml-1"}`}
              />
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col gap-1.5 ${isFeatured ? "px-0" : "px-1"}`}
        >
          <div className="flex items-center gap-1.5 opacity-80 mb-0.5">
            <Timer className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {formatRelativeTime(video.createdAt, currentLocale)}
            </span>
          </div>

          <h3
            className={`font-bold leading-[1.3] text-gray-900 transition-colors duration-200 group-hover:text-primary ${isFeatured ? "text-lg lg:text-2xl" : variant === "small" ? "text-base" : "text-lg md:text-xl"}`}
          >
            {video.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
