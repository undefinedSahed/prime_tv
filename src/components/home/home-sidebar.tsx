import React from "react";
import BlinkingLiveButton from "./live-button";
import LiveClock from "./live-clock";
import CategorySidebar from "./category-sidebar";

export default function HomeSidebar() {
  return (
    <aside className="">
      <div className="hidden lg:block">
        <BlinkingLiveButton />
        <LiveClock />
      </div>
      <div className="hidden lg:block">
        <CategorySidebar />
      </div>
    </aside>
  );
}
