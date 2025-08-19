import HomeLoading from "./loading";
import HomeSmallTitle from "./home/home_small_title_Wu_Sheng";
import HomeBanner from "./home/home_banner";

export default function Home() {
  return (
    <div>
      <div>
        {/* <div>
          <HomeLoading />
          <div className="fixed inset-0 flex items-center justify-center z-[60] pointer-events-none">
            <HomeSmallTitle />
          </div>
        </div> */}
        <HomeBanner />
        <HomeContent />
      </div>
    </div>
  );
}

export function HomeContent() {
  return (
    <div>
      <p>HomeContent</p>
    </div>
  );
}
