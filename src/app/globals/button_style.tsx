import { FC } from "react";

interface ButtonStyleProps {
  text: string;
  onClickGo?: string;
  onClickDownload?: string;
}

export const ButtonSwitchPage: FC<ButtonStyleProps> = ({ text, onClickGo }) => {
  return (
    <div className="flex justify-center">
      <a className=" button_style" href={onClickGo}>
        <span className="button_bg"></span>
        <span className="button_bg_hover"></span>
        <p className="button_text">{text}</p>
      </a>
    </div>
  );
};

export const ButtonForDownload: FC<ButtonStyleProps> = ({
  text,
  onClickDownload,
}) => {
  return (
    <div className="flex justify-center">
      <a className=" button_style" href={onClickDownload} download>
        <span className="button_bg"></span>
        <span className="button_bg_hover"></span>
        <p className="button_text">{text}</p>
      </a>
    </div>
  );
};
