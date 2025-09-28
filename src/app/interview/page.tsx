"use client";
import { useState, useRef } from "react";
import PageBanner from "../globals/pageBanner";
import Articles from "./components/articles";
import contentJson from "./components/content.json";

export default function Interview() {
  const [selectedArticle, setSelectedArticle] = useState("ARTICLE01");
  const articlesRef = useRef<HTMLDivElement>(null);
  const content = contentJson as any;

  const handleImageClick = (articleKey: string) => {
    setSelectedArticle(articleKey);
    setTimeout(() => {
      if (articlesRef.current) {
        articlesRef.current.scrollIntoView({
          behavior: "smooth", // 平滑滾動
          block: "start", // 滾動到元素頂部
          inline: "nearest", // 水平方向最近位置
        });
      }
    }, 100);
  };

  return (
    <div className="mb-[10%]">
      <div className="mb-[8%]">
        <PageBanner title="採訪消息" />
      </div>
      <div className="mx-[13%] max-m_md:mx-[8%] max-md:mx-[5%]">
        <div
          data-aos="fade-up"
          className="mx-[5%] mb-[20%] flex justify-between max-md:mx-0"
        >
          {Object.keys(content).map((articleKey) => {
            return (
              <img
                key={articleKey}
                className="w-[38%] hover:cursor-pointer hover:scale-105 max-m_md:w-[47%] max-md:w-[48%]"
                src={content[articleKey].articleCover}
                alt={content[articleKey].articleTop.title}
                onClick={() => handleImageClick(articleKey)}
              />
            );
          })}
        </div>
        <div
          data-aos="fade-up"
          className="w-full h-[1px] bg-Cus_Brown mt-[5%] mb-[5%]"
        ></div>
        <div ref={articlesRef}>
          <Articles articleNum={selectedArticle} />
        </div>
      </div>
    </div>
  );
}
