import PageBanner from "../globals/pageBanner";
import { ButtonForDownload } from "../globals/button_style";
import SectionTitle from "../globals/section_title";
import SwiperImageComponent from "./components/SwiperImage";

export default function SwiperImage() {
  const double_line_style = " w-[5px]  border border-x-Cus_Brown ";
  const download_block_style = "w-[500px] py-[3%]";
  return (
    <div>
      <div>
        <PageBanner title="比賽須知" />
      </div>
      {/* section01 */}
      <div className="py-[9%] ">
        <div className="bg-[url('/information/bg_stroke_01.webp')] bg-no-repeat bg-left bg-[length:20%_auto] ">
          <div className="bg-[url('/information/bg_stroke_02.webp')] bg-no-repeat bg-right  bg-[length:20%_auto]">
            <div className="flex justify-center items-stretch">
              <span className={double_line_style} />
              <div className={download_block_style}>
                <p className="large_text text-center pb-[8%] ">
                  ◆ 第二十五屆赤弦獎參賽簡章 ◆
                </p>
                <ButtonForDownload
                  text="點擊下載"
                  onClickDownload="/information/第二十五屆赤弦獎參賽簡章.pdf"
                />
              </div>
              <span className={double_line_style} />
              <div className={download_block_style}>
                <p className="large_text text-center pb-[8%]">
                  ◆ 第二十五屆赤弦獎初賽報名須知 ◆
                </p>
                <ButtonForDownload
                  text="點擊下載"
                  onClickDownload="/information/第二十五屆赤弦獎參賽簡章.pdf"
                />
              </div>
              <span className={double_line_style} />
            </div>
            <></>
          </div>
        </div>
      </div>
      {/* section02 */}
      <div>
        <SectionTitle title="報名流程" />
        <div className="py-[5%]">
          <SwiperImageComponent />
        </div>
      </div>
    </div>
  );
}
