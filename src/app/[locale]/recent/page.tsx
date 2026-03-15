import React from "react";
import { getArticles } from "@/lib/api";
import { getTranslations } from "next-intl/server";
import RecentResultsList from "@/components/news/recent-results-list";

export default async function RecentPage() {
  const t = await getTranslations("recent");

  // Fetch initial page
  const initialData = await getArticles({ page: 1, limit: 10 });
  const articles = initialData?.data || [];

  return (
    <div className="">
      <div className="pb-4">
        <div className="flex items-center gap-3 border-l-4 border-primary pl-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            {t("title")}
          </h1>
        </div>
      </div>

      <div className="bg-background px-3 rounded-md overflow-hidden">
        <RecentResultsList initialArticles={articles} />
      </div>
    </div>
  );
}
