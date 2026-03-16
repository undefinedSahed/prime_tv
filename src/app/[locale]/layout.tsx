import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import AppProvider from "@/provider/app-provider";
import { Toaster } from "sonner";
import HomeSidebar from "@/components/home/home-sidebar";
import { getAllcategories } from "@/lib/api";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  const { data: categories } = await getAllcategories();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AppProvider sidebar={<HomeSidebar />} categories={categories}>
        {children}
        <Toaster position="top-right" richColors />
      </AppProvider>
    </NextIntlClientProvider>
  );
}
