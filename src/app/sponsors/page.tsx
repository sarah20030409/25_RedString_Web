import React from "react";
import PageBanner from "../globals/pageBanner";

export default function Sponsors() {
  return (
    <div>
      <div>
        <PageBanner title="贊助廠商" />
      </div>
      {/* section01 */}
      <div>
        <SponsorSingle />
      </div>
    </div>
  );
}

const SponsorSingle: React.FC = () => {
  const sponsor = [
    {
      sponsor_img: "01",
      sponsor_name: "存在音樂",
      sponsor_link: "https://www.instagram.com/beingmusic2017",
    },
    {
      sponsor_img: "02",
      sponsor_name: "海馬91譜",
      sponsor_link: "https://www.91pu.com.tw/m/index.shtml",
    },
    {
      sponsor_img: "03",
      sponsor_name: "雲聲",
      sponsor_link: "https://cloudvocal.com.tw/",
    },
    {
      sponsor_img: "04",
      sponsor_name: "黃石樂器",
      sponsor_link: "https://harmonica.tw/",
    },
    {
      sponsor_img: "05",
      sponsor_name: "新天鵝堡桌遊",
      sponsor_link: "https://www.swanpanasia.com/",
    },
    {
      sponsor_img: "06",
      sponsor_name: "89 LOOP",
      sponsor_link: "https://www.instagram.com/89_loop/",
    },
    {
      sponsor_img: "08",
      sponsor_name: "財團法人華研基金會",
      sponsor_link: "https://himfoundation.org.tw",
    },
    {
      sponsor_img: "09",
      sponsor_name: "MÜST社團法人中華音樂著作權協會",
      sponsor_link: "https://www.must.org.tw/index.aspx",
    },
  ];

  const co_organizer = [
    {
      co_organizer_img: "10",
      co_organizer_name: "樂岩音樂",
      co_organizer_link: "https://shop1688.com.tw/aom20200131141/#about",
    },
    {
      co_organizer_img: "11",
      co_organizer_name: "禧樂音樂",
      co_organizer_link: "https://www.facebook.com/xiyue.com.tw/",
    },
  ];
  return (
    <div className="mx-[5%] mb-[8%]">
      <div data-aos="fade-up" className="pt-[5%] flex justify-center flex-wrap">
        {sponsor.map((sponsor, index) => (
          <div
            key={index}
            className=" w-56 mx-[2%] my-16 max-lg:w-48 max-lg:mx-[1%] max-lg:my-12 max-md:w-44 max-md:my-8"
          >
            <div>
              <a href={sponsor.sponsor_link} target="_blank" rel="noreferrer">
                <img
                  className="w-48 items-center mx-auto border border-Cus_Brown rounded-full max-lg:w-40 max-md:w-36 hover:scale-105"
                  src={`/sponsors/sponsor_${sponsor.sponsor_img}.webp`}
                  alt="red string"
                />
              </a>
              <p className="little_text font-bold tracking-wider text-center leading-7 mt-6 max-md:mt-4">
                {sponsor.sponsor_name.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto w-[90%] border-t border-Cus_Brown"></div>
      <div data-aos="fade-up" className="pt-[3%] flex justify-center flex-wrap">
        {co_organizer.map((co_organizer, index) => (
          <div
            key={index}
            className="w-56 mx-[10%] my-16 max-lg:w-48 max-lg:mx-[5%] max-lg:my-12 max-md:w-44 max-md:my-8 max-m_sm:mx-[1%]"
          >
            <div>
              <a
                href={co_organizer.co_organizer_link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-48 items-center mx-auto border border-Cus_Brown rounded-full max-lg:w-40 max-md:w-36 hover:scale-105"
                  src={`/sponsors/sponsor_${co_organizer.co_organizer_img}.webp`}
                  alt="red string"
                />
              </a>
              <p className="little_text font-bold tracking-wider text-center leading-7 mt-6 max-md:mt-4">
                {co_organizer.co_organizer_name
                  .split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
