/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Qwigley'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['Francois One'],
      'header': ['Ubuntu'],
      'sub': ['Josefin Sans'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {},
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
     
    },
  },
  plugins: [require("daisyui")],


  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        my_theme: {
          primary: "#3b82f6",
          secondary: "#F04A7D",
          accent: "#0F172A",
          info: "#6D28D9",
          neutral: "#e0e0e8",
          warning: "#0F172A",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#f0f0f0",
        },
      },
      {
        my_dark: {
          primary: "#3b82f6",
          secondary: "#F04A7D",
          accent: "#0284C7",
          info: "#0284C7",
          neutral: "#282e3f",
          warning: "#E2E8F0",
          "base-100": "#0b1120",
          "base-200": "#0f172a",
          "base-300": "#182233",
        },
      },
      "light",
      "dracula",
    ],
  },
}
