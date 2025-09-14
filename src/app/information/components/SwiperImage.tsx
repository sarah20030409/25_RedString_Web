"use client";
import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Zoom, Navigation, Pagination } from "swiper/modules";

interface Props {
  imgNum: string;
}

const SwiperImageComponent: React.FC = () => {
  return (
    <div className="px-[5%] max-md:px-[4%] ">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "Brown",
            "--swiper-navigation-size": "50px",
          } as React.CSSProperties
        }
        // RWD
        breakpoints={{
          800: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1250: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation]}
        className="select-none"
      >
        {[
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ].map((imgNum, index) => (
          <SwiperSlide key={index}>
            <div>
              <ImgList imgNum={imgNum} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const ImgList: React.FC<Props> = ({ imgNum }) => {
  return (
    <div>
      <img
        className="h-[500px] w-full object-contain  max-md:h-[400px] max-sm:h-[300px]"
        src={`/information/swiperImages/swiper_${imgNum}.webp`}
        alt="「赤弦獎--紅樓琴緣民歌比賽」是采音吉他社最為重要且盛大的活動，自民國 90 年開始舉辦，至今即將進入第二十四屆。希望透過赤弦獎這個比賽，讓參賽者能夠不僅保有赤子之心，還能實踐對音樂的熱愛，在求學生涯中能有機會展現自我，並於賽事中發掘人才，提升國內的音樂素質。"
      />
    </div>
  );
};

export default SwiperImageComponent;
