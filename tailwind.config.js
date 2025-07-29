module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        text: 'var(--color-text)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius)',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--transition)',
      },
    },
  },
  plugins: [],
}; 