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
  const [slidesPerView, setSlidesPerView] = useState<number>(2);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth > 1250) {
        setSlidesPerView(3);
      } else if (window.innerWidth < 1250) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 740) {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();

    const handleResize = () => {
      updateSlidesPerView();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="px-[5%]">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
            "--swiper-pagination-bullet-size": "5px",
            "--swiper-navigation-size": "50px",
          } as React.CSSProperties
        }
        slidesPerView={slidesPerView}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="select-none"
      >
        <SwiperSlide>
          <ImgList imgNum="02" />
        </SwiperSlide>
        <SwiperSlide>
          <ImgList imgNum="02" />
        </SwiperSlide>
        <SwiperSlide>
          <ImgList imgNum="03" />
        </SwiperSlide>
        <SwiperSlide>
          <ImgList imgNum="04" />
        </SwiperSlide>
        <SwiperSlide>
          <ImgList imgNum="05" />
        </SwiperSlide>
        <SwiperSlide>
          <ImgList imgNum="06" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const ImgList: React.FC<Props> = ({ imgNum }) => {
  return (
    <div>
      <img
        className="h-[550px] w-full object-contain"
        src={`/information/swiperImages/swiper_${imgNum}.webp`}
        alt="赤弦獎"
      />
    </div>
  );
};

export default SwiperImageComponent;
