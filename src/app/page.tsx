import HomeBanner from "./home/home_banner";
import SectionTitle from "./globals/section_title";
import { ButtonSwitchPage } from "./globals/button_style";

interface HomeProps {
  image: string;
  title: string;
  date: string;
}

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <HomeBanner />
        </div>
        <div className="pt-[10%] max-m_md:pt-[15%] max-sm:pt-[30%]">
          <div className="bg-[url('/home/Bg_Stroke_01.webp')] bg-no-repeat bg-right max-m_md:bg-[length:35%_auto] max-md:bg-[length:45%_auto]">
            <div className="bg-[url('/home/Bg_Stroke_02.webp')] bg-no-repeat bg-left-bottom max-m_md:bg-[length:40%_auto] max-md:bg-[length:45%_auto]">
              <Section01 />
            </div>
          </div>
          <Section02 />
        </div>
      </div>
    </div>
  );
}

function Section01() {
  const infoList: HomeProps[] = [
    {
      image: "/home/Home_performance_img_01.webp",
      title: "初賽",
      date: "11/15~11/16",
    },
    {
      image: "/home/Home_performance_img_02.webp",
      title: "決賽",
      date: "12/14",
    },
  ];
  return (
    <div>
      <SectionTitle title="比賽資訊" />
      <div className="pt-[5%] max-md:pt-[8%]">
        {infoList.map((item) => {
          return (
            <div
              key={item.title}
              data-aos="fade"
              className="mb-[8%] max-m_md:mb-[10%] max-sm:mb-[20%]"
            >
              <div className="flex justify-center">
                <img
                  className="w-[60%] max-m_md:w-[85%] max-md:w-[95%]"
                  src={item.image}
                />
              </div>
              <div className="flex justify-center text-center">
                <div>
                  <div className="flex justify-center mt-3 max-sm:scale-[85%]">
                    <div className="border border-Cus_Brown rounded-full p-[5px]">
                      <div className="border-[2px] border-Cus_Brown rounded-full pl-[7px] pr-[8px] pt-4 max-m_md:pl-[3px] max-m_md:pr-1 max-m_md:pt-3">
                        <p className="home_custom_title">{item.title}</p>
                      </div>
                    </div>
                  </div>
                  <p className="medium_text py-2 font-bold ">{item.date}</p>
                  <p className="medium_text max-sm:tracking-[1px]">
                    ◆ 國立臺北科技大學 學生活動中心 大禮堂 ◆
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div data-aos="fade-up">
        <ButtonSwitchPage text="比賽須知" onClickGo="/information" />
      </div>
    </div>
  );
}

function Section02() {
  return (
    <div className="flex justify-center w-full  pt-44 max-lg:pt-24 ">
      <iframe
        className="w-full  h-[700px] max-md:h-[400px]"
        src="https://www.youtube.com/embed/BKJsoaxAt8E?si=wwuQ1ke05R_GgopR&amp;controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}
