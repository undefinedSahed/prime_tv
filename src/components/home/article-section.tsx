import React from "react";
import ArticleTop from "./article/article-top";
import { useTranslations } from "next-intl";
import SecondArticleSection from "./article/second-article-section";
import SpecialArticle from "./article/special-article";

export default function ArticleSection() {
  const tArticle = useTranslations("article");

  return (
    <section className="lg:pb-5. pt-0">
      <h1 className="lg:text-3xl font-bold lg:pb-3">{tArticle("headline")}</h1>
      <ArticleTop />
      <SecondArticleSection />
      <SpecialArticle />
    </section>
  );
}
