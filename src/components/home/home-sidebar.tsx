import React from "react";
import BlinkingLiveButton from "./live-button";
import LiveClock from "./live-clock";

export default function HomeSidebar() {
  return (
    <aside className="w-full">
      <BlinkingLiveButton />
      <LiveClock />
    </aside>
  );
}
