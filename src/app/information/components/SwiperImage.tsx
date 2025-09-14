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
        alt="赤弦獎"
      />
    </div>
  );
};

export default SwiperImageComponent;
