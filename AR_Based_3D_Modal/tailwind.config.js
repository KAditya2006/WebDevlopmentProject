module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js", "./components/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4621A", // terracotta temple stone
          50: "#FDF4ED", // very light terracotta
          100: "#FBEADC", // light terracotta
          200: "#F6D5B9", // medium light terracotta
          300: "#F0BF96", // medium terracotta
          400: "#E29058", // medium dark terracotta
          500: "#D4621A", // base terracotta
          600: "#B85516", // dark terracotta
          700: "#9C4813", // darker terracotta
          800: "#803B10", // very dark terracotta
          900: "#642E0D", // deepest terracotta
        },
        secondary: {
          DEFAULT: "#8B4513", // sandstone brown
          50: "#F5F0E8", // very light sandstone
          100: "#EBE1D1", // light sandstone
          200: "#D7C3A3", // medium light sandstone
          300: "#C3A575", // medium sandstone
          400: "#AF8747", // medium dark sandstone
          500: "#8B4513", // base sandstone
          600: "#7A3D11", // dark sandstone
          700: "#69350F", // darker sandstone
          800: "#582D0D", // very dark sandstone
          900: "#47250B", // deepest sandstone
        },
        accent: {
          DEFAULT: "#FFD700", // temple gold
          50: "#FFFEF5", // very light gold
          100: "#FFFCEB", // light gold
          200: "#FFF9D7", // medium light gold
          300: "#FFF6C3", // medium gold
          400: "#FFEF95", // medium dark gold
          500: "#FFD700", // base gold
          600: "#E6C200", // dark gold
          700: "#CCAD00", // darker gold
          800: "#B39800", // very dark gold
          900: "#998300", // deepest gold
        },
        background: "#FDF6E3", // warm parchment
        surface: "#F5E6D3", // subtle cream
        text: {
          primary: "#2C1810", // deep brown
          secondary: "#6B4423", // medium brown
        },
        success: {
          DEFAULT: "#228B22", // forest green
          50: "#F0F8F0", // very light green
          100: "#E1F1E1", // light green
          200: "#C3E3C3", // medium light green
          300: "#A5D5A5", // medium green
          400: "#87C787", // medium dark green
          500: "#228B22", // base green
          600: "#1F7D1F", // dark green
          700: "#1C6F1C", // darker green
          800: "#196119", // very dark green
          900: "#165316", // deepest green
        },
        warning: {
          DEFAULT: "#FF8C00", // saffron orange
          50: "#FFF7ED", // very light orange
          100: "#FFEFDB", // light orange
          200: "#FFDFB7", // medium light orange
          300: "#FFCF93", // medium orange
          400: "#FFAF6F", // medium dark orange
          500: "#FF8C00", // base orange
          600: "#E67E00", // dark orange
          700: "#CC7000", // darker orange
          800: "#B36200", // very dark orange
          900: "#995400", // deepest orange
        },
        error: {
          DEFAULT: "#B22222", // muted red
          50: "#F8F0F0", // very light red
          100: "#F1E1E1", // light red
          200: "#E3C3C3", // medium light red
          300: "#D5A5A5", // medium red
          400: "#C78787", // medium dark red
          500: "#B22222", // base red
          600: "#A01F1F", // dark red
          700: "#8E1C1C", // darker red
          800: "#7C1919", // very dark red
          900: "#6A1616", // deepest red
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'source': ['Source Sans Pro', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'heritage-soft': '0 4px 12px rgba(212, 98, 26, 0.15)',
        'heritage-light': '0 2px 8px rgba(212, 98, 26, 0.1)',
        'heritage-medium': '0 8px 16px rgba(212, 98, 26, 0.2)',
        'heritage-strong': '0 16px 24px rgba(212, 98, 26, 0.25)',
      },
      transitionTimingFunction: {
        'heritage': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'heritage': '300ms',
        'heritage-ar': '500ms',
      },
      borderRadius: {
        'heritage': '4px',
      },
      animation: {
        'ripple': 'ripple 2s infinite',
        'breathe': 'breathe 3s ease-in-out infinite',
      },
      keyframes: {
        ripple: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1.4)',
            opacity: '0',
          },
        },
        breathe: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.7',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}