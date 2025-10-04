import type { Metadata } from "next";
import Header from "./globals/header";
import Footer from "./globals/footer";
import TopButton from "./globals/topButton";
import "./style/reset.css";
import "./style/globals.css";
// import AOSInitializer from "./globals/AOSInitializer";
import Cursor from "./globals/Cursor.component";

export const metadata: Metadata = {
  title: "赤弦獎-吾聲",
  description: "第二十五屆紅樓赤弦獎-吾聲，主辦單位:國立臺北科技大學采音吉他社",
  keywords: ["RedString", "赤弦獎", "采音吉他社", "臺北科技大學"],
  metadataBase: new URL("https://redstringaward.it.com/"),
  authors: [{ name: "Tsaiyin_Guitar" }],

  // 簡化的 icon 配置
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", sizes: "16x16" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "第二十五屆紅樓赤弦獎-吾聲",
    description:
      "第二十五屆紅樓赤弦獎-吾聲，主辦單位:國立臺北科技大學采音吉他社",
    url: "https://redstringaward.it.com/",
    siteName: "RedString Award",
    images: [
      {
        url: "https://redstringaward.it.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "紅樓赤弦獎-吾聲",
      },
    ],
    type: "website",
  },

  // 基本的行動裝置配置
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "赤弦獎",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-center bg-repeat bg-[length:600px] cursor-none bg-[url('/background.webp')] max-m_md:bg-[length:400px]"
        // style={{ backgroundImage: `url('/background.webp')` }} // Put background url with tailwind, background images are processed during the build phase, eliminating any issues with inconsistencies between SSR and CSR.
      >
        <Cursor />
        <div>
          <Header />
        </div>
        <div className=" max-md:-mt-1">{children}</div>
        <TopButton />
        <Footer />
      </body>
    </html>
  );
}
