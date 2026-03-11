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
