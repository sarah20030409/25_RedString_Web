"use client";
import { useState } from "react";

export default function AboutSection02() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const article = [
    {
      articleTitle: "宗旨",
      articleContent:
        "「赤弦獎--紅樓琴緣民歌比賽」是采音吉他社最為重要且盛大的活動，自民國 90 年開始舉辦，至今即將進入第二十四屆。初期是以舉辦給北科學生參賽為主，經由多屆的比賽累積活動經驗及檢討，嘗試於第七屆擴大賽事，廣集新竹以北之各大專院校之參賽者共襄盛舉，於第八屆將賽事擴大至全國大專院校及北部高中職，第十三屆增加演奏組，第十四屆更是新增音樂節活動，邀請十三屆得獎人為我們表演，並於第十八屆將賽事更擴大至全國大專院校及全國高中職。希望透過赤弦獎這個比賽，讓參賽者能夠不僅保有赤子之心，還能實踐對音樂的熱愛，在求學生涯中能有機會展現自我，並於賽事中發掘人才，提升國內的音樂素質。",
      articleImage: " ",
      articleLink: " ",
    },
    {
      articleTitle: "目標",
      articleContent:
        "赤弦獎的目標及理念，即為推廣校園音樂風氣，讓對音樂表演有興趣的學生有展現自我的機會，且藉由校際間的競賽，達到交流學習的效果。本屆目標是希望讓參賽者的音樂、作品能夠被更多人聽見，於是積極尋求與音樂平台合作，藉以鼓勵參賽者創作及比賽。",
      articleImage: " ",
      articleLink: " ",
    },
    {
      articleTitle: "關於采音",
      articleContent:
        "采音吉他社，為國立臺北科技大學的音樂性社團，有來自各大專院校的學生參與，專注於音樂能力的提升和音樂表演的多樣性。涵蓋多種曲風，包括木歌和團歌，幫助社員掌握優秀的音樂技巧和表演方法。且社團也積極舉辦各類音樂活動，促進社員間的交流與合作。也協助學校籌辦赤弦獎，為音樂愛好者提供展現才華的舞台。",
      articleImage: "./about/tsaiyinLogo.webp",
      articleLink:
        "https://www.youtube.com/@%E9%87%87%E5%85%89%E5%BD%B1%E5%83%8F",
    },
  ];
  return (
    <div className="flex justify-center px-[15%] items-stretch max-lg:px-[10%] max-m_md:px-[8%] max-md:px-[5%] max-md:block ">
      {/* Selection title */}
      <div className="pr-[8%] max-md:flex max-md:justify-center max-md:p-0 max-md:items-center ">
        {article.map((item, index) => {
          return (
            <div
              className="py-[15%] scale-105 max-md:scale-100 max-md:px-[3%]  max-md:py-[10%] max-m_sm:scale-90 max-m_sm:px-0 "
              key={item.articleTitle}
            >
              {selectedIndex === index ? (
                <a className=" ArticleBTN_selected max-m_sm:w-28 max-m_sm:h-28">
                  <p className="ArticleBTN_selected_text ">
                    {item.articleTitle}
                  </p>
                </a>
              ) : (
                <a
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                  className="bg-[url('/about/red_brown_dot.webp')] bg-contain bg-no-repeat w-36 h-36 pt-4 flex justify-center items-center max-m_sm:w-32 max-m_sm:h-32 "
                >
                  <p className="ArticleBTN_text">{item.articleTitle}</p>
                </a>
              )}
            </div>
          );
        })}
      </div>
      {/* Article display */}
      <div className="flex items-stretch border border-Cus_Brown p-1 bg-white bg-opacity-50 ">
        {selectedIndex !== -1 && (
          <div className="border border-Cus_Brown px-[5%] py-[8%]  max-md:px-[3%]">
            <div data-aos="fade-up">
              <div className="flex justify-center max-m_md:scale-90 max-sm:scale-75">
                <div className="border-2 border-Cus_Brown rounded-full pl-8 pr-5 py-2 mb-[5%] ">
                  <h5 className="medium_title text-3xl tracking-[10px] font-medium">
                    {article[selectedIndex].articleTitle}
                  </h5>
                </div>
              </div>
              <div>
                <p className="medium_text text-center tracking-widest leading-loose max-md:tracking-widest max-sm:leading-normal">
                  {article[selectedIndex].articleContent}
                </p>
                <div>
                  {article[selectedIndex].articleImage !== " " && (
                    <div className="flex justify-center">
                      <a
                        className="pt-[5%] w-[30%]"
                        href={article[selectedIndex].articleLink}
                        target="_blank"
                      >
                        <img
                          src={article[selectedIndex].articleImage}
                          alt="第二十五屆赤弦獎吾聲主視覺-臺北科技大學采音吉他社主辦民歌比賽"
                        />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
