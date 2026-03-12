import { Category } from "@/lib/types";
import { getTranslations } from "next-intl/server";
import React from "react";
import CategorySection from "./articles-by-category";

export default async function CategoryWiseArticles({
  firstFourCategories,
}: {
  firstFourCategories: Category[];
}) {
  const tArticle = await getTranslations("article");

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {firstFourCategories.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            moreText={tArticle("more")}
          />
        ))}
      </div>
    </section>
  );
}
