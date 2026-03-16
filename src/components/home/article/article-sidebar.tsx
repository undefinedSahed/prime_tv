import React from "react";
import Trending from "./trending";
import BazarPricing from "./bazar-pricing";
import LiveUpdate from "./live-update";
import { getTrendingTopics } from "@/lib/api";

export default async function ArticleSidebar() {
  const { data: trendingTopics } = await getTrendingTopics();

  return (
    <div className="lg:space-y-3 space-y-2 w-full overflow-hidden">
      <div className="hidden lg:block">
        <Trending trendingTopics={trendingTopics} />
      </div>
      <BazarPricing />
      <LiveUpdate />
    </div>
  );
}
