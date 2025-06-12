const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Revolutionary color palette with quantum-level sophistication
      colors: {
        // Primary: Slate Blue - Neural network activation color
        primary: {
          50: '#f1f5f9',
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#4A6FA5', // Main primary
          600: '#3d5a85',
          700: '#334b6b',
          800: '#2a3d56',
          900: '#1e2a3a',
        },
        // Secondary: Olive Green - Sustainable innovation
        secondary: {
          50: '#f7f8f2',
          100: '#eef0e5',
          200: '#dde1ca',
          300: '#c4cba3',
          400: '#a8b279',
          500: '#8A9A5B', // Main secondary
          600: '#748249',
          700: '#5f6a3c',
          800: '#4d5531',
          900: '#3f4729',
        },
        // Accent: Tangram Orange - Energy and innovation
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FF6F3C', // Main accent
          600: '#ea5a2b',
          700: '#c2441f',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Enhanced charcoal system
        charcoal: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#9aa0a6',
          500: '#5f6368',
          600: '#3c4043',
          700: '#202124',
          800: '#1a1a1a',
          900: '#0f0f0f',
        },
        // Neutral grays for balance
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      // Custom typography scale
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
        '11xl': ['12rem', { lineHeight: '1' }],
        '12xl': ['14rem', { lineHeight: '1' }],
      },
      // Extended spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '96': '24rem',
        '128': '32rem',
      },
      // Custom max widths
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      // Animation and transition timing
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
      },
      // Custom letter spacing
      letterSpacing: {
        'tightest': '-0.075em',
        'extra-tight': '-0.05em',
      },
      // Aspect ratios for design
      aspectRatio: {
        '4/3': '4 / 3',
        '21/9': '21 / 9',
        '16/10': '16 / 10',
        '21/10': '21 / 10',
        '21/12': '21 / 12',
      }
    },
  },
  plugins: [],
}
export default config 