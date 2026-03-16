import TopicCard from "@/components/topic/topic-card";
import { getArticles } from "@/lib/api";
import { Article } from "@/lib/types";
import React from "react";

export default async function TpoicPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const { data: articles } = await getArticles({ topics: [decodedSlug] });
  console.log("Decoded slug: ", decodedSlug, "Articles: ", articles);

  return (
    <div>
      <h2 className="lg:text-2xl text-xl font-bold">{decodedSlug}</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {articles.map((article: Article) => (
          <TopicCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
