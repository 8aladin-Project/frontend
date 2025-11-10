import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "antd/dist/reset.css";
import AntdRegistry from "./antd-registry";
import PhoneFrameLayout from "@/components/layout/PhoneFrameLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "8aladin",
  description: "중고거래 플랫폼입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <PhoneFrameLayout title="내 프로젝트">
          <AntdRegistry>{children}</AntdRegistry>
        </PhoneFrameLayout>
      </body>
    </html>
  );
}
