export interface Category {
  id: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  title: string;
  titleBn: string;
  slug: string;
  slugBn: string;
  article: number;
  position: number | null;
  subCategories: Category[];
}

export interface ArticleQueryParams {
  page?: number;
  limit?: number;
  searchTerm?: string;
  isActive?: boolean;
  isExclusive?: boolean;
  isFeatured?: boolean;
  categoryId?: string; // category uuid
  subCategoryId?: string; // category uuid
  authorId?: string; // author uuid
  type?: "news" | "poll" | "series" | "stories";
  status?: "Drafted" | "Published" | "Archived";
  topics?: string[];
}

export interface Author {
  id: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  name: string;
  nameBn: string;
  image: string;
  designation: string;
  article: number;
  designationBn: string;
}

export interface Article {
  id: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  title: string;
  code: string;
  slug: string;
  type: string;
  position: number | null;
  coverImage: string;
  excerpt: string;
  details: string;
  language: "English" | "Bengali" | string;
  status: "Published" | "Drafted" | "Archived";
  date: string;
  isExclusive: boolean;
  isFeatured: boolean;
  authorId: string;
  categoryId: string;
  tags: string[];
  author: Author;
  category: Category;
}

export interface CategoryQueryParam {
  page?: number;
  limit?: number;
  searchTerm?: string;
  isActive?: boolean;
}

export interface MarketPrice {
  title: string;
  titleBn: string;
  priceRange: string;
  coverImage: string;
}

export interface Gallery {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  description: string;
  images: {
    title: string;
    url: string;
  }[];
}
