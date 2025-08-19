import { FC } from "react";

interface SectionTitleProps {
  title: string;
  style?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({
  title,
  style = "section_title",
}) => {
  return (
    <div>
      <div
        className={`bg-[url('/titleFrame.webp')] bg-no-repeat bg-center bg-contain py-[5px]`}
      >
        <h3 className={`${style}`}>{title}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
