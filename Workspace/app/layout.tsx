import type { Metadata } from "next";
import { Noto_Serif_KR, Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const notoSerif = Noto_Serif_KR({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-nanum",
  display: "swap",
});

export const metadata: Metadata = {
  title: "웨딩 청첩장 - 신랑 ♥ 신부",
  description: "저희 두 사람의 소중한 날에 초대합니다",
  openGraph: {
    title: "웨딩 청첩장 - 신랑 ♥ 신부",
    description: "저희 두 사람의 소중한 날에 초대합니다",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSerif.variable} ${nanumMyeongjo.variable}`}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" 
        />
      </head>
      <body>
        {children}
        <Script 
          src="https://developers.kakao.com/sdk/js/kakao.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
