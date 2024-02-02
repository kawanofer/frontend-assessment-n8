/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      width: {
        '24rem': '24rem',
        '11rem': '11rem'
      }
    },
    colors: {
      white: '#ffffff',
      dark: '#0f0f0f',
      lightGrey: '#e2e8f0',
      grey: '#94a3b8',
      darkGrey: '#546e7a',
      primary: {
        light: '#4dabf5',
        main: '#2196f3',
        dark: '#1769aa'
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        text: '#000'
      },
      button: {
        textDisabled: 'rgba(0, 0, 0, 0.26)',
        backgroundDisabled: 'rgba(0, 0, 0, 0.12)'
      }
    }
  }
}
