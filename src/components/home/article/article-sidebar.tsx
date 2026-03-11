import React from "react";
import Trending from "./trending";
import BazarPricing from "./bazar-pricing";
import LiveUpdate from "./live-update";

export default function ArticleSidebar() {
  return (
    <div className="lg:space-y-3">
      <Trending />
      <BazarPricing />
      <LiveUpdate />
    </div>
  );
}
