/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        nav: "1000000000",
      },
    },
  },
  plugins: [],
};
// module.exports = {
//   theme: {
//     screens: {
//       sm: { min: "320px", max: "768px" },
//       // => @media (min-width: 640px and max-width: 767px) { ... }

//       md: { min: "768px", max: "1023px" },
//       // => @media (min-width: 768px and max-width: 1023px) { ... }

//       lg: { min: "1024px", max: "1279px" },
//       // => @media (min-width: 1024px and max-width: 1279px) { ... }
//     },
//   },
// };
