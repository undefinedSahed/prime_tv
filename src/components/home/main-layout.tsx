import React from "react";
import HomeSidebar from "./home-sidebar";
import ArticleSection from "./article-section";

export default function MainLayout() {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-12 lg:gap-12 lg:py-10">
        <div className="lg:col-span-2 sticky top-0">
          <HomeSidebar />
        </div>
        <div className="lg:col-span-10">
          <ArticleSection />
        </div>
      </div>
    </div>
  );
}
