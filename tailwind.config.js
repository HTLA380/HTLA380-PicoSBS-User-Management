/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        fluid: "1 0 auto",
        row_fulid: "1 auto",
        row_auto: "0 0 auto",
        root: "1",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0px 4px 10px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
