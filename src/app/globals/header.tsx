"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import AOS from "aos";

interface NavProps {
  path: string;
  label: string;
  item?: NavProps[];
}

export default function Header() {
  return (
    <div>
      <div className="bg-white_gradient pt-8 max-md:pt-4 max-md:bg-white_gradient_M">
        <div className="flex justify-center pb-7 max-md:pb-3 max-md:scale-95">
          <Link href={"/"}>
            <img src="/favicon.ico" alt="赤弦獎_吾聲" width={"77px"} />
          </Link>
        </div>
        <div className="pb-[10%] max-md:pb-[5%]">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  const pathName = usePathname();
  const [useBurger, setUseBurger] = useState(false);

  useEffect(() => {
    AOS.refresh(); // 當 useBurger 變化時刷新 AOS
  }, [useBurger]);

  const navList: NavProps[] = [
    { path: "/about", label: "關於赤弦" },
    { path: "/information", label: "比賽須知" },
    { path: "/sponsors", label: "贊助廠商" },
    { path: "/interview", label: "採訪消息" },
  ];

  const handleClick = () => {
    setUseBurger(!useBurger);
  };

  return (
    <div>
      {/* For Desktop & Tablet */}
      <div className="max-md:hidden">
        <div className="flex gap-[3%] justify-center max-m_md:gap-1">
          {navList.map((item) => {
            const isActive = pathName === item.path;
            return (
              <div
                className={`border rounded-full py-2 px-7 box-border ${
                  isActive && pathName
                    ? "border-Cus_Deep_Brown"
                    : "border-white"
                } duration-700`}
                key={item.path}
              >
                <Link href={item.path}>
                  <p className="base_text text-Cus_Deep_Brown tracking-wider hover:scale-[1.15]">
                    {item.label}
                  </p>
                </Link>
              </div>
            );
          })}
          <div className="flex items-center hover:scale-110 max-m_md:pl-4">
            <img
              className="h-5 mr-1"
              src="/header/header_icon_01.webp"
              alt="樂台計畫_臺北科技大學"
            />
            <a
              className="base_text text-Cus_Blue tracking-wider"
              href="https://mcip.app/line"
              target="_blank"
            >
              樂台計畫
            </a>
          </div>
        </div>
      </div>

      {/* For Mobile */}
      <div className="md:hidden">
        <div className="flex justify-center" onClick={handleClick}>
          <img
            className="w-[8%] hover:scale-110 cursor-pointer"
            src="/header/burger_icon.png"
          />
        </div>
        <div
          data-aos="fade-down"
          className={`px-[5%] pb-8 ${useBurger ? "" : "hidden"}`}
        >
          {navList.map((item) => {
            const isActive = pathName === item.path;
            return (
              <div
                className={`flex justify-center border rounded-full my-[2%] py-3  box-border ${
                  isActive && pathName
                    ? "border-Cus_Deep_Brown"
                    : "border-white"
                } duration-700`}
                key={item.path}
              >
                <Link href={item.path} onClick={handleClick}>
                  <p className="base_text text-Cus_Deep_Brown tracking-wider hover:scale-[1.15]">
                    {item.label}
                  </p>
                </Link>
              </div>
            );
          })}
          <div className="flex items-center justify-center hover:scale-110 px-[5%]">
            <img
              className="h-5 mr-1"
              src="/header/header_icon_01.webp"
              alt="樂台計畫_臺北科技大學"
            />
            <a
              className="base_text text-Cus_Blue tracking-wider"
              href="https://mcip.app/line"
              target="_blank"
            >
              樂台計畫
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
