/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",

        //=====basic color=====
        Cus_Red: "#811A1F",
        Cus_Brown: "#400306",
        Cus_White: "#FFFFFF",
        Cus_Deep_Brown: "#231815",
        Cus_Blue: "#00B9E6",

        Cus_gold_light: "#D0AF79",
        Cus_gold: "#E1A23B",
        Cus_gold_dark: "#B28946",
      },
      backgroundImage: {
        //=====gradient color =====
        gold_gradient: "linear-gradient(to bottom, #E1A23B, #B28946)",
        white_gradient:
          "linear-gradient(to bottom, #FFFFFF 60%, transparent 85%)",
        white_gradient_M:
          "linear-gradient(to bottom, #FFFFFF 90%, transparent 100%)",
        red_brown_gradient: "linear-gradient(to bottom, #400306, #231815)",
        red_brown_gradient_BTN: "linear-gradient(to right, #400306, #811A1F)",
      },
      fontFamily: {
        Serif: ['"Noto Serif TC"', "serif"],
      },
      screens: {
        sm: "420px",
        md: "740px", // phone
        m_md: "1024px", // tablet
        lg: "1250px",
      },
    },
  },
  plugins: [],
};
