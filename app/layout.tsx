import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language";
import { Shell } from "@/components/shell";

const sans = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Quang Bảo Cashew",
  description: "Công ty TNHH Xuất Nhập Khẩu Quang Bảo — gia công, sản xuất và xuất khẩu hạt điều.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${sans.className} antialiased`}>
        <LanguageProvider>
          <Shell>{children}</Shell>
        </LanguageProvider>
      </body>
    </html>
  );
}
