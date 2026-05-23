/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-iran-sans)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        iran: ['var(--font-iran-sans)', 'sans-serif'],
        en: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          green:  '#7AB648',
          blue:   '#2D4FA3',
          purple: '#8B5EA4',
          ice:    '#A8CCE0',
        },
        dark:  '#0D0D1A',
        steel: '#1E2B3C',
        mist:  '#8899AA',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

