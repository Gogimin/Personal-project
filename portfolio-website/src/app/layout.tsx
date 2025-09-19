import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio - 개발자 포트폴리오",
    template: "%s | Portfolio"
  },
  description: "웹 개발자의 포트폴리오 웹사이트입니다. React, Next.js, TypeScript를 사용한 프로젝트들을 소개합니다.",
  keywords: ["개발자", "포트폴리오", "웹개발", "React", "Next.js", "TypeScript", "프론트엔드"],
  authors: [{ name: "개발자 이름" }],
  creator: "개발자 이름",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://your-domain.com",
    title: "Portfolio - 개발자 포트폴리오",
    description: "웹 개발자의 포트폴리오 웹사이트입니다. React, Next.js, TypeScript를 사용한 프로젝트들을 소개합니다.",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - 개발자 포트폴리오",
    description: "웹 개발자의 포트폴리오 웹사이트입니다. React, Next.js, TypeScript를 사용한 프로젝트들을 소개합니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
