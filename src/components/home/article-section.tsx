import React from "react";
import ArticleTop from "./article/article-top";
import SecondArticleSection from "./article/second-article-section";
import SpecialArticle from "./article/special-article";
import { getTranslations } from "next-intl/server";
import { getAllcategories, getArticles, getImages, getVideos } from "@/lib/api";
import CategoryWiseArticles from "./article/caregory-wise-article";
import VideoAndImage from "./article/video-image";

export default async function ArticleSection() {
  const tArticle = await getTranslations("article");

  // Get top three articles
  const { data: topThreeArticles } = await getArticles({ page: 1, limit: 3 });

  // Get articles for second section
  const { data: retriveTwelveArticles } = await getArticles({
    page: 1,
    limit: 12,
  });
  const secondArticles = retriveTwelveArticles.slice(3, 12);

  // Get special articles
  const { data: specialArticles } = await getArticles({ isExclusive: true });

  // Get categories
  const { data: firstFourCategories } = await getAllcategories({
    page: 1,
    limit: 4,
  });

  const { data: lastFourCategories } = await getAllcategories({
    page: 2,
    limit: 4,
  });

  // Get all videos
  const videoAticles = await getVideos();

  // Get all images
  const imageArticles = await getImages();

  return (
    <section className="lg:pb-5. pt-0">
      <h1 className="lg:text-3xl font-bold lg:pb-3">{tArticle("headline")}</h1>
      <ArticleTop threeArticles={topThreeArticles} />
      <SecondArticleSection secondArticles={secondArticles} />
      <SpecialArticle specialArticles={specialArticles} />
      <CategoryWiseArticles fourCategories={firstFourCategories} />
      <VideoAndImage
        videoArticles={videoAticles.slice(0, 4)}
        imageArticles={imageArticles.slice(0, 4)}
      />
      <CategoryWiseArticles fourCategories={lastFourCategories} />
    </section>
  );
}
