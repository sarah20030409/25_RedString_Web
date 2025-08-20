"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
export default function LoadingTitle() {
  const topImageRef = useRef<HTMLImageElement>(null);
  const bottomImageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // The container of top & bottom imageRefs.

  // GSAP scroll animation
  useEffect(() => {
    if (topImageRef.current && bottomImageRef.current && containerRef.current) {
      // Top image move to left.
      gsap.to(topImageRef.current, {
        x: "-200%",
        y: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top",
          end: "+=200",
          scrub: 1,
        },
      });

      // Bott5m image move to right.
      gsap.to(bottomImageRef.current, {
        x: "200%",
        y: "-100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top",
          end: "+=200",
          scrub: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div className="flex justify-center">
        <img
          ref={topImageRef}
          className="w-[40%] duration-0"
          src="/home/Home_Wu.webp"
          alt="赤弦獎_吾聲"
        />
      </div>
      <div className=" py-[20%]"></div>
      <div className="flex justify-center">
        <img
          ref={bottomImageRef}
          className="w-[40%] duration-0"
          src="/home/Home_Sheng.webp"
          alt="赤弦獎_吾聲"
        />
      </div>
    </div>
  );
}
