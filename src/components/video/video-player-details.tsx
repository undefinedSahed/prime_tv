import { VideoArticle } from "@/lib/api";
import { formatRelativeTime } from "@/utils/date-formatter";
import { Timer, Share2, Facebook, Link2, MessageCircle, Linkedin } from "lucide-react";
import { useLocale } from "next-intl";

interface VideoPlayerDetailsProps {
  video: VideoArticle;
}

const getYouTubeID = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export default function VideoPlayerDetails({ video }: VideoPlayerDetailsProps) {
  const videoId = getYouTubeID(video.youtubeUrl);

  const currentLocale = useLocale();

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Large Player with premium feel */}
      <div className="relative aspect-video w-full overflow-hidden rounded-md border-0 group">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        ></iframe>
      </div>

      {/* 2. Metadata Area */}
      <div className="flex flex-col gap-5 py-2">
        <div className="flex items-center gap-2 text-primary font-bold">
          <Timer className="h-5 w-5" />
          <span className="text-sm uppercase tracking-wide">
            {formatRelativeTime(video.createdAt, currentLocale)}
          </span>
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-[1.2]">
          {video.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-6 border-y border-gray-100 py-6 mt-2">
          {/* Share Buttons - Matching Screenshot Icons */}
          <div className="flex items-center gap-3">
            <button title="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877f2] text-white hover:scale-110 transition-transform shadow-md">
              <Facebook className="h-5 w-5 fill-current" />
            </button>
            <button title="X" className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white hover:scale-110 transition-transform shadow-md">
              <span className="font-bold text-lg">𝕏</span>
            </button>
            <button title="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0077b5] text-white hover:scale-110 transition-transform shadow-md">
              <Linkedin className="h-5 w-5 fill-current" />
            </button>
            <button title="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25d366] text-white hover:scale-110 transition-transform shadow-md">
              <MessageCircle className="h-5 w-5 fill-current" />
            </button>
            <button title="Copy Link" className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-110 transition-transform shadow-sm">
              <Link2 className="h-5 w-5" />
            </button>
            <button title="More Share" className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-110 transition-transform shadow-sm">
              <Share2 className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400" />
            </div>
            <span className="text-sm font-bold text-gray-600">০ শেয়ার</span>
          </div>
        </div>
      </div>
    </div>
  );
}
