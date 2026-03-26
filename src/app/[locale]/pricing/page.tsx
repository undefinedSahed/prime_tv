import { getMarketPrice } from "@/lib/api";
import { MarketPrice } from "@/lib/types";
import { getTranslations } from "next-intl/server";
import React from "react";

export default async function MarketPrices() {
  const tPrices = await getTranslations("marketPrice");
  const { data: marketPricing } = await getMarketPrice();

  return (
    <div>
      <h2 className="lg:text-2xl text-xl pb-4 font-bold">{tPrices("title")}</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 justify-between items-center gap-12 bg-background p-3 rounded-md">
        {[...marketPricing, ...marketPricing].map(
          (item: MarketPrice, index: number) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-2"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-20 h-20 object-cover aspect-square rounded-full"
              />
              <h3 className="text-sm md:text-base">{item.title}</h3>
              <p className="text-sm md:text-base">{item.priceRange}</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
