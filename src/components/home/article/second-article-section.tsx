import { Article } from "@/lib/types";
import React from "react";
import SecondArticleCard from "./second-article-card";

export default async function SecondArticleSection({
  secondArticles,
}: {
  secondArticles: Article[];
}) {

  return (
    <section className="rounded-md bg-background grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12 gap-y-6 p-3 lg:my-6">
      {secondArticles.map((article: Article) => (
        <SecondArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
}
