export default function Footer() {
  const iconStyle = "w-12 mx-2 hover:scale-110";

  return (
    <div>
      <div className="bg-red_brown_gradient">
        <div className="base_text leading-loose text-white px-[10%] py-[3%] max-md:py-[8%]">
          <p>
            <b>總召</b> | 黃聖翔 0975-535-106
          </p>
          <p>
            <b>副召</b> | 陳虹華 0966-390-513
          </p>
          <div className="py-[1%] max-m_md:py-[3%]">
            <p>
              <b>公關</b> | 曾怡瑄 0909-869-869
            </p>
            <p>
              <b>公關</b> | 王翊瑄 0906-360-610
            </p>
          </div>
          <div className="flex justify-between items-end max-md:block">
            <div>
              <p>
                <b>赤弦獎官方Gmail</b> | ntutredstring@gmail.com
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 max-md:justify-start max-md:mt-8">
              {/* Instagram */}
              <a
                className={iconStyle}
                href="https://www.instagram.com/redstring_24th/"
                target="_blank"
              >
                <img src="/footer/IG.png" alt="赤弦獎官方Instagram" />
              </a>

              {/* Facebook */}
              <a
                className={iconStyle}
                href="https://www.facebook.com/NTUT.TsaiYin.RedString?locale=zh_TW"
                target="_blank"
              >
                <img src="/footer/FB.png" alt="赤弦獎官方Facebook" />
              </a>

              {/* Youtube */}
              <a
                className={iconStyle}
                href="https://www.youtube.com/@ntut1272"
                target="_blank"
              >
                <img src="/footer/YT.png" alt="赤弦獎官方Youtube" />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="flex justify-center py-5 border-t border-white">
          <p className="base_text text-sm text-white">
            &copy; 2025 采音吉他社. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
