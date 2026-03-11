"use client";

import * as React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";
import { Input } from "../ui/input";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navigationItems = [
  { key: "home", href: "/" },
  { key: "recent", href: "/recent" },
  { key: "video", href: "/video" },
];

export function Navbar() {
  const t = useTranslations("navLinks");
  const tSearch = useTranslations("search");

  console.log("Intl navigation links: ", t("home"));

  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-[1px_4px_18px_-10px_rgba(170, 121, 120, 1)] bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Prime Tv"
              height={50}
              width={100}
            />
          </Link>

          <nav className="hidden md:flex">
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

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <div className="relative w-full max-w-md group">
            <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-foreground" />
            <Input
              type="text"
              placeholder={tSearch("placeholder")}
              className="h-10 w-full rounded-full border-none bg-[#f0f2f5] pl-6 pr-12 text-base ring-offset-transparent focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-0"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
