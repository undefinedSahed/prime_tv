import { Article } from "@/lib/types";
import { Facebook, Linkedin, MessageCircle, Printer, Share2, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function NewsDetails({ article }: { article: Article }) {
  return (
    <div className="px-4 py-8 bg-background rounded-md">
      {/* 1. Article Headline */}
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
        {article.title}
      </h1>

      {/* 2. Metadata: Author & Date */}
      <div className="flex flex-col gap-2 border-b border-gray-100 pb-4 mb-6">
        <div className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
          <span className="font-semibold text-primary">{article.author.nameBn}</span>
          <span>|</span>
          <span>{article.category.titleBn}</span>
        </div>
        <div className="text-gray-500 text-sm">
          Published: {new Date(article.date).toLocaleDateString('bn-BD', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}, {new Date(article.date).toLocaleTimeString('bn-BD', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      </div>

      {/* 3. Featured Image */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />
      </div>
      <p className="text-sm text-gray-500 mb-6 italic">
        {article.category.titleBn}, {article.author.nameBn}
      </p>

      {/* 4. Social Sharing Toolbar */}
      <div className="flex items-center gap-3 mb-8 py-2 border-y border-gray-50">
        <button className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
          <Facebook size={20} />
        </button>
        <button className="p-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition">
          <Twitter size={20} />
        </button>
        <button className="p-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition">
          <Linkedin size={20} />
        </button>
        <button className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition">
          <MessageCircle size={20} />
        </button>
        <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
          <Printer size={20} />
        </button>
        <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition ml-auto">
          <Share2 size={20} />
        </button>
      </div>

      {/* 5. Article Content (Rich Text) */}
      <article
        className="prose text-lg prose-lg max-w-none text-gray-800 leading-relaxed
          prose-headings:font-bold prose-p:mb-4 prose-strong:text-black"
        dangerouslySetInnerHTML={{ __html: article.details }}
      />
    </div>
  )
}
