"use client";
import { useEffect, useState } from "react";
import { ButtonForDownload } from "../../globals/button_style";

export default function InfoSection01() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 740) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const double_line_style = "w-[5px] border border-x-Cus_Brown";
  const download_block_style = "w-[550px] py-[3%] max-m_md:w-[400px]";
  const m_double_line_style = "w-[5px] border border-x-Cus_Brown mx-[2%] ";
  const m_download_block_style = "w-[450px] py-[8%] max-m_sm:w-[330px]";

  return (
    <div>
      {isMobile ? (
        <div className="py-[9%] px-[10%] max-m_md:px-[3%] ">
          {/* ==== section01-PC & tablet ==== */}
          <div className="flex justify-center items-stretch max-m_md:scale-[85%]">
            <span className={double_line_style} />
            <div className={download_block_style}>
              <p className="large_text text-center pb-[8%] max-m_md:medium_text">
                ◆ 第二十五屆赤弦獎參賽簡章 ◆
              </p>
              <ButtonForDownload
                text="點擊下載"
                onClickDownload="/information/第二十五屆赤弦獎參賽簡章.pdf"
              />
            </div>
            <span className={double_line_style} />
            <div className={download_block_style}>
              <p className="large_text text-center pb-[8%] max-m_md:medium_text">
                ◆ 第二十五屆赤弦獎初賽報名須知 ◆
              </p>
              <ButtonForDownload
                text="點擊下載"
                onClickDownload="/information/第二十五屆赤弦獎參賽簡章.pdf"
              />
            </div>
            <span className={double_line_style} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center pt-[9%] pb-[15%]">
          {/* ==== section01-Mobile ==== */}
          <div>
            {/* 參賽簡章 */}
            <div className="flex justify-center pb-[10%]">
              <span className={m_double_line_style} />
              <div className={m_download_block_style}>
                <p className="large_text text-center pb-[5%] max-m_sm:medium_text">
                  ◆ 第二十五屆赤弦獎參賽簡章 ◆
                </p>
                <ButtonForDownload
                  text="點擊下載"
                  onClickDownload="/information/第二十五屆赤弦獎參賽簡章.pdf"
                />
              </div>
              <span className={m_double_line_style} />
            </div>
            {/* 報名須知 */}
            <div className="flex justify-center">
              <span className={m_double_line_style} />
              <div className={m_download_block_style}>
                <p className="large_text text-center pb-[5%] max-m_sm:medium_text max-m_sm:tracking-wider">
                  ◆ 第二十五屆赤弦獎初賽報名須知 ◆
                </p>
                <ButtonForDownload
                  text="點擊下載"
                  onClickDownload="/information/第二十五屆赤弦獎參賽簡章.pdf"
                />
              </div>
              <span className={m_double_line_style} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
