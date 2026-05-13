/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // App backgrounds
        'bg-app': '#F7F1E8',
        'bg-card': '#FFFDF8',
        // Borders
        'border-card': '#E7D9C8',
        'border-input': '#D9B36C',
        // Sidebar
        'sidebar-bg': '#1F2522',
        'sidebar-text': '#F7F1E8',
        'sidebar-active-bg': '#FFF3E2',
        'sidebar-active-text': '#2B2924',
        'sidebar-muted': '#CFC1B2',
        'sidebar-divider': '#554D43',
        // Text
        'text-primary': '#2B2924',
        'text-secondary': '#5C554B',
        'text-muted': '#6E665C',
        'text-accent': '#8A8074',
        // Status green
        'green-status': '#677F5A',
        'green-bg': '#EEF3E7',
        'green-border': '#B9CDAE',
        // Status amber
        'amber-status': '#A77734',
        'amber-text': '#C97849',
        'amber-bg': '#F6E7CC',
        'amber-border': '#D9B36C',
        // Status red/delayed
        'red-status': '#B85E4C',
        'red-bg': '#F6E5DF',
        'red-border': '#D7A496',
        // Brand accent
        'accent': '#C95632',
        'accent-badge': '#D89B35',
        // Stripe colors
        'stripe-upcoming': '#D89B35',
        'stripe-overdue': '#B85E4C',
        'stripe-resolved': '#A89F91',
      },
      fontSize: {
        'xs': '10px',
        'sm': '11px',
        'base': '12px',
        'md': '13px',
        'lg': '14px',
        'xl': '15px',
        '2xl': '17px',
        '3xl': '18px',
        '4xl': '22px',
        '5xl': '30px',
      },
      borderRadius: {
        'card': '16px',
        'campaign': '14px',
        'small': '10px',
        'pill': '999px',
        'btn': '10px',
      },
      width: {
        'sidebar': '220px',
        'rail': '290px',
      },
      minWidth: {
        'sidebar': '220px',
        'rail': '290px',
      },
    },
  },
  plugins: [],
}
