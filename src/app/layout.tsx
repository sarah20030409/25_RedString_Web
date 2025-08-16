import type { Metadata } from "next";
import Header from "./globals/header";
import Footer from "./globals/footer";
import TopButton from "./globals/topButton";
import "./style/reset.css";
import "./style/globals.css";
import AOSInitializer from "./globals/AOSInitializer";

export const metadata: Metadata = {
  title: "第二十五屆紅樓赤弦獎-吾聲",
  description: "第二十五屆紅樓赤弦獎-吾聲，主辦單位:國立臺北科技大學采音吉他社",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  keywords: ["RedString", "赤弦獎", "采音吉他社", "臺北科技大學"],
  metadataBase: new URL("https://25-red-string-web.vercel.app/"), // 等購買域名在改
  authors: [{ name: "Tsaiyin_Guitar" }],
  openGraph: {
    title: "第二十五屆紅樓赤弦獎-吾聲",
    description:
      "第二十五屆紅樓赤弦獎-吾聲，主辦單位:國立臺北科技大學采音吉他社",
    // url: "https://25-red-string-web.vercel.app/", // 等購買域名在放
    siteName: "RedString Award",
    // images: "/favicon.ico",
    images: [
      {
        url: "https://25-red-string-web.vercel.app/favicon.ico", // 等購買域名在放
        width: 1200,
        height: 630,
        alt: "紅樓赤弦獎-吾聲",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className="bg-center bg-repeat bg-[length:800px]"
        style={{ backgroundImage: `url('/background.webp')` }}
      >
        <AOSInitializer />
        <div>
          <Header />
        </div>
        <div className="mb-10 -mt-10 max-md:-mt-1">{children}</div>
        <TopButton />
        <Footer />
      </body>
    </html>
  );
}
