import React from "react";
import MainArticle from "./main-article";
import ArticleSidebar from "./article-sidebar";
import { Article } from "@/lib/types";

export default async function ArticleTop({
  threeArticles,
}: {
  threeArticles: Article[];
}) {
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
