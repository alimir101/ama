/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2B4162',
          50: '#8399BD',
          100: '#7389B3',
          200: '#556A96',
          300: '#425278',
          400: '#34405F',
          500: '#2B4162',
          600: '#1D2C42',
          700: '#101923',
          800: '#030508',
          900: '#000000',
        },
        secondary: {
          DEFAULT: '#45B7B8',
          50: '#B7E5E5',
          100: '#A7E0E0',
          200: '#86D5D6',
          300: '#66CBCC',
          400: '#45B7B8',
          500: '#359293',
          600: '#276A6B',
          700: '#1A4243',
          800: '#0C1B1B',
          900: '#000000',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      animation: {
        scroll: 'scroll 1.5s infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
};