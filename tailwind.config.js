/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sidebar: '#0D2B80',
        sidebarLight: '#143C99',
        brandAccent: '#FF8A00'
      }
    }
  },
  plugins: [],
}
