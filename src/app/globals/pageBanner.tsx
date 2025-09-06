import { title } from "process";
import { FC } from "react";

interface pageBannerProps {
  title: string;
}

const PageBanner: FC<pageBannerProps> = ({ title }) => {
  return (
    <div
      className={`bg-[url('/pageTitleBg02.webp')] bg-no-repeat bg-center pb-[3%] bg-[size:50%] max-m_md:bg-[size:65%] max-md:bg-[size:85%]`}
    >
      <div
        className={`bg-[url('/pageTitleBg01.webp')] bg-no-repeat bg-center bg-contain h-72 flex justify-center items-center max-lg:h-64 max-m_md:scale-90 max-md:scale-75 max-sm:scale-[60%]`}
      >
        <h4 className="big_title text-center text-5xl tracking-[53px] -mr-14 pb-3 max-lg:-mr-11 max-lg:tracking-[41px]  max-sm:scale-95 max-md:tracking-[45px]">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default PageBanner;
