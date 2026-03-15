"use client";

import React, { useState } from "react";
import { Article } from "@/lib/types";
import { getArticles } from "@/lib/api";
import HorizontalArticleCard from "@/components/category/horizontal-article-card";
import { Button } from "@/components/ui/button";
import { Loader2, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

interface RecentResultsListProps {
  initialArticles: Article[];
}

export default function RecentResultsList({ initialArticles }: RecentResultsListProps) {
  const t = useTranslations("recent");
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialArticles.length === 10); // Assume limit 10

  const handleLoadMore = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const nextPage = page + 1;
    
    try {
      const response = await getArticles({ page: nextPage, limit: 10 });
      const newArticles = response?.data || [];
      
      if (newArticles.length < 10) {
        setHasMore(false);
      }
      
      setArticles((prev) => [...prev, ...newArticles]);
      setPage(nextPage);
    } catch (error) {
      console.error("Failed to load more articles:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="divide-y divide-gray-100">
        {articles.length > 0 ? (
          articles.map((article: Article) => (
            <div key={article.id} className="">
              <HorizontalArticleCard article={article} />
            </div>
          ))
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500">{t("noArticles") || "কোনো সংবাদ পাওয়া যায়নি"}</p>
          </div>
        )}
      </div>

      {hasMore && (
        <div className="py-8 flex justify-center border-t border-gray-100 bg-gray-50/50">
          <Button
            onClick={handleLoadMore}
            disabled={loading}
            variant="outline"
            className="group h-12 px-8 rounded-full bg-[#fde190] hover:bg-[#fbd360] border-none text-gray-900 font-bold text-lg transition-all active:scale-95 shadow-sm"
          >
            {loading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <ChevronDown className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
            )}
            {t("loadMore") || "আরও সংবাদ দেখুন"}
          </Button>
        </div>
      )}
    </div>
  );
}
