/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#2563EB',
        accent: '#7C3AED',
        backgroundDark: '#111827',
        textLight: '#F9FAFB',
        textDark: '#111827',
        gradient: {
          from: '#2563EB',
          via: '#4F46E5',
          to: '#7C3AED',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1F2937',
        },
        border: {
          light: '#E5E7EB',
          dark: '#374151',
        },
      },
    },
  },
  plugins: [],
} 