// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

export default {
  theme: {
    extend: {
      fontFamily: {
        swiss: ["Swiss", "sans-serif"],
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
};
