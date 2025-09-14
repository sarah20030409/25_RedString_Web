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
    <div className="px-[5%] max-md:px-[8%]">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
            "--swiper-pagination-bullet-size": "5px",
            "--swiper-navigation-size": "50px",
          } as React.CSSProperties
        }
        // RWD
        breakpoints={{
          1000: {
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
        {["02", "02", "03", "04", "05", "06"].map((imgNum, index) => (
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
        className="h-[550px] w-full object-contain"
        src={`/information/swiperImages/swiper_${imgNum}.webp`}
        alt="赤弦獎"
      />
    </div>
  );
};

export default SwiperImageComponent;
