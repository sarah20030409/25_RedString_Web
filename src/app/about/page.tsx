import PageBanner from "../globals/pageBanner";
import AboutSection02 from "./aboutSection02";
import SectionTitle from "../globals/section_title";
interface Member {
  member_Id: string;
  member_job: string;
  member_name: string;
}

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
        <div className="mb-[3%]">
          <SectionTitle title="籌備團隊" />
          <p className="large_text text-center py-2">采音吉他社</p>
        </div>

        <div>
          <div className="pb-[15%] bg-[url('/about/Bg_Stroke_member.webp')] bg-no-repeat bg-center  bg-[length:40%_auto] max-m_md:bg-[length:55%_auto] max-md:bg-[length:70%_auto] max-m_sm:bg-[length:90%_auto]">
            <MemberList />
          </div>
        </div>
      </div>
    </div>
  );
}

const MemberList: React.FC = () => {
  const member = [
    { member_Id: "01", member_job: "總召", member_name: "黃聖翔" },
    { member_Id: "02", member_job: "副召", member_name: "陳虹華" },
    { member_Id: "03", member_job: "公關", member_name: "王翊瑄" },
    { member_Id: "04", member_job: "公關", member_name: "曾怡瑄" },
    { member_Id: "05", member_job: "活動", member_name: "江憫真" },
    { member_Id: "06", member_job: "活動", member_name: "王承惠" },
    { member_Id: "07", member_job: "報名", member_name: "林英豪" },
    { member_Id: "08", member_job: "報名", member_name: "林佳璐" },
    { member_Id: "09", member_job: "報名", member_name: "洪逢禧" },
    { member_Id: "10", member_job: "宣傳", member_name: "張新岳" },
    { member_Id: "11", member_job: "宣傳", member_name: "黃以恩" },
    { member_Id: "12", member_job: "美宣", member_name: "柯蓉云" },
    { member_Id: "13", member_job: "器材", member_name: "劉巳緯" },
  ];
  return (
    <div className="px-[25%] flex justify-center flex-wrap max-xl:px-[16%] max-lg:px-[8%] max-md:px-[4%]">
      {member.map((item) => {
        return (
          <div
            className={`
              ${
                item.member_job !== "報名"
                  ? " mx-[10%] my-[5%] max-lg:mx-[8%]"
                  : " mx-[2%] my-[5%] "
              } 
              ${
                item.member_Id === "09"
                  ? "max-m_md:mx-[17%]"
                  : "max-m_md:mx-[5%] max-md:mx-[2%] max-md:my-[8%] max-m_sm:mx-1 "
              }`}
            key={item.member_Id}
          >
            <div data-aos="fade-up">
              <img
                className="w-60 max-md:w-56 max-m_sm:w-44 max-sm:w-36"
                src={`/about/members/m_${item.member_Id}.webp`}
              />
              <p className="medium_text text-center py-1 max-md:text-sm">
                {item.member_job}
              </p>
              <p className="large_text text-center max-md:text-lg ">
                {item.member_name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
