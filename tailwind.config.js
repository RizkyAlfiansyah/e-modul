/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        100: 100,
      },
      colors: {
        primary: {
          100: '#DBCFC7',
          200: '#F4E8E1',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/bg-hero.jpeg')",
      },
    },
  },
  plugins: [],
};
