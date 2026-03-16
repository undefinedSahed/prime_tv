"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Printer,
  Share2,
} from "lucide-react";
import { Button } from "../ui/button";

interface SocialShareProps {
  title: string;
}

const SocialShare = ({ title }: SocialShareProps) => {
  const pathname = usePathname();
  const [origin, setOrigin] = useState("");

  // Get the base URL only after the component mounts to avoid hydration mismatch
  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const fullUrl = `${origin}${pathname}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
  };

  const openPopup = (link: string) => {
    window.open(link, "_blank", "width=600,height=400,noopener,noreferrer");
  };

  const handlePrint = () => window.print();

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url: fullUrl });
      } catch (err) {
        console.error("User cancelled or error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(fullUrl);
      alert("Link copied to clipboard!");
    }
  };

  if (!origin) return <div className="h-10.5 mb-8" />;

  return (
    <div className="flex items-center gap-3 mb-8 py-2 border-y border-gray-100">
      {/* Facebook */}
      <Button
        onClick={() => openPopup(shareLinks.facebook)}
        className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
        aria-label="Share on Facebook"
      >
        <Facebook size={20} />
      </Button>

      {/* Twitter / X */}
      <Button
        onClick={() => openPopup(shareLinks.twitter)}
        className="p-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
        aria-label="Share on Twitter"
      >
        <Twitter size={20} />
      </Button>

      {/* LinkedIn */}
      <Button
        onClick={() => openPopup(shareLinks.linkedin)}
        className="p-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={20} />
      </Button>

      {/* WhatsApp */}
      <Button
        onClick={() => openPopup(shareLinks.whatsapp)}
        className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition"
        aria-label="Share on WhatsApp"
      >
        <MessageCircle size={20} />
      </Button>

      {/* Print */}
      <Button
        onClick={handlePrint}
        className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
        aria-label="Print Article"
      >
        <Printer size={20} />
      </Button>

      {/* Native Share / Copy */}
      <Button
        onClick={handleNativeShare}
        className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition ml-auto"
        aria-label="More share options"
      >
        <Share2 size={20} />
      </Button>
    </div>
  );
};

export default SocialShare;
