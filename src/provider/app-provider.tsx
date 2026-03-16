"use client";

import React, { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { MobileBottomNav } from "@/components/shared/mobile-bottom-nav";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Category } from "@/lib/types";

interface AppProviderProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  categories: Category[];
}

export default function AppProvider({ children, sidebar, categories }: AppProviderProps) {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
    [],
  );

  const pathname = usePathname();
  const currentLocale = useLocale();

  const hideNavAndFooter = [
    `/${currentLocale}/auth/login`,
    `/${currentLocale}/auth/signup`,
  ];

  const isSearchPage = pathname.includes("/search");
  const isAuthPage = hideNavAndFooter.includes(pathname);

  const showSidebarLayout = !isAuthPage && !isSearchPage;

  return (
    <QueryClientProvider client={queryClient}>
      {!isAuthPage && <Navbar categories={categories}/>}

      <div className={`${!isAuthPage ? "md:pb-0 pb-16" : ""}`}>
        {showSidebarLayout ? (
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 lg:gap-8 xl:gap-12 lg:py-8">
              <div className="hidden lg:block lg:col-span-3 xl:col-span-2 sticky top-25 h-fit">
                {sidebar}
              </div>

              <div className="col-span-12 lg:col-span-9 xl:col-span-10">
                {children}
              </div>
            </div>
          </div>
        ) : (
          <main>{children}</main>
        )}
      </div>

      {!isAuthPage && (
        <>
          <Footer />
          <MobileBottomNav />
        </>
      )}
    </QueryClientProvider>
  );
}
