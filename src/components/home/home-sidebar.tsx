import React from "react";
import BlinkingLiveButton from "./live-button";
import LiveClock from "./live-clock";
import CategorySidebar from "./category-sidebar";
import { getAllcategories } from "@/lib/api";

export default async function HomeSidebar() {
  const { data: categories } = await getAllcategories();

  return (
    <aside className="">
      <div className="hidden lg:block">
        <BlinkingLiveButton />
        <LiveClock />
      </div>
      <div className="hidden lg:block">
        <CategorySidebar categories={categories} />
      </div>
    </aside>
  );
}
