/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#ffad13",
      },
      backgroundColor: {
        darkBlue: "#494e6866",
        orange: "rgb(241, 87, 0)",
      },
      boxShadow: {
        shaddddd: "inset 29px 30px 50px 65px darkred",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
