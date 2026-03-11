import { getArticles } from "@/lib/api";
import { Article } from "@/lib/types";
import React from "react";
import SecondArticleCard from "./second-article-card";

export default async function SecondArticleSection() {
  const { data } = await getArticles({
    page: 1,
    limit: 12,
  });

  const secondArticles = data.slice(3, 12);

  return (
    <section className="rounded-md bg-background grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12 p-3 lg:my-6">
      {secondArticles.map((article: Article) => (
        <SecondArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
}
