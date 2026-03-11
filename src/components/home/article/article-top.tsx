import React from "react";
import MainArticle from "./main-article";
import ArticleSidebar from "./article-sidebar";
import { getArticles } from "@/lib/api";

export default async function ArticleTop() {
  const { data: threeArticles } = await getArticles({
    page: 1,
    limit: 3,
  });

  return (
    <div className="grid lg:grid-cols-12 gap-10">
      <div className="col-span-9">
        <MainArticle mainArticles={threeArticles} />
      </div>
      <div className="col-span-3">
        <ArticleSidebar />
      </div>
    </div>
  );
}
