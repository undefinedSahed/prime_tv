import React from "react";
import BlinkingLiveButton from "./live-button";
import LiveClock from "./live-clock";
import CategorySidebar from "./category-sidebar";

export default function HomeSidebar() {
  return (
    <aside className="w-full">
      <BlinkingLiveButton />
      <LiveClock />
      <CategorySidebar />
    </aside>
  );
}
