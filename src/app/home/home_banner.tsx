"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeBanner() {
  return (
    <div>
      <BigBannerImage />
      <BannerTitle />
    </div>
  );
}

export function BigBannerImage() {
  const redSrokeRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (redSrokeRef.current) {
      gsap.to(redSrokeRef.current, {
        y: "-20",
        duration: 1.5,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="mt-[20%] mb-[28%]">
        <div className="flex justify-center items-center">
          {/* Big word */}
          <div className="absolute w-[40%] z-30">
            <img
              src="/home/Home_Img_01.webp"
              alt="第二十五屆赤弦獎-吾聲,紅樓琴緣民歌比賽。"
            />
          </div>
          {/* Word shadow */}
          <div className="absolute w-[40%] animate-pulse z-20">
            <img
              src="/home/Home_Img_02.webp"
              alt="第二十五屆赤弦獎-吾聲,紅樓琴緣民歌比賽。"
            />
          </div>
          {/* Red stroke */}
          <div className="absolute w-[40%] z-10">
            <img
              ref={redSrokeRef}
              src="/home/Home_Red_Strokes.webp"
              alt="第二十五屆赤弦獎-吾聲,紅樓琴緣民歌比賽。"
            />
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export function BannerTitle() {
  return (
    <div data-aos="fade-up" className="text-center aos-init">
      <div className="large_text tracking-[20px] leading-10">
        <h1>｜赤弦獎｜</h1>
        <h2>第貳拾伍屆紅樓琴緣民歌比賽</h2>
      </div>
      <div className="pt-4">
        <SectionTitle
          style="section_title text-3xl tracking-[40px] ml-10"
          title="吾聲"
        />
      </div>
    </div>
  );
}
