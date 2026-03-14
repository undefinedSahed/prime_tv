import axios from "axios";
import { ArticleQueryParams, CategoryQueryParam } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  proxy: false, // Prevents Axios from using `url.parse()` internally for proxy resolution
});

export interface videoArticles {
  id: number;
  title: string;
  youtubeUrl: string;
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

const videoArticles: videoArticles[] = [
  {
    id: 1,
    title:
      "সিলেটপুরের জঙ্গলে যৌথ বাহিনীর অভিযান: এলাকার জীবন ও অভিযানের গল্প উন্মোচন",
    youtubeUrl: "https://www.youtube.com/watch?v=ZNts0qvgnik",
  },
  {
    id: 2,
    title:
      "ইরান ও যুক্তরাষ্ট্র–ইসরাইল সংঘাত: তেলের বাজারে চাপ, বিশ্বে পণ্যমূল্য",
    youtubeUrl: "https://www.youtube.com/watch?v=IZ-zSEoVUGg",
  },
  {
    id: 3,
    title: "মধ্যপ্রাচ্য যুদ্ধে সবচেয়ে বেশি লাভ কার? বিশ্বরাজনীতির নতুন সমীকরণ",
    youtubeUrl: "https://www.youtube.com/watch?v=xYLeX0EmuGQ",
  },
  {
    id: 4,
    title:
      "মধ্যপ্রাচ্য পরিস্থিতি: সংকটে দেশের আমদানি-রপ্তানি, বাড়ছে শিপিং খরচ",
    youtubeUrl: "https://www.youtube.com/watch?v=DtdddxVkyp4",
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
export async function getRelatedArticles() {
  try {
    const articles = await api.get(`/web/articles`);
    const response = articles?.data?.data?.slice(0, 5)
    return response;
  } catch (error) {
    console.error("Error fetching related articles:", error);
    throw error;
  }
}

// Get videos
export async function getVideos() {
  try {
    const response = videoArticles;
    return response;
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
