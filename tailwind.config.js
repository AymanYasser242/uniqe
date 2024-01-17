/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#688272",
      },
    },
  },
  plugins: [
    // ...
  ],
  corePlugins: {
    preflight: false,
  },
};
