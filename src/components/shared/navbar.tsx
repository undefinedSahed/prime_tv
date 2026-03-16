"use client";

import * as React from "react";
import Link from "next/link";
import { Search, Menu, Video, Camera, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CategorySidebar from "../home/category-sidebar";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";
import { Input } from "../ui/input";
import Image from "next/image";
import { cn } from "@/lib/utils";
import LiveClock from "../home/live-clock";
import { useRouter, usePathname } from "next/navigation";

const navigationItems = [
  { key: "home", href: "/" },
  { key: "recent", href: "/recent" },
  { key: "video", href: "/video" },
];

export function Navbar() {
  const t = useTranslations("navLinks");
  const tSearch = useTranslations("search");
  const tLive = useTranslations("live");
  const tImage = useTranslations("image");

  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const router = useRouter();
  const pathname = usePathname();
  const isSearchPage = pathname.includes("/search");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-[1px_4px_18px_-10px_rgba(170, 121, 120, 1)] bg-background/95 backdrop-blur">
      <div className="container relative flex h-16 items-center justify-between gap-1 overflow-visible">
        {/* Left Side: Logo and Desktop Navigation */}
        <div className="flex items-center gap-4 lg:gap-6 shrink-0">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Prime Tv"
              height={40}
              width={80}
              className="w-20 md:w-25 h-auto"
            />
          </Link>

          <nav className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.key}>
                    <NavigationMenuLink
                      asChild
                      className={cn(navigationMenuTriggerStyle(), "text-lg")}
                    >
                      <Link href={item.href}>{t(item.key)}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 justify-end min-w-0">
          {/* Mobile Only Navigation Controls */}
          <div className="flex lg:hidden items-center gap-2 min-[400px]:gap-3 sm:gap-4 shrink-0">
            {/* Live Button */}
            <Link
              href="/video/live"
              className="shrink-0 flex items-center justify-center gap-1.5 rounded-full bg-[#ff3b3b] px-3 py-1 text-white shadow-sm transition hover:scale-105 animate-shadow-blink"
            >
              <Video
                className="h-4 w-4 fill-transparent stroke-white"
                strokeWidth={2}
              />
              <span className="text-[11px] sm:text-xs font-bold tracking-tight whitespace-nowrap">
                {tLive("label")}
              </span>
            </Link>

            <Link
              href="/articles?type=image"
              className="shrink-0 flex items-center justify-center gap-1.5 rounded-md bg-[#fff4e5] px-3 py-1 text-[#f97316] transition hover:scale-105"
            >
              <Camera className="h-4 w-4" strokeWidth={2} />
              <span className="text-[11px] sm:text-xs font-bold tracking-tight whitespace-nowrap text-[#f97316]">
                {tImage("lastLabel")}
              </span>
            </Link>

            {!isSearchPage && (
              <button
                aria-label="Search"
                onClick={() => setIsSearchOpen(true)}
                className="shrink-0 flex items-center justify-center p-1 text-gray-800 transition hover:text-black"
              >
                <Search className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            )}

            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetTrigger
                aria-label="Open menu"
                className="shrink-0 flex items-center justify-center p-1"
              >
                <Menu className="h-6 w-6 sm:h-7 sm:w-7 text-gray-800" />
              </SheetTrigger>
              <SheetContent side="right" className="w-75 sm:w-100 p-0">
                <LiveClock />
                <CategorySidebar onClose={() => setIsSheetOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>

          {!isSearchPage && (
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <form
                onSubmit={handleSearchSubmit}
                className="relative w-full max-w-md group"
              >
                <button
                  type="submit"
                  aria-label="Submit Search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-foreground"
                >
                  <Search className="h-5 w-5" />
                </button>
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={tSearch("placeholder")}
                  className="h-10 w-full rounded-full border-none bg-[#f0f2f5] pl-6 pr-12 text-base ring-offset-transparent focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-0"
                />
              </form>
            </div>
          )}
          {isSearchPage && (
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
            </div>
          )}
        </div>

        {/* Mobile Search Overlay */}
        {isSearchOpen && (
          <div className="absolute inset-0 z-50 flex items-center bg-[#f7f8f9] lg:hidden w-full h-full px-4 border-b">
            <form
              onSubmit={handleSearchSubmit}
              className="flex h-full w-full items-center justify-between gap-2"
            >
              <Input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={tSearch("placeholder") || "যা খুঁজতে চান.."}
                className="h-full w-full rounded-none border-none bg-transparent px-2 text-base shadow-none focus-visible:ring-0 text-gray-800 placeholder:text-gray-500 font-medium"
              />
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="shrink-0 p-2 text-gray-600 hover:text-gray-900"
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
