// export default {
//   theme: {
//     extend: {
//       fontFamily: {
//         swiss: ["Swiss", "sans-serif"],
//       },
//     },
//   },
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
// };
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         swiss: ["Swiss", "sans-serif"],
//       },
//       backgroundSize: {
//         '200%': '200% 200%',
//       },
//       animation: {
//         'gradient-move': 'gradientMove 5s ease infinite',
//       },
//       keyframes: {
//         gradientMove: {
//           '0%, 100%': { 'background-position': '0% 50%' },
//           '50%': { 'background-position': '100% 50%' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        swiss: ["Swiss", "sans-serif"],
      },
      animation: {
        "wave-gradient": "wave 10s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        'wave': '400% 400%',
      }
    },
  },
  plugins: [],
};
