module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D5016", // deep forest green
          50: "#F0F4ED", // very light green
          100: "#D9E5CC", // light green
          200: "#B8D199", // medium light green
          300: "#97BD66", // medium green
          400: "#76A933", // medium dark green
          500: "#2D5016", // primary green
          600: "#244011", // dark green
          700: "#1B300C", // darker green
          800: "#122008", // very dark green
          900: "#091004", // darkest green
        },
        secondary: {
          DEFAULT: "#8B4513", // rich earth brown
          50: "#F5F1ED", // very light brown
          100: "#E8DDD1", // light brown
          200: "#D1BBA3", // medium light brown
          300: "#BA9975", // medium brown
          400: "#A37747", // medium dark brown
          500: "#8B4513", // secondary brown
          600: "#70370F", // dark brown
          700: "#54290B", // darker brown
          800: "#381B08", // very dark brown
          900: "#1C0D04", // darkest brown
        },
        accent: {
          DEFAULT: "#FF8C00", // warm harvest orange
          50: "#FFF7ED", // very light orange
          100: "#FFEDD5", // light orange
          200: "#FED7AA", // medium light orange
          300: "#FDBA74", // medium orange
          400: "#FB923C", // medium dark orange
          500: "#FF8C00", // accent orange
          600: "#EA580C", // dark orange
          700: "#C2410C", // darker orange
          800: "#9A3412", // very dark orange
          900: "#7C2D12", // darkest orange
        },
        background: "#FAFAF9", // soft off-white
        surface: "#FFFFFF", // pure white
        text: {
          primary: "#1A1A1A", // near-black
          secondary: "#666666", // medium gray
        },
        success: {
          DEFAULT: "#22C55E", // vibrant green
          50: "#F0FDF4", // very light success green
          100: "#DCFCE7", // light success green
          200: "#BBF7D0", // medium light success green
          300: "#86EFAC", // medium success green
          400: "#4ADE80", // medium dark success green
          500: "#22C55E", // success green
          600: "#16A34A", // dark success green
          700: "#15803D", // darker success green
          800: "#166534", // very dark success green
          900: "#14532D", // darkest success green
        },
        warning: {
          DEFAULT: "#F59E0B", // golden amber
          50: "#FFFBEB", // very light warning
          100: "#FEF3C7", // light warning
          200: "#FDE68A", // medium light warning
          300: "#FCD34D", // medium warning
          400: "#FBBF24", // medium dark warning
          500: "#F59E0B", // warning amber
          600: "#D97706", // dark warning
          700: "#B45309", // darker warning
          800: "#92400E", // very dark warning
          900: "#78350F", // darkest warning
        },
        error: {
          DEFAULT: "#DC2626", // strong red
          50: "#FEF2F2", // very light error red
          100: "#FEE2E2", // light error red
          200: "#FECACA", // medium light error red
          300: "#FCA5A5", // medium error red
          400: "#F87171", // medium dark error red
          500: "#DC2626", // error red
          600: "#DC2626", // dark error red
          700: "#B91C1C", // darker error red
          800: "#991B1B", // very dark error red
          900: "#7F1D1D", // darkest error red
        },
        border: {
          DEFAULT: "#E5E7EB", // muted earth tone
          focus: "#2D5016", // primary green for focus
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        body: ['Noto Sans', 'sans-serif'],
        caption: ['Source Sans Pro', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'agricultural': '0 2px 8px rgba(45, 80, 22, 0.1)',
        'agricultural-md': '0 4px 12px rgba(45, 80, 22, 0.15)',
        'agricultural-lg': '0 8px 24px rgba(45, 80, 22, 0.2)',
        'agricultural-xl': '0 12px 32px rgba(45, 80, 22, 0.25)',
      },
      borderRadius: {
        'agricultural': '8px',
        'agricultural-sm': '4px',
        'agricultural-lg': '12px',
        'agricultural-xl': '16px',
      },
      animation: {
        'breathe': 'breathe 2s ease-in-out infinite',
        'fade-in': 'fadeIn 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'agricultural': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      minHeight: {
        'touch': '48px',
      },
      minWidth: {
        'touch': '48px',
      },
    },
  },
  plugins: [],
}