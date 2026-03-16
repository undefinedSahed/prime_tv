import HorizontalArticleCard from "@/components/category/horizontal-article-card";
import { getAllcategories, getArticles } from "@/lib/api";
import { Article, Category } from "@/lib/types";
import React from "react";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;

  const decodedSlug = decodeURIComponent(slug);

  const { data: categories } = await getAllcategories();

  const category = categories.find(
    (category: Category) => category.slug === decodedSlug,
  );
  const { data: articles } = await getArticles({ categoryId: category?.id });

  return (
    <div className="">
      <h2 className="lg:text-2xl text-xl font-bold">{category?.titleBn}</h2>
      {articles.map((article: Article) => (
        <HorizontalArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
