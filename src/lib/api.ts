import axios from "axios";
import { ArticleQueryParams, CategoryQueryParam } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

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
