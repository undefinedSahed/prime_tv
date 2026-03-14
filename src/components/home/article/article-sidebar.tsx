import React from "react";
import Trending from "./trending";
import BazarPricing from "./bazar-pricing";
import LiveUpdate from "./live-update";

export default function ArticleSidebar() {
  return (
    <div className="lg:space-y-3 space-y-2 w-full overflow-hidden">
      <div className="hidden lg:block">
        <Trending />
      </div>
      <BazarPricing />
      <LiveUpdate />
    </div>
  );
}
