import HomeSidebar from "@/components/home/home-sidebar";
import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-12 lg:gap-12 lg:py-5">
        <div className="lg:col-span-2 col-span-12 sticky top-0">
          <HomeSidebar />
        </div>
        <div className="lg:col-span-10 cols-span-12">
          {children}
        </div>
      </div>
    </div>
  );
}
