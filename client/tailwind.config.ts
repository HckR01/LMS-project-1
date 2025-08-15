import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Poppins"', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.625rem', // 10px
        xxl: '1.75rem', // 28px
        big: '3rem', // 48px
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(200px, 1fr))', // responsive
      },
    },
  },
  plugins: [],
} satisfies Config;
