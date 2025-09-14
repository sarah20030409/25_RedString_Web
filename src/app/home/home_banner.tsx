"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SectionTitle from "../globals/section_title";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOSInitializer from "../globals/AOSInitializer";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function HomeBanner() {
  return (
    <div>
      <AOSInitializer />
      <BigBannerImage />
      <BannerTitle />
    </div>
  );
}

export function BigBannerImage() {
  const redSrokeRef = useRef<HTMLImageElement>(null);
  const leftImageRef = useRef<HTMLImageElement>(null);
  const rightImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Handle red stroke animation.
    if (redSrokeRef.current) {
      gsap.to(redSrokeRef.current, {
        y: "-20",
        duration: 1.5,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    }

    // Handle left & right image animation.(Wu & Sheng)
    if (leftImageRef.current && rightImageRef.current) {
      gsap.to(leftImageRef.current, {
        x: "-100%",
        opacity: 0,
        scrollTrigger: {
          trigger: leftImageRef.current,
          start: "-200%",
          end: "50%",
          scrub: 1,
        },
      });
      gsap.to(rightImageRef.current, {
        x: "100%",
        opacity: 0,
        scrollTrigger: {
          trigger: leftImageRef.current,
          start: "-200%",
          end: "50%",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="mt-[20%] mb-[28%] max-m_md:mt-[30%] max-m_md:mb-[35%] max-md:mt-[50%] max-md:mb-[50%]">
        <div className="flex justify-center items-center">
          {/* Big word */}
          <div className="absolute w-[40%] z-30 max-m_md:w-[53%] max-md:w-[75%]">
            <img
              src="/home/Home_Img_01.webp"
              alt="第二十五屆赤弦獎-吾聲,紅樓琴緣民歌比賽。"
            />
          </div>
          {/* Word shadow */}
          {/* <div className="absolute w-[40%] animate-pulse z-20 max-m_md:w-[53%] max-md:w-[75%]">
            <img
              src="/home/Home_Img_02.webp"
              alt="第二十五屆赤弦獎-吾聲,紅樓琴緣民歌比賽。"
            />
          </div> */}
          {/* Red stroke */}
          <div className="absolute w-[40%] z-10 max-m_md:w-[53%] max-md:w-[75%]">
            <img
              ref={redSrokeRef}
              src="/home/Home_Red_Strokes.webp"
              alt="第二十五屆赤弦獎-吾聲,紅樓琴緣民歌比賽。"
            />
          </div>
          {/* Small word */}
          <div className="absolute flex justify-between w-[45%] transition-none max-m_md:w-[60%] max-md:w-[100%] max-md:px-[10%] max-md:overflow-hidden">
            <div className="w-[20%] ">
              <img
                ref={leftImageRef}
                src="/home/Home_Wu.webp"
                alt="赤弦獎_吾聲"
              />
            </div>
            <div className="w-[20%] ">
              <img
                ref={rightImageRef}
                src="/home/Home_Sheng.webp"
                alt="赤弦獎_吾聲"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BannerTitle() {
  return (
    <div data-aos="fade-up" className="text-center aos-init">
      <div className="large_text tracking-[20px] leading-10 max-m_md:tracking-[15px] max-md:tracking-[10px] max-sm:tracking-[5px]">
        <h1>｜赤弦獎｜</h1>
        <h2>第貳拾伍屆紅樓琴緣民歌比賽</h2>
      </div>
      <div className="pt-4">
        <SectionTitle
          style="section_title text-3xl tracking-[40px] ml-10  max-m_md:text-2xl"
          title="吾聲"
        />
      </div>
    </div>
  );
}
