"use client";

export default function HomeLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/40 z-50">
      <div className="text-center">
        <p className="section_title tracking-[10px] text-Cus_Red py-[20%]">
          LOADING...
        </p>
      </div>
    </div>
  );
}
