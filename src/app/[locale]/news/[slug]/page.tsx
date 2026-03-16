import { getRelatedArticles, getSingleArticle } from "@/lib/api";
import { Article } from "@/lib/types";
import React from "react";
import NewsDetails from "@/components/news/news-details";
import { getTranslations } from "next-intl/server";
import RelatedNewsCard from "@/components/news/related-news-card";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const { data: article }: { data: Article } = await getSingleArticle(slug);

  const tArticle = await getTranslations("article");
  const relatedArticles = await getRelatedArticles();

  if (!article) return <div>Article not found</div>;

  return (
    <div className="grid grid-cols-3 lg:gap-6 gap-3">
      {/* News Details Part */}
      <div className="lg:col-span-2 col-span-3">
        <NewsDetails article={article} />
      </div>

      {/* Related Articles Part */}
      <div className="lg:col-span-1 col-span-3 bg-background rounded-md p-3 no-print">
        <div className="flex items-center gap-3 border-l-4 border-primary pl-3 m-4">
          <h2 className="text-xl font-bold text-gray-900">
            {tArticle("relatedArticle")}
          </h2>
        </div>
        <div>
          {relatedArticles.map((article: Article) => (
            <RelatedNewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}