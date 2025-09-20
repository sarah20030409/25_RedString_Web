import React from "react";
import PageBanner from "../globals/pageBanner";
import SectionTitle from "../globals/section_title";
import SwiperImageComponent from "./components/SwiperImage";
import { ButtonSwitchPage } from "../globals/button_style";
import InfoSection01 from "./components/InfoSection01";

export default function SwiperImage() {
  return (
    <div className="mb-[10%]">
      <div>
        <PageBanner title="比賽須知" />
      </div>
      <div
        data-aos="fade-up"
        className="bg-[url('/information/bg_stroke_01.webp')] bg-no-repeat bg-left bg-[length:20%_auto] max-md:bg-[length:35%_auto]"
      >
        <div className="bg-[url('/information/bg_stroke_02.webp')] bg-no-repeat bg-right  bg-[length:20%_auto] max-md:bg-[length:35%_auto]">
          <InfoSection01 />
        </div>
      </div>

      {/* section02 */}
      <div className="pb-[15%] pt-[5%] max-md:pb-[10%]">
        <SectionTitle title="報名流程" />
        <div className="py-[6%] max-m_md:py-[8%]">
          <SwiperImageComponent />
        </div>
        <ButtonSwitchPage text="報名連結" onClickGo="https://mcip.app/line" />
      </div>

      {/* section03 */}
      <div className="max-md:py-[10%]">
        <SectionTitle title="交通方式" />
        <div
          data-aos="fade-up"
          className="flex justify-center px-[12%] pt-[5%] max-lg:px-[10%] max-m_md:px-[5%] max-md:block max-md:px-[10%]"
        >
          {["01", "02"].map((index) => {
            return (
              <div
                className="px-[2%] max-lg:px-[1%] max-md:pt-[5%]"
                key={index}
              >
                <img
                  src={`/information/infoImg_${index}.webp`}
                  alt="第二十五屆赤弦獎吾聲主視覺-臺北科技大學采音吉他社主辦民歌比賽"
                />
              </div>
            );
          })}
        </div>
        <div
          data-aos="fade-up"
          className="large_text text-center font-bold py-[2%]  max-m_md:medium_text max-m_md:font-bold max-md:py-[4%] max-m_sm:scale-90"
        >
          <p className="py-1">詳細地址｜台北市大安區 忠孝東路三段一號</p>
          <p className=" py-1">初賽地點｜臺北科技大學 學生活動中心一樓</p>
        </div>
        <ButtonSwitchPage
          text="交通影片"
          onClickGo="https://youtu.be/NVNC1BzmDE8"
        />
      </div>
    </div>
  );
}
