import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const poppins = Noto_Serif_Bengali({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Prime Tv | Trusted , Timely, True",
  description: "Trusted , Timely, True",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${poppins.className} antialiased bg-gray-100`}>
        {children}
      </body>
    </html>
  );
}
