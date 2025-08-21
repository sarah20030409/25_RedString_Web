"use client";

export default function Loading() {
  return (
    <div className="fixed flex justify-center items-center  inset-0 bg-white z-50">
      <div>
        <div className="flex justify-center">
          <img
            className="w-[40%] max-md:w-[35%] max-sm:w-[25%]"
            src="/home/Home_Wu.webp"
            alt="赤弦獎_吾聲"
          />
        </div>
        <div className="text-center">
          <p className="section_title tracking-[10px] text-Cus_Red py-[20%] animate-pulse max-md:py-[15%%]  max-sm:py-[10%]">
            LOADING...
          </p>
        </div>
        <div className="flex justify-center">
          <img
            className="w-[40%] max-md:w-[35%] max-sm:w-[25%]"
            src="/home/Home_Sheng.webp"
            alt="赤弦獎_吾聲"
          />
        </div>
      </div>
    </div>
  );
}
