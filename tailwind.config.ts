import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // EDIT ME: Brand colors
        brand: {
          'primary': '#10B981',      // Vibrant court green
          'secondary': '#06B6D4',    // Dynamic court teal
          'accent': '#F59E0B',       // Warm gold
          'accent-alt': '#FF6B35',   // Dynamic orange
          'dark': '#1F2937',         // Deep navy
          'light': '#F9FAFB',        // Clean white
          'text': '#111827',         // High contrast
          'text-muted': '#6B7280',   // Secondary text
        },
        // Cinematic Dark redesign tokens (homepage)
        cage: {
          'black': '#0A0A0B',
          'surface': '#141417',
          'red': '#E11D2A',
          'red-glow': '#FF4655',
          'text': '#F5F5F4',
          'muted': '#8A8A8F',
          'gold': '#D4AF37',
        },
      },
      fontFamily: {
        // EDIT ME: Custom fonts - using system fonts that are distinctive
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        // Cinematic Dark redesign fonts (homepage) — pairing C: Syne + Space Grotesk
        cage: ['Syne', 'system-ui', 'sans-serif'],
        'cage-body': ['Space Grotesk', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', '16px'],
        'sm': ['14px', '20px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '28px'],
        'xl': ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '44px'],
        '5xl': ['48px', '52px'],
        '6xl': ['60px', '64px'],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        '2xl': '64px',
        '3xl': '80px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'brand-sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'brand-md': '0 4px 16px rgba(0, 0, 0, 0.1)',
        'brand-lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'brand-xl': '0 12px 32px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
        'gradient-warm': 'linear-gradient(135deg, #F59E0B 0%, #FF6B35 100%)',
      },
    },
  },
  plugins: [],
}

export default config
