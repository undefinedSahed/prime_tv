import { ArrowRight, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Article, Category } from "@/lib/types";
import { getArticles } from "@/lib/api";
import { formatDistanceToNow } from "date-fns";
import { bn } from "date-fns/locale";

export default async function CategorySection({
  category,
  moreText,
}: {
  category: Category;
  moreText: string;
}) {
  // Fetching first 4 articles for this category
  const response = await getArticles({
    categoryId: category.id,
    limit: 4,
    status: "Published",
  });

  const articles: Article[] = response.data || [];
  const featuredArticle = articles[0];
  const listArticles = articles.slice(1);

  return (
    <div className="flex flex-col bg-background p-3 rounded-md">
      {/* Header */}
      <div className="flex justify-between items-baseline border-b border-gray-300 pb-2 mb-4">
        <div className="flex items-center gap-3 border-l-4 border-primary pl-3">
          <h2 className="text-2xl font-bold text-gray-900">
            {category.titleBn || category.title}
          </h2>
        </div>
        <Link
          href={`/article?categoryId=${category.id}`}
          className="flex items-center gap-1 text-orange-800 hover:text-primary transition-colors"
        >
          <span className="text-sm font-bold">{moreText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <div className="group cursor-pointer">
          <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl mb-3">
            <Image
              src={featuredArticle.coverImage}
              alt={featuredArticle.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex items-center gap-1 pb-2">
            <Timer className="text-primary h-3 w-3" />
            <div className="text-primary">
              <h5 className="text-primary text-xs">
                {formatDistanceToNow(new Date(featuredArticle.createdAt), {
                  addSuffix: true,
                  locale: navigator.language.startsWith("bn") ? bn : undefined,
                })}
              </h5>
            </div>
          </div>
          <Link href={`/article/${featuredArticle.slug}`}>
            <h3 className="text-base font-medium leading-snug text-gray-900 group-hover:underline transition-colors line-clamp-2">
              {featuredArticle.title}
            </h3>
          </Link>
        </div>
      )}

      {/* List Articles */}
      <div className="mt-4">
        {listArticles.map((article) => (
          <div key={article.id} className="border-t border-gray-200 py-3 group">
            <div className="flex items-center gap-1">
              <Timer className="text-primary h-3 w-3" />
              <div className="text-primary">
                <h5 className="text-primary text-xs">
                  {formatDistanceToNow(new Date(article.createdAt), {
                    addSuffix: true,
                    locale: navigator.language.startsWith("bn")
                      ? bn
                      : undefined,
                  })}
                </h5>
              </div>
            </div>
            <Link href={`/article/${article.slug}`}>
              <h4 className="text-base font-medium leading-relaxed text-gray-800 group-hover:underline transition-colors line-clamp-2">
                {article.title}
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
