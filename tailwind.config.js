/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  important: true,
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1170px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'sans': ["'Montserrat', sans-serif"],
      'serif': ["'Montserrat', sans-serif"],
      'mono': ["'Montserrat', sans-serif"],
      'display': ["'Montserrat', sans-serif"],
      'body': ["'Montserrat', sans-serif"],
      'fa': '"Font Awesome 5 Pro"',
    },
    extend: {
      colors: {
        "primary": "#3E9A41",
      }
    },
  },
  plugins: [],
}

