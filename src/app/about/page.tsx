import PageBanner from "../globals/pageBanner";
import AboutSection02 from "./aboutSection02";
import SectionTitle from "../globals/section_title";

export default function About() {
  return (
    <div>
      <div>
        <PageBanner title="關於赤弦" />
      </div>
      {/* section01 */}
      <div data-aos="fade-up" className="pt-[9%]">
        <div className="bg-[url('/about/BgRed_Stroke_01.webp')] bg-no-repeat bg-left-top bg-[length:20%_auto] max-md:bg-none">
          <div className="bg-[url('/about/BgRed_Stroke_02.webp')] bg-no-repeat bg-right-bottom bg-[length:20%_auto] max-md:bg-none">
            {/* Section title */}
            <div
              className={`bg-[url('/about/titleFrame.webp')] bg-no-repeat bg-center bg-contain py-[10px] text-center`}
            >
              <h3 className="section_title font-semibold">
                萬籟俱寂，吾聲獨醒
              </h3>
            </div>
            {/* context */}
            <div className="pt-[2%] px-[5%] max-md:pt-[4%]">
              <p className="medium_text font-bold text-center leading-8 text-wrap tracking-wider  max-md:leading-7">
                城市太匆忙了，
                <br /> 腳步揚起的塵土，掩沒了我們原本的聲音。
                <br />
                <br />
                於是我們走進自己，
                <br /> 在雜亂的聲響裡，尋找心底尚未被聽見的回音。
                <br />
                那不是塵囂中的吶喊，
                <br /> 而是一種安靜的確定——回歸自我的真聲。
                <br />
                <br />
                等世界無聲，吾聲才得發掘。
                <br />
                <br /> 當萬象喧騰，掌聲與質疑交織成潮，
                <br />
                我們學會閉上眼，轉身回望內在。
                <br />
                去聽那個不因成敗起伏、不被他人眼光左右的自己。 <br />
                <br />
                琴聲仍在指尖延續，
                <br />
                每一個音符，都是靈魂的輕聲自語。
                <br /> 我們從心淵汲取樂音，
                <br />
                在無聲中，寫下屬於自己的聲音。
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section02 */}
      <div className="py-[10%] max-m_md:py-[15%] max-md:py-[20%]">
        <AboutSection02 />
      </div>
      {/* section03 */}
      <div>
        <SectionTitle title="籌備團隊" />
      </div>
    </div>
  );
}
