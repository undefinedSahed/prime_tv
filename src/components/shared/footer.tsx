import Link from "next/link";
import { useTranslations } from "next-intl";

import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const tFooter = useTranslations("footer");

  return (
    <footer className="bg-white border-t border-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">

          {/* Section 1: Logo */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <Link href="/" className="block">
              <img 
                src="/images/logo.png"
                alt="Ekhon TV"
                height={80}
                width={160}
                className="h-auto w-auto max-w-[180px]"
              />
            </Link>
          </div>

          {/* Section 2: English Info */}
          <div className="lg:col-span-3 flex flex-col gap-1 lg:border-l lg:border-gray-900/10 lg:pl-8 h-full">
            <h3 className="font-bold text-gray-900 text-sm md:text-base">
              {tFooter("companyInfoEn.name")}
            </h3>
            <p className="text-gray-800 text-sm font-medium">
              {tFooter("companyInfoEn.subtitle")}
            </p>
            <p className="text-gray-700 text-xs md:text-sm whitespace-pre-line leading-relaxed mt-1">
              {tFooter("companyInfoEn.address")}
            </p>
            <div className="mt-4 flex flex-col gap-0.5">
              <p className="text-gray-500 text-xs md:text-sm font-medium">
                {tFooter("companyInfoEn.phone")}
              </p>
              <p className="text-gray-500 text-xs md:text-sm font-medium">
                {tFooter("companyInfoEn.email")}
              </p>
            </div>
          </div>

          {/* Section 3: Bengali Info */}
          <div className="lg:col-span-3 flex flex-col gap-1 lg:border-l lg:border-gray-900/10 lg:pl-8 h-full">
            <h3 className="font-bold text-gray-900 text-sm md:text-base">
              {tFooter("companyInfoBn.name")}
            </h3>
            <p className="text-gray-800 text-sm font-medium">
              {tFooter("companyInfoBn.subtitle")}
            </p>
            <p className="text-gray-700 text-xs md:text-sm whitespace-pre-line leading-relaxed mt-1">
              {tFooter("companyInfoBn.address")}
            </p>
            <div className="mt-4 flex flex-col gap-0.5">
              <p className="text-gray-500 text-xs md:text-sm font-medium">
                {tFooter("companyInfoBn.phone")}
              </p>
              <p className="text-gray-500 text-xs md:text-sm font-medium">
                {tFooter("companyInfoBn.email")}
              </p>
            </div>
          </div>

          {/* Section 4: Social & Legal */}
          <div className="lg:col-span-3 flex flex-col gap-6 lg:pl-8">
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                {tFooter("socialLabel")}
              </h3>
              <div className="flex items-center gap-5">
                <Link href="https://www.facebook.com/primetv360" target="_blank" className="text-gray-900 hover:text-primary transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" target="_blank" className="text-gray-900 hover:text-primary transition-colors">
                  <span className="text-xl font-bold">𝕏</span>
                </Link>
                <Link href="#" target="_blank" className="text-gray-900 hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" target="_blank" className="text-gray-900 hover:text-primary transition-colors">
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-transparent flex gap-6 lg:justify-start">
              <Link href="/terms" className="text-gray-500 hover:text-gray-900 text-sm font-medium border-b border-gray-400 pb-0.5 transition-colors">
                {tFooter("links.legal.1.name")}
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-900 text-sm font-medium border-b border-gray-400 pb-0.5 transition-colors">
                {tFooter("links.legal.0.name")}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
