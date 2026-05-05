/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        cream: '#F7F8FA',
        platinum: '#EEF1F4',
        mist: '#E7ECF1',
        navy: '#0F3868',
        deepnavy: '#0A223C',
        slatebrand: '#303850',
        steel: '#6F7D8E',
        graphite: '#5B5B5B',
        silver: '#D3D7DC',
        charcoal: '#171A1F',
        mediumgray: '#8D949E',
        lightgray: '#F1F3F5',
        line: '#D8DDE3',
        forest: '#0F3868',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Times', 'serif'],
        sans: ['Manrope', '"Helvetica Neue"', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(10 34 60 / 0.06)",
        hero: "0 28px 70px rgba(10,34,60,0.18)",
        card: "0 14px 40px rgba(15,56,104,0.10)",
        team: "0 18px 52px rgba(10,34,60,0.14)",
        brand: "0 18px 55px rgba(15,56,104,0.13)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "nav-slide-down": {
          from: { transform: "translateY(-100%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "hero-fade-in": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "indicator-fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "nav-slide-down": "nav-slide-down 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "hero-fade-in": "hero-fade-in 500ms cubic-bezier(0.4, 0, 0.2, 1) 200ms forwards",
        "indicator-fade-in": "indicator-fade-in 300ms cubic-bezier(0.4, 0, 0.2, 1) 400ms forwards",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
