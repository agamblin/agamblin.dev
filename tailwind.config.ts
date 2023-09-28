import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      foreground: {
        lighter: 'hsl(210deg 15% 98%)',
        darker: 'hsl(210deg 15% 85%)',
        DEFAULT: 'hsl(210deg 15% 95%)',
      },
      white: '#ffffff',
      primary: {
        '50': 'hsl(217, 50%, 97%)',
        '100': 'hsl(222, 46%, 93%)',
        '200': 'hsl(219, 48%, 87%)',
        '300': 'hsl(217, 47%, 78%)',
        '400': 'hsl(219, 46%, 68%)',
        '500': 'hsl(224, 44%, 60%)',
        '600': 'hsl(228, 40%, 53%)',
        '700': 'hsl(231, 37%, 48%)',
        '800': 'hsl(232, 35%, 40%)',
        '900': 'hsl(231, 31%, 33%)',
        '950': 'hsl(233, 28%, 17%)',
      },
      secondary: {
        '100': 'hsl(190deg 100% 80%)', // Light teal for secondary elements
        '300': 'hsl(190deg 100% 60%)', // Regular teal
        '500': 'hsl(190deg 100% 40%)', // Dark teal
        '700': 'hsl(190deg 100% 25%)', // Darker teal
        '900': 'hsl(190deg 100% 15%)', // Very dark teal
        DEFAULT: 'hsl(190deg 100% 40%)',
      },
      accent: {
        '100': 'hsl(345deg 100% 80%)', // Light coral-pink for accents
        '300': 'hsl(345deg 100% 60%)', // Coral-pink
        '500': 'hsl(345deg 100% 40%)', // Dark coral-pink
        '700': 'hsl(345deg 100% 25%)', // Darker coral-pink
        '900': 'hsl(345deg 100% 15%)', // Very dark coral-pink
        DEFAULT: 'hsl(345deg 100% 40%)',
      },
      gray: {
        '100': 'hsl(0deg 0% 90%)', // Light gray
        '300': 'hsl(0deg 0% 70%)', // Medium gray
        '500': 'hsl(0deg 0% 50%)', // Gray
        '700': 'hsl(0deg 0% 30%)', // Dark gray
        '900': 'hsl(0deg 0% 10%)', // Very dark gray
        DEFAULT: 'hsl(0deg 0% 50%)', // Gray
      },
    },
    extend: {
      blur: {
        xs: '2px',
      },
      fontFamily: {
        body: ['var(--font-body)'],
        heading: ['var(--font-heading)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        vis: 'opacity, background-color 1000ms ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
