/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'dark-blue-ele-dark': '#2b3945',
      'very-dark-blue-bg-dark': '#202c37',
      'very-dark-blue-text-light': '#111517',
      'dark-gray-input-light': '#858585',
      'very-light-gray-bg-light': '#fafafa',
      'white-text-dark': '#ffffff'
    }
  },
  darkMode: 'class',
  plugins: [],
}
