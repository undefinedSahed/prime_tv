import axios from "axios";
import { ArticleQueryParams, CategoryQueryParam } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  paramsSerializer: {
    indexes: null,
  },
  proxy: false,
});

export interface VideoArticle {
  id: number;
  title: string;
  youtubeUrl: string;
  slug: string;
  createdAt: string;
  views?: string;
}

export interface imageArticle {
  id: number;
  title: string;
  images: {
    id: number;
    url: string;
    caption: string;
  }[];
}

const videoArticles: VideoArticle[] = [
  {
    id: 1,
    slug: "sylhet-forest-operation",
    title:
      "সিলেটপুরের জঙ্গলে যৌথ বাহিনীর অভিযান: এলাকার জীবন ও অভিযানের গল্প উন্মোচন",
    youtubeUrl: "https://www.youtube.com/watch?v=ZNts0qvgnik",
    createdAt: "2024-03-10T10:00:00Z",
  },
  {
    id: 2,
    slug: "iran-usa-conflict-oil-market",
    title:
      "ইরান ও যুক্তরাষ্ট্র–ইসরাইল সংঘাত: তেলের বাজারে চাপ, বিশ্বে পণ্যমূল্য",
    youtubeUrl: "https://www.youtube.com/watch?v=IZ-zSEoVUGg",
    createdAt: "2024-03-11T12:00:00Z",
  },
  {
    id: 3,
    slug: "middle-east-war-gainers",
    title: "মধ্যপ্রাচ্য যুদ্ধে সবচেয়ে বেশি লাভ কার? বিশ্বরাজনীতির নতুন সমীকরণ",
    youtubeUrl: "https://www.youtube.com/watch?v=xYLeX0EmuGQ",
    createdAt: "2024-03-12T14:00:00Z",
  },
  {
    id: 4,
    slug: "middle-east-situation-import-export",
    title:
      "মধ্যপ্রাচ্য পরিস্থিতি: সংকটে দেশের আমদানি-রপ্তানি, বাড়ছে শিপিং খরচ",
    youtubeUrl: "https://www.youtube.com/watch?v=DtdddxVkyp4",
    createdAt: "2024-03-13T16:00:00Z",
  },
  {
    id: 5,
    slug: "eid-ticket-travel-agency",
    title: "ঈদ সামনে রেখে মহাব্যস্ত দেশের ট্রাভেল এজেন্সিগুলো",
    youtubeUrl: "https://www.youtube.com/watch?v=ZNts0qvgnik",
    createdAt: "2024-03-14T08:00:00Z",
  },
  {
    id: 6,
    slug: "salimpur-forest-operation",
    title:
      "সলিমপুরের জঙ্গলে যৌথ বাহিনীর অভিযান: এলাকার জীবন ও অধিপত্যের গল্প উন্মোচন",
    youtubeUrl: "https://www.youtube.com/watch?v=IZ-zSEoVUGg",
    createdAt: "2024-03-14T10:00:00Z",
  },
  {
    id: 7,
    slug: "global-oil-market-pressure",
    title: "ভয়ঙ্কর চাপে বৈশ্বিক তেলের বাজার",
    youtubeUrl: "https://www.youtube.com/watch?v=xYLeX0EmuGQ",
    createdAt: "2024-03-14T12:00:00Z",
  },
  {
    id: 8,
    slug: "russia-oil-price-record",
    title:
      "বিশ্ববাজারে তেলের দামের রেকর্ড বৃদ্ধি: রাশিয়ার ওপর থেকে নিষেধাজ্ঞা সরাচ্ছে যুক্তরাষ্ট্র",
    youtubeUrl: "https://www.youtube.com/watch?v=DtdddxVkyp4",
    createdAt: "2024-03-14T14:00:00Z",
  },
  {
    id: 9,
    slug: "middle-east-export-container",
    title: "আটকে গেছে মধ্যপ্রাচ্যগামী রপ্তানি কনটেইনার",
    youtubeUrl: "https://www.youtube.com/watch?v=ZNts0qvgnik",
    createdAt: "2024-03-14T16:00:00Z",
  },
  {
    id: 10,
    slug: "women-freedom-empowerment",
    title:
      "সামাজিক চিন্তায় নিজেদের স্বাধীনতার বাধা, স্বতন্ত্রতা ও আত্মবিশ্বাসই দিতে পারে নারীর মুক্তি",
    youtubeUrl: "https://www.youtube.com/watch?v=IZ-zSEoVUGg",
    createdAt: "2024-03-14T18:00:00Z",
  },
  {
    id: 11,
    slug: "another-video-1",
    title: "সাম্প্রতিক ঘটনার বিশ্লেষণ এবং আগামী দিনের চ্যালেঞ্জ",
    youtubeUrl: "https://www.youtube.com/watch?v=xYLeX0EmuGQ",
    createdAt: "2024-03-15T08:00:00Z",
  },
  {
    id: 12,
    slug: "another-video-2",
    title: "বিশ্ব অর্থনীতির বর্তমান গতিবিধি ও বাংলাদেশের প্রেক্ষাপট",
    youtubeUrl: "https://www.youtube.com/watch?v=DtdddxVkyp4",
    createdAt: "2024-03-15T10:00:00Z",
  },
];

export const imageArticles: imageArticle[] = [
  {
    id: 1,
    title: "মধ্যপ্রাচ্যের উত্তেজনায় বিশ্ববাজারে তেলের দামের প্রভাব",
    images: [
      {
        id: 1,
        url: "/images/image-article1.jpg",
        caption: "বন্দরে নোঙর করা তেলবাহী ট্যাংকার",
      },
      {
        id: 2,
        url: "/images/image-article1.jpg",
        caption: "আন্তর্জাতিক বাণিজ্যে ব্যবহৃত তেলবাহী জাহাজ",
      },
      {
        id: 3,
        url: "/images/image-article1.jpg",
        caption: "সমুদ্রে চলমান কার্গো জাহাজ",
      },
    ],
  },
  {
    id: 2,
    title: "বন্দর এলাকায় বাড়ছে কনটেইনার জাহাজের চাপ",
    images: [
      {
        id: 1,
        url: "/images/image-article1.jpg",
        caption: "কনটেইনার বন্দরে জাহাজ লোডিং কার্যক্রম",
      },
      {
        id: 2,
        url: "/images/image-article1.jpg",
        caption: "বন্দর এলাকায় কনটেইনার ক্রেন",
      },
      {
        id: 3,
        url: "/images/image-article1.jpg",
        caption: "তেলবাহী ট্যাংকার জাহাজ",
      },
    ],
  },
  {
    id: 3,
    title: "সমুদ্রপথে বাণিজ্য: বৈশ্বিক সরবরাহ ব্যবস্থার নতুন চ্যালেঞ্জ",
    images: [
      {
        id: 1,
        url: "/images/image-article1.jpg",
        caption: "সমুদ্রে চলমান বড় তেলবাহী জাহাজ",
      },
      {
        id: 2,
        url: "/images/image-article1.jpg",
        caption: "বন্দরে নোঙর করা জাহাজ",
      },
      {
        id: 3,
        url: "/images/image-article1.jpg",
        caption: "তেল পরিবহনে ব্যবহৃত ট্যাংকার",
      },
    ],
  },
  {
    id: 4,
    title: "সমুদ্রপথে বাণিজ্য: বৈশ্বিক সরবরাহ ব্যবস্থার নতুন চ্যালেঞ্জ",
    images: [
      {
        id: 1,
        url: "/images/image-article1.jpg",
        caption: "সমুদ্রে চলমান বড় তেলবাহী জাহাজ",
      },
      {
        id: 2,
        url: "/images/image-article1.jpg",
        caption: "বন্দরে নোঙর করা জাহাজ",
      },
      {
        id: 3,
        url: "/images/image-article1.jpg",
        caption: "তেল পরিবহনে ব্যবহৃত ট্যাংকার",
      },
    ],
  },
  {
    id: 5,
    title: "সমুদ্রপথে বাণিজ্য: বৈশ্বিক সরবরাহ ব্যবস্থার নতুন চ্যালেঞ্জ",
    images: [
      {
        id: 1,
        url: "/images/image-article1.jpg",
        caption: "সমুদ্রে চলমান বড় তেলবাহী জাহাজ",
      },
      {
        id: 2,
        url: "/images/image-article1.jpg",
        caption: "বন্দরে নোঙর করা জাহাজ",
      },
      {
        id: 3,
        url: "/images/image-article1.jpg",
        caption: "তেল পরিবহনে ব্যবহৃত ট্যাংকার",
      },
    ],
  },
];

// Get categories
export async function getAllcategories(query?: CategoryQueryParam) {
  try {
    const response = await api.get("/web/categories", {
      params: query,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

// Get trending topics/tags
export async function getTrendingTopics() {
  try {
    const response = await api.get("/web/tags");
    return response.data;
  } catch (error) {
    console.error("Error fetching trending topics:", error);
    throw error;
  }
}

// Get market price
export async function getMarketPrice() {
  try {
    const response = await api.get("/web/market-prices");
    return response.data;
  } catch (error) {
    console.error("Error fetching market price:", error);
    throw error;
  }
}

// Get articles
export async function getArticles(query?: ArticleQueryParams) {
  try {
    const response = await api.get("/web/articles", {
      params: query,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
}

// Get single article
export async function getSingleArticle(slug: string) {
  try {
    const response = await api.get(`/web/articles/by-slug/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching single article:", error);
    throw error;
  }
}

// Get related articles
export async function getRelatedArticles(id: string) {
  try {
    const response = await api.get(`/web/articles/${id}/related`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching related articles:", error);
    throw error;
  }
}

// Get videos
export async function getVideos(query?: { page?: number; limit?: number }) {
  try {
    const page = query?.page || 1;
    const limit = query?.limit || 10;
    const start = (page - 1) * limit;
    const end = start + limit;

    return {
      data: videoArticles.slice(start, end),
      meta: {
        total: videoArticles.length,
        page,
        limit,
        totalPages: Math.ceil(videoArticles.length / limit),
      },
    };
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
}

// Get images
export async function getImages() {
  try {
    const response = imageArticles;
    return response;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}
