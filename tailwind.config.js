/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        100: 100,
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/bg-hero.jpeg')",
      },
    },
  },
  plugins: [],
};
