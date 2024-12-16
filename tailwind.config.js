/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: {
          1: "#000000",
        },
        purple: {
          1: "#6A2CF9",
          2: "#f3eeff",
          3: "#290088",
          4: "#9a87c7",
          5: "#dccefd",
        },
        gray: {
          1: "#F6F6F6",
          2: "#0000000D",
          3: "#00000014",
          4: "#0000001F",
          5: "#f0f0f059",
          6: "#eaeaea",
        },
      },
      screens: {
        xxxs: "280px",
        xxs: "320px",
        xs: "375px",
        sm: "400px",
        md: "440px",
        mdx: "520px",
        lg: "768px",
        xl: "1024px",
        xxl: "1280px",
        "h-xs": { raw: "(min-height: 400px)" },
        "h-sm": { raw: "(max-height: 600px)" },
        "h-md": { raw: "(max-height: 800px)" },
        "h-lg": { raw: "(min-height: 1000px)" },
      },
      fontFamily: {
        Monsterrat: ["Monsterrat", "sans-serif"],
        MonsterratBold: ["Monsterrat-bold", "sans-serif"],
        MonsterratExtraBold: ["Monsterrat-extrabold", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};




// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src//*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFeatureSettings: {
//         "no-ligatures": "'liga' off, 'clig' off",
//       },
//       objectPosition: {
//         "center-top": "center top",
//       },
//       keyframes: {
//         scaleUpDown: {
//           "0%, 100%": { transform: "scale(1)" },
//           "50%": { transform: "scale(1.1)" },
//         },
//         scaleUp: {
//           "0%, 100%": { transform: "scale(1)" },
//           "50%": { transform: "scale(1.2)" },
//         },
//       },
//       animation: {
//         scaleUpDown: "scaleUpDown 0.3s ease-in-out",
//         scaleUp: "scaleUp 0.3s ease-in-out",
//       },
//       colors: {
//         white : "#FFFFFF" ,
//         black: {
//           1: "#000000",
//         },
//         purple: {
//           1: "#6A2CF9",
//         },
//         gray: {
//           1: "#F6F6F6",
//           2: "#0000000D",
//           3: "#00000014",
//           4: "#0000001F",
//         },
        
//       },

//       backgroundImage: {
//         yellowGradient:
//           "linear-gradient(180deg, #F6CE82 0%, rgba(255, 200, 94, 0.93) 45.83%, #FEBE41 71.87%)",
//         gradientBorder:
//           "linear-gradient(180deg, #B28FFF 0%, rgba(255, 200, 94, 0.93) 45.83%, #FEBE41 71.87%)",
//         redGradient:
//           "linear-gradient(180deg, #F68297 0%, rgba(255, 82, 92, 0.93) 45.83%, #FE4179 71.87%)",
//         greenGradient:
//           "linear-gradient(180deg, #84F682 0%, rgba(121, 253, 118, 0.93) 43.13%, #41FE8C 71.87%)",
//         greenGradient2:
//           "linear-gradient(180deg, #79F079 41.5%, #14ED51 65.5%, #DCFF04 100%)",
//         purpleGradient:
//           "linear-gradient(180deg, #B28FFF 0%, rgba(255, 200, 94, 0.93) 45.83%, #FEBE41 71.87%)",
//         filterGradient:
//           "linear-gradient(180deg, #B28FFF 0%, rgba(255, 200, 94, 0.93) 45.83%, #FEBE41 71.87%)",
//         angularGradient:
//           "conic-gradient(from 92.66deg at -8.61% 414.11%, rgba(255, 255, 255, 0.5) -68.04deg, rgba(255, 255, 255, 0.748742) 179.03deg, rgba(255, 255, 255, 0.2) 273.4deg, rgba(255, 255, 255, 0.5) 291.96deg, rgba(255, 255, 255, 0.748742) 539.03deg)",
//         grayGradient:
//           "linear-gradient(180deg, #D2D2D2 0%, rgba(166, 166, 166, 0.93) 45.83%, #7B7B7B 71.87%)",
//         orangeGradient:
//           "linear-gradient(180deg, #A55A03 0%, rgba(255, 200, 94, 0.93) 45.83%, rgba(245, 190, 108, 0.933136) 45.84%, #CC6200 71.87%)",
//         pinkGradient:
//           "linear-gradient(90.36deg, rgba(255, 169, 95, 0.05) 0.36%, rgba(249, 156, 74, 0.15) 7.94%, rgba(244, 120, 56, 0.45) 18.38%, rgba(217, 45, 122, 0.7) 29.26%, rgba(204, 42, 146, 0.8) 37.48%, rgba(195, 46, 146, 0.95) 47.73%)",
//       },

//       fontSize: {
//         h0: "72px",
//         h1: "48px",
//         h2: "32px",
//         h3: "24px",
//         p0: "20px",
//         h4: "18px",
//         p1: "16px",
//         p2: "14px",
//       },
//       screens: {
//         xxxs: "280px",
//         xxs: "320px",
//         xs: "375px",
//         sm: "400px",
//         md: "440px",
//         mdx: "520px",
//         lg: "768px",
//         xl: "1024px",
//         xxl: "1280px",
//         "h-xs": { raw: "(min-height: 400px)" },
//         "h-sm": { raw: "(max-height: 600px)" },
//         "h-md": { raw: "(max-height: 800px)" },
//         "h-lg": { raw: "(min-height: 1000px)" },
//       },
//       letterSpacing: {
//         t2: "0.2px",
//       },
//       lineHeight: {
//         lh1: "19.6px",
//         lh2: "140%",
//       },
//       fontFamily: {
//         skModernist: ["sk-Modernist", "sans-serif"],
//         spaceGrotesk: ["spaceGrotesk", "sans-serif"],
//         urbanist: ["urbanist", "sans-serif"],
//         inter: ["inter", "sans-serif"],
//         SFProDisplay: ["SFProDisplay", "sans-serif"],
//         Esteban: ["Esteban", "sans-serif"],
//         Quicksand: ["Quicksand", "sans-serif"],
//       },
//     },
//   },
//   plugins: [
//     function ({ addComponents }) {
//       addComponents({
//         ".animate": {
//           transform: "transition-all",
//           transitionDuration: "700ms",
//           transitionTimingFunction: "ease-in-out",
//         },
//         ".textYellowGradient": {
//           background:
//             "linear-gradient(180deg, #F6CE82 0%, rgba(255, 200, 94, 0.93) 45.83%, #FEBE41 71.87%)",
//           "-webkit-background-clip": "text",
//           "-webkit-text-fill-color": "transparent",
//         },
//         ".textRedGradient": {
//           background:
//             "linear-gradient(180deg, #F68297 0%, rgba(255, 82, 92, 0.93) 45.83%, #FE4179 71.87%)",
//           "-webkit-background-clip": "text",
//           "-webkit-text-fill-color": "transparent",
//         },
//         ".textAngularGradient": {
//           background:
//             "conic-gradient(from 92.66deg at -8.61% 414.11%, rgba(255, 255, 255, 0.5) -68.04deg, rgba(255, 255, 255, 0.748742) 179.03deg, rgba(255, 255, 255, 0.2) 273.4deg, rgba(255, 255, 255, 0.5) 291.96deg, rgba(255, 255, 255, 0.748742) 539.03deg)",
//           "-webkit-background-clip": "text",
//           "-webkit-text-fill-color": "transparent",
//         },
//         ".textGreenGradient": {
//           background:
//             "linear-gradient(180deg, #84F682 0%, rgba(121, 253, 118, 0.93) 43.13%, #41FE8C 71.87%)",
//           "-webkit-background-clip": "text",
//           "-webkit-text-fill-color": "transparent",
//         },
//       });
//     },
//     function ({ addBase, config }) {
//       addBase({
//         'input[type="date"]::-webkit-inner-spin-button, input[type="date"]::-webkit-calendar-picker-indicator, input[type="time"]::-webkit-inner-spin-button, input[type="time"]::-webkit-calendar-picker-indicator':
//           {
//             display: "none",
//             "-webkit-appearance": "none",
//           },
//       });
//     },
//     function ({ addUtilities }) {
//       const newUtilities = {
//         ".font-no-ligatures": {
//           fontFeatureSettings: "'liga' off, 'clig' off",
//         },
//       };
//       addUtilities(newUtilities, ["responsive", "hover"]);
//     },
//   ],
// };
